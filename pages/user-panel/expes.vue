<template>
  <div>
    <b-container class="container-padding" fluid>
      <b-row class="d-md-flex m-center">
        <div class="login-wrap px-xl-5 px-lg-5 px-md-3 px-sm-2 px-2 col-md-12 col-lg-12 col-xl-12">
          <b-row class="w-100">
            <h3 class="mb-2">{{ $t('experience.title') }}</h3>
          </b-row>
          <b-row class="mt-2 w-100">
            <b-button v-b-toggle.add_panel @click="addButton"
                      class="btn btn-crl  btn-primary ">Add New
            </b-button>
            <b-modal hide-header hide-footer centered v-model="visible" id="add_panel">

              <b-form class="w-100" @submit.stop.prevent="onSubmit" @reset="onReset">

                <b-form-group id="input-group-name" :label="$t('experience-company-label')+':'"
                              label-for="input-company">
                  <b-form-input
                    id="input-company"
                    v-model.trim="$v.formData.company.$model"
                    :class="{ 'is-invalid': $v.formData.company.$error }"
                    :placeholder="$t('experience-company-enterHelp')"
                  ></b-form-input>
                  <div class="invalid-feedback" v-if="!$v.formData.company.required">
                    {{ $t('experience-company-required') }}
                  </div>
                  <div class="invalid-feedback" v-if="!$v.formData.company.serverError">{{
                      $t(errors.company.msg)
                    }}
                  </div>
                </b-form-group>

                <b-form-group id="input-group-position" :label="$t('experience.position.label')+':'"
                              label-for="input-position">
                  <b-form-input
                    id="input-position"
                    v-model.trim="$v.formData.position.$model"
                    :class="{ 'is-invalid': $v.formData.position.$error }"
                    :placeholder="$t('experience.position.enterHelp')"
                  ></b-form-input>
                  <div class="invalid-feedback" v-if="!$v.formData.position.required">
                    {{ $t('experience.position.required') }}
                  </div>
                  <div class="invalid-feedback" v-if="!$v.formData.position.serverError">{{
                      $t(errors.position.msg)
                    }}
                  </div>
                </b-form-group>
                <b-form-row>
                  <b-form-group class="col-6" id="input-group-startYear" :label="$t('startYear.label')+':'"
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
                    <div class="invalid-feedback" v-if="!$v.formData.startYear.checkErrorEndYear">
                      {{ $t("start_year_not_valid") }}
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
            :opacity=0.8
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
                    Company Name:
                  </div>
                  <div>
                    {{ item.company }}
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
                    Work Position:
                  </div>
                  <div>
                    {{ item.position }}
                  </div>
                  <hr class="my-2">
                  <div class="small font-weight-bold title-color">
                    Years:
                  </div>
                  <div> {{ item.startYear }} - {{ item.endYear }}</div>

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
        userId: 0,
        company: '',
        position: '',
        startYear: 1960,
        endYear: 1961,
      },

    }
  },
  validations: {
    formData: {
      company: {
        required,
        serverError(value) {
          return this.serverError(value, "company")
        }

      },
      position: {
        required,
        serverError(value) {
          return this.serverError(value, "position")
        }
      },
      startYear: {
        required,
      },
      endYear: {
        required,
        checkErrorEndYear(value) {
          return (this.formData.startYear == null || value > this.formData.startYear);
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
        this.$axios.post('/experience/create', this.formData).then(
          rsp => {
            this.t_items = rsp.data
            this.clear()

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
      this.loaded = true
      this.$axios.post('experience/list', null).then((res) => {
        this.loaded = true
        this.t_items = res.data
      }).catch(error => {
        this.loaded = true
        if (error.response.data.errors) {
          this.errors = error.response.data.errors
        }
      }).finally(() => {
        this.loaded = false

      })
    },
    clear() {
      this.formData.userId = 0
      this.formData.company = ''
      this.formData.position = ''
      this.formData.startYear = 1960
      this.formData.endYear = 1961

      this.visible = false
      this.addButtonVisible = true
      this.$v.$reset()
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
            this.loaded = true
            this.delComfirm = value

            if (value === true) {
              this.delData.expeId = item.id
              this.$axios.post('/experience/delete', this.delData).then((res) => {
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
