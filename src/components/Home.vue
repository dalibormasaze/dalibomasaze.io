<template class="home">
    <div class="container">
        <div class=" text-center">
            <img :src="title" alt="" width="400px">
            <br><br><br>
            <img src="src/assets/sredina gore0.jpg" alt="" width="100%" class="img img-thumbnail">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'src/assets/dalibor logo centar za masazu.png',
        }
    }
}
</script>

<style>
.home {
background-image: url("./../assets/vrata gore0.jpg");
}

</style>