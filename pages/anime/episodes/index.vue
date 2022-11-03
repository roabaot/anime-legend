<template>
  <div id="episodes">
    <EpisodesInfo />

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
      servers: [
        { id: 1, name: 'mega' },
        { id: 2, name: 'google drive' },
        { id: 3, name: 'mp4Watch' },
        { id: 4, name: 'sony' },
        { id: 5, name: 'youtube' }
      ]
    }
  }
}
</script>

<style>

</style>
