<template>
  <picture>
    <source :srcset="project.images.webp || project.images.x2 || project.images.original" type="image/webp">
    <img
      :src="project.images.original"
      :srcset="project.images.x2 || project.images.original"
      :alt="project.title"
    >
  </picture>
</template>

<script>
import Vue from 'vue'
import VueTilt from 'vue-tilt.js'
Vue.use(VueTilt)

export default {
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.project-image{
  position: relative;
  overflow: hidden;
  display: block;
  transition: all 1.2s;
}
.project-image img{
  transition: all 1.2s;
}
.project-image.in-main{
  object-fit:fill;
  height: calc(100vw / 1536 * 677);
}
.project-image.in-list{
    width:314px;
    height:223px;
    margin: 20px auto 14px;
}
.project-image.in-list img{
    position: absolute;
    width: 608.29px;
    height: 243px;
    left: -147px;
    top :0px;
}
// .project-list-item:hover .project-image.in-list{
//   width:342px;
//   height:243px;
//   margin: 10px auto 4px;
//   transition: all .8s;
// }
.project-list-item:hover .project-image.in-list img{
  transform: scale(1.02);
  transition: all .8s;
}
@media screen and (max-width:1536px){
  .project-image{
    object-fit:none;
  }
  .project-image.in-main img{
    position: absolute;
    width: calc(1920 * 100vw / 1536);
    height: calc(100vw / 1536 * 677);
    left: calc(((1920 * 100vw / 1536) - 100vw) / 2 * -1) ;
    top :calc((767px - (100vw / 1536 * (100vw / 1536 * 677))) * -1);
  }
}
@media screen and (max-width:1020px){
  .project-image.in-main{
    height: 38.7rem
  }
  .project-image.in-main img{
    width: calc(969 * 100vw / 375);
    height: 38.7rem;
    left: calc(((969 * 100vw / 375) - 100vw) / 2 * -1) ;
    top :calc((387px - (100vw / 375 * (969 * 100vw / 375))) * -1);
  }
  .project-image.in-list{
      width:100%;
      height:24.3rem;
      margin: 0 auto 1.4rem;
  }
  .project-image.in-list img{
      width: 66.3rem;
      height: 26.5rem;
      left: -16.05rem;
      top :-2.2rem;
  }
}
</style>
