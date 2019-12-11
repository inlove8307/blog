<template>
  <article class="post-card">
    <div class="post-card-cover">
      <h2 class="post-card-title">
        <g-link :to="post.path">{{ post.title }}</g-link>
      </h2>
      <span class="post-card-date">{{ post.date }}</span>
      <span class="post-card-tags">
        <g-link v-for="tag in post.tags" :key="tag.id" :to="tag.path"># {{ tag.title }}</g-link>
      </span>
      <g-image class="post-card-image" aria-hidden="true" v-if="post.cover" :src="post.cover" />
    </div>
    <p class="post-card-content" v-if="isContent" v-html="post.content" />
  </article>
</template>

<script>
export default {
  props: ['post', 'isContent']
}
</script>

<style lang="scss" scoped>
.post-card {
  overflow: hidden;
  position: relative;
  margin-bottom: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  background-color: rgba(255, 255, 255, 1);
  list-style: none;
}
.post-card-cover {
  overflow: hidden;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 20rem;
  background-color:rgba(0, 0, 0, 0.025);
}
.post-card-title {
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 3rem;
  text-align: center;
  letter-spacing: -0.1rem;
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 1);
  }
}
.post-card-date {
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  text-align: right;
  color: rgba(0, 0, 0, 0.5);
}
.post-card-tags {
  position: relative;
  z-index: 1;
}
.post-card-tags a {
  margin-left: 1rem;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 1);
  &:first-child {
    margin-left: 0;
  }
}
.post-card-image {
  position: absolute;
  z-index: 0;
  max-width: 100%;
  max-height: 100%;
  top: 50%;
  left: 50%;
  opacity: 0.5;
  transform: translate(-50%, -50%);
}
.post-card-content {
  margin: 0;
  padding: 0 2rem 2rem;
  font-size: 1.4rem;
}
</style>