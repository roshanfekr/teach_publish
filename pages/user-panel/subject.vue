<template>
  <div>
    <b-container class="container-padding" fluid>
      <b-row class="d-md-flex m-center">
        <div class="px-xl-5 px-lg-5 px-md-3 px-sm-2 px-2 col-md-12 col-lg-12 col-xl-12">
          <b-row class="float-left ">
            <h3 class="mb-2">{{ $t('subjects.title') }}</h3>
          </b-row>
          <b-row class="w-25 float-left ml-4">
                <b-button v-b-toggle.addModal @click="addButton"
                          class="btn btn-crl-mini  btn-primary ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                </b-button>
              <b-modal hide-header hide-footer centered v-model="visible" ref="addModal" id="addModal">

                <b-form class="w-100  py-4" @submit.stop.prevent="onSubmit"
                        @reset="onReset">
                  <b-form-row >

                    <b-form-group v-if="formData.id === null" class="col-11" id="input-group-subject" :label="$t('subjects.subject')"
                                  label-for="input-subject">

                      <v-select id="input-subject" placeholder="Select one subject"
                                 v-model.trim="formData.lessonId" class="m-v-select2"
                                 :class="{ 'is-invalid  d-block': $v.formData.lessonId.$error }"
                                 :reduce="x => x.id"
                                 :options="options"
                                 label="subject"
                                 :selectable="option => !option.hasOwnProperty('group')">
                        <template #option="{ group, subject }">
                          <div v-if="group" class="group">
                            {{ group }}
                          </div>
                          {{ subject }}
                        </template>
                      </v-select>
                      <div class="invalid-feedback" v-if="!$v.formData.lessonId.required">
                        {{ $t('subjects-lesson-required') }}
                      </div>
                    </b-form-group>

                    <b-form-group class="col-11" id="input-group-grade" :label="$t('subjects.grade_title')"
                                  label-for="input-grade">

                      <v-select id="input-grade" :placeholder="$t('subjects.grade_placeholder')"
                                v-model.trim="formData.grade"
                                class="m-v-select2"
                                :class="{ 'is-invalid  d-block': $v.formData.grade.$error }"
                                :options="gradeOptions"
                                :reduce="x => x.value"
                                label="text"
                                :selectable="option => !option.hasOwnProperty('group')">
                      </v-select>

                      <div class="invalid-feedback" v-if="!$v.formData.grade.required">
                        {{ $t('subjects.grade.required') }}
                      </div>

                    </b-form-group>

                    <b-form-group class="col-6" id="input-group-year" :label="$t('subjects.year')"
                                  label-for="input-year">
                      <v-select id= "input-year"
                                :placeholder="$t('subjects.year_placeholder')"
                                v-model.trim="formData.year"
                                class="m-v-select2"
                                :options="computedYears"
                                :selectable="option => !option.hasOwnProperty('group')">
                      </v-select>

                    </b-form-group>

                    <b-form-group
                      class="col-11 align-self-end"
                      id="input-group-description"
                      :label="$t('subjects.description')"
                      label-for="input-description">
                      <b-form-textarea
                        :placeholder="$t('desc')"
                        autocomplete="off"
                        v-model.trim="formData.description"
                        :lazy="true"
                        id="input-description"
                      ></b-form-textarea>
                    </b-form-group>

                    <b-form-group id="input-group-price" class="col-11 align-self-end w-100" :label="$t('subjects.price.label')" label-for="input-price">
                      <div class="float-left d-block w-50" >
                        <b-form-input
                          :class="{ 'is-invalid': $v.formData.price.$error }"
                          class="w-100"
                          type="number"
                          min="0"
                          id="input-price"
                          :placeholder="$t('subjects.price.placeholder')"
                          v-model="formData.price">
                        </b-form-input>
                        <div class="invalid-feedback" v-if="!$v.formData.price.required">{{ $t('subjects.price.required') }}
                        </div>
                      </div>
                      <div class="float-left d-block mt-2 ml-1" >CAD</div>

                    </b-form-group>
                    <p class="mt-5" ></p>

                    <b-form-row class="w-100">
                      <div class="p-2 ">
                        <b-button class="form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2" type="submit">
                          {{ $t('add') }}
                        </b-button>
                        <b-button class="form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2" @click="cancel">
                          {{ $t('cancel') }}
                        </b-button>
                      </div>
                    </b-form-row>

                  </b-form-row>

                </b-form>
              </b-modal>
          </b-row>

          <b-row class="mt-4 w-100 mx-0">
              <div >

                <b-overlay :show="loadOverlay" variant="white" opacity="0.5" no-wrap>
                  Loading ...
                </b-overlay>

              </div>
            <b-row class="mt-4 w-100 mx-0">
              <div class="col-lg-4 p-1" v-for="(item, index) in items" :key="item.id">
                <b-card class="h-100" >
                  <b-overlay
                    class="w-100"
                    :show="showDeleteOverlay(item.id)"
                    variant="transparent"
                    :opacity=0.8
                    blur="3px"
                    rounded="sm">
                    <div class="text-right">
                      <b-link class="mr-4" style="color: #bfbfbf;"
                              @click="showDeleteComfirm(item,index)"
                              size="sm">
                        <font-awesome-icon class="shop-icon" :icon="['fas', 'trash']"/>
                      </b-link>
                      <b-link class="" style="color: #bfbfbf;"
                              @click="showEditDialog(item,index)"
                              size="sm">
                        <font-awesome-icon class="shop-icon" :icon="['far', 'edit']"/>
                      </b-link>
                    </div>


                    <div class="small font-weight-bold title-color">
                      {{ $t("subjects.label") }}
                    </div>
                    <div>
                      {{ item.subject }}
                    </div>

                    <hr class="my-2">
                    <div class="small font-weight-bold title-color">
                      {{ $t("Status") }}
                    </div>
                    <div>
                      <b-badge v-if="item.acceptStatus === 1" variant="success">{{ $t("accepted") }}</b-badge>
                      <b-badge v-if="item.acceptStatus === -1" variant="danger">{{ $t("disable") }}</b-badge>
                      <b-badge v-if="item.acceptStatus === 0 || item.acceptStatus === null " variant="warning">
                        {{ $t("pending") }}
                      </b-badge>
                    </div>
                    <hr class="my-2">
                    <div class="small font-weight-bold title-color">
                      Grade
                    </div>
                    <div>
                      {{ item.grade }}
                    </div>
                    <hr class="my-2">
                    <div class="small font-weight-bold title-color">
                      Year
                    </div>
                    <div>
                      {{ item.year }}
                    </div>
                    <hr class="my-2">
                    <div class="small font-weight-bold title-color">
                      Price
                    </div>
                    <div>
                      {{ item.price }} CAD
                    </div>
                    <hr class="my-2">
                    <div class="small font-weight-bold title-color">
                      Description
                    </div>
                    <div>
                      {{ item.description }}
                    </div>
                  </b-overlay>
                </b-card>
              </div>

            </b-row>
          </b-row>


        </div>
      </b-row>
    </b-container>
  </div>
