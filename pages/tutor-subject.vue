<template>
  <div class="main-body-container-content">
    <b-container class="container-padding">
      <b-row class="col-md-12 col-lg-10 m-center">
        <div class="w-100">
          <h3 class="mb-4 text-center">{{$t('completeRegistration')}}</h3>
        </div>
        <b-row class="w-100  mx-0">
          <h4 class="mb-2">{{$t('subjects.title')}}</h4>
          <b-progress value="2" max="5" class="w-100" height="10px" variant="danger"></b-progress>
          <span>2/5</span>

          <p style="font-size: small" class="w-100 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
            </svg>
            <span class="ml-1">{{$t("subjects.header_alert")}}</span>

          </p>

        </b-row>

        <b-row class="mx-0 col-xl-7 col-lg-8 col-md-12">
          <b-overlay
            :show="busy"
            rounded="lg"
            variant="white"
            opacity="0.8">

          <b-form class="w-100  py-4" @submit.stop.prevent="onSubmit" @reset="onReset">
            <div class="">
              <b-form-row >
                <b-form-group class="col-11" id="input-group-subject" :label="$t('subjects.subject')"
                              label-for="input-communication">

                  <v-select  placeholder="Select one subject"
                            v-model.trim="registerForm.lessonId" class="m-v-select2"
                            :class="{ 'is-invalid  d-block': $v.registerForm.lessonId.$error }"
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
                  <div class="invalid-feedback" v-if="!$v.registerForm.lessonId.required">
                    {{ $t('subjects.lesson.required') }}
                  </div>
                </b-form-group>

                <b-form-group class="col-11" id="input-group-grade" :label="$t('subjects.grade_title')"
                              label-for="input-communication">

                  <v-select :placeholder="$t('subjects.grade_placeholder')"
                            v-model.trim="registerForm.grade"
                            class="m-v-select2"
                            :class="{ 'is-invalid  d-block': $v.registerForm.grade.$error }"
                            :options="gradeOptions"
                            :reduce="x => x.value"
                            label="text"
                            :selectable="option => !option.hasOwnProperty('group')">
                  </v-select>

                  <div class="invalid-feedback" v-if="!$v.registerForm.grade.required">
                    {{ $t('subjects.grade.required') }}
                  </div>

                </b-form-group>

                <b-form-group class="col-6" id="input-group-year" :label="$t('subjects.year')"
                              label-for="input-year">
                  <v-select id="input-year"
                            :placeholder="$t('subjects.year_placeholder')"
                            v-model.trim="registerForm.year"
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
                    v-model.trim="registerForm.description"
                    id="input-description"
                  ></b-form-textarea>
                </b-form-group>

              </b-form-row>
              <b-form-group id="input-group-price" class="w-100" :label="$t('subjects.price.label')" label-for="input-price">
                <div class="float-left d-block w-50" >
                  <b-form-input
                    :class="{ 'is-invalid': $v.registerForm.price.$error }"
                    class="w-100"
                    type="number"
                    id="input-price"
                    :placeholder="$t('subjects.price.placeholder')"
                    v-model="registerForm.price">
                  </b-form-input>
                  <div class="invalid-feedback" v-if="!$v.registerForm.price.required">{{ $t('subjects.price.required') }}
                  </div>
                </div>
                <div class="float-left d-block mt-2 ml-1" >CAD</div>

              </b-form-group>
              <p class="mt-5" ></p>

              <b-row class="w-100 text-right d-block">
                  <b-button class="form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2 mt-4" type="save">
                    {{ $t('subjects.add') }}
                  </b-button>

              </b-row>

            </div>
            <div>
              <div  class="float-left d-block">
                <b-button class="form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2"
                          to="/tutor-details">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                  <span>{{$t('back')}}</span>

                </b-button>
                <b-button class="form-control btn btn-crl  btn-primary submit btn-reg px-3 mt-4" @click="nextStep">
                  <span class="mt-2">{{$t('next')}}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </b-button>
              </div>
              <div class="float-right mt-5 w-50 text-right">
                <b-link href="" @click="nextStep" >{{$t("skipStep")}}</b-link>
              </div>
            </div>

          </b-form>
          </b-overlay>
        </b-row>
      </b-row>

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
                {{ item.price }}<span class="small"> CAD</span>
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

