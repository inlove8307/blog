// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/styles/index.scss'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900&display=swap'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
