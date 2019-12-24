import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '@/views/Nav.vue'
import Index from '@/views/Index.vue'
import Collection from '@/views/Collections.vue'
import CollectionDetail from '@/views/CollectionDetail.vue'
import Article from '@/views/Articles.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import User from '@/views/Users.vue'
import UserFans from '@/views/UserFans.vue'
import UserFollows from '@/views/UserFollows.vue'
import Sign from '@/views/Sign.vue'
import About from '@/views/About.vue'
import TopicDetail from '@/views/TopicDetail.vue'
import Users1 from '@/views/Users1.vue'
import Users2 from '@/views/Users2.vue'
import UserDetail1 from '@/views/UserDetail1.vue'
import UserDetail2 from '@/views/UserDetail2.vue'
import UserDetail3 from '@/views/UserDetail3.vue'
import UserDetail4 from '@/views/UserDetail4.vue'
import UserDetail5 from '@/views/UserDetail5.vue'
import UserDetail6 from '@/views/UserDetail6.vue'
import UserDetail7 from '@/views/UserDetail7.vue'
import UserDetail8 from '@/views/UserDetail8.vue'
import UserDetail9 from '@/views/UserDetail9.vue'
import UserDetail10 from '@/views/UserDetail10.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

Vue.use(VueRouter)

const routes = [
  {
    path : '/',
	component: Nav,
	children:[
		{
		path:'/',
		redirect:'index',
		
	},
	{
		path:'index',
		component:Index,
	},
	{
		path:'p',
		component:Article
	},
	{
		path:'c',
		component:Collection
	},
	{
		path:'u',
		component:User
	},
	{
		path:'m',
		component:CollectionDetail
	},
	{
		path:'Users1',
		component:Users1
	},
	{
		path:'Users2',
		component:Users2
	},
	{
		path:'UserDetail1',
		component:UserDetail1
	},
	{
		path:'UserDetail2',
		component:UserDetail2
	},
	{
		path:'UserDetail3',
		component:UserDetail3
	},
	{
		path:'UserDetail4',
		component:UserDetail4
		},
		{
			path:'UserDetail5',
			component:UserDetail5
		},
		{
			path:'UserDetail6',
			component:UserDetail6
		},
		{
			path:'UserDetail7',
			component:UserDetail7
		},
		{
				path:'UserDetail8',
				component:UserDetail8
			},
			{
				path:'UserDetail9',
				component:UserDetail9
			},
			{
				path:'UserDetail10',
				component:UserDetail10
			},
	{
		path: 'article/:id',
		component: ArticleDetail
	},
	{
		path: 'topic/:id',
		component: TopicDetail
	},
	{
		path: 'user/:id',
		component: About
	},
  ]
  },
  {
   path : '/sign',
   component:Sign,
   children:[{
	   path:"/",
	   router:Nav
   }]
  }
]

const router = new VueRouter({
  routes
})

export default router
