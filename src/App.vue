<template>
  <div class="App">
    <blog-navigation :logo-text="logoText" />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
  import BlogNavigation from '@/components/organisms/BlogNavigation';

  export default {
    components: {
      'blog-navigation': BlogNavigation,
    },
    data() {
      return {
        logoText: "Taka'sTechBlog",
      };
    },
  };
</script>

<style scoped>
  .App {
    text-align: center;
  }
</style>
