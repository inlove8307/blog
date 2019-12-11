<template>
  <div class="layout">
    <header class="header">
      <div class="header-inner">
        <h1 class="header-title">
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </h1>
        <nav class="header-menu">
          <g-link to="/about/">About</g-link>
          <g-link to="/blog/">Blog</g-link>
        </nav>
      </div>
    </header>
    <main class="content">
      <div class="content-inner">
        <slot/>
      </div>
    </main>
    <footer class="footer">Copyright © {{ new Date().getFullYear() }}.</footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
html {
  font-size: 0.625rem;
}

body {
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  line-height: 1.5;
}

.layout {}

.header {
  position: relative;
  z-index: 1;
}

.header-inner {
  margin: 0 auto;
  max-width: 80rem;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  a {
    font-weight: 400;
    font-size: 2.8rem;
    letter-spacing: -0.1rem;
    text-decoration: none;
    color: rgba(0, 0, 0, 1);
  }
}

.header-menu {
  a {
    margin-left: 1rem;
    font-weight: 400;
    font-size: 1.8rem;
    letter-spacing: -0.1rem;
    text-decoration: none;
    color: rgba(0, 0, 0, 1);
  }
}

.content {}

.content-inner {
  margin: 0 auto;
  max-width: 80rem;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  font-size: 1.4rem;
}
</style>