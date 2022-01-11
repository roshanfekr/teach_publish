<template>

      <b-container fluid>
        <h2 class="pb-3">Manage FAQ</h2>
        <b-form class="w-100 pl-xl-4 pr-xl-4"
                @submit.stop.prevent="saveFaq">

          <b-col class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
            <b-form-group
              id="input-group-1" :label="$t('question')" label-for="input-1">
              <b-form-input
                required
                v-model="question"
                id="input-1"
                autocomplete="off"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
            <b-form-group
              id="input-group-1" :label="$t('sortNumber')" label-for="input-1">
              <b-form-input
                required
                type="number"
                v-model="sortNumber"
                id="input-1"
                autocomplete="off"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
            <b-form-group
              id="input-group-2" :label="$t('answer')" label-for="input-2">
              <vue-editor v-model="answer" required :editorToolbar="editorToolbar" />

            </b-form-group>

          </b-col>


          <b-col class="col-xl-5 col-lg-5 col-md-8 col-sm-12 col-12">
            <div class="custom-control custom-checkbox mb-3">
              <input v-model="isEnable" type="checkbox" class="custom-control-input"
                     id="customCheck"
                     name="example1">
              <label class="custom-control-label" for="customCheck">{{ $t('published') }}</label>
            </div>
          </b-col>

          <b-button class="m-2" type="submit" variant="primary">{{ $t('save') }}</b-button>
          <b-button class="m-2" @click="clearForm" variant="warning">{{ $t('clear') }}</b-button>
        </b-form>

        <b-row class="mt-5">
          <div id="my-list" v-for="item in data"
               :key="item.id"
               class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12  p-2 ">
            <b-card class="h-100 ">
              <b-card-text>
                <div class="text-right">
                  <b-link class="mr-4" style="color: #bfbfbf;"
                          @click="deleteFaq(item)"
                          size="sm">
                    <font-awesome-icon class="shop-icon" :icon="['fas', 'trash']"/>
                  </b-link>
                  <b-link class="" style="color: #bfbfbf;"
                          @click="editFaq(item)"
                          size="sm">
                    <font-awesome-icon class="shop-icon" :icon="['far', 'edit']"/>
                  </b-link>
                </div>
                <div class="pb-1 pt-1" >
                  <span class="gray-color">
                    Question: </span>{{ item.question }}
                </div>
                <div class="pb-1 pt-1" >
                  <span class="gray-color">
                    Sort Number: </span>{{ item.sortNumber }}
                </div>
                <div class="pb-1 pt-1" >
                  <span class="gray-color">
                    Enabled: </span>{{ item.isEnable}}
                </div>
                <span class="gray-color">  Answer: </span><div v-html="item.answer"></div>
              </b-card-text>
            </b-card>
          </div>
        </b-row>
        <b-pagination
          @input="getAll"
          dir="ltr"
          class="pt-4"
          align="center"
          v-show="perPage < totalRows"
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          aria-controls="my-list"
        ></b-pagination>

      </b-container>


</template>

<script>

import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faEdit} from '@fortawesome/free-regular-svg-icons'

library.add(faTrash)
library.add(faEdit)
export default {
  layout: 'AdminTemplate',
  name: 'FAQManager',

  data() {
    return {
      perPage: 20,
      currentPage: 1,
      totalRows: 0,
      data: [],
      id: 0,
      isEnable: false,
      content: "",
      sortNumber: "",
      question: "",
      answer: "",
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
        perPage: this.perPage,
        currentPage: this.currentPage,
        search: this.search,
      }

      this.$axios.post('/faq/getAll', sendData).then((res) => {
        this.totalRows = res.data.total
        this.data = res.data.rows
        console.log(this.data)
      }).catch(error => {
        //               this.$router.push('/login')
        console.log(error.response)
      })
    },

    clearForm() {
      this.id = 0
      this.isEnable = false
      this.answer = ''
      this.sortNumber = ''
      this.question = ''
    },
    saveFaq() {
      var formData = {
        'id': this.id,
        'isEnable': this.isEnable,
        'question': this.question,
        'sortNumber': this.sortNumber,
        'answer': this.answer,
      }
      this.$axios.post('/faq/create', formData).then((res) => {
        this.id = res.data.id
        this.clearForm()
        this.getAll()
      }).catch((error) => {
        if (error.response.data.errors) {
          // console.log(JSON.stringify(error.response.data.errors))
          this.errors = error.response.data.errors
        }
        console.log(error)
      })
    },

    deleteFaq(item) {

      this.$bvModal.msgBoxConfirm(this.$t('delete_confirm'), {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        hideHeaderClose: false,
        centered: true
      }) .then(value => {
          this.delComfirm = value

          if (value === true) {
            if (this.id == item.id)
              this.id = 0

            this.$axios.post('/faq/deleteFaq', {'id': item.id}).then(() => {
              this.getAll()
            } ).catch(error => {
              console.log(error)
            })
          }
      }).catch(error => {
        console.log(error)
      })
    },

    editFaq(item) {
      this.clearForm()

      this.$axios.post('/faq/getFaqById', {'id': item.id}).then((res) => {
        console.log(res.data)
        this.id = res.data.id
        this.isEnable = res.data.isEnable
        this.answer = res.data.answer
        this.question = res.data.question
        this.sortNumber = res.data.sortNumber

      }).catch(error => {
        console.log(error.response)
      })

    },
  },

}
</script>

<style scoped>
.gray-color{
  color: #aaaaaa;
}
.orange-lick a {
  color: #d65c4b !important;
}

.orange-lick a:hover {
  color: rgba(0, 0, 0, 0.5) !important;
}


</style>
