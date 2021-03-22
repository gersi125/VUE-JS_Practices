import { createRouter }     from 'vue-router';
import { createWebHistory } from 'vue-router';

import TeamsList   from './components/teams/TeamsList.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList   from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import CatchAll    from './components/nav/CatchAll.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            redirect: '/teams'
        },
        { 
            path: '/teams', 
            components: {
                default: TeamsList, 
                footer: TeamsFooter
            } 
        },
        { 
            path: '/users', 
            components: { 
                default: UsersList, 
                footer: UsersFooter}, 
            beforeEnter(to, from, next) {
                console.log('user beforeEnter');
                console.log(to, from);
                next();
            }
        },
        { 
            path: '/teams/:teamId', 
            component: TeamMembers, 
            props: true 
        },
        { 
            path: '/:catchAll(.*)', 
            component: CatchAll
        }
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPos ) {
        if(savedPos) {
            return savedPos;
        } 
        return {left: 0, top: 0};      
    }
  });
  
  router.beforeEach(function(to, from, next) {
      // keep track of the route
      console.log('Global beforeEach');
      console.log(to, from);
      next();
  });
  
  router.afterEach(function(to, from) {
      //useful for sending analytics data
      console.log('Global afterEach');
      console.log(to, from);
  });
  
export default router;