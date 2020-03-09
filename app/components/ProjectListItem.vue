<template>
  <article class="project-list-item">
    <nuxt-link
      :to="{ path: '/project/'+ project.slug }"
      class="project-list-link"
    >
      <project-main-image v-tilt="{max:10, perspective:1400, speed:4000,scale:1.089}" :project="project" class="project-image in-list" />
      <h2 class="project-list-title">
        {{ project.title }}
      </h2>
    </nuxt-link>
  </article>
</template>

<script>
import Vue from 'vue'
import VueTilt from 'vue-tilt.js'
import ProjectMainImage from '~/components/ProjectMainImage.vue'

Vue.use(VueTilt)

export default {
  components: {
    ProjectMainImage
  },
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.home .project-list-item{
  // animation: fade-slide-up .8s;
}
.project-list{
  &-item{
    width:342px;
    height:281px;
    text-align: center
  }
  &-item:nth-child(n+4){
    margin-top:26px;
  }
  &-link{
    display: block;
    height: 100%;
  }
  &-title{
    font-size: 1.6rem;
    line-height: 1.5rem;
  }
  @media screen and (max-width:1020px){
    .project-image{
      transform: perspective(0px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)!important
    }
    &-item{
      width:100%;
      height:28.1rem;
    }
    &-item + &-item{
      margin-top:4.6rem;
    }
  }
}
</style>
