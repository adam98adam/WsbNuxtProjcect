<template>
    <div class="centerElement">
        <div class="arrow" @click="clickme()">
            {{sign}}
        </div>
    </div>
</template>

<script>
    import { store } from '../store/store';
    
    export default {
        props: {
            sign: {
                type: String,
                required: true
            },
            clickme: {
                type: Function
            }
        },
        data() {
            return store
        }
    }
</script>

<style scoped>

    .centerElement {
        display: flex;
        align-items: center;
    }
    .arrow {
        font-size: 5vh;
        background-color: lightblue;
        border: 3px solid black;
        border-radius: 20%;
        padding: 1vh;
    }
</style>