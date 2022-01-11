<template>
  <div class="main-body-container-content">
    <b-container class="container-padding">
      <b-row class="col-md-12 pb-5 col-lg-10 m-center">
        <div class="w-100">
          <h3 class="mb-4 text-center">{{$t('completeRegistration')}}</h3>
        </div>
        <b-row class="w-100 mx-0">
          <h4 class="mb-2">{{$t('certificate-title')}}</h4>
          <b-progress value="3" max="6" class="w-100" height="10px" variant="danger"></b-progress>
          <span>3/6</span>
        </b-row>
        <b-row class="mx-0 pt-5 pb-4 col-xl-7 col-lg-8 col-md-12">
          <b-form class="w-100"  enctype='multipart/form-data' @submit.stop.prevent="onSubmit" @reset="onReset">
            <b-form-group id="input-group-name" :label="$t('certName-label')+':'" label-for="input-certName">
              <b-form-input
                id="input-certName"
                v-model.trim="$v.formData.certName.$model"
                :class="{ 'is-invalid': $v.formData.certName.$error }"
                :placeholder="$t('certName-label')"
              ></b-form-input>
              <div class="invalid-feedback" v-if="!$v.formData.certName.required">{{ $t('certName-required') }}</div>
              <div class="invalid-feedback" v-if="!$v.formData.certName.serverError">{{
                $t(errors.certName.msg)
                }}
              </div>
            </b-form-group>

            <b-form-group id="input-group-name" :label="$t('description-label')+':'" label-for="input-description">
              <b-form-textarea
                :placeholder="$t('description-label')"
                autocomplete="off"
                v-model.trim="$v.formData.description.$model"
                :class="{ 'is-invalid': $v.formData.description.$error }"
                id="input-Description"
              ></b-form-textarea>
              <div class="invalid-feedback" v-if="!$v.formData.description.required">{{ $t('description-required')
                }}
              </div>
              <div class="invalid-feedback" v-if="!$v.formData.description.serverError">{{
                $t(errors.description.msg)
                }}
              </div>
            </b-form-group>

            <b-form-group id="input-group-name" :label="$t('issuedBy-label')+':'" label-for="input-issuedby">
              <b-form-input
                id="input-issuedby"
                v-model.trim="$v.formData.issuedby.$model"
                :class="{ 'is-invalid': $v.formData.issuedby.$error }"
                placeholder="Issued by"
              ></b-form-input>
              <div class="invalid-feedback" v-if="!$v.formData.issuedby.required">{{ $t('issuedBy-required') }}</div>
              <div class="invalid-feedback" v-if="!$v.formData.issuedby.serverError">{{
                $t(errors.issuedby.msg)
                }}
              </div>
            </b-form-group>
            <b-form-row>
              <b-form-group class="col-6" id="input-group-name" :label="$t('startYear-label')+':'"
                            label-for="input-startYear">
                <b-form-select
                  id="input-startYear"
                  v-model.trim="$v.formData.startYear.$model"
                  :options="computedYears"
                  :class="{ 'is-invalid': $v.formData.startYear.$error }"
                ></b-form-select>
                <div class="invalid-feedback" v-if="!$v.formData.startYear.required">{{ $t('startYear-required') }}
                </div>
              </b-form-group>

              <b-form-group class="col-6" id="input-group-name" :label="$t('endYear-label')+':'"
                            label-for="input-endYear">
                <b-form-select
                  id="input-endYear"
                  v-model.trim="$v.formData.endYear.$model"
                  :options="computedYears"
                  :class="{ 'is-invalid': $v.formData.endYear.$error }"
                ></b-form-select>
                <div class="invalid-feedback" v-if="!$v.formData.endYear.required">{{ $t('endYear-required') }}</div>
                <div class="invalid-feedback" v-if="!$v.formData.endYear.checkErrorEndYear">
                  {{ $t("end_year_not_valid")}}
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
                   v-if="$v.formData.selectedFile.$dirty && !$v.formData.selectedFile.required">{{ $t('file-required')
                }}
              </div>
              <div class="invalid-feedback d-block"
                   v-if="$v.formData.selectedFile.$dirty && !$v.formData.selectedFile.isValidSize">{{
                $t('file.isValidSize') }}
              </div>
              <div class="mt-3" v-if="formData.selectedFile">
                <font-awesome-icon style="font-size: x-large" :icon="['fas', 'file-alt']"/>
                <span class="mx-2">{{ formData.selectedFile ? Math.trunc(formData.selectedFile.size / 1024) + " KB" : '' }}</span>
              </div>
            </b-form-group>
            <b-form-row>
              <b-button class="col-4 float-right form-control btn btn-crl  btn-primary submit px-3" type="submit">
                {{ $t('add')}}
              </b-button>
            </b-form-row>
          </b-form>
        </b-row>
        <b-row class="w-100 mx-0">
          <div class="col-lg-4 p-1" v-for="item in t_items" :key="item.id">
            <b-card>
              <a @click="showDeleteComfirm(item)" class="font-color float-right">
                <font-awesome-icon :icon="['fas', 'trash-alt']"/>
              </a>
              <div class="small font-weight-bold title-color">
                Certificate Name:
              </div>
              <div>
                {{ item.certName}}
              </div>
              <hr class="my-2">
              <div class="small font-weight-bold title-color">
                Description:
              </div>
              <div>
                {{ item.description}}
              </div>
              <hr class="my-2">
              <div class="small font-weight-bold title-color">
                Issued by :
              </div>
              <div>
                {{ item.issuedby}}
              </div>
              <hr class="my-2">
              <div class="small font-weight-bold title-color">
                Years:
              </div>
              <div> {{item.startYear}} - {{ item.endYear}}</div>
              <hr class="my-2">
              <a @click="downloadFile(item)"
                 class="circle-icon white-icon d-flex align-items-center justify-content-center">
                <font-awesome-icon :icon="['fas', 'file-alt']"/>
              </a>
            </b-card>
          </div>
        </b-row>
        <div class="p-4">
          <b-button class="form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2" to="/tutor-subject">{{
            $t('back')}}
          </b-button>
          <b-button class="form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg " to="/reg-educ">
            {{ $t('next')}}
          </b-button>
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
    middleware: 'auth',
    name: "reg-cert",
    data() {
      return {
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
              this.t_items = rsp.data
              this.clear()
            }
          ).catch(error => {
            if (error.response.data.errors) {
              this.errors = error.response.data.errors
            }
          })


        }
      },


      makeToast(variant = 'success', header = 'Message', msg = '') {
        this.$bvToast.toast(this.$t(msg), {
          title: header,
          variant: variant,
          solid: true
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
        this.$axios.post('cert/certList', null).then((res) => {
          this.t_items = [];
          this.t_items = res.data

          //debug
          console.log(res.data);

        }).catch(error => {
          if (error.response.data.errors) {
            this.errors = error.response.data.errors
          }
          console.log(error)
        });
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
      clear()
      {
        this.formData.selectedFile = null
        this.formData.userId = 0
        this.formData.certName= ''
        this.formData.description= ''
        this.formData.startYear= 1960
        this.formData.endYear= 1961
        this.formData.issuedby= ''
        this.$v.$reset()
      },
      downloadFile(rowId) {
        try {
          this.defaultData.id = rowId.id
          // this.$axios.get(`/download/${rowId.id}`).then((res) => {
          //   console.log("Downloaded")
          //
          // }).catch(error => {
          //   if (error.response.data.errors) {
          //     this.errors = error.response.data.errors
          //   }
          //   console.log(error)
          // });
          var c = {responseType: 'blob'}

          this.$axios.get(`/download/${rowId.id}`, c).then((response) => {
            console.log(response)
            var fileURL = window.URL.createObjectURL(new Blob([response.data], {type: 'application/file'}));
            var fileLink = document.createElement('a');
            var filename = response.headers['filename']
            // ? decodeURI(
            //   cd.parse(response.headers['content-disposition']).parameters.filename
            // )
            // : path.basename(response.request.uri.path)

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
