<template>
    <div>
        <div class="gallery">
            <Arrow sign="<" :clickme="store.decreace"/>
            <img :src="images[getIndex(store.count)]"  class="imgMain" />
            <Arrow sign=">" :clickme="store.increment"/>
        </div>
        <div class="gallery">
            <img :src="images[getIndex(store.count + 1)]"  class="img" />
            <img :src="images[getIndex(store.count + 2)]"  class="img" />
            <img :src="images[getIndex(store.count + 3)]"  class="img" />
        </div>
    </div>
</template>



<script>
    import Arrow from './Arrow.vue';
    import {store} from '../store/store';
    import {images, getIndex} from './images'
    
    export default{
        data() {
            return {
                store,
                images,
                getIndex
            }
        },    
    components: { Arrow }
}
</script>

<style scoped>
.gallery {
    display: flex;
    justify-content: space-between;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 5%;
}

.imgMain {
    width: 70%;
    border: 3px solid black
}

.img {
    width: 30%;
    border: 3px solid black
}
</style>