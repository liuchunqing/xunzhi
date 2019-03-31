import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    
    {
      path: '/',
      redirect: '/xunzhi'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/index'),
      meta: { title: '登录'}
    },
    {
      path: '/',
      component: () => import('@/views/home/index'),
      meta: { title: '寻址' },
      children:[
          {
              path: '/xunzhi',
              component: () => import('@/views/xunzhi/index'),
              meta: { title: '首页' }
          },
          // {
          //     path: '/table',
          //     component: resolve => require(['@/views/xunzhi/xunzhi-edit.vue'], resolve),
          //     meta: { title: '基础表格' }
          // }
      ]
    },
  ]
})

// 路由守卫
 router.beforeEach((to, from, next) => {
    // if (to.meta.title) {
    //   document.title = to.meta.title
    // }
    // next();
    console.log(localStorage.user_login)
  const isLogin = localStorage.user_login ? true : false;
  if (to.path == '/login') {
    next();
  } else {
    // 是否在登录状态下
    isLogin ? next() : next('/login');
  }
 });
export default router;
