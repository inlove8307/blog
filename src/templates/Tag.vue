<template>
  <Layout>
    <!-- <strong class="tag-title"># {{ $page.tag.title }}</strong> -->
    <PostCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node" :isContent="false" />
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            id
            title
            date (format: "YYYY.MM.DD hh:mm:ss")
            path
            cover
            tags {
              id
              title
              path
            }
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
export default {
  components: {
    PostCard
  },
  metaInfo() {
    return {
      title: this.$page.tag.title
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-title {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 0;
  margin-top: -10rem;
  height: 10rem;
  font-weight: 400;
  font-size: 2.4rem;
  letter-spacing: -0.1rem;
  color: rgba(0, 0, 0, 0.5);
}
</style>