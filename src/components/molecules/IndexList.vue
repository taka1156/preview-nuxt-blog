<template>
  <div>
    <div class="index-list" v-show="isOpen">
      <div class="index-list__box">
        <strong>Index</strong>
        <ul>
          <li v-for="(t, index) in toc" :key="`index_${index}`">
            <div class="index-list__item-box" @click="changeState">
              <index-list-item :t="t" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import IndexListItem from './IndexListItem';

export default {
  name: 'IndexList',
  components: {
    'index-list-item': IndexListItem
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
      required: true
    },
    toc: {
      type: Array,
      default: () => [],
      requried: true
    }
  },
  methods: {
    changeState() {
      this.$emit('change-state', false);
    }
  }
};
</script>

<style scoped>
/*  */
ul {
  list-style-type: none;
}

/* */

.index-list {
  position: fixed;
  bottom: 110px;
  right: 10px;
  height: 250px;
  width: 55%;
  overflow-y: scroll;
  z-index: 2;
  background-color: white;
  border: 3px solid rgba(40, 167, 69, 0.9);
}

.index-list__box {
  margin: 0 auto;
}

.index-list__item-box {
  margin: 10px;
}

li {
  margin: 0;
  padding: 0;
  text-align: left;
}

@media (min-width: 790px) {
  .index-list {
    width: 30%;
  }
}
</style>