<!--      edit dialog-->
      <b-modal hide-header hide-footer centered ref="editModal">
        <b-overlay
          :show="showEditOverLayDialog"
          rounded="lg"
          variant="white"
          opacity="0.8"
        >
          <b-form class="w-100  py-4" @submit.stop.prevent="onSubmit"
                @reset="onReset">
          <b-form-row >


            <b-form-group class="col-11" id="input-group-grade" :label="$t('subjects.grade_title')"
                          label-for="input-communication">

              <v-select :placeholder="$t('subjects.grade_placeholder')"
                        v-model.trim="editForm.grade"
                        class="m-v-select2"
                        :class="{ 'is-invalid  d-block': $v.editForm.grade.$error }"
                        :options="gradeOptions"
                        :reduce="x => x.value"
                        label="text"
                        :selectable="option => !option.hasOwnProperty('group')">
              </v-select>

              <div class="invalid-feedback" v-if="!$v.editForm.grade.required">
                {{ $t('subjects.grade.required') }}
              </div>

            </b-form-group>

            <b-form-group class="col-6" id="input-group-year" :label="$t('subjects.year')+':'"
                          label-for="input-year">
              <v-select :placeholder="$t('subjects.year_placeholder')"
                        v-model.trim="editForm.year"
                        class="m-v-select2"
                        :options="computedYears"
                        :selectable="option => !option.hasOwnProperty('group')">
              </v-select>

            </b-form-group>

            <b-form-group
              class="col-11 align-self-end"
              id="input-group-description"
              :label="$t('subjects.description')+':'"
              label-for="input-description">
              <b-form-textarea
                :placeholder="$t('desc')"
                autocomplete="off"
                v-model.trim="editForm.description"
                id="input-accountId"
              ></b-form-textarea>
            </b-form-group>

            <b-form-group id="input-group-price" class="w-100" :label="$t('subjects.price.label')" label-for="input-price">
              <div class="float-left d-block w-50" >
                <b-form-input
                  :class="{ 'is-invalid': $v.editForm.price.$error }"
                  class="w-100"
                  type="number"
                  id="input-price"
                  :placeholder="$t('subjects.price.placeholder')"
                  v-model="editForm.price">
                </b-form-input>
                <div class="invalid-feedback" v-if="!$v.editForm.price.required">{{ $t('subjects.price.required') }}
                </div>
              </div>
              <div class="float-left d-block mt-2 ml-1" >CAD</div>

            </b-form-group>


            <b-form-row class="w-100">
              <div class="p-2 ">
                <b-button class="form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2" @click="saveEdit">
                  {{ $t('save') }}
                </b-button>
                <b-button class="form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2" @click="cancelEdit">
                  {{ $t('cancel') }}
                </b-button>
              </div>
            </b-form-row>

          </b-form-row>

        </b-form>
        </b-overlay>
      </b-modal>


    </b-container>
  </div>
