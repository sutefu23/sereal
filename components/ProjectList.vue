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
  animation: slide-up-fade .5s ease-in-out;
}

@media screen and (max-width:768px){
  .project-list{
    display: block
  }
}
</style>
