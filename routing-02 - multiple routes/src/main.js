import { createApp }        from 'vue';
import { createRouter }     from 'vue-router';
import { createWebHistory } from 'vue-router';

import App         from './App.vue';
import TeamsList   from './components/teams/TeamsList.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersList   from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
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
          components: {main: TeamsList, footer: TeamsFooter},
          children: [
              { 
                name: 'team-members',
                path: ':teamId', 
                component: TeamMembers, 
                props: true
               }
            ]
      },
      { 
          name: 'users',
          path: '/users', 
          components: { main: UsersList, footer: UsersFooter }
      },
      {
          path: '/:catchAll(.*)',
          component: CatchAll
      }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPos) {
      if(savedPos) {
          return savedPos;
      }
      return { left: 0, top: 0 };
  }
});

const app = createApp(App);

// Below we make the Vue app aware of the router constant we created 
app.use(router);

app.mount('#app');
