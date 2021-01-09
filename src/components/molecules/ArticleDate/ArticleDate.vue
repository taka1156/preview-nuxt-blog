<template>
  <div>
    <div class="article-date">
      <base-img
        :size="`sm`"
        :img-url="require('@/assets/img/icon/date.svg')"
        :img-alt="'日付'"
      />
      <base-text class="base-text--green">
        作成日:{{ dateFormat(createdAt) }} ~ 更新日:{{ dateFormat(updatedAt) }}
      </base-text>
    </div>
  </div>
</template>

<script>
import BaseImg from '../../atoms/BaseImg/BaseImg';
import BaseText from '../../atoms/BaseText/BaseText';

export default {
  name: 'ArticleDate',
  components: {
    'base-img': BaseImg,
    'base-text': BaseText
  },
  props: {
    createdAt: {
      type: String,
      defalut: '',
      required: true
    },
    updatedAt: {
      type: String,
      defalut: '',
      required: true
    }
  },
  methods: {
    dateFormat(date = null) {
      if (date == null) return '--/--/--';
      return new Date(date).toLocaleDateString();
    }
  }
};
</script>

<style scoped>
.article-date {
  display: flex;
  margin: 0;
}
</style>
