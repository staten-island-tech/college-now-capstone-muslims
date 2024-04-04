<template>
  <SwipeBox ref="myswipe" @onChange="mySwipeChanged" speed="150">
    <img :src="image.url" />
  </SwipeBox>

  <button @click="next">next</button><br />
  <button @click="previous">previous</button><br />
  <button @click="goto2">goto index #2</button><br />

  <div class="Posts">
    <Post
      v-for="post in uploadedPhotos"
      :image="post.imageUrl"
      :key="post.id"
      :Name="post.name"
      :description="post.description"
      :ownerName="post.ownerName"
      :number="post.number"
    />
  </div>
  <div class="logo">
    <RouterLink class="router" to="/"
      ><button><img src="" alt="" /></button
    ></RouterLink>
  </div>
  <!-- still need filters, the my profile, swiping to next pet, button to next photo -->
</template>

<script>
import SwipeBox from "@shopid/vue3-swipe-box";
import Post from "../components/Post.vue";

export default {
  components: {
    SwipeBox,
  },
  data() {
    return {
      uploadedPhotos: [
        // Add more photos as they are uploaded from back end
      ],
    };
  },

  methods: {
    mySwipeChanged: function (index) {
      console.log("index" + index);
    },

    next: function (x) {
      this.$refs.myswipe.swipetoNext();
    },
    previous: function (x) {
      this.$refs.myswipe.swipetoPrevious();
    },
    goto2: function () {
      this.$refs.myswipe.goTo(2);
    },
  },
};
</script>
<style></style>
