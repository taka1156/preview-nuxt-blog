<template>
  <div>
    <a class="index-list-item" :href="`#${t.anchor}`" v-scroll-to="`#${t.anchor}`">
      {{t.index}}. {{ t.escapedText }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'IndexListItem',
  props: {
    t: {
      type: Object,
      default: () => {},
      required: true
    }
  }
};
</script>

<style scoped>
.index-list-item {
  color: rgba(40, 167, 69, 0.9);
  font-size: 13px;
}

@media (min-width: 790px) {
  .index-list-item {
    font-size: 20px;
  }
}
</style>
