<template>
  <v-slide-group
    v-model="model"
    class="pa-4"
    active-class="success"
    :show-arrows="$vuetify.breakpoint.mdAndUp"
  >
    <v-slide-item
      v-for="slide in slides"
      :key="slide.id"
    >
      <v-hover v-slot="{ hover }">
        <v-card
          height="200"
          width="130"
          class="ma-4"
        >
          <v-img
            :src="slide.img"
            class="align-end"
            height="200"
            width="130"
            :gradient="hover ? 'to bottom, rgba(0,0,0,.2), rgba(0,0,0,.6)' : ''"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                <v-card-title v-if="hover" class="white--text" style="text-shadow: 2px 2px 0.2px black;">
                  {{ slide.name }}
                </v-card-title>
              </v-scale-transition>
            </v-row>
          </v-img>
        </v-card>
      </v-hover>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  data () {
    return {
      model: null,
      slides: [
        {
          id: 1,
          img: 'img/Home/Slides/1.jpg',
          name: 'anime 1'
        },
        {
          id: 2,
          img: 'img/Home/Slides/2.jpg',
          name: 'anime 2'
        },
        {
          id: 3,
          img: 'img/Home/Slides/3.jpg',
          name: 'anime 3'
        },
        {
          id: 4,
          img: 'img/Home/Slides/4.webp',
          name: 'anime 4'
        },
        {
          id: 5,
          img: 'img/Home/Slides/5.jpg',
          name: 'anime 5'
        },
        {
          id: 6,
          img: 'img/Home/Slides/6.jpeg',
          name: 'anime 6'
        },
        {
          id: 7,
          img: 'img/Home/Slides/7.jpg',
          name: 'anime 7'
        },
        {
          id: 8,
          img: 'img/Home/Slides/8.jpg',
          name: 'anime 8'
        },
        {
          id: 9,
          img: 'img/Home/Slides/9.png',
          name: 'anime 9'
        },
        {
          id: 10,
          img: 'img/Home/Slides/10.jpg',
          name: 'anime 10'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
// .v-slide-group__wrapper {
//   overflow-x: auto;
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }

// .v-slide-group__wrapper::-webkit-scrollbar {
//   display: none;
//   width: 0;
//   background: transparent;
// }
</style>
