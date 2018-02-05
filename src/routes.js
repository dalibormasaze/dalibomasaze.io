import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Cenovnik from './components/Cenovnik.vue'
import Gallery from './components/Gallery.vue'
import Contact from './components/Contact.vue'
import O_masazi from './components/O_masazi.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes : [
        {
            path: '/o_masazi',
            component: O_masazi,
        },
        {
            path: '/',
            component: Home,
        },
        {
            path: '/cenovnik',
            component: Cenovnik,
        },
        {
            path: '/galerija',
            component: Gallery
        },
        {
            path: '/kontakt',
            component: Contact
        }
    ]
})

export default router