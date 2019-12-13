---
title: gridsome
type: blog
excerpt: gridsome
cover: ''
tags:
  - gridsome
date: 2019-12-09T08:08:34.343Z
---
Introduction
Gridsome is a free and open source Vue.js-powered framework for building websites & apps that are fast by default 🚀.

#Why Gridsome?
Vue.js for frontend - The simplest & most approachable frontend framework.
Local development with hot-reloading - See code changes in real-time.
File-based page routing - Any Name.vue file in src/pages is a static route.
Dynamic routing - Any [param].vue file in src/pages is a dynamic route.
Static file generation - Deploy securely to any CDN or static web host.
Data sourcing - Use any Headless CMSs, APIs or Markdown-files for data.
GraphQL data layer - Simpler data management with a centralized data layer.
Automatic Code Splitting - Builds ultra performance into every page.
Plugin ecosystem - Find a plugin for any job.
#How it works
Gridsome generates static html that hydrates into a Vue SPA once loaded in the browser. This means you can build both static websites & dynamic apps with Gridsome. It's perfect for your JAMstack workflow.

Gridsome builds one .html file and one .json file for every page. After first page load it only uses the .json files to prefetch and load data for the next pages. It also builds a .js bundle for each page that needs it (code splitting).

It uses vue-router for SPA routing, and vue-meta for managing <head>.

Gridsome adds a 57kB min gzip JS bundle size by default.(vue.js, vue-router, vue-meta and some for image lazy loading).

Learn more about how it works.

#Prerequisites
You should have basic knowledge about HTML, CSS, Vue.js and how to use the Terminal. Knowing how GraphQL works is a plus, but not required. Gridsome is a great way to learn it.

Gridsome requires Node.js (v8.3+) and recommends Yarn.

#How to install
#1. Install Gridsome CLI tool
Using YARN:yarn global add @gridsome/cli
Using NPM:npm install --global @gridsome/cli
#2. Create a Gridsome project
gridsome create my-gridsome-site to create a new project
cd my-gridsome-site to open folder
gridsome develop to start local dev server at http://localhost:8080
Happy coding 🎉🙌
#3. Next steps
Create .vue components in the /pages directory to create page routes.
Use gridsome build to generate static files in a /dist folder
Learn more
Core concepts
How to host & deploy
👋 Stay in the loop. Subscribe to Gridsome newsletter!

your@email.com
Subscribe
#Alternatives
VuePress. Another static site generator for Vue.js. It uses local markdown files for content and is perfect for documentation sites. It is possible to build anything in VuePress and Markdown (Like a blog f.ex).

Nuxt. A Universal Vue.js Framework for server-side rendered (SSR) apps and websites. It also has a static site generator feature, but the main focus is SSR.

Gatsby.js Gridsome is highly inspired by Gatsby.js (React.js based), which collects data sources and generates a static site from it. Gridsome is an alternative for Gatsby.js.
