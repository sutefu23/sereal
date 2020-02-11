<template>
  <article class="project-list-item">
    <nuxt-link
      v-tilt="{max:17, perspective:1200, speed:4000}"
      :to="{ path: '/project/'+ project.slug }"
      class="project-list-link"
    >
      <project-main-image :project="project" class="project-image in-list" />
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
    height: 100%;
  }
  &-title{
    font-size: 1.6rem;
    line-height: 1.5rem;
  }
  @media screen and (max-width:765px){
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
