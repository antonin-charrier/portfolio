import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/home/home.vue.html'), meta: {title: 'Test'} },
    { path: '/projects', component: require('./components/projects/projects.vue.html') },
    { path: '/galt', component: require('./components/projects/galt/galt.vue.html') },
    { path: '/visionsafety', component: require('./components/projects/visionsafety/visionsafety.vue.html') },
    { path: '/skills', component: require('./components/skills/skills.vue.html') },
    { path: '/autonomy', component: require('./components/skills/autonomy/autonomy.vue.html') },
    { path: '/android', component: require('./components/skills/android/android.vue.html') },
    { path: '/front-end', component: require('./components/skills/front-end/front-end.vue.html') }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});
