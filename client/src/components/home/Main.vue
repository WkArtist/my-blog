<template>
  <div class="main-container">
      <div class="content-container">
        <router-view />
      </div>
      <div class="footer-container"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    @media (max-width: 740px) {
        .main-container{
            padding-left: 40px !important;
        }
    }
    .main-container{
        padding: 0 40px;
        padding-left: 290px;
        line-height: 1.7;

        a{
            color: #2479cc;
        }

        .footer-container{
            line-height: 1.8;
            text-align: center;
            padding: 15px 0;
            border-top: 1px solid #ddd;
            font-size: .9em;
            margin-top: 20px;
            /* border: 1px solid; */
        }
    }
</style>
