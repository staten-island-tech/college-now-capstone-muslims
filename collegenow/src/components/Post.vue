<template>
    <div class="post">
        <h2>{{ Animal }}</h2>
        <img src="" alt="">
        <p>{{ Description }}</p>
    </div>
</template>

<script>
    export default {
        Animal: String,
        Image: String,
        Description: String
    }
</script>

<style>
    .post{
        width: 30%;
        background-color: bisque;
        height: 300px;
        margin: 10px auto;
    }
</style>