</template>
<script>

import {library} from '@fortawesome/fontawesome-svg-core'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faTrashAlt, faFileAlt} from '@fortawesome/free-solid-svg-icons'

import {required, minLength, sameAs, email, numeric} from "vuelidate/lib/validators";
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faEdit} from '@fortawesome/free-regular-svg-icons'

library.add(faTrash)
library.add(faEdit)

export default {
  name: 'lessons',
  mounted() {
    this.loadSubjects();
    this.reloadTable();
  },
  computed:{
    computedYears: function () {
      var years = []
      for (var i = 1960; i < (new Date()).getFullYear(); i++) {
        years.push(i)
      }
      return years
    }
  },
  data() {

    return {
      loadOverlay: true,
      overlays: [],
      addButtonVisible: true,
      loaded: false,
      visible: false,
      gradeOptions: [{value:'D' , text:'D'} , {value:'C-', text:'C-'} , {value:'C', text:'C'} , {value:'B-', text:'B-'}, {value:'B', text:'B'} ,{value:'B+', text:'B+'}
        ,{value:'A', text:'A'} , {value:'A-', text:'A-'} ,{value:'A+', text:'A+'} ],
      options: [],
      items: [],
      deleteData: {
        id: 0,
        lessonId: 0
      },
      formData: {
        id: null ,
        lessonId: null,
        description: null,
        userId: 0,
        grade: null,
        year: null,
        price: null
      },
      errors: null,
    }
  },
  validations: {
    formData: {
      grade: {
        required,
      },
      year: {},
      lessonId: {
        required,
      },
      description: {},
      price:{
        required ,
          numeric
      }
    }
  },
  methods: {
    showModal(id) {
      this.$refs[id].show()
    },
    hideModal(id) {
      this.$refs[id].hide()
    },

    showEditDialog(item,index)
    {
      this.editIndex = index
      this.formData.id = item.id
      this.formData.description = item.description
      this.formData.grade = item.grade
      this.formData.lessonId = item.lessonId
      this.formData.year = item.year
      this.formData.price = item.price
      this.showModal("addModal")
    },

    makeToast(variant = 'success', header = 'Message', msg = '') {
      this.$bvToast.toast(this.$t(msg), {
        autoHideDelay: 3000,
        title: header,
        variant: variant,
        solid: true,
        appendToast: true,
        headerClass: "d-none"
      })
    },

    loadSubjects() {
      this.$axios.post('/definitions/getAllLessons').then((res) => {
        this.options = res.data;
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors
        }
      })
    },

    setOverlayValue(item , value) {
      this.overlays.filter(function(elem){
        if(elem.key === item.id)
          elem.value = value;
      });
    },

    showDeleteOverlay(id) {
      let result = false
      this.overlays.filter(function (elem) {
        if (elem.key === id) {
          result = elem.value
          return true
        }
      });
      return result
    },

    reloadTable() {
      this.loaded = true
      this.loadOverlay = true
      this.$axios.post('subject/items', null).then((res) => {
        this.loadOverlay = false
        this.items = res.data.data
        let index = 0

        for (const i in this.items) {
          let row = this.items[i]
          let json = {key: row.id , value: false }
          this.overlays.push(json)
        }
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors
        }

      }).finally(()=>{
        this.loaded = false
        this.loadOverlay = false
      })
    },

    addNewItem() {
      this.items.push({id: null, lessonId: -1, description: ''})
    },
    onReset(evt) {
      evt.preventDefault()
    },
    onSubmit(evt) {
      this.$v.$reset()
      this.errors = null
      evt.preventDefault()
      this.$v.formData.$touch()
      if (this.$v.formData.$invalid) {
        console.log("vuelidate error")
      } else {
        this.loaded = true
        let url = '/subject/save-tutor-subject-one'
        if(this.formData.id > 0)
          url = '/subject/save-edit-tutor-subject-one'
        this.$axios.post(url, this.formData).then((res) => {
          if(this.formData.id > 0)
          {
            this.clear()
            this.$set(this.items ,this.editIndex, res.data)
            this.hideModal("editModal")
            this.makeToast('success', 'Message', this.$t('done_successfully'))
            return
          } else {
            this.items.push(res.data)
          }
          this.overlays.push({key: res.data.id , value: false})
          this.clear();
          this.makeToast('success', 'Message', this.$t('done_successfully'))
        }).catch(error => {
          if (error.response.data === "duplicate")
            this.makeToast('danger', 'Error', this.$t('duplicateItem'))

          if (error.response.data.errors) {
            this.errors = error.response.data.errors
          }
          console.log(error)
        }).finally(()=>{
          this.loaded = false
        })
      }
    },

    addButton() {
      this.clear()
      this.addButtonVisible = false
      this.visible = true
    },

    cancel() {
      this.clear()
      this.addButtonVisible = true
      this.visible = false
    },

    clear() {
      this.formData.id = null
      this.formData.userId = 0
      this.formData.lessonId = null
      this.formData.description = null
      this.formData.year = null
      this.formData.grade = null
      this.visible = false
      this.addButtonVisible = true

      this.$v.$reset()
    },

    showDeleteComfirm(item , index) {

      try {
        this.$bvModal.msgBoxConfirm(this.$t('delete_confirm'), {
          title: 'Confirm',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2 border-top-0',
          hideHeaderClose: false,
          headerClass: 'p-2 border-bottom-0',
          centered: true
        })
          .then(value => {

            this.delComfirm = value
            if (value === true) {
              this.setOverlayValue(item , true)
              this.deleteData.id = item.id
              this.$axios.post('/subject/delete', this.deleteData).then((res) => {
                this.makeToast('success', 'Message', this.$t('success_delete'))
                this.reloadTable();
               }).catch(error => {

                this.setOverlayValue(item , false)
                this.makeToast('danger', 'Error', this.$t('success_failed'))

                if (error.response.data.errors) {
                  this.errors = error.response.data.errors
                }
                console.log(error)
              }).finally(()=>{

              });
            }
          })
          .catch(err => {
            this.setOverlayValue(item , false)

            // An error occurred
            console.log(err)
          })

      } catch (e) {
        this.setOverlayValue(item , false)

        console.log(e);
      }
    },


  },

}
</script>

<style scoped>

</style>
