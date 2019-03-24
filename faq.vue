<template>
  <div class="faq">
    <div class="container">
      <section class="section">
        <h1 class="title">FAQ</h1>
        <h2 class="subtitle is-4">Search for meself.</h2>

        <div class="columns" v-if="faqs && faqs.length">
          <div class="column is-one-third" v-for="faq of faqs">
            <div class="card">
              <div class="card-content">
                <p class="title">{{ faq.question }}</p>
                <p class="answer">{{ faq.anwser }}</p>
              </div>
            </div>
          </div>
        </div>


      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'faq',
  data: () => ({
    faqs: [
      {
        question:'喜欢的颜色',
        anwser:'yellow'
      },
      {
        question:'喜欢的音乐剧',
        anwser:'rent'
      },
      {
        question:'喜欢的水果',
        anwser:'banana'
      },
      {
        question:'喜欢的电影',
        anwser:'empty'
      },
      {
        question:'喜欢的音乐剧',
        anwser:'yellow'
      },
      {
        question:'喜欢的动画',
        anwser:'crazy city'
      },
      {
        question:'喜欢的球鞋',
        anwser:'converse 1970s'
      },
      {
        question:'喜欢的前端',
        anwser:'yubo'
      },
      {
        question:'喜欢的UI',
        anwser:'bulma'
      },
      {
        question:'喜欢的人',
        anwser:'myself'
      },

    ],
   
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
.pd
  padding: 2.5em 0 1.5em 0

.answer
  margin-top: 10px !important
  color: gray

.columns
  flex-wrap: wrap

</style>
