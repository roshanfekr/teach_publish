<template>
  <div>
    <b-container class="container-padding" fluid>
      <b-row class="d-md-flex m-center">
        <div class="login-wrap px-xl-5 px-lg-5 px-md-3 px-sm-2 px-2 col-md-12 col-lg-12 col-xl-12">
          <b-row class="w-100">
            <h3 class="mb-2">{{ $t('certificate.title') }}</h3>
          </b-row>
          <b-row class="mt-2 w-100">
            <b-button v-b-toggle.add_panel @click="addButton"
                      class="btn btn-crl  btn-primary ">Add New
            </b-button>
            <b-modal hide-header hide-footer centered v-model="visible" id="add_panel">
                  <b-form class="w-100" enctype='multipart/form-data' @submit.stop.prevent="onSubmit" @reset="onReset">
                    <b-form-group id="input-group-name" :label="$t('certificate.certName.label')+':'"
                                  label-for="input-certName">
                      <b-form-input
                        id="input-certName"
                        v-model.trim="$v.formData.certName.$model"
                        :class="{ 'is-invalid': $v.formData.certName.$error }"
                        :placeholder="$t('certName.label')"
                      ></b-form-input>
                      <div class="invalid-feedback" v-if="!$v.formData.certName.required">
                        {{ $t('certificate.certName.required') }}
                      </div>
                      <div class="invalid-feedback" v-if="!$v.formData.certName.serverError">{{
                          $t(errors.certName.msg)
                        }}
                      </div>
                    </b-form-group>

                    <b-form-group id="input-group-name" :label="$t('certificate.description.label')+':'"
                                  label-for="input-description">
                      <b-form-textarea
                        :placeholder="$t('description.label')"
                        autocomplete="off"
                        v-model.trim="$v.formData.description.$model"
                        :class="{ 'is-invalid': $v.formData.description.$error }"
                        id="input-Description"
                      ></b-form-textarea>
                      <div class="invalid-feedback" v-if="!$v.formData.description.required">
                        {{ $t('certificate.description.required') }}
                      </div>
                      <div class="invalid-feedback" v-if="!$v.formData.description.serverError">{{
                          $t(errors.description.msg)
                        }}
                      </div>
                    </b-form-group>

                    <b-form-group id="input-group-name" :label="$t('certificate-issuedBy-label')+':'"
                                  label-for="input-issuedby">
                      <b-form-input
                        id="input-issuedby"
                        v-model.trim="$v.formData.issuedby.$model"
                        :class="{ 'is-invalid': $v.formData.issuedby.$error }"
                        placeholder="Issued by"
                      ></b-form-input>
                      <div class="invalid-feedback" v-if="!$v.formData.issuedby.required">
                        {{ $t('certificate.issuedBy.required') }}
                      </div>
                      <div class="invalid-feedback" v-if="!$v.formData.issuedby.serverError">{{
                          $t(errors.issuedby.msg)
                        }}
                      </div>
                    </b-form-group>
                    <b-form-row>
                      <b-form-group class="col-6" id="input-group-name" :label="$t('startYear.label')+':'"
                                    label-for="input-startYear">
                        <b-form-select
                          id="input-startYear"
                          v-model.trim="$v.formData.startYear.$model"
                          :options="computedYears"
                          :class="{ 'is-invalid': $v.formData.startYear.$error }"
                        ></b-form-select>
                        <div class="invalid-feedback" v-if="!$v.formData.startYear.required">{{
                            $t('startYear.required')
                          }}
                        </div>
                      </b-form-group>

                      <b-form-group class="col-6" id="input-group-name" :label="$t('endYear.label')+':'"
                                    label-for="input-endYear">
                        <b-form-select
                          id="input-endYear"
                          v-model.trim="$v.formData.endYear.$model"
                          :options="computedYears"
                          :class="{ 'is-invalid': $v.formData.endYear.$error }"
                        ></b-form-select>
                        <div class="invalid-feedback" v-if="!$v.formData.endYear.required">{{
                            $t('endYear.required')
                          }}
                        </div>
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
                           v-if="$v.formData.selectedFile.$dirty && !$v.formData.selectedFile.required">{{
                          $t('file.required')
                        }}
                      </div>
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

                        <b-button class="form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2"
                                  type="submit">
                          {{ $t('add') }}
                        </b-button>

                        <b-button class="form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2" @click="cancel">
                          {{ $t('cancel') }}
                        </b-button>


                      </div>

                    </b-form-row>
                  </b-form>
            </b-modal>
          </b-row>
          <b-overlay
            style="margin: -15px!important;"
            class="w-100"
            :show="loaded"
            variant="transparent"
            :opacity= 0.8
            blur="3px"
            rounded="sm">

            <b-row class="mt-4 w-100 mx-0">
              <div v-if="t_items.length == 0">
                Loading ...
              </div>
            <div class="col-lg-4 p-1" v-for="item in t_items" :key="item.id">
              <b-card class="h-100">

                <a @click="showDeleteComfirm(item)" class="font-color float-right">
                  <font-awesome-icon :icon="['fas', 'trash-alt']"/>
                </a>
                <div class="small font-weight-bold title-color">
                  Certificate Name:
                </div>
                <div>
                  {{ item.certName }}
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
                  Description:
                </div>
                <div>
                  {{ item.description }}
                </div>
                <hr class="my-2">
                <div class="small font-weight-bold title-color">
                  Issued by :
                </div>
                <div>
                  {{ item.issuedby }}
                </div>
                <hr class="my-2">
                <div class="small font-weight-bold title-color">
                  Years:
                </div>
                <div> {{ item.startYear }} - {{ item.endYear }}</div>
                <hr class="my-2">
                <a @click="downloadFile(item)"
                   class="circle-icon white-icon d-flex align-items-center justify-content-center">
                  <font-awesome-icon :icon="['fas', 'file-alt']"/>
                </a>
              </b-card>
            </div>
          </b-row>
          </b-overlay>
          <!--        <div class="mt-4 p-4">-->
          <!--          <b-button class="form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg " to="/reg-educ">-->
          <!--            {{ $t('save')}}-->
          <!--          </b-button>-->
          <!--        </div>-->
        </div>
      </b-row>

    </b-container>
  </div>

