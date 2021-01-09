<template>
  <div>
    <div class="box">
      <h1>Don't enter</h1>
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
      <p>
        このページは
        <a href="https://blog.taka1156.site/" rel="noopener"> Taka'sTechBlog </a
        ><br />
        のプレビューサイトです。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
};
</script>

<style scoped>
.box {
  margin: 20% auto 0;
  padding: 0;
  height: 35vh;
  width: 80vw;
}

a {
  color: #28a745;
}
</style>
