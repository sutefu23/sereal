<template>
  <main class="home">
    <project-list :projects="projects" />
  </main>
</template>

<script>
import ProjectList from '~/components/ProjectList.vue'
export default {
  components: {
    ProjectList
  },
  async asyncData ({ store }) {
    try {
      const projects = await store.dispatch('getProjects')
      return {
        projects
      }
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style>
.home{
  margin-top: 65px;
  padding-top: 50px;
  padding-bottom: 218px;
}
@media screen and (max-width:1020px){
  .home{
    margin-top: 4.8rem;
    padding-top: 3.2rem;
    padding-bottom: 16rem;
  }
}
</style>
