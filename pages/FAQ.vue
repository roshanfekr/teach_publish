<template>
    <div class="main-body-container-content">
      <b-container class="container-padding">
        <h1 class="pb-5">Frequently Asked Questions</h1>
        <div v-for="item in data" :key="item.id">
          <b-row >
            <b-col class="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12 text-center">
              <font-awesome-icon class="font-color mb-3 question-icon" :icon="['far', 'question-circle']"/>
            </b-col>
            <b-col class="col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12">
              <div class="m-right text-justify">
                <h1 class="content-title">{{item.question}}</h1>
                <div v-html="item.answer"></div>
              </div>
            </b-col>
          </b-row>
          <div class="fusion-separator">
                    <span class="icon-wrapper">
                        <font-awesome-icon class="font-color" :icon="['fas', 'graduation-cap']"/>
                    </span>
          </div>
        </div>
      </b-container>
    </div>
</template>

<script>

  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faQuestionCircle} from '@fortawesome/free-regular-svg-icons'

  library.add(faQuestionCircle)

  export default {
    name: 'FAQ',
    head() {
      return {
        title: 'FAQ',
        meta: [
          {
            name: 'description',
            content: 'FAQ is Here'
          },
          {
            name: 'keywords',
            content: 'Question, Answer ,'
          }
        ]
      }
    },
    data() {
      return {
        data: [],
        search: {
          question: '',
        },
      }
    },
    mounted() {
      this.getAll()
    },
    methods: {
      getAll() {
        let sendData = {
          // perPage: this.perPage,
          // currentPage: this.currentPage,
          search: this.search,
        }
        this.$axios.post('/faq/getAllEnabled', sendData).then((res) => {
          this.data = res.data.rows
          console.log(this.data)
        }).catch(error => {
          console.log(error.response)
        })
      },
    }
  }
</script>

<style scoped>
  .question-icon {
    font-size: 60px;
    color: #d65c4b;
  }
</style>
