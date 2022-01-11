<template>
  <div class="main-body-container-content">
    <b-container class="container-padding">
      <b-row class="col-md-12 pb-5 col-lg-10 m-center">
        <div class="w-100">
          <h3 class="mb-4 text-center">{{$t('completeRegistration')}}</h3>
        </div>
        <b-row class="w-100 mx-0">
          <h4 class="mb-2">{{$t('educations.title')}}</h4>
          <b-progress value="4" max="5" class="w-100" height="10px" variant="danger"></b-progress>
          <span>4/5</span>
        </b-row>
        <p style="font-size: small" class="w-100 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
          </svg>
          <span class="ml-1">{{$t("educations.header_alert")}}</span>

        </p>
        <b-row class="mx-0 pt-3 pb-4 col-xl-7 col-lg-8 col-md-12">
          <b-overlay
            :show="busy"
            class="w-100"
            rounded="lg"
            variant="white"
            opacity="0.8">
            <b-form class="w-100"   enctype='multipart/form-data' @submit.stop.prevent="onSubmit" @reset="onReset">

            <b-form-group id="input-group-name" :label="$t('educations.university.label')" label-for="input-company">
                <b-form-input
                  id="input-company"
                  v-model.trim="$v.formData.university.$model"
                  :class="{ 'is-invalid': $v.formData.university.$error }"
                  :placeholder="$t('educations.enterUniversity')"
                ></b-form-input>
              <div class="invalid-feedback" v-if="!$v.formData.university.required">
                {{ $t('educations.university.required') }}
              </div>
              <div class="invalid-feedback" v-if="!$v.formData.university.serverError">{{
                  $t(errors.university.msg)
                }}
              </div>
            </b-form-group>
            <b-form-group id="input-group-name" :label="$t('educations.levelEducation.label')"
                          label-for="input-speciality">
              <b-form-input
                id="input-speciality"
                v-model.trim="$v.formData.levelEducation.$model"
                :class="{ 'is-invalid': $v.formData.levelEducation.$error }"
                :placeholder="$t('educations.levelEducation.eg')"
              ></b-form-input>
              <div class="invalid-feedback" v-if="!$v.formData.levelEducation.required">
                {{ $t('educations.levelEducation.required') }}
              </div>
              <div class="invalid-feedback" v-if="!$v.formData.levelEducation.serverError">{{
                  $t(errors.levelEducation.msg)
                }}
              </div>
            </b-form-group>
            <b-form-group id="input-group-name" :label="$t('educations.department.label')"
                          label-for="input-department">
              <b-form-input
                id="input-department"
                v-model.trim="$v.formData.department.$model"
                :class="{ 'is-invalid': $v.formData.department.$error }"
                :placeholder="$t('educations.department.eg')"
              ></b-form-input>
              <div class="invalid-feedback" v-if="!$v.formData.department.required">
                {{ $t('educations.department.required') }}
              </div>
              <div class="invalid-feedback" v-if="!$v.formData.department.serverError">{{
                  $t(errors.department.msg)
                }}
              </div>
            </b-form-group>
            <b-form-row>
              <b-form-group class="col-6" id="input-group-name" :label="$t('startYear.label')"
                            label-for="input-startYear">

                <v-select  placeholder="Start year"
                           v-model.trim="$v.formData.startYear.$model"
                           class="m-v-select2"
                           :class="{ 'is-invalid  d-block': $v.formData.startYear.$error }"
                           :options="computedYears">
                </v-select>

                <div class="invalid-feedback" v-if="!$v.formData.startYear.required">{{ $t('startYear.required') }}
                </div>
                <div class="invalid-feedback" v-if="!$v.formData.startYear.checkErrorEndYear">
                  {{ $t("start_year_not_valid") }}
                </div>
              </b-form-group>

              <b-form-group class="col-6" id="input-group-name" :label="$t('endYear.label')"
                            label-for="input-endYear">

                <v-select  placeholder="End year"
                           v-model.trim="$v.formData.endYear.$model"
                           class="m-v-select2"
                           :class="{ 'is-invalid  d-block': $v.formData.endYear.$error }"
                           :options="computedYears">
                </v-select>

                <div class="invalid-feedback" v-if="!$v.formData.endYear.checkErrorEndYear">
                  {{ $t("end_year_not_valid") }}
                </div>
              </b-form-group>
            </b-form-row>
            <b-form-group id="input-group-4" label="File:" label-for="input4">
              <b-form-file
                :browse-text="$t('browse')"
                :class="{ 'is-invalid': $v.formData.selectedFile.$error }"
                id="input4"
                style="direction: ltr"
                v-model="$v.formData.selectedFile.$model"
                :placeholder="$t('chooseFile')"
                :drop-placeholder="$t('dropFile')"
              ></b-form-file>

