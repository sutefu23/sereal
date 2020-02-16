<template>
  <div class="main-column project-list">
    <project-list-item
      v-for="project in projects"
      :key="project.order"
      :project="project"
    />
    <div v-show="addEmptyElement" class="project-list-item is-empty" />
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
  },
  data () {
    return {
      addEmptyElement: this.projects.length % 3 === 2
    }
  }
}
</script>
<style>
.project-list{
  display: flex;
  justify-content: space-between;
  animation: slide-up-fade .8s;
}
.is-empty {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
}
@media screen and (max-width:1020px){
  .project-list{
    display: block
  }
  .is-empty{
    display: none
  }
}
</style>
