<template>
  <main class="project">
    <project-main-image :project="project" class="project-image in-main" />
    <article>
      <div class="project-header">
        <p class="project-client">
          {{ project.client }}
        </p>
        <h1 class="project-title">
          {{ project.title }}
        </h1>
        <div class="project-info">
          <span class="project-year">{{ project.year }}</span>
          <span v-show="project.year && project.tags"> / </span>
          <span v-for="tag in project.tags" :key="tag.order" class="project-tag">{{ tag.name }}</span>
        </div>
      </div>
      <section class="project-content">
        <h2>{{ project.article_title }}</h2>
        <div v-html="project.content">
          {{ }}
        </div>
      </section>
    </article>
    <aside v-scroll="handleScroll" class="project-other fede-slide-up">
      <h2 class="project-other-section-title">
        OTHER PROJECTS
      </h2>
      <project-list :projects="projects" />
    </aside>
  </main>
</template>

<script>
import ProjectMainImage from '~/components/ProjectMainImage.vue'
import ProjectList from '~/components/ProjectList.vue'
export default {
  components: {
    ProjectList,
    ProjectMainImage
  },
  head () {
    return {
      title: this.title + ' - ' + process.env.site_name
    }
  },
  async asyncData ({ store, params }) {
    try {
      const projects = await store.dispatch('getProjects')

      const listProjects = []
      let displayProject = ''

      projects.forEach((project) => {
        if (project.slug === params.slug) {
          displayProject = project
        } else {
          listProjects.push(project)
        }
      })
      return {
        projects: listProjects,
        project: displayProject,
        title: displayProject.title
      }
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    handleScroll: (evt, el) => {
      const top = el.getBoundingClientRect().top
      if (window.scrollY > top + window.pageYOffset - 600) {
        el.classList.add('show')
        return true
      }
      return false
    }
  }
}
</script>
<style lang="scss">
  .project{
    &-header{
      margin-top: 56px;
      margin-bottom: 32px;
      animation: fade-slide-up .8s;
      transform: translate3d(0,0,0);
    }
    &-client{
      font-size: 1.4rem;
      line-height: 1.4rem;
      font-weight: bold;
      margin-bottom: 16px;
    }
    &-title{
      font-size: 2.8rem;
      margin-bottom: 8px;
      font-weight: bold;
    }
    &-info{
      color:$gray-70;
      font-size: 1.4rem;
      font-weight: 300;
    }
    &-tag + &-tag:before{
      content: ", ";
    }
  }
  .project-header,
  .project-content h2,
  .project-content p,
  .project-content ul,
  .project-content dl
  {
    max-width: $article-column-width;
    margin-right: auto;
    margin-left: auto;
    color:inherit
  }
  .project-content{
    font-size: 1.4rem;
    line-height: 3.6rem;
    color:$dark;
    animation: fade-slide-up .8s;
    transform: translate3d(0,0,0);
  }
  .project-content h2{
    font-size: 2.4rem;
    margin-bottom: 18px;
    color:black;
  }

  .project-content img{
    position: relative;
    width: 99vw;
    margin-top:100px;
    margin-bottom: 100px;
    margin-left: calc(( 100vw - #{$article-column-width} ) / 2 * -1)
  }
  .project-other{
    margin-top: 160px;
    margin-bottom: 160px;
  }
  .project-other-section-title{
    text-align: center;
    font-size: 1.6rem;
    line-height: 1.8rem;
    margin-bottom: 38px;
  }
  .fede-slide-up{
    position: relative;
    transition: all .8s;
    position: relative;
    top: 20px;
    opacity: 0
  }
  .fede-slide-up.show{
    top: 0px;
    opacity: 1
  }

@media screen and (max-width: $main-column-width){
  .project-header,
  .project-content h2,
  .project-content p,
  .project-content ul,
  .project-content dl{/*記事列*/
    max-width: 90vw;
  }
  .project-content img{
    margin-left: calc(( 99vw - 90vw ) / 2 * -1)
  }
}
@media screen and (max-width:1020px){
  .project{
    &-header{
      margin-top: 4.6rem;
      margin-bottom: 2.6rem;
    }
    &-title{
      font-size: 2.4rem;
      line-height: 2.3rem;
      margin-bottom: 1rem;
    }
    &-client{
      font-size: 1.2rem;
      margin-bottom: 1.2rem;
    }
    &-info{
      font-size: 1.2rem;
      line-height: 1.3rem;
    }
  }
  .project-header,
  .project-content h2,
  .project-content p,
  .project-content ul,
  .project-content dl
  {
    max-width: $article-column-sp-width;
  }
  .project-content{
    font-size: 1.2rem;
    line-height: 3rem;
    overflow-x: hidden;
  }
  .project-content h2{
    font-size: 2rem;
    line-height: 3.4rem;
    margin-bottom: 2.6rem;
  }
  .project-content img{
    margin-top:6rem;
    margin-bottom: 6rem;
    margin-left: calc(( #{$article-column-sp-width} - 72rem ) / 2);
    width: 72.4rem;
  }
  .project-other{
    margin-top: 16rem;
    margin-bottom: 16rem;
  }
  .project-other-section-title{
    font-size: 1.6rem;
    line-height: 1.8rem;
    margin-bottom: 6rem
  }
}
</style>
