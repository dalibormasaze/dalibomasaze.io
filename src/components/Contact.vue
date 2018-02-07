<template>
    <div >
        <h2 v-for="con in contact" ><a :href="con.link" target="_blank" id="contact">{{ con.address }}</a></h2>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                contact:[
                    {address: 'Centar za masazu i relaksaciju Dalibor'},
                    {address: 'Adresa: Dimitrija Avramovica 7 Novi Sad'},
                    {address: 'email:  dalibordespicahoo.com'},
                    {address: 'Telefon: 061/2614098'},
                    {address: 'Facebook', link: 'https://www.facebook.com/masazaDalibor/'},
                    {address: 'Instagram', link: 'https://www.instagram.com/masaza_dalibor/'},
                ]
            }
        }
    }
</script>
<style>
    #contact {
        text-align: center;
    }
</style>