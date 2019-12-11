<template>
  <Layout>
    <PostCard :post="$page.post" :isContent="true" />
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
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
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
export default {
  components: {
    PostCard
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>