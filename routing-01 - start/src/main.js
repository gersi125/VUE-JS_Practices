import { createApp }        from 'vue';
import { createRouter }     from 'vue-router';
import { createWebHistory } from 'vue-router';

import App         from './App.vue';
import TeamsList   from './components/teams/TeamsList.vue';
import UsersList   from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import CatchAll    from './components/nav/CatchAll.vue';

const router = createRouter({
  history: createWebHistory(),
  // Below we will be able to tell the router which Vue component should be available for which URL
  routes: [
      { 
          path: '/', 
          redirect: '/teams' 
      },  
      {
          name: 'teams',
          path: '/teams', 
          component: TeamsList,
          children: [
              { 
                name: 'team-members',
                path: ':teamId', 
                component: TeamMembers, 
                props: true
               }
            ]
      },  // Every javascript object represents one route and the configuration for that route
      { 
          name: 'users',
          path: '/users', 
          component: UsersList 
      },
     // We comment out the path to Team Members Route as we use it above as a nested route 
     // { 
     //     path: '/teams/:teamId', 
     //     component: TeamMembers, 
     //     props: true 
     // },
      {
          path: '/:catchAll(.*)',
          component: CatchAll
      }
  ],
  linkActiveClass: 'active'
});

const app = createApp(App);

// Below we make the Vue app aware of the router constant we created 
app.use(router);

app.mount('#app');
