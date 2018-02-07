<template>
    <div class="gallery">
        <div class="img-container">
            <h1>Galerija</h1>
            <br><br><br>
            <gallery :images="images" :index="index" @close="index = null" style="margin-top: 50px"></gallery>
            <div
                    class="image img-thumbnail img-responsive pull-left"
                    v-for="(image, imageIndex) in images"
                    :key="imageIndex"
                    @click="index = imageIndex"
            >
                <img class="pic" :src="image" alt="" style="width: 260px; height: 260px; margin: 1px" title="Klikni da uvecas">
            </div>
            <div class="clearfix"></div>
        </div>
    </div>

</template>

<script>
    import VueGallery from 'vue-gallery';

    export default {
        data: function () {
            return {
                images: [
                    'src/assets/dalibor logo centar za masazu.png',
                    'src/assets/efektiyumeiho.jpg',
                    'src/assets/sredina gore0.jpg',
                    'src/assets/vrata gore0.jpg',
                    'src/assets/26153970_569180870097720_7962429892845371392_n.jpg',
                    'src/assets/26154826_2011802465761445_1478001922769158144_n.jpg',
                    'src/assets/26272265_574975769515535_5689799912976285696_n.jpg',
                    'src/assets/26341658_149465252508711_9124220839925907456_n.jpg',
                    'src/assets/26383732_2422736647742783_6071650732115755008_n.jpg',
                    'src/assets/26869290_975528922604571_4226824392853684224_n.jpg',
                    'src/assets/IMG_1137 - Copy - Copy.JPG',
                    'src/assets/IMG_1682.JPG',
                    'src/assets/21685974_1961263267474249_8708330066435238558_n.jpg',
                    'src/assets/23318998_1984436585156917_7797495195645151572_n.jpg',
                    'src/assets/23376075_1983850455215530_7860552995835061410_n.jpg',
                    'src/assets/23434840_1984881481779094_3781985438347609700_n.jpg',
                ],
                index: null
            };
        },

        components: {
            'gallery': VueGallery
        },
    }
</script>
<style>

    .image:hover {
        cursor: pointer;
        border: black 1px solid;
    }
    .img-container {
        width: 90%;
        margin-left: 5%;
    }
</style>
