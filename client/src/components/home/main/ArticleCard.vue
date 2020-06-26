<template>
  <div class="article-card-container">
      <div class="article-list-item-line">
          <div class="article-list-item-title">
              <a href="#">
                  <h1>{{data.title}}</h1>
              </a>
          </div>
          <div class="article-list-item-aside">
              <span>发布于 {{data.createdAt}}</span>
          </div>
      </div>
      <p>{{data.content.slice(0,100)}}</p>
    <a href="#">[ {{data.tag}} ]</a>
    <a href="#" class="article-list-item-more">
        阅读全文
    </a>
  </div>

</template>

<script>
export default {
  props: ['data']

}
</script>

<style scoped>
    @media (max-width: 600px) {
        .article-card-container .article-list-item-line h1{
            font-size: 1.5em !important;
        }
    }
    .article-card-container{
        border-bottom: 1px solid #ddd;
        padding-bottom: 20px;
    }
    .article-card-container .article-list-item-line{
        display: flex;
        justify-content: space-between;
    }
    .article-card-container .article-list-item-line .article-list-item-title{
        flex-shrink: 1;
        margin-right: 15px;
    }
    .article-card-container .article-list-item-line h1{
        font-weight: 300;
        line-height: 40px;
        color: #333;
    }
    .article-card-container .article-list-item-line .article-list-item-aside{
        flex-shrink: 0;
        margin-top: 1.6em;
        font-size: .9em;
        text-align: right;
        color: #999;
    }
    .article-card-container .article-list-item-line .article-list-item-aside span{
        display: block;
    }
    .article-card-container .article-list-item-more{
        margin-left: 20px;
    }
    .article-card-container .article-list-item-more::after{
        content: ">>";
        margin-left: 5px;
        font-size: .6em;
        font-weight: 700;
    }
</style>
