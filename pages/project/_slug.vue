<template>
  <main class="project">
    <picture class="project-image">
      <source :srcset="project.images.webp" type="image/webp">
      <img
        :src="project.images.original"
        :srcset="project.images.x2 || project.images.original"
        :alt="project.title"
      >
    </picture>
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
          <span v-show="project.year && project.tags">/</span>
          <span v-for="tag in project.tags" v-bind:key="tag.order" class="project-tags">{{ tag.name }}</span>
        </div>
      </div>
      <section class="project-content">
        <h2>{{ project.article_title }}</h2>
        <div v-html="project.content">
          {{ }}
        </div>
      </section>
    </article>
    <aside class="project-other">
      <h2 class="project-other-section-title">
        OTHER PROJECTS
      </h2>
      <project-list />
    </aside>
  </main>
</template>

<script>

export default {
  async asyncData ({ app, params, error }) {
    try {
      const res = await app.$axios.$get('https://sereal.jp/admin/wp-json/api/projects?slug=', {
        params: {
          slug: params.slug
        }
      })
      return {
        project: res.projects[0]
      }
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    join ($array, $glue) {
      return $array.join($glue)
    }
  }
}
</script>
<style lang="scss">
  .project{
    &-header{
      margin-top: 56px;
      margin-bottom: 32px;
    }
    &-client{
      font-size: 1.4rem;
      font-weight: bold;
      margin-bottom: 16px;
    }
    &-title{
      font-size: 2.8rem;
      margin-bottom: 8px;
    }
    &-info{
      color:$gray-70;
      font-size: 1.4rem;
      font-weight: 300;
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
  }
  .project-content{
    font-size: 1.4rem;
    line-height: 2.5em;
  }
  .project-content h2{
    font-size: 2.4rem;
  }

  .project-content img{
    position: relative;
    width: 100vw;
    margin-top:100px;
    margin-bottom: 100px;
    margin-left: calc(( 100vw - #{$article-column-width} ) / 2 * -1)
  }
  .project-other-section-title{
    text-align: center;
    font-size: 1.6rem;
    line-height: 1.8rem;
  }
@media screen and (max-width:750px){
  .project{
    &-header{
      margin-bottom: 2.6rem;
    }
    &-title{
      font-size: 2.0rem;
    }
    &-client{
      font-size: 1.2rem;
    }
    &-info{
      font-size: 1.2rem;
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
  .project-content img{
    max-width: 100%;
    margin:100px 0;
  }
}
</style>
