import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/login.vue";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/login/:phone',
      name: 'LoginWithParams',
      component: Login,
      props: true
    },
    {
      path: '/reg',
      name: 'Reg',
      component: () => import('./views/reg.vue')
    },
    {
      path: '/system',
      name: 'System',
      component: () => import('./views/system.vue'),
      children: [
        {
          path: 'studentsList',
          name: 'StudentsList',
          component: () => import('./components/students/studentsList.vue')
        },
        {
          path: 'addStudents',
          name: 'AddStudents',
          component: () => import('./components/students/addStudents.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === "/system") {
    if (false) {
      next({ path: '/login' });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router;

