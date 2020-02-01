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
        <span class="project-client">
          {{ project.client }}
        </span>
        <h1 class="project-title">
          {{ project.title }}
        </h1>
        <div class="project-info">
          <span class="project-year">{{ project.year }}</span>
          <span v-show="project.year && project.tags">/</span>
          <span v-for="tag in project.tags" v-bind:key="tag.order" class="project-tags">{{ tag.name }}</span>
        </div>
      </div>
      <section class="project-content" v-html="project.content">
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
      const res = await app.$axios.$get('/projects?slug=', {
        params: {
          slug: params.slug
        }
      })
      return {
        project: res.projects[0],
        params
      }
    } catch (e) {
      error({ statusCode: 404, message: 'ページ取得エラー' })
    }
  }
}
</script>
<style lang="scss">
  .project{
    &-header{
      margin-bottom: 32px;
    }
    &-client{
      font-size: 1.4rem;
      font-weight: bold;
      margin-bottom: 16px;
    }
    &-title{
      font-size: 2.8rem;
      line-height: 27;
      margin-bottom: 8px;
    }
    &-info{
      color:$gray-70;
      font-size: 1.4rem;
      line-height: 15;
      font-weight: 300;
    }
  }
  .project-content p,
  .project-content ul,
  .project-content dl
  {
    max-width: $article-column-width;
    margin-right: auto;
    margin-left: auto;
  }
  .project-content img{
    max-width: 100%;
    margin:100px 0;
  }
@media screen and (max-width:750px){
  .project{
    &-header{
      margin-bottom: 2.6rem;
    }
    &-title{
      font-size: 2.0rem;
      line-height: 34;
    }
    &-client{
      font-size: 1.2rem;
    }
    &-info{
      font-size: 1.2rem;
      line-height: 13;
    }
  }

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
