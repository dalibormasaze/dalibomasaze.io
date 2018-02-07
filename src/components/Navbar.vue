<template>
            <div class="container" >
                <div class="row">
                    <div>
                       <nav>
                        <ul class="nav nav-pills pull-right" v-for="nav in navigation">
                            <li><a :href="nav.link">{{ nav.page }}</a></li>
                        </ul>
                        <img src="src/assets/dalibor logo centar za masazu.png" alt="" width="180px" id="logo">
                        </nav>
                    </div>
                </div>
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
                    {link:'/#/o_masazi', page: 'O masaži'},
                    {link:'/#/', page: 'Početna'},
                ],

            }
        }
    }
</script>

<style>
    #logo {
        margin-left: 1%;
        border: ridge 2px white;
        padding: 2px;
        background: black;
        box-shadow: 3px 3px 3px green;
    }
    nav{
        background-image: url("../assets/vrata gore0.jpg");
        background-size: contain;
        border: ridge 2px green;
        box-shadow: black 5px 5px 5px;
        z-index: 100;
    }
    nav>ul {
        padding-top: 0.3%;
        font-weight: 800;
    }
    ul>li>a {
        font-size: 28px;
        color: sienna;
        border: black solid 2px;
        border-radius: 2%;
        box-shadow: green 3px 3px 3px;
        margin-right: 4px;
    }
    ul>li>a:hover {
        position: relative;
        bottom: 2px;
    }
</style>