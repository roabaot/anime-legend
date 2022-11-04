<template>
  <div id="episodes">
    <EpisodesInfo :info="selectedAnime" />

    <div class="subbackground">
      <MainTitle>
        <div slot="title" class="primary--text headline">
          سيرفرات المشاهدة
        </div>
      </MainTitle>
      <v-container>
        <v-chip-group
          active-class="primary--text"
          column
          dark
          mandatory
        >
          <v-chip
            v-for="server in servers"
            :key="server.id"
          >
            {{ server.name }}
          </v-chip>
        </v-chip-group>

        <div :class="$vuetify.breakpoint.mdAndUp ? 'ma-4' : 'ma-2'" style="height: 400px;">

        </div>
      </v-container>
    </div>

    <div class="background">
      <MainTitle>
        <div slot="title" class="primary--text headline">
          سيرفرات التحميل
        </div>
      </MainTitle>
      <v-container>
        <v-chip
          v-for="server in servers"
          :key="server.id"
          class="primary--text v-chip--active ma-1"
          @click.stop=""
        >
          {{ server.name }}
        </v-chip>
      </v-container>

      <EpisodesMoreEpisodes class="mt-6 pb-16" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      animes: [
        {
          id: 1,
          img: 'https://i.postimg.cc/1XxJ5d3j/1.jpg',
          name: 'Hunter X Hunter',
          episode: 1
        },
        {
          id: 2,
          img: 'https://i.postimg.cc/sgVQjtRg/2.jpg',
          name: 'Haikyu!!',
          episode: 1
        },
        {
          id: 3,
          img: 'https://i.postimg.cc/9Q0nGLcm/3.jpg',
          name: 'Tokyo Ghoul',
          episode: 1
        },
        {
          id: 4,
          img: 'https://i.postimg.cc/7PdghXf8/4.webp',
          name: 'Boku no Hero',
          episode: 1
        },
        {
          id: 5,
          img: 'https://i.postimg.cc/BbRjBZKJ/5.jpg',
          name: 'Sword Of the Stranger',
          episode: 1
        },
        {
          id: 6,
          img: 'https://i.postimg.cc/KYDVwCNp/6.jpg',
          name: 'Call of the Night',
          episode: 1
        },
        {
          id: 7,
          img: 'https://i.postimg.cc/QtrxkDLD/7.jpg',
          name: 'Death Note',
          episode: 1
        },
        {
          id: 8,
          img: 'https://i.postimg.cc/V6xCG6dP/8.jpg',
          name: 'Mashle',
          episode: 1
        },
        {
          id: 9,
          img: 'https://i.postimg.cc/448tnzpy/9.png',
          name: 'Demon Slyer',
          episode: 1
        },
        {
          id: 10,
          img: 'https://i.postimg.cc/y8CNNdpW/10.jpg',
          name: 'Ai Tokyo',
          episode: 1
        }
      ],
      servers: [
        { id: 1, name: 'mega' },
        { id: 2, name: 'google drive' },
        { id: 3, name: 'mp4Watch' },
        { id: 4, name: 'sony' },
        { id: 5, name: 'youtube' }
      ]
    }
  },
  computed: {
    selectedAnime () {
      const id = +this.$route.params.id
      const anime = this.animes.find(a => a.id === id)
      return anime
    }
  }
}
</script>

<style>

</style>
