<template>
  <div class="main-column project-list">
    <project-list-item
      v-for="project in projects"
      :key="project.order"
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
      type: Array,
      default: () => {}
    }
  }
}
</script>
<style>
.project-list{
  display: flex;
  justify-content: space-between;
  animation: slide-up-fade 1.5s;
}

@media screen and (max-width:1020px){
  .project-list{
    display: block
  }
}
</style>
