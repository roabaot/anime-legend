<template>
  <div class="background pa-2">
    <v-container>
      <v-card class="subbackground mt-2">
        <v-card-text>
          <v-row>
            <v-col xl="3" lg="3" md="4" cols="12">
              <div class="rounded-lg info-img">
                <v-img
                  class="shrink ma-2"
                  height="250px"
                  :src="anime.img"
                />
              </div>

              <div class="white--text title text-center">
                <div class="my-1">
                  {{ anime.name }}
                </div>
                <div class="my-1">
                  <v-chip
                    v-for="tag in tags"
                    :key="tag.id"
                    class="primary--text v-chip--active ma-1"
                    @click.stop=""
                  >
                    {{ tag.tag }}
                  </v-chip>
                </div>
                <div class="white--text text-center my-2" :class="$vuetify.breakpoint.mdAndUp ? 'subtitle' : 'body-1'">
                  <div v-if="anime.description">
                    {{ anime.description }}
                  </div>
                  <div v-if="anime.info.type">
                    النوع: {{ anime.info.type }}
                  </div>
                  <div v-if="anime.info.date">
                    تاريخ العرض: {{ anime.info.date }}
                  </div><div v-if="anime.info.status">
                    الحالة: {{ anime.info.status }}
                  </div><div v-if="anime.info.numOfEpisodes">
                    عدد الحلقات: {{ anime.info.numOfEpisodes }}
                  </div><div v-if="anime.info.season">
                    الموسم: {{ anime.info.season }}
                  </div>
                </div>
              </div>
            </v-col>
            <v-col xl="9" lg="9" md="8" cols="12">
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

              <v-row class="my-6 justify-space-around text-center">
                <v-col xl="4" lg="4" md="4" cols="12">
                  <v-btn text class="primary--text v-btn--active subtitle" width="150" rounded>العرض التشويقي</v-btn>
                </v-col>
                <v-col xl="4" lg="4" md="4" cols="12">
                  <v-btn text class="primary--text v-btn--active subtitle" width="150" rounded>المانجا</v-btn>
                </v-col>
                <v-col xl="4" lg="4" md="4" cols="12">
                  <v-btn text class="primary--text v-btn--active subtitle" width="150" rounded>اضافة الى المفضلة</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
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
      tags: [
        { id: 1, tag: 'اكشن' },
        { id: 2, tag: 'مغامرات' },
        { id: 3, tag: 'فانتازيا' },
        { id: 4, tag: 'شريحة من الحياة' },
        { id: 5, tag: 'رعب' }
      ],
      search: '',
      selected: []
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

<style lang="scss">
.info-img {
  .v-image__image {
    background-size: 170px 250px !important;
  }
}
</style>
