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
                <img
                  :src="anime.img"
                  class="white--text d-block"
                >
                <div class="ep mb-1">
                  ep 1
                </div>
              </div>
              <v-card-actions class="text-center background elevation-12" @click="$nuxt.$router.push('/anime/description')">
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
  },
  computed: {
    target () {
      return 0
    }
  },
  methods: {
    onEpisodes (anime) {
      this.$nuxt.$router.push('/anime/episodes')
      // console.log(this.$vuetify.goTo(0))
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

  img {
    display: block;
    height: 200px;
    width: 100%;
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
