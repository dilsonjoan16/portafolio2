import Vue from 'vue'
import App from './App.vue'

//importamos los componentes
import Movies from './components/Movies.vue';
import Nosotros from './components/Nosotros.vue';
import Home from './components/Home.vue';
import NewMovies from './components/NewMovies.vue';
import Movie from './components/Movie.vue';
import ExtraMovies from './components/ExtraMovies.vue';

//importamos bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//importamos vuerouter
import VueRouter from 'vue-router';

Vue.use(VueRouter)

//se define la constante de rutas

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Nosotros',
    component: Nosotros
  },
  {
    path: '/Movies',
    component: Movies
  },
  {
    path: '/BestMovies',
    component: NewMovies
  },
  {
    path: '/Movie/:id',
    component: Movie
  },
  {
    path: '/ExtraMovies',
    component: ExtraMovies
  }
]

//creamos el objeto router
const router = new VueRouter({
  routes,
  mode:'history'
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
