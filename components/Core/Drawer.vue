<template>
  <v-navigation-drawer
    v-model="Drawer"
    app
    color="subbackground"
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        active-class="active-btn"
        dark
        :to="item.to"
        router
        exact
      >
        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template #append>
      <v-list-item active-class="active-btn" @click="logout">
        <v-list-item-action>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="'logout'" />
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-navigation-drawer>
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
      items: [
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
          to: '/chat'
        },
        {
          title: 'انميات الموسم',
          to: '/users'
        }
      ]
    }
  },
  computed: {
    Drawer: {
      get () {
        return this.drawer
      },
      set (drawer) {
        this.$emit('drawer', drawer)
        return drawer
      }
    }
  },
  methods: {
    logout () {
      // await this.$auth.logout()
      this.$router.push('/login')
      this.$store.commit('clearUser')
    }
  }
}
</script>

<style lang="scss">
.active-btn {
  color: #1976D2 !important;
}
</style>
