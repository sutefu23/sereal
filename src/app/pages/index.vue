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
  head () {
    return {
      title: process.env.site_name
    }
  },
  data(){
    return{
      projects: []
    }
  },
  async mounted () {
    try {
      this.projects = await this.$store.dispatch('getProjects')
    } catch (e) {
      console.error(e)
    }
  },
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
