import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized
} from 'vue-router'
import { useJwtStore } from '@/stores/jwt'

const authenticatedRoutes: string[] = [
  'Profile',
  'TicketHistory',
  'TTCoins',
  'TransactionHistory',
  'PaymentSuccess',
  'PaymentError',
  'FlightDetail',
  'CheckAvailability',
  'Change-Password'
]

const router = createRouter({
  scrollBehavior(_, __, ___) {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/LandingView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/Pages/RegisterView.vue')
    },
    {
      path: '/activities',
      name: 'Activities',
      component: () => import('@/views/Pages/ActivityList.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Pages/LoginView.vue')
    },
    {
      path: '/otp-verification',
      name: 'OtpVerification',
      component: () => import('@/views/Pages/OTPVerification.vue')
    },
    {
      name: 'notfound',
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue')
    },
    {
      name: 'activitydetail',
      path: '/activity-detail/:id',
      component: () => import('../views/Pages/ActivityDetail.vue')
    },
    {
      name: 'getstarted',
      path: '/getstarted',
      component: () => import('../views/Pages/GetStarted.vue')
    },
    {
      name: 'accountcreated',
      path: '/accountcreated',
      component: () => import('../views/Pages/CongratsAccountCreated.vue')
    },
    {
      name: 'schedule',
      path: '/schedule',
      component: () => import('../views/Pages/AddBusinessSchedule.vue')
    },
    {
      name: 'questions',
      path: '/questions',
      component: () => import('../views/Pages/QuestionsView.vue')
    },
    {
      name: 'policy',
      path: '/policy',
      component: () => import('../views/Pages/PolicyView.vue')
    },
    {
      name: 'success-enrollment',
      path: '/success-enrollment',
      component: () => import('../views/Pages/EnrollmentSucess.vue')
    },
    {
      name: 'accountbusinesscontactdata',
      path: '/account-business-contact-data',
      component: () => import('../views/Pages/AccountBusinessContactData.vue')
    },
   


  ]
})

export default router

export async function WaitUntilRefreshed(): Promise<void> {
  const JwtStore = useJwtStore()
  while (JwtStore.RefreshingToken) {
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
}

router.beforeEach(
  async (to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext) => {
    const JwtStore = useJwtStore()

    if (to.name == 'Login' || to.name == 'Register') {
      await WaitUntilRefreshed()
      if (JwtStore.loggedIn) {
        next({ name: 'Home' })
      } else {
        next()
      }
    } else if (authenticatedRoutes.includes(to.name)) {
      await WaitUntilRefreshed()
      if (JwtStore.loggedIn) {
        next()
      } else {
        next({ name: 'NotFound' })
      }
    } else {
      next()
    }
  }
)
