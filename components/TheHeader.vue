<template>
  <header class="header">
    <div class="main-column">
      <nuxt-link to="/">
        <logo />
      </nuxt-link>
    </div>
  </header>
</template>
<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.header{
  width: 100%;
  height: 65px;
  padding-top: 36px;
  position: absolute;
  top:0;
  background: transparent
}
@media screen and (max-width:750px){
 .header{
   height:4.8rem;
 }
}
</style>
