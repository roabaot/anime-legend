<template>
  <v-carousel
    cycle
    height="400px"
    hide-delimiter-background
    :show-arrows="false"
    class="carousel"
  >
    <v-carousel-item
      v-for="slide  in slides"
      :key="slide.id"
      :src="slide.img"
    />
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      slides: [
        {
          id: 1,
          img: 'https://i.postimg.cc/bv2LDDP3/17350.jpg'
        },
        {
          id: 2,
          img: 'https://i.postimg.cc/GmYtNdxH/Cool-Anime-Laptop-Wallpaper-4k.jpg'
        },
        {
          id: 3,
          img: 'https://i.postimg.cc/tJ3yk4jj/demonslayer.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.carousel {
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: -moz-linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    background-image: -webkit-linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    background-image: -o-linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    background-image: -ms-linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  }

  .v-image__image {
    background-size: 100% 400px !important;
  }
}
</style>