</template>
<script>


  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faTrash} from '@fortawesome/free-solid-svg-icons'
  import {faEdit} from '@fortawesome/free-regular-svg-icons'

  import {faGoogle} from '@fortawesome/free-brands-svg-icons'
  import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
  import {faTrashAlt, faFileAlt} from '@fortawesome/free-solid-svg-icons'

  import {required, minLength, sameAs, email, numeric} from "vuelidate/lib/validators";
  // import {required, numeric, minLength, maxLength} from "vuelidate/lib/validators";


  library.add(faTrash)
  library.add(faEdit)

  library.add(faFileAlt)
  library.add(faTrashAlt)
  library.add(faGoogle)
  library.add(faFacebookF)

  export default {
    middleware: 'auth',
    name: 'ToturDetails',
    mounted() {
      if(!this.$auth.hasScope("tutor") && !this.$auth.hasScope("admin"))
      {
        this.$router.push("/")
        return
      }
      this.loadSubjects();
      this.fillForm();
    },
    data() {

      return {
        showEditOverLayDialog: false,
        editIndex : -1 ,
        editVisible: false,
        busy : true,
        nextPush: "/tutor-transcript" ,
        deleteData: {
          id: 0,
          lessonId: 0
        },
        overlays: [],
        gradeOptions: [{value:'D' , text:'D'} , {value:'C-', text:'C-'} , {value:'C', text:'C'} , {value:'B-', text:'B-'}, {value:'B', text:'B'} ,{value:'B+', text:'B+'}
          ,{value:'A', text:'A'} , {value:'A-', text:'A-'} ,{value:'A+', text:'A+'} ],
        options: [],
        transcriptFileId: null,
        transcriptFilePath: "",
        items: [],
        registerForm: {
          lessonName: '',
          lessonId: null,
          description: '',
          userId: 0,
          year: null,
          grade: null,
          price: null
        },
        editForm: {
          id: 0,
          description: null,
          year: null,
          grade: null,
          price: null
        },

        errors: null,
      }
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
    validations: {

      registerForm: {
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
      },

      editForm: {
        grade: {
          required,
        },
        year: {},
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
      clear() {
        this.registerForm.lessonId = null
        this.registerForm.description = null
        this.registerForm.grade = null
        this.registerForm.year = null
        this.registerForm.price = null
        this.$v.$reset()
      },

      showEditDialog(item,index)
      {
        this.editIndex = index
        this.editForm.id = item.id
        this.editForm.description = item.description
        this.editForm.grade = item.grade
        this.editForm.year = item.year
        this.editForm.price = item.price
        this.showModal("editModal")
      },
      saveEdit()
      {
        this.$v.$reset()
        this.errors = null
        this.$v.editForm.$touch()
        if (this.$v.editForm.$invalid) {
          console.log("vuelidate error")
        } else {
          this.showEditOverLayDialog = true
          this.$axios.post('/subject/save-edit-tutor-subject-one', this.editForm).then((res) => {
            this.showEditOverLayDialog = false
            this.$set(this.items ,this.editIndex, res.data)
            this.hideModal("editModal")
            this.makeToast('success', 'Message', this.$t('done_successfully'))
          }).catch(error => {
            if(error.response !== null) {
              if (error.response.data === "notexists")
                this.makeToast('danger', 'Error', this.$t('Item not exist.'))
              if (error.response.data.errors) {
                this.errors = error.response.data.errors
              }
            }
          }).finally(() => {
            this.showEditOverLayDialog = false
            this.loaded = false
          })
        }
      },
      cancelEdit()
      {
        this.editForm.id = 0
        this.editForm.description = null
        this.editForm.grade = null
        this.editForm.year = null
        this.editForm.price = null
        this.hideModal("editModal")
      },
      hideOverlay()
      {
        this.busy = false
      },
      showOverlay()
      {
        this.busy = true
      },
      async nextStep() {
        let nextCancel = false
        if (this.registerForm.lessonId > 0) {
          await this.$bvModal.msgBoxConfirm(this.$t('subjects.incomplete_form'), {
            title: 'Confirm',
            size: 'md',
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
              if (value === true) {
                nextCancel = false
              } else {
                nextCancel = true
              }
            })
            .catch(err => {
            })

        }
        if(nextCancel)
          return
        if (this.items.length === 0) {
          this.$bvModal.msgBoxConfirm(this.$t('subjects.subject_empty_alert'), {
            title: 'Confirm',
            size: 'md',
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
              if (value === true) {
                this.$router.push(this.nextPush)
              }
            })
            .catch(err => {
            })
        } else {
          this.$router.push(this.nextPush)
        }

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
      loadSubjects() {
        this.$axios.post('/definitions/getAllLessons').then((res) => {
          this.options = res.data;
        }).catch(error => {
          if (error.response.data.errors) {
            this.errors = error.response.data.errors
          }
          console.log(error)
        })
      },
      fillForm() {
        this.showOverlay()
        this.$axios.post('subject/items', null).then((res) => {
          this.hideOverlay()
          this.items = res.data.data
          this.transcriptFilePath =  res.data.transcript.path
          this.transcriptFileId =  res.data.transcript.fileId

        }).catch(error => {
          if (error.response.data.errors) {
            this.errors = error.response.data.errors
          }
          console.log(error)
        });
      },
      delItem(index) {
        if (index > -1) {
          this.items.splice(index, 1);
        }
      },
      onReset(evt) {
        evt.preventDefault()
      },

      onSubmit(evt) {
        this.$v.$reset()
        this.errors = null
        evt.preventDefault()
        this.$v.registerForm.$touch()
        if (this.$v.registerForm.$invalid) {
          console.log("vuelidate error")
        } else {
          this.showOverlay()
          this.loaded = true
          this.$axios.post('/subject/save-tutor-subject-one', this.registerForm).then((res) => {
            this.hideOverlay()
            this.items.push(res.data)

            //add overlay item
            this.overlays.push({key: res.data.id, value: false})
            this.clear();
            this.makeToast('success', 'Message', this.$t('done_successfully'))
          }).catch(error => {
            if (error.response.data === "duplicate")
              this.makeToast('danger', 'Error', this.$t('duplicateItem'))

            if (error.response.data.errors) {
              this.errors = error.response.data.errors
            }
            console.log(error)
          }).finally(() => {
            this.loaded = false
            this.hideOverlay()
          })
        }
      },
      downloadFile(fileId) {
        try {
          var c = {responseType: 'blob'}

          this.$axios.get(`/download/${fileId}` ,  c).then((response) => {
            var fileURL = window.URL.createObjectURL(new Blob([response.data],{type: 'application/file'}));
            var fileLink = document.createElement('a');
            var filename = response.headers['filename']
            fileLink.href = fileURL;
            fileLink.setAttribute('download', filename);
            document.body.appendChild(fileLink);

            fileLink.click();
          });

        } catch (e) {
          console.log(e);
        }
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

      reloadTable() {
        this.loaded = true
        this.$axios.post('subject/items', null).then((res) => {
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

        })
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
                  this.fillForm();
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
      setOverlayValue(item , value)
      {
        this.overlays.filter(function(elem){
          if(elem.key === item.id)
            elem.value = value;
        });
      },
    },

  }
</script>

<style  >
.is-invalid .vs__dropdown-toggle{
  border-color: #dc3545;
  background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e);
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.m-v-select2 {
}

.m-v-select2 .vs__clear {
  margin-top: -2px;
  margin-right: 7px;
  fill: var(--color1);
}
</style>
