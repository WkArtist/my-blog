<template>
  <div class="article-card-container">
      <div class="article-list-item-line">
          <div class="article-list-item-title">
              <router-link :to="detailPath">
                  <h1>{{propsData.title}}</h1>
              </router-link>
          </div>
          <div class="article-list-item-aside">
              <span>发布于 {{$moment(new Date(propsData.createdAt)).format('llll')}}</span>
          </div>
      </div>
      <p>{{propsData.content.slice(0,100)}}</p>
    <router-link :to="tagPath">[ {{propsData.tag}} ]</router-link>
    <router-link :to="detailPath" class="article-list-item-more">
        阅读全文
    </router-link>
  </div>

</template>

<script>
export default {
  props: ['propsData'],
  data () {
    return {

    }
  },
  computed: {
    detailPath () {
      return `/article/${this.propsData.id}`
    },
    tagPath () {
      return `/tag/${this.propsData.tag.toLowerCase()}`
    }
  }
}
</script>

<style scoped lang="scss">
    @media (max-width: 600px) {
        .article-card-container .article-list-item-line h1{
            font-size: 1.5em !important;
        }
    }
    .article-card-container{
        border-bottom: 1px solid #ddd;
        padding-bottom: 20px;

        .article-list-item-line{
            display: flex;
            justify-content: space-between;

            .article-list-item-title{
                flex-shrink: 1;
                margin-right: 15px;
            }

            h1{
                font-weight: 300;
                line-height: 40px;
                color: #333;
            }

            .article-list-item-aside{
                flex-shrink: 0;
                margin-top: 1.6em;
                font-size: .9em;
                text-align: right;
                color: #999;

                span{
                    display: block;
                }
            }
        }

        .article-list-item-more{
            margin-left: 20px;

            &::after{
                content: ">>";
                margin-left: 5px;
                font-size: .6em;
                font-weight: 700;
            }
        }
    }
</style>