<!--              <div class="invalid-feedback d-block"-->
<!--                   v-if="$v.formData.selectedFile.$dirty && !$v.formData.selectedFile.required">{{-->
<!--                  $t('file.required')-->
<!--                }}-->
<!--              </div>-->
              <div class="invalid-feedback d-block"
                   v-if="$v.formData.selectedFile.$dirty && !$v.formData.selectedFile.isValidSize">{{
                  $t('file.isValidSize')
                }}
              </div>
              <div class="mt-3" v-if="formData.selectedFile">
                <font-awesome-icon style="font-size: x-large" :icon="['fas', 'file-alt']"/>
                <span class="mx-2">{{
                    formData.selectedFile ? Math.trunc(formData.selectedFile.size / 1024) + " KB" : ''
                  }}</span>
              </div>
            </b-form-group>
              <b-row class="w-100 overflow- text-left small text-small ml-2 mt-1">
                <span>{{$t("educations.file.size_message")}}</span>
                <span class="mt-1">{{$t("educations.file.message")}}</span>
              </b-row>
            <b-row class="w-100 text-right d-block">
              <b-button class="form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2 " type="save">
                {{ $t('add') }}
              </b-button>
            </b-row>

          </b-form>
          </b-overlay>

        </b-row>

        <b-row class="w-50">
          <div  class="float-left d-block">
            <b-button class="form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2" to="/tutor-transcript">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
              <span>{{$t('back')}}</span>
            </b-button>
            <b-button class="form-control btn btn-crl  btn-primary submit btn-reg px-3 mt-4" @click="nextStep" >
              <span class="mt-2">{{$t('next')}}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </b-button>
          </div>

          <div class="float-right mt-5 w-50 text-right">
            <b-link href="" to="/tutor-timing" >Skip step</b-link>
          </div>
        </b-row>

          <b-row class="w-100 mt-4">
          <div class="col-lg-4 p-1" v-for="item in t_items" :key="item.id">
            <b-card >

              <div class="text-right">
                <b-link class="mr-4" style="color: #bfbfbf;"
                        @click="showDeleteComfirm(item,index)"
                        size="sm">
                  <font-awesome-icon class="shop-icon" :icon="['fas', 'trash']"/>
                </b-link>
              </div>

              <div class="small font-weight-bold title-color">
                University Name:
              </div>
              <div>
                {{ item.university}}
              </div>
              <hr class="my-2">
              <div class="small font-weight-bold title-color">
                Level Of Education:
              </div>
              <div>
                {{ item.levelEducation}}
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
                Department:
              </div>
              <div>
                {{ item.department}}
              </div>

              <hr class="my-2">
              <div class="small font-weight-bold title-color">
                Years:
              </div>
              <div>  {{item.startYear}} - {{ item.endYear}}</div>
              <hr class="my-2">

              <a v-if=" item.fileId>0 " @click="downloadFile(item)" class="circle-icon white-icon d-flex align-items-center justify-content-center">
                <font-awesome-icon  :icon="['fas', 'file-alt']"/>
              </a>
            </b-card>
          </div>
        </b-row>

      </b-row>
  </b-container>
  </div>
