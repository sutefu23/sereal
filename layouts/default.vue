<template>
  <div>
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>
<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
<style lang="scss">
html{
  font-family: 'Brown','Noto Sans JP', sans-serif;
  font-size: 10px;
  color:$black;
}
a{
  color:inherit;
  text-decoration: none
}
img{
  width:100%;
  height: auto;
}
.main-column{/*メイン列*/
  max-width: $main-column-width;
  margin-right: auto;
  margin-left: auto;
}
.article-column{/*記事列*/
  max-width: $article-column-width;
  margin-right: auto;
  margin-left: auto;
}
.sp{
  display: none;
}
@media screen and (max-width:750px){
  html{
    font-size: calc(10 * 100vw / 375);
  }
  .sp{
    display: inline;
  }
  .main-column{/*メイン列*/
    max-width: $main-column-sp-width;
  }
  .article-column{/*記事列*/
    max-width: $article-column-sp-width;
  }
}
</style>
