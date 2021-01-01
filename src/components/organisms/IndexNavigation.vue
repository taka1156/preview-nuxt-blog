<template>
  <div>
    <index-nav :is-open="isOpen" @change-state="changeState" />
    <index-list :is-open="isOpen" :toc="toc" @change-state="changeState" />
  </div>
</template>

<script>
import IndexNav from '../molecules/IndexNav';
import IndexList from '../molecules/IndexList';

export default {
  name: 'IndexNavigation',
  components: {
    'index-nav': IndexNav,
    'index-list': IndexList
  },
  props: {
    toc: {
      type: Array,
      default: () => [],
      requried: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    changeState(state) {
      // ナビゲーションバーの開閉管理
      this.isOpen = state;
    }
  }
};
</script>