</template>

<script>
import {library} from '@fortawesome/fontawesome-svg-core'

import {faTrashAlt, faFileAlt} from '@fortawesome/free-solid-svg-icons'

import {required, requiredIf} from "vuelidate/lib/validators";

// import {required, numeric, minLength, maxLength} from "vuelidate/lib/validators";


library.add(faFileAlt)
library.add(faTrashAlt)


export default {
  name: "reg-cert",
  data() {
    return {
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
        certName: '',
        description: '',
        startYear: 1960,
        endYear: 1961,
        issuedby: '',
      },

    }
  },
  validations: {
    formData: {
      certName: {
        required,
        serverError(value) {
          return this.serverError(value, "certName")
        }

      },
      description: {
        required,
        serverError(value) {
          return this.serverError(value, "description")
        }
      },
      startYear: {
        required
      },
      endYear: {
        required,
        checkErrorEndYear(value) {
          return (this.formData.startYear === null || value > this.formData.startYear);
        }
      },
      issuedby: {
        required,
        serverError(value) {
          return this.serverError(value, "issuedby")
        }
      },
      selectedFile: {
        required: requiredIf(function () {
          return this.formData.selectedFile === null;
        }),
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
        form1.append("file", this.formData.selectedFile, this.formData.selectedFile.name)
        form1.append('certName', this.formData.certName)
        form1.append('issuedby', this.formData.issuedby)
        form1.append('startYear', this.formData.startYear)
        form1.append('endYear', this.formData.endYear)
        form1.append('description', this.formData.description)

        this.$axios.post('/cert/create', form1, {
          onUploadProgress: progress => {
            const {total, loaded} = progress;
            const totalSizeInMB = total / 1000000;
            const loadedSizeInMB = loaded / 1000000;
            const uploadPercentage = (loadedSizeInMB / totalSizeInMB) * 100;

          }
        }).then(
          rsp => {
            this.clear()
            this.t_items = rsp.data
            this.makeToast('success', 'Message', this.$t('done_successfully'))
          }
        ).catch(error => {
          if (error.response.data.errors) {
            this.errors = error.response.data.errors
          }
        }).finally(()=>{
          this.loaded = false

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
      // Reset our registerForm values


    },

    serverError(value, attrib) {
      if (value === '') {
        return true
      }
      return !(this.errors != null && this.errors[attrib] && value === this.errors[attrib].value)
    },

    reloadTable() {
      this.loaded = true
      this.$axios.post('cert/certList', null).then((res) => {
        this.t_items = [];
        this.t_items = res.data
        this.loaded = true

      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors
        }
      }).finally(()=>{
        this.loaded = false

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
              this.delData.certId = item.id
              this.$axios.post('cert/delete', this.delData).then((res) => {
                this.makeToast('success', 'Message', this.$t('success_delete'))
                //debug
                console.log(res.data);
                this.reloadTable();

              }).catch(error => {
                if (error.response.data.errors) {
                  this.errors = error.response.data.errors
                }
                console.log(error)
              }).finally(()=>{
                this.loaded = false

              })

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
      this.formData.selectedFile = null
      this.formData.userId = 0
      this.formData.certName = ''
      this.formData.description = ''
      this.formData.startYear = 1960
      this.formData.endYear = 1961
      this.formData.issuedby = ''

      this.visible = false
      this.addButtonVisible = true

      this.$v.$reset()
    },
    downloadFile(rowId) {
      try {
        this.defaultData.id = rowId.id
        var c = {responseType: 'blob'}
        this.$axios.get(`/download/${rowId.id}`, c).then((response) => {
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
