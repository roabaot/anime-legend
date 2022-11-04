<template>
  <v-item-group>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="anime in animes"
          :key="anime.id"
          cols="12"
          xl="2"
          md="3"
          sm="6"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              class="align-center rounded-lg"
              dark
              @click.stop=""
            >
              <div class="card-img" @click="onEpisodes(anime)">
                <v-img
                  :src="anime.img"
                  height="200"
                  class="white--text d-block"
                />
                <div class="ep mb-1">
                  ep 1
                </div>
              </div>
              <v-card-actions class="text-center background elevation-12" @click="onDecs(anime)">
                <v-card-title class="pa-0 d-block full-width" v-text="anime.name" />
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
// import * as easings from 'vuetify/lib/services/goto/easing-patterns'
export default {
  data () {
    return {
      animes: [
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
  computed: {
    target () {
      return 0
    }
  },
  methods: {
    onEpisodes (anime) {
      this.$nuxt.$router.push({ path: `/anime/episodes/${anime.id}`, query: { name: anime.name } })
    },
    onDecs (anime) {
      this.$nuxt.$router.push({ path: `/anime/description/${anime.id}`, query: { name: anime.name } })
    }
  }
}
</script>

<style lang="scss">
.card-img {
  position: relative;
  overflow: hidden;

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
    background-size: 100% 200px !important;
  }

  .ep {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    z-index: 1;
  }
}
</style>
