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
          img: 'img/Home/Slides/1.jpg'
        },
        {
          id: 2,
          img: 'img/Home/Slides/2.jpg'
        },
        {
          id: 3,
          img: 'img/Home/Slides/3.jpg'
        },
        {
          id: 4,
          img: 'img/Home/Slides/4.webp'
        },
        {
          id: 5,
          img: 'img/Home/Slides/5.jpg'
        },
        {
          id: 6,
          img: 'img/Home/Slides/6.jpeg'
        },
        {
          id: 7,
          img: 'img/Home/Slides/7.jpg'
        },
        {
          id: 8,
          img: 'img/Home/Slides/8.jpg'
        },
        {
          id: 9,
          img: 'img/Home/Slides/9.png'
        },
        {
          id: 10,
          img: 'img/Home/Slides/10.jpg'
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
