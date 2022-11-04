<template>
  <div class="background pa-2">
    <v-alert
      prominent
      border="left"
      colored-border
      class="subbackground mt-2"
    >
      <v-list-item>
        <v-list-item-avatar size="100">
          <v-img :src="info.img" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="white--text title my-1">
            الانمي: {{ info.name }}
          </v-list-item-title>
          <v-list-item-title class="white--text title my-1">
            الحلقة: {{ info.episode }}
          </v-list-item-title>
          <v-list-item-title class="white--text title my-1" style="display: contents;">
            التصنيف:
            <v-chip
              v-for="tag in tags"
              :key="tag.id"
              class="primary--text v-chip--active ma-1"
            >
              {{ tag.tag }}
            </v-chip>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-alert>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      tags: [
        { id: 1, tag: 'اكشن' },
        { id: 2, tag: 'مغامرات' },
        { id: 3, tag: 'فانتازيا' },
        { id: 4, tag: 'شريحة من الحياة' },
        { id: 5, tag: 'رعب' }
      ]
    }
  }
}
</script>

<style>

</style>
