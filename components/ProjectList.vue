<template>
  <div class="main-column project-list">
    <project-list-item
      v-for="project in projects"
      v-bind:key="project.order"
      :project="project"
    />
  </div>
</template>

<script>
import ProjectListItem from '~/components/ProjectListItem.vue'
export default {
  components: {
    ProjectListItem
  },
  props: {
    projects: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style>
.project-list{
  display: flex;
  justify-content: space-between;
}

</style>
