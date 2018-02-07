<template>
    <div class="foo">
        <img src="src/assets/dalibor logo centar za masazu.png" alt="" width="120px" id="logo" class="pull-right">
        <div>
            <ul v-for="nav in navigation">
                <li class="pull-left"><a :href="nav.link" >{{ nav.page }}</a></li>
            </ul>
        </div>
        <div class="social_net">
            <a href="https://www.facebook.com/masazaDalibor/" target="_blank"><img src="src/assets/fb-art.png" alt="faceboook" width="30px"></a>
            <a href="https://www.instagram.com/masaza_dalibor/" target="_blank"><img src="src/assets/instagram.jpg" alt="instagram" width="30px"></a>
        </div>
        <img class="author" :src="author" alt="" width="30px" title="Design=>DK">
    </div>
</template>
<script>
    export default {
        data() {
            return{
                navigation: [
                    {link:'/#/kontakt', page: 'Kontakt'},
                    {link:'/#/cenovnik', page: 'Cenovnik'},
                    {link:'/#/galerija', page: 'Galerija'},
                    {link:'/#/o_masazi', page: 'O masazi'},
                    {link:'/#/', page: 'Početna'},
                ],
                author: 'src/assets/dk_logo.png',
            }
        }
    }
</script>

<style>
    .social_net {
        position: absolute;
        bottom: 2px;
        left: 2px;
    }
    .foo {
        background-image: url("./../assets/footer.png");
        background-size: contain;
        width: 85%;
        border: 2px solid black;
        box-shadow: 4px 4px 4px black;
        margin-left: 7.5%;
        height: 155px;
    }
    ul {
        list-style-type: none;
    }
    div>ul>li>a {
        position: relative;
        top: 5px;
        left: 5px;
        font-size: smaller;
        border: none;
        color: black;
        padding: 10px;
    }  img.author {

        position: absolute;
        bottom: 20px;
        right: 10px;
    }
    img.author:hover {
        width: 80px;
    }
</style>