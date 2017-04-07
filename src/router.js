/*
* @Author: black
* @Date:   2017-04-06 11:16:50
* @Last Modified by:   yanghcc
* @Last Modified time: 2017-04-06 19:46:32
*/


const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/gaoxin/index.vue'], resolve)
    },
    {
        path: '/gaoxin/page',
        component: (resolve) => require(['./views/gaoxin/page.vue'], resolve),
       //  children: [
	      //  {
		     //    path: 'profile',
		     //    component: (resolve) => require(['./views/subpage1.vue'], resolve)
		     //  },
		     //  {
		     //    path: 'posts',
		     //    component: (resolve) => require(['./views/subpage2.vue'], resolve)
		     //  }
      	// ],
        meta: {
            title: ''
        }
    }
];
export default routers;