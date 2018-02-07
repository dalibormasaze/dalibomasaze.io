<template>
    <div class="text-center">
        <h1>{{ title }}</h1>
        <br><br>
        <h3 v-for="mass in massage">{{ mass.line }}{{mass.price}}</h3>
        <h3 v-for="pm in par_mass">{{pm.line}}{{pm.price}}</h3>
    </div>
</template>
<script>
    export default {
        data() {
            return{
                title: 'Cenovnik',
                massage: [
                    {line: 'Yumeiho terapija 30 - 40 minuta', price: '    1000 rsd'},
                    {line: 'Relax masaža 60 minuta', price: '    1000 rsd'},
                    {line: 'Klasična masaža 60 minuta(jači relax)', price: '    1000 rsd'},
                    {line: 'Parcijalna masaža:', price: ' '},
                ],
                par_mass: [
                    {line: '-noge 30 minuta', price: '    600 rsd'},
                    {line: '-ledja, ruke i vrat 30 minuta', price: '    600 rsd'},
                    {line: '-stopala,sake i glava 20 minuta', price: '    600 rsd'},
                ]

            }
        }
    }
</script>
<style>
   h3 {
       font-size: 30px;
   }
</style>