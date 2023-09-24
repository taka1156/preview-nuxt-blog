<template>
  <div>
    <div v-if="status">
      <div class="article-content">
        <!--記事のheader-->
        <article-header :article="article" />
        <!--markdown埋め込み-->
        <div class="article-content__text markdown-body" v-html="parseMarked" />
        <index-navigation :tocs="tocs" />
      </div>
      <!--twitter Card-->
      <div class="ogp">
        <h1>OGP Preview</h1>
        <div class="twitter-card__card__frame">
          <div class="twitter-card">
            <img class="twitter-card__img" :src="image" />
            <div class="twitter-card__text__frame">
              <h2 class="twitter-card__title">{{ article.title }}</h2>
              <p class="twitter-card__summary">{{ article.summary }}</p>
              <span class="twitter-card__link">blog.taka1156</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="highlight.js/styles/github.css"></style>

<script>
import ArticleHeader from '@/components/organisms/ArticleHeader/ArticleHeader';
import IndexNavigation from '@/components/organisms/IndexNavigation/IndexNavigation';
import 'github-markdown-css';
import { markedWrap, tocs } from '@/plugins/marked/index.js';
import axios from 'axios';

export default {
  name: 'Artcle',
  components: {
    'article-header': ArticleHeader,
    'index-navigation': IndexNavigation
  },
  data() {
    return {
      article: {},
      image: '',
      status: false
    };
  },
  computed: {
    parseMarked() {
      if (!this.status) return '';
      return markedWrap(this.article.body);
    },
    tocs() {
      return tocs;
    }
  },
  async created() {
    // 記事取得
    await this.getArticle();
    this.status = !this.status;
    // ogp
    this.generateOgp();
  },
  async mounted() {
    //scroll
    this.scrollTo();
  },
  methods: {
    async getArticle() {
      // 記事のURL
      const ARTICLE_URL = `${process.env.VUE_APP_ARTICLE_URL}/${this.$route.query.id}`;
      const OPTIONS = {
        fields: 'id,title,summary,body,tags,category,createdAt,updatedAt',
        draftKey: `${this.$route.query.draftKey}`
      };
      this.article = await axios
        .get(ARTICLE_URL, {
          params: { ...OPTIONS },
          headers: { 'X-API-KEY': process.env.VUE_APP_MICRO_CMS }
        })
        .then(res => {
          return res.data;
        });
    },
    scrollTo() {
      const hash = this.$route.hash;
      if (hash != null && hash.match(/^#.+$/)) {
        this.$scrollTo(hash);
      }
    },
    generateOgp() {
      const encodeTitleUtf8 = encodeURI(this.article.title);
      const OGP_IMAGE =
        'https://images.microcms-assets.io/protected/ap-northeast-1:7cf4e012-34b8-42e4-9878-9730fb0adfdc/service/taka_blog/media/pablo-ogp.png';
      const PARAMS = `?txt=${encodeTitleUtf8}&txtfont=Hiragino%20Sans%20W5&txt-size=35&txt-color=white&txt-align=middle,center`;
      this.image = OGP_IMAGE + PARAMS;
    }
  }
};
</script>

<style scoped>
/* twitter ogp */
.ogp {
  border: 1px solid gray;
  margin: 20px;
  padding: 20px;
  height: 50%;
  width: 90%;
  padding: 10px;
  padding-bottom: 0px;
}

.twitter-card__card__frame {
  width: 90%;
  height: 72%;
  margin: 30px auto;
  padding: 1px;
  text-align: left;
  border: 1px solid #e1e8ed;
  border-radius: 0.85714em;
}

.twitter-card__img {
  border-top-left-radius: 0.85714em;
  border-top-right-radius: 0.85714em;
  border-width: 1px;
  border-style: solid;
  border-color: #e1e8ed;
  box-sizing: border-box;
  color: inherit !important;
  max-width: 100%;
  overflow: hidden;
}

.twitter-card__text__frame {
  padding-left: 1em;
  padding-right: 1em;
}

.twitter-card__title {
  margin: 0;
  font-size: 1em;
  max-height: 1.3em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.twitter-card__summary {
  margin: 0;
  margin-top: 0.32333em;
  font-size: 14px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.3em;
}

.twitter-card__link {
  margin-top: 0.32333em;
  font-size: 14px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-transform: lowercase;
  color: #8899a6;
  max-height: 1.3em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.article-content {
  margin: 10px;
}

.article-content__text {
  text-align: left;
  margin: 10px auto;
}
</style>
