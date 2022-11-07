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
          @click="onDecs(slide)"
        >
          <v-img
            :src="slide.img"
            :lazy-src="slide.img"
            class="align-end subbackground"
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
                <v-card-title v-if="hover" class="white--text text-center" style="text-shadow: 2px 2px 0.2px black; word-break: break-word;">
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
          img: 'https://i.postimg.cc/1XxJ5d3j/1.jpg',
          name: 'Hunter X Hunter'
        },
        {
          id: 2,
          img: 'https://i.postimg.cc/sgVQjtRg/2.jpg',
          name: 'Haikyu!!'
        },
        {
          id: 3,
          img: 'https://i.postimg.cc/9Q0nGLcm/3.jpg',
          name: 'Tokyo Ghoul'
        },
        {
          id: 4,
          img: 'https://i.postimg.cc/7PdghXf8/4.webp',
          name: 'Boku no Hero'
        },
        {
          id: 5,
          img: 'https://i.postimg.cc/BbRjBZKJ/5.jpg',
          name: 'Sword Of the Stranger'
        },
        {
          id: 6,
          img: 'https://i.postimg.cc/KYDVwCNp/6.jpg',
          name: 'Call of the Night'
        },
        {
          id: 7,
          img: 'https://i.postimg.cc/QtrxkDLD/7.jpg',
          name: 'Death Note'
        },
        {
          id: 8,
          img: 'https://i.postimg.cc/V6xCG6dP/8.jpg',
          name: 'Mashle'
        },
        {
          id: 9,
          img: 'https://i.postimg.cc/448tnzpy/9.png',
          name: 'Demon Slyer'
        },
        {
          id: 10,
          img: 'https://i.postimg.cc/y8CNNdpW/10.jpg',
          name: 'Ai Tokyo'
        }
      ]
    }
  },
  methods: {
    onDecs (anime) {
      this.$nuxt.$router.push({ path: `/anime/description/${anime.id}`, query: { name: anime.name } })
    }
  }
}
</script>

<style lang="scss" scoped>
.v-slide-group__wrapper {
  touch-action: auto !important;
}
</style>
