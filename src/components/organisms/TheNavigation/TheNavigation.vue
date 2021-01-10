<template>
  <div>
    <nav>
      <nav-bar :logo-text="logoText" :is-open="isOpen" @change-state="changeState" />
    </nav>
  </div>
</template>

<script>
import NavBar from '../../molecules/NavBar/NavBar';

export default {
  name: 'TheNavigation',
  components: {
    'nav-bar': NavBar
  },
  props: {
    logoText: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    changeState() {
      // ナビゲーションバーの開閉管理
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
