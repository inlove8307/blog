<template>
  <aside class="sidebar">
    <strong>TAGS</strong>
    <g-link v-for="tag in tags" :key="tag.node.id" :to="tag.node.path"># {{ tag.node.title }}</g-link>
  </aside>
</template>

<script>
export default {
  props: ['tags']
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: absolute;
  top: 0;
  right: -20rem;
  width: 20rem;

  strong {
    display: block;
    margin-bottom: 0.5rem;
    padding-left: 2rem;
    font-weight: 400;
    font-size: 1.6rem;
    letter-spacing: -0.1rem;
    color: rgba(0, 0, 0, 0.5);
  }

  a {
    display: block;
    margin-left: 2rem;
    padding-left: 1.1rem;
    text-indent: -1.1rem;
    color: rgba(0, 0, 0, 1);
  }
}
</style>