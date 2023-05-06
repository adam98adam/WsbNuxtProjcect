<template>
    <div class="nav">
        <span class="childElement"><NuxtLink to="/" style="text-decoration: none;">Home nuxt</NuxtLink></span>
        <span class="childElement"><NuxtLink to="/onas" style="text-decoration: none;">About nuxt</NuxtLink></span>
    </div>
</template>

<script>

</script>

<style scoped>

.nav {

    flex-direction: column;
    padding: 5px;
    border-bottom: 20px solid slateblue;
    background-color: lightblue;
    height: 100%;
    width: 100%;
}

.childElement {
    margin: 5%;
}


</style>
