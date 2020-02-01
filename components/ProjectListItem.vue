<template>
  <article class="project-list-item">
    <nuxt-link
      v-tilt="{max:17, perspective:1200, scale:1.08, speed:4000}"
      :to="projectLink(project.slug)"
      class="project-list-link"
    >
      <picture class="project-list-image">
        <source :srcset="project.images.webp || project.images.x2 || project.images.original" type="image/webp">
        <img
          :src="project.images.original"
          :srcset="project.images.x2 || project.images.original"
          :alt="project.title"
        >
      </picture>
      <h2 class="project-list-title">
        {{ project.title }}
      </h2>
    </nuxt-link>
  </article>
</template>

<script>
import Vue from 'vue'
import VueTilt from 'vue-tilt.js'
Vue.use(VueTilt)
export default {
  props: {
    project: {
      type: Object
    }
  },
  methods: {
    projectLink (slug) {
      return '/project/' + slug
    }
  }
}
</script>

<style lang="scss">
.project-list{
  &-item{
    width:342px;
    height:281px;
    text-align: center
  }
  &-item:nth-child(n+3){
    margin-top:26px;
  }
  &-link{
    display: block;
  }
  &-image{
    width:314px;
    height:223px;
    margin: 20px auto 10px;
    transition: width,height,margin 0.5s ease-in-out
  }
  &-image:hover{
    width:100%;
    height:243px;
    margin:0px
  }
  &-title{
    font-size: 1.6rem;
    line-height: 24;
    margin-top: 4px;
  }
}
</style>
