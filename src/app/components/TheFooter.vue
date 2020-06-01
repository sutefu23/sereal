<template>
  <footer class="footer">
    <div class="main-column">
      <div class="company-info">
        <h1 class="company-name">
          SEREAL 株式会社
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
  padding-top: 123px;
  padding-bottom: 40px;
  padding-left: 24px;
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
  line-height: 2.2em;
}
@media screen and (max-width:1020px){
  .footer{
    height: auto;
    padding-top: 16.4rem;
    padding-bottom: 3.2rem;
    padding-left: 0;
  }
  .company{
    &-info{
      margin-bottom: 12.8rem;
    }
    &-name{
      font-size: 1.6rem;
      margin-bottom: 2rem;
      line-height: 1.8rem;
    }
    &-address{
      font-size: 1.2rem;
      margin-bottom: 2rem;
      line-height: 1.8rem;
    }
    &-representative{
      font-size: 1.2rem;
      margin-bottom: 2rem;
      line-height: 1.8rem;
    }
    &-contact{
      font-size: 1.4rem;
      line-height: 1.6rem;
    }
  }
  .copy-right{
    font-size: 1.1rem;
    line-height: 2.2rem;
  }
}
</style>
