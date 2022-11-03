<template>
  <div>
    <client-only>
      <v-app-bar
        app
        absolute
        elevation="2"
        height="70"
        dark
        color="subbackground"
      >
        <!-- Logo -->
        <v-col xl="3" lg="3" md="3" cols="6">
          <v-toolbar-title
            class="white--text"
            :class="$vuetify.breakpoint.mdAndUp ? 'text-h5' : 'text-h6'"
          >
            <span style="cursor: pointer;" @click="$nuxt.$router.push('/')">Anime Legend</span>
          </v-toolbar-title>
        </v-col>

        <v-spacer />

        <!-- Search Input -->
        <v-col v-if="$vuetify.breakpoint.mdAndUp" xl="6" lg="6" md="6" cols="0">
          <v-text-field
            v-model="search"
            outlined
            dense
            prepend-inner-icon="mdi-magnify"
            hide-details
            class="search-knock"
            background-color="white"
            placeholder="Search..."
            light
          />
        </v-col>

        <v-spacer />

        <!-- navigation -->
        <v-col xl="3" lg="3" md="3" cols="6" :class="$vuetify.breakpoint.smAndDown ? 'px-0 text-left' : ''">
          <!-- <v-app-bar-nav-icon
            v-if="$vuetify.breakpoint.smAndDown"
            @click.stop="onDrawer"
          /> -->
          <v-btn
            v-if="$vuetify.breakpoint.smAndDown"
            icon
            class="background"
            @click.stop="onDrawer"
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
          <v-btn
            v-if="$vuetify.breakpoint.smAndDown"
            icon
            class="background"
            @click.stop="isSearch = !isSearch"
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <!-- <MainSearch /> -->
          <v-btn
            v-if="$vuetify.breakpoint.smAndDown"
            icon
            class="background"
            @click.stop="onDrawer"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col>

        <template v-if="$vuetify.breakpoint.mdAndUp" #extension>
          <v-tabs
            v-model="tab"
            dark
            centered
            class="tabs"
          >
            <v-tab
              v-for="(item, index) in tabs"
              :key="index"
              nuxt
              :to="item.to"
            >
              <span class="white--text title font-weight-bold">
                {{ item.title }}
              </span>
            </v-tab>
          </v-tabs>
        </template>

        <template v-else-if="$vuetify.breakpoint.smAndDown && isSearch" #extension>
          <v-text-field
              v-model="search"
              outlined
              dense
              prepend-inner-icon="mdi-magnify"
              hide-details
              class="search-knock"
              background-color="white"
              placeholder="Search..."
              light
            />
        </template>
      </v-app-bar>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      search: '',
      isSearch: false,
      Drawer: this.drawer,
      // notifications: 3,
      tab: null,
      tabs: [
        {
          title: 'الرئيسية',
          to: '/'
        },
        {
          title: 'قائمة الانمي',
          to: '/'
        },
        {
          title: 'افلام الانمي',
          to: '/'
        },
        {
          title: 'انميات الموسم',
          to: '/'
        }
      ]
    }
  },
  methods: {
    onDrawer () {
      console.log('work:', this.Drawer)
      this.Drawer = !this.Drawer
      this.$emit('drawer', true)
    }
  }
}
</script>

<style lang="scss">
.tabs {
  .v-tabs-bar {
    height: auto;
    .v-tabs-bar__content {
      .v-tab {
        min-width: 50px;
        font-weight: bold;
        letter-spacing: 0px;
      }
      .v-tab:not(.v-tab--active) {
        color: rgb(242 207 188) !important;
        font-weight: 500;
      }
    }
    .v-slide-group__prev, .v-slide-group__next {
      display: none !important;
    }
  }
}
</style>
