<template>
  <header class="header">
    <div class="main-column">
      <logo />
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
