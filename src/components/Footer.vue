<template>
    <div class="foo">
        <img src="src/assets/dalibor logo centar za masazu.png" alt="" width="120px" id="logo" class="pull-right">
        <ul v-for="nav in navigation">
            <li><a :href="nav.link" >{{ nav.page }}</a></li>
        </ul>
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

            }
        }
    }
</script>

<style>
    .foo {
        background-image: url("./../assets/footer.png");
        background-size: contain;
        width: 90%;
        border: 2px solid black;
        box-shadow: 4px 4px 4px black;
        margin-left: 5%;
        height: 155px;
    }
    .foo>ul>li>a {
        font-size: smaller;
        border: none;
        color: black;

    }
</style>