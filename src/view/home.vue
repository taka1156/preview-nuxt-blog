<template>
  <div>
    <h1>Don't enter</h1>
    <div class="box">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        fill="#28a745"
        viewBox="0 0 48 48"
      >
        <path
          d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
        />
      </svg>
    </div>
    <p>
      このページは
      <a href="https://blog.taka1156.site/" rel="noopener">
        Taka'sTechBlog
      </a><br />
      のプレビューサイトです。
    </p>
    <a href="https://blog.taka1156.site/" rel="noopener">
      <img :src="require('@/assets/blog-logo.png')"/>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'home',
    props: {
      msg: String,
    },
  };
</script>

<style scoped>
  h1 {
    margin: 200px 0 0 0;
  }

  a {
    color: #28a745;
  }

  .box {
    margin: 50px auto;
    height: 90px;
    width: 90px;
  }

  img {
    height: 50px;
    width: 50px;
    animation: 3s blog-logo infinite ease;
    animation-delay: 0.2s;
    z-index: 2;
  }

  @keyframes blog-logo {
    from {
      transform: rotate(-360deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>
