<template>
  <div id="app">
      <navbar id="navbar"></navbar>
      <div class="container">
          <img src="src/assets/background_panel.png" alt="" id="panel">
      </div>
      <router-view></router-view>
      <foot class="foot"></foot>
  </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import Footer from './components/Footer.vue'
    import Home from './components/Home.vue'
    import Cenovnik from './components/Cenovnik.vue'
    import Gallery from './components/Gallery.vue'
    import Contact from './components/Contact.vue'
    import O_masazi from './components/O_masazi.vue'
export default {
    components:{
        'navbar': Navbar,
        'about': Cenovnik,
        'contact': Contact,
        'foot': Footer,
        'gallery': Gallery,
        'home': Home,
        'o_masazi': O_masazi
    }
}
</script>

<style>
body {
    background-image: url("./assets/sredina gore0.jpg");
    background-size: 107%;
    background-attachment: fixed;
}
#navbar {
    position: fixed;
    top: 2.5%;
    left: 6%;
    opacity: 0.8;
    z-index: 1;

}
.foot {
        position: absolute;
        margin-top: 20px;
        margin-bottom: 20px;
        left: 0;
        background: white;
        opacity: 0.9;
        z-index: -1;
    }

#panel {
    width: 90%;
    margin-left: 5%;
    margin-top: 10%;
    box-shadow: black 7px 5px 3px;
    opacity: 0.8;
    border-radius: 7%;
    border: inset 2px darkolivegreen;
}
.centered {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
