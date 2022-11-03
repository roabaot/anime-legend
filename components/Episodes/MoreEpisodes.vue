<template>
  <div>
    <MainTitle>
      <div slot="title" class="primary--text headline">الحلقات</div>

      <v-text-field
        v-model="search"
        slot="actions"
        dark
        outlined
        color="primary"
        background-color="background"
        dense
        clearable
        label="البحث عن الحلقات"
        >
      </v-text-field>
    </MainTitle>

    <v-container class="pa-0">
      <v-list color="background" dark height="300" class="overflow-auto episodes">
        <v-list-item-group
          v-model="selected"
          active-class="primary--text"
        >
          <template v-for="(episode, index) in filteredEpisodes">
            <v-list-item :key="episode.title">
              <template v-slot:default="{ active }">
                <v-list-item-content>
                  <v-list-item-title
                    :class="active ? 'primary--text' : ''"
                    v-text="episode.title"
                  />
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text>
                    {{ episode.views }}
                    <v-icon small class="mx-2">
                      mdi-eye-outline
                    </v-icon>
                  </v-list-item-action-text>
                </v-list-item-action>
              </template>
            </v-list-item>

            <v-divider
              v-if="index < anime.episodes.length - 1"
              :key="index"
            ></v-divider>
          </template>
        </v-list-item-group>
      </v-list>

      <v-divider style="border-bottom: 2px solid #1976D2;" />
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      anime: {
        id: 1,
        img: '/img/Home/Slides/1.jpg',
        name: 'HUNTER X HUNTER',
        description: 'مغامرة فتى يسعى ان يصبح الصياد لملاقاة ابيه, انمي مثير وذات احداث شيقة',
        info: {
          type: 'TV',
          date: '2020',
          status: 'متوقف',
          numOfEpisodes: 'غير معروف',
          season: 'الخريف'
        },
        episodes: [
          {
            id: 1,
            title: 'الحلقة 1',
            views: '24333'
          },
          {
            id: 2,
            title: 'الحلقة 2',
            views: '20853'
          },
          {
            id: 3,
            title: 'الحلقة 3',
            views: '22343'
          },
          {
            id: 4,
            title: 'الحلقة 4',
            views: '19343'
          },
          {
            id: 5,
            title: 'الحلقة 5',
            views: '20423'
          },
          {
            id: 6,
            title: 'الحلقة 6',
            views: '27543'
          },
          {
            id: 7,
            title: 'الحلقة 7',
            views: '22345'
          }
        ]
      },
      search: ''
    }
  },
  computed: {
    filteredEpisodes () {
      return this.anime.episodes.filter((episode) => {
        return episode.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style>

</style>
