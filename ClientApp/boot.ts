import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
Vue.use(VueRouter);
Vue.use(VueI18n);

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

const messages = {
    en: {
        home: {
            title: "Antonin CHARRIER",
            subtitle: "Web and Android developper",
            hello: "Hello, I'm Antonin. I'm a full stack developper who builds web and Android apps. " +
                "I studied during five years at",
            intech: "IN'TECH engineering school",
            paris: "in Paris, France.",
            check: "You can check some of the",
            projects: "projects",
            worked: "I worked on or some of the",
            skills: "skills",
            acquired: "I acquired working on these projects."
        }
    },
    fr: {
        home: {
            title: "Antonin CHARRIER",
            subtitle: "Développeur web et Android",
            hello: "Bonjour, je m'apelle Antonin. Je suis un développeur full stack qui crée des applications web et Android. " +
                "J'ai étudié pendant cinq ans à",
            intech: "l'école supérieure IN'TECH",
            paris: " à Paris.",
            check: "Vous pouvez regarder quelques un des",
            projects: "projets",
            worked: "sur lesquels j'ai travaillé ou bien certaines",
            skills: "compétences",
            acquired: "que j'ai acquises en travaillant sur ces projets."

        }
    }
}

const i18n = new VueI18n({
    locale: 'en',
    messages,
});

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html')),
    i18n
});
