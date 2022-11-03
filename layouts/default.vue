<template>
  <v-app>
    <CoreDrawer v-if="$vuetify.breakpoint.smAndDown" :drawer="drawer" @drawer="drawer = $event" />
    <CoreHeader :drawer="drawer" @drawer="drawer = $event" />
    <!-- <SideBar /> -->
    <v-main id="main">
      <nuxt />
      <CoreFooter />
    </v-main>
    <!-- <Snackbar /> -->
  </v-app>
</template>

<script>
export default {
  name: 'Default',
  data () {
    return {
      title: 'Anime Legend',
      drawer: false
    }
  },
  mounted () {
    this.$meta().refresh()
  }
}
</script>

<style lang="scss">
@import '~/assets/index.scss';

.v-main__wrap {
  // height: 100vh;
  // overflow-y: auto !important;
}
</style>
