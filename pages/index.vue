<template>
  <main class="home">
    <project-list :projects="projects"/>
  </main>
</template>

<script>
import ProjectList from '~/components/ProjectList.vue'
export default {
  components: {
    ProjectList
  },
  async asyncData ({ app, error }) {
    try {
      const res = await app.$axios.$get('/projects')
      return {
        projects: res.projects
      }
    } catch (e) {
      error({ statusCode: 404, message: 'ページ取得エラー' })
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
@media screen and (max-width:750px){
  .home{
    margin-top: 4.8rem;
    padding-top: 3.2rem;
    padding-bottom: 16rem;
  }
}
</style>
