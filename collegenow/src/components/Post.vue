<template>
    <div class="post">
        <h2>{{ Animal }}</h2>
        <p>{{ Description }}</p>
        <img src="" alt="">
    </div>
</template>

<script>
    export default {
        name: "Post",
        props: {
            Animal: String,
            Image: String,
            Description: String,
        },
    };
</script>

<style>
    .post{
        width: 25%;
        background-color: bisque;
        height: 550px;
        margin: 10px auto;
    };
</style>