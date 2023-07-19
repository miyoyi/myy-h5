export default [
  {
    path: '/article',
    name: 'article',
    component: () => import(/* webpackChunkName: "article" */ 'views/Article.vue'),
    meta: {
      auth: true,
      title: '评论',
      keepAlive: true
    }
  }
]