</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core'

  import {faTrashAlt,faFileAlt} from '@fortawesome/free-solid-svg-icons'

  import {required, numeric, requiredIf} from "vuelidate/lib/validators";

  import {faTrash} from '@fortawesome/free-solid-svg-icons'
  import {faEdit} from '@fortawesome/free-regular-svg-icons'


  library.add(faTrash)
  library.add(faEdit)


  library.add(faFileAlt)
  library.add(faTrashAlt)

  export default {
    middleware: 'auth',
    name: "reg-educ",
    data() {
      return {
        nextPush: "/tutor-timing" ,
        busy: true,
        errors: null,
        defaultData: {id: 0},
        delData: {certId: 0},
        t_items: [],
        formData: {
          selectedFile: null,
          userId: 0,
          university: '',
          levelEducation: '',
          department:'',
          startYear: null,
          endYear: null,
        },
        degree_option: [{value: 0, text: 'Please Select degree'}, {value: 1, text: 'Master'},
          {
          value: 2,
          text: 'Bachelor'
        }],

      }
    },
    validations: {
      formData: {
        university: {
          required,
          serverError(value) {
            return this.serverError(value, "university")
          }

        },
        department: {
          required,
          serverError(value) {
            return this.serverError(value, "department")
          }
        },
        levelEducation: {
          required,
          serverError(value) {
            return this.serverError(value, "levelEducation")
          }
        },
        startYear: {

        },
        endYear: {

          checkErrorEndYear(value) {
            return (this.formData.startYear == null || value > this.formData.startYear);
          }
        },
        selectedFile: {
          // required: requiredIf(function () {
          //   return this.formData.selectedFile === null;
          // }),
          isValidSize(file) {
            if (!file) {
              return true;
            }
            return (file.size < (2 * 1024 * 1024));
          }
        }
      },
    },
    computed: {
      computedYears: function () {
        var years = []
        for (var i = 1960; i < (new Date()).getFullYear(); i++) {
          years.push(i)
        }
        return years
      }
    },
    mounted() {
       this.reloadTable();
    },
    methods: {
      async nextStep() {
        const self = this;
        let nextCancel = false
        if ((this.formData.university !== '' && this.formData.university != null)
        || (this.formData.department !== '' && this.formData.department != null )
          || (this.formData.levelEducation !== '' && this.formData.levelEducation != null )
          || this.formData.selectedFile != null ) {
          await this.$bvModal.msgBoxConfirm(this.$t('educations.incomplete_form'), {
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
                self.$router.push(this.nextPush)
              } else {

              }
            })
            .catch(err => {
            })

        }
        else
        {
          this.$router.push(this.nextPush)
        }

      },
      hideOverlay()
      {
        this.busy = false
      },
      showOverlay()
      {
        this.busy = true
      },
      downloadFile(rowId) {
        try {
          var c = {responseType: 'blob'}
          this.$axios.get(`/download/${rowId.fileId}`, c).then((response) => {
            console.log(response)
            var fileURL = window.URL.createObjectURL(new Blob([response.data], {type: 'application/file'}));
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

      clear() {
        this.formData.selectedFile = null
        this.formData.userId = 0
        this.formData.university = ""
        this.formData.levelEducation = ""
        this.formData.department = ""
        this.formData.startYear = null
        this.formData.endYear = null

        this.$v.$reset()
      },

      onSubmit(evt) {
        this.$v.$reset()
        this.errors = null
        evt.preventDefault()
        this.$v.formData.$touch()
        if (this.$v.formData.$invalid) {
          console.log("vuelidate error")
        } else {
          this.showOverlay()
          var formData = new FormData();
          if(this.formData.selectedFile!==null)
            formData.append("file", this.formData.selectedFile, this.formData.selectedFile.name)
          formData.append('university', this.formData.university)
          formData.append('department', this.formData.department)
          formData.append('levelEducation', this.formData.levelEducation)
          formData.append('startYear', this.formData.startYear)
          formData.append('endYear', this.formData.endYear)

          this.$axios.post('/educations/create', formData).then( rsp => {
              this.clear()
              this.makeToast('success', 'Message', this.$t('done_successfully'))
              this.t_items = rsp.data
            }
          ).catch(error => {
            if (error.response.data.errors) {

              this.errors = error.response.data.errors
            }
            console.log(error)
          }).finally(()=>{
            this.hideOverlay()
          })


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

      onReset(evt) {
        evt.preventDefault()
      },

      serverError(value, attrib) {
        if (value === '') {
          return true
        }
        return !(this.errors != null && this.errors[attrib] && value === this.errors[attrib].value)
      },

      reloadTable() {
        try{
          this.showOverlay()
          this.$axios.post('educations/list', null).then((res) => {
            this.t_items = res.data
            //debug
            console.log(res.data);
          }).catch(error => {
            if (error.response.data.errors) {
              this.errors = error.response.data.errors
            }
          }).finally(()=>{
            this.hideOverlay()
          });
        }catch (e) {
          this.hideOverlay()
        }
      },

      showDeleteComfirm(item) {
        try {

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
          })
            .then(value => {
              this.delComfirm = value

              if (value === true) {
                this.delData.educId = item.id
                this.$axios.post('/educations/delete', this.delData).then((res) => {
                  this.makeToast('success', 'Message', this.$t('success_delete'))
                  //debug
                  console.log(res.data);
                  this.reloadTable();

                }).catch(error => {
                  if (error.response.data.errors) {
                    this.errors = error.response.data.errors
                  }
                  console.log(error)
                });

              }
            })
            .catch(err => {
              // An error occurred
              console.log(err)
            })

        } catch (e) {
          console.log(e);
        }
      },


    }
  }
</script>
<style scoped>
  .title-color{
    color: #b6bbc7;
  }
  .font-color{
    cursor: pointer;
    color: var(--color2);
  }
  .font-color:hover{
    color: black;
  }
</style>
