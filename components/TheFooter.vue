<template>
  <footer class="footer">
    <div class="main-column">
      <div class="company-info">
        <h1 class="company-name">
          SELEAL 株式会社
        </h1>
        <p class="company-address">
          〒810-0001 福岡県福岡市中央区大名1-2-1 <br class="sp">Fukuoka Growth Next 206
        </p>
        <p class="company-representative">
          代表取締役  安達 誠寛
        </p>
        <p class="company-contact">
          <a href="mailto:contact@sereal.jp">contact@sereal.jp</a>
        </p>
      </div>
      <address class="copy-right">
        Copyright (c)2019 SEREAL Inc
      </address>
    </div>
  </footer>
</template>

<style lang="scss">
.footer{
  background-color: $gray-20;
  height: 446px;
  padding-top: 123px;
  padding-bottom: 40px;
}
.company{
  &-info{
    margin-bottom: 139px;
  }
  &-name{
    font-size: 1.6rem;
    margin-bottom: 20px;
    font-weight: bold;
  }
  &-address{
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
  &-representative{
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  &-contact{
    font-size: 1.4rem;
    font-weight: bold;
  }
}
.copy-right{
  color : $gray-70;
  font-size: 1.1rem;
  line-height: 22;
}
@media screen and (max-width:750px){
  .footer{
    height: 50rem;
    padding-top: 16.4rem;
    padding-bottom: 3.2rem;
  }
  .company{
    &-info{
      margin-bottom: 12.8rem;
    }
    &-name{
      font-size: 1.6rem;
      margin-bottom: 2rem;
    }
    &-address{
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    &-representative{
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    &-contact{
      font-size: 1.4rem;
    }
  }
  .copy-right{
    font-size: 1.1rem;
  }
}
</style>
