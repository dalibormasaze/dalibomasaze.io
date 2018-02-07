<template>
  <div id="app">
      <navbar id="navbar"></navbar>
      <div id="panel">
          <router-view style="padding: 10%;"></router-view>
      </div>

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
    * {
        margin: 0;
        padding: 0;
        font-size: 2rem;
    }
    p {
        font-weight: 800;
        color: black;
        font-size: 24px;
    }
    h1, h2, h3 {
        color: #80c548;
    }
body {
    background-image: url("./assets/sredina gore0.jpg");
    background-size: 107%;
    background-attachment: fixed;
    font-family: 'Dancing Script', cursive;

}

#navbar {
    position: absolute;
    width: 90%;
    top: 2.5%;
    left: 5%;
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
    background-image: url("./assets/background_panel.png");
    background-size: 50%;
    background-attachment: fixed;
    background-position: bottom;
    width: 85%;
    max-height: calc(100%+ 20px);
    margin-top: 10%;
    margin-left: 7.5%;
    margin-right: 7.5%;
    box-shadow: black 7px 5px 3px;
    opacity: 0.8;
    border-radius: 7%;
    border: inset 2px darkolivegreen;
}

</style>
