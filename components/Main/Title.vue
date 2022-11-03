<template>
  <v-toolbar
    id="main-title"
    width="100%"
    flat
    style="margin-bottom: 0;"
    class="transparent"
  >
    <v-container
      grid-list-xl
      class="defult-text pb-0"
    >
      <v-list-item class="pa-0">
        <slot name="title" />

        <v-spacer />

        <v-toolbar-items>
          <v-flex
            align-center
            layout
            style="margin: -12px auto;"
          >
            <slot name="actions" />
          </v-flex>
        </v-toolbar-items>
      </v-list-item>
    </v-container>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    title: 'title',
    more: 'more',
    responsive: false
  }),
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    }
  }
}
</script>

<style lang="scss">
  #main-title {
    .v-toolbar__content {
      padding: 0;
      height: auto;
      .defult-text {
        display: block;
        border-bottom: 2px solid #1976D2;
        text-indent: .0892857143em;
        text-transform: uppercase;
        font-size: .875rem;
        font-weight: 400;
        letter-spacing: .0892857143em;
        }
    }
  }
</style>
