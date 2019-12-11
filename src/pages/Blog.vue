<template>
  <Layout>
    <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" :isContent="true" />
    <Pager :info="$page.posts.pageInfo" class="post-pager" />
  </Layout>
</template>

<page-query>
query Posts($page: Int) {
  posts: allPost(perPage: 1, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
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
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
import { Pager } from 'gridsome'
export default {
  components: {
    PostCard,
    Pager
  },
  metaInfo() {
    return {
      title: 'Blog'
    }
  }
}
</script>

<style lang="scss" scoped>
.post-pager {
  text-align: center;
  a {
    margin-left: 1rem;
    font-size: 1.6rem;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
    &:first-child {
      margin-left: 0;
    }
    &.active {
      font-weight: 700;
      color: rgba(0, 0, 0, 1);
    }
  }
}
</style>