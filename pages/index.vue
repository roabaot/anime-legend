<template>
  <div class="background">
    <HomeCarousel />
    <v-container>
      <MainTitle>
        <div slot="title" class="primary--text headline">انميات الموسم</div>
      </MainTitle>

      <HomeSlide />

      <MainTitle>
        <div slot="title" class="primary--text headline">الحلقات الجديدة</div>

        <v-btn
            slot="actions"
            text
            class="primary title"
            to="@"
          >
            <div v-if="$vuetify.breakpoint.mdAndUp">
              <span class="white--text"> مشاهدة المزيد </span>
              <v-icon class="px-2 white--text">mdi-view-list</v-icon>
            </div>
            <div v-else>
              <v-icon class="px-2 white--text">mdi-plus</v-icon>
            </div>
          </v-btn>
      </MainTitle>
      <HomeNew />
    </v-container>
  </div>
</template>

<script>
export default {
  // middleware: 'isLogin',
  auth: false,
  // async asyncData ({ $axios, store }) {
  //   try {

  //     return {

  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
</style>
