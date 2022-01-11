<template>
  <div>
    <b-container class="container-padding" fluid>
      <b-row class="d-md-flex m-center">
        <div class="login-wrap px-xl-5 px-lg-5 px-md-3 px-sm-2 px-2 col-md-12 col-lg-12 col-xl-12">
          <div class="d-flex">
            <h3 class="mb-2">{{ $t('educations.title') }}</h3>


            <b-button @click="addButton" class="btn btn-crl-mini  btn-primary ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus"
                   viewBox="0 0 16 16">
                <path
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
            </b-button>
            <b-modal hide-header hide-footer centered v-model="visible" id="add_panel">

              <b-form class="w-100" enctype='multipart/form-data' @submit.stop.prevent="onSubmit" @reset="onReset">

                <b-form-group id="input-group-name" :label="$t('educations.university.label')"
                              label-for="input-university">
                  <b-form-input
                    id="input-university"
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
                  <!--              <div style="font-size: x-small">-->
                  <!--                {{ $t('educations.levelEducation.eg') }}-->
                  <!--              </div>-->

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

                    <v-select placeholder="Start year"
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

                    <v-select placeholder="End year"
                              v-model.trim="$v.formData.endYear.$model"
                              class="m-v-select2"
                              :class="{ 'is-invalid  d-block': $v.formData.endYear.$error }"
                              :options="computedYears">
                    </v-select>

                    <!--                <div class="invalid-feedback" v-if="!$v.formData.endYear.required">{{-->
                    <!--                    $t('endYear.required')-->
                    <!--                  }}-->
                    <!--                </div>-->
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

                <b-form-row>
                  <div class="p-2 w-100">

                    <b-button class="form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2" type="submit">
                      {{ $t('add') }}
                    </b-button>

                    <b-button class="form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2" @click="cancel">
                      {{ $t('cancel') }}
                    </b-button>


                  </div>
                </b-form-row>
              </b-form>
            </b-modal>
          </div>


          <b-overlay
            style="margin: -15px!important;"
            :show="loaded"
            variant="transparent"
            :opacity=0.8
            blur="3px"
            rounded="sm">
            <b-row class="mt-4 w-100 mx-0">
              <!--              <b-overlay :show="loadOverlay" variant="white" opacity="0.5" no-wrap>-->
              <!--                Loading ...-->
              <!--              </b-overlay>-->

              <div class="col-lg-4 p-1 w-100 " v-for="item in t_items" :key="item.id">
                <b-card class="h-100">
                  <a @click="showDeleteComfirm(item)" class="font-color float-right">
                    <font-awesome-icon :icon="['fas', 'trash-alt']"/>
                  </a>
                  <div class="small font-weight-bold title-color">
                    University Name:
                  </div>
                  <div>
                    {{ item.university }}
                  </div>

                  <hr class="my-2">
                  <div class="small font-weight-bold title-color">
                    {{ $t("Status") }}:
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
                    Level of education:
                  </div>
                  <div>
                    {{ (item.levelEducation) }}
                  </div>
                  <hr class="my-2">
                  <div class="small font-weight-bold title-color">
                    Department:
                  </div>
                  <div>
                    {{ item.department }}
                  </div>
                  <div v-if="item.startYear>0">
                    <hr class="my-2">
                    <div class="small font-weight-bold title-color">
                      Years:
                    </div>
                    <div> {{ item.startYear }} - {{ item.endYear }}</div>

                  </div>

                  <div v-if="item.fileId >0 ">
                    <hr class="my-2">
                    <a @click="downloadFile(item)"
                       class="circle-icon white-icon d-flex align-items-center justify-content-center">
                      <font-awesome-icon :icon="['fas', 'file-alt']"/>
                    </a>
                  </div>

                </b-card>
              </div>
            </b-row>
          </b-overlay>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {library} from '@fortawesome/fontawesome-svg-core'

import {faTrashAlt, faFileAlt} from '@fortawesome/free-solid-svg-icons'

import {required, numeric, requiredIf} from "vuelidate/lib/validators";


library.add(faFileAlt)
library.add(faTrashAlt)

export default {
  name: "educs",
  data() {
    return {
      loadOverlay: true,
      addButtonVisible: true,
      loaded: false,
      visible: false,
      errors: null,
      defaultData: {id: 0},
      delData: {certId: 0},
      t_items: [],
      formData: {
        selectedFile: null,
        userId: 0,
        university: null,
        levelEducation: null,
        department: null,
        startYear: 1960,
        endYear: 1961,
      },
      degree_option: [{value: 0, text: 'Please Select degree'}, {value: 1, text: 'Master'}, {
        value: 2,
        text: 'Bachelor'
      }
        ,
        {value: 3, text: 'Doctor'}]

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
      startYear: {},
      endYear: {

        checkErrorEndYear(value) {
          return (this.formData.startYear == null || value > this.formData.startYear);
        }
      },
      selectedFile: {
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
    onSubmit(evt) {
      this.$v.$reset()
      this.errors = null
      evt.preventDefault()
      this.$v.formData.$touch()
      if (this.$v.formData.$invalid) {
        console.log("vuelidate error")
      } else {
        this.loaded = true
        var form1 = new FormData();
        if (this.formData.selectedFile !== null)
          form1.append("file", this.formData.selectedFile, this.formData.selectedFile.name)
        form1.append('university', this.formData.university)
        form1.append('department', this.formData.department)
        form1.append('levelEducation', this.formData.levelEducation)
        form1.append('startYear', this.formData.startYear)
        form1.append('endYear', this.formData.endYear)

        this.$axios.post('/educations/create', form1).then(
          rsp => {
            this.t_items = rsp.data
            this.clear()
            this.makeToast('success', 'Message', this.$t('done_successfully'))
            this.visible = false
          }
        ).catch(error => {
          if (error.response.data.errors) {
            this.errors = error.response.data.errors
          }
        }).finally(() => {
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

    getDegree(degree) {
      if (degree === 1)
        return "Master"
      if (degree === 2)
        return "Bachelor"
      if (degree === 3)
        return "Doctor"
    },

    reloadTable() {
      this.loadOverlay = true
      this.loaded = true
      this.$axios.post('educations/list', null).then((res) => {
        this.loadOverlay = false
        this.loaded = true;
        this.t_items = res.data
      }).catch(error => {
        this.loaded = true;
        if (error.response.data.errors) {
          this.errors = error.response.data.errors
        }
      }).finally(() => {
        this.loaded = false
        this.loadOverlay = false
      })
    },

    showDeleteComfirm(item) {
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
            this.loaded = true
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
          }).finally(() => {
          this.loaded = false

        })

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
      this.visible = false
      this.addButtonVisible = true

      this.$v.$reset()
    },
    downloadFile(rowId) {
      try {
        this.defaultData.id = rowId.fileId
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

  }
}
</script>
<style scoped>
.title-color {
  color: #b6bbc7;
}

.font-color {
  cursor: pointer;
  color: var(--color2);
}

.font-color:hover {
  color: black;
}
</style>
