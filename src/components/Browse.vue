<template>
  <section>
    <h2 class="mb-6 text-xl font-semibold sm:mt-4">Browse Revenue Groups</h2>

    <div class="grid grid-cols-1 gap-y-6">
      <BrowseGroup
        v-for="(group, groupIndex) in publishedGroups"
        :key="groupIndex"
        :published-group-index="groupIndex"
      />
    </div>
  </section>
  
</template>

<script>
import BrowseGroup from './BrowseGroup.vue'

export default {
  name: "Browse",

  components: {
    BrowseGroup
  },

  computed: {
    publishedGroups() {
      return this.$store.state.publishedGroups
    },

    groupData() {
      return this.$store.state.groupData
    } 
  }
}
</script>

<style>

</style>