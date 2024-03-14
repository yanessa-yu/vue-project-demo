import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/test/el-dialog',
    //   name: 'testElDialog',
    //   component: () => import('../views/TestElDialog.vue')
    // },
    {
      path: '/test/is-component',
      name: 'TestIsComponent',
      component: () => import('../views/TestIs.vue')
    },
    {
      path: '/test/is-component2',
      name: 'TestIsComponent2',
      component: () => import('../views/TestIs2.vue')
    },
    {
      path: '/react',
      name: 'React',
      component: () => import('../views/react.vue')
    }, 
    {
      path: '/h5',
      name: 'H5',
      component: () => import('../views/h5.vue')
    }, 
    // {
    //   path: '/virtualized/table',
    //   name: 'VirtualizedTable',
    //   component: () => import('../views/VirtualizedTable.vue')
    // },
    {
      path: '/virtualized/table2',
      name: 'VirtualizedTable2',
      component: () => import('../views/VirtualizedTable2.vue')
    },
    {
      path: '/el/cascader',
      name: 'ElCascaderDemo',
      component: () => import('../views/ElCascaderDemo.vue')
    },
    {
      path: '/el/input',
      name: 'ElInputDemo',
      component: () => import('../views/ElInputDemo.vue')
    }, {
      path: '/el/tooltip',
      name: 'ElTooltipDemo',
      component: () => import('../views/ElTooltipDemo.vue')
    }, {
      path: '/el/select',
      name: 'ElSelectDemo',
      component: () => import('../views/ElSelectDemo.vue')
    }
  ]
})

export default router
