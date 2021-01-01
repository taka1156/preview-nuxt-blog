<template>
  <div>
    <div class="nav-bar">
      <div class="nav-bar__box">
        <base-logo>{{ logoText }}</base-logo>
        <div class="nav-bar__icon-box" @click="$emit('change-state')">
          <base-nav-icon :is-open="isOpen" />
          <p class="nav-bar__text">
            {{ isOpen === true ? 'CLOSE' : 'NAVI' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseNavIcon from '../atoms/BaseNavIcon';
import BaseLogo from '../atoms/BaseLogo';

export default {
  name: 'NavBar',
  components: {
    'base-nav-icon': BaseNavIcon,
    'base-logo': BaseLogo
  },
  props: {
    logoText: {
      type: String,
      default: 'Please Setting Logo',
      required: true
    },
    isOpen: {
      type: Boolean,
      default: false,
      required: true
    }
  }
};
</script>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: rgba(40, 167, 69, 0.9);
  z-index: 2;
}

.nav-bar__box {
  display: flex;
  justify-content: space-between;
  height: 90%;
  width: 100%;
  margin: 0.5em auto;
}

.nav-bar__icon-box {
  margin-top: -5px;
  padding: 0;
}

.nav-bar__text {
  margin-top: -10px;
  padding: 0;
  color: white;
  font-size: 10px;
}
</style>
