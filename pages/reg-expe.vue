<template>
  <div class="main-body-container-content">
    <b-container class="container-padding">
      <b-row class="col-md-12 pb-5 col-lg-10 m-center">
        <div class="w-100">
          <h3 class="mb-4 text-center">{{$t('completeRegistration')}}</h3>
        </div>
        <b-row class="w-100 mx-0">
          <h4 class="mb-2">{{$t('resume')}}</h4>
          <b-progress value="5" max="5" class="w-100" height="10px" variant="danger"></b-progress>
          <span>5/6</span>
        </b-row>
        <b-row class="mx-0 pt-5 pb-4 col-xl-7 col-lg-8 col-md-12">
          <b-form class="w-100"  @submit.stop.prevent="onSubmit" @reset="onReset">

            <b-form-group id="input-group-name" :label="$t('company-label')+':'" label-for="input-company">
                <b-form-input
                  id="input-company"
                  v-model.trim="$v.formData.company.$model"
                  :class="{ 'is-invalid': $v.formData.company.$error }"
                  :placeholder="$t('enterTitle')"
                ></b-form-input>
                <div class="invalid-feedback" v-if="!$v.formData.company.required">{{ $t('company-required') }}</div>
                <div class="invalid-feedback" v-if="!$v.formData.company.serverError">{{
                  $t(errors.company.msg)
                  }}
                </div>
            </b-form-group>

            <b-form-group id="input-group-name" :label="$t('position.label')+':'" label-for="input-position">
                <b-form-input
                  id="input-position"
                  v-model.trim="$v.formData.position.$model"
                  :class="{ 'is-invalid': $v.formData.position.$error }"
                  :placeholder="$t('enterPosition')"
                ></b-form-input>
                <div class="invalid-feedback" v-if="!$v.formData.position.required">{{ $t('position.required') }}</div>
                <div class="invalid-feedback" v-if="!$v.formData.position.serverError">{{
                  $t(errors.position.msg)
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
                <div class="invalid-feedback" v-if="!$v.formData.startYear.required">{{ $t('startYear.required') }}
                </div>
                <div class="invalid-feedback" v-if="!$v.formData.startYear.checkErrorEndYear">
                  {{ $t("start_year_not_valid")}}
                </div>
              </b-form-group>

              <b-form-group class="col-6" id="input-group-name" :label="$t('endYear.label')+':'" label-for="input-endYear">
                <b-form-select
                  id="input-endYear"
                  v-model.trim="$v.formData.endYear.$model"
                  :options="computedYears"
                  :class="{ 'is-invalid': $v.formData.endYear.$error }"
                ></b-form-select>
                <div class="invalid-feedback" v-if="!$v.formData.endYear.required">{{ $t('endYear.required') }}</div>
                <div class="invalid-feedback" v-if="!$v.formData.endYear.checkErrorEndYear">
                  {{ $t("end_year_not_valid")}}
                </div>
              </b-form-group>
            </b-form-row>
            <b-form-row>
              <b-button class="col-4 float-right form-control btn btn-crl  btn-primary submit px-3" type="submit">
                {{ $t('add')}}
              </b-button>
            </b-form-row>
          </b-form>
        </b-row>
        <b-row class="w-100 mx-0">
          <div class="col-lg-4 p-1" v-for="item in t_items" :key="item.id">
            <b-card >
              <a @click="showDeleteComfirm(item)" class="font-color float-right">
                <font-awesome-icon  :icon="['fas', 'trash-alt']"/>
              </a>
              <div class="small font-weight-bold title-color">
                Company Name:
              </div>
              <div>
                {{ item.company}}
              </div>
              <hr class="my-2">
              <div class="small font-weight-bold title-color">
                Work Position:
              </div>
              <div>
                {{ item.position}}
              </div>
              <hr class="my-2">
              <div class="small font-weight-bold title-color">
                Years:
              </div>
              <div>  {{item.startYear}} - {{ item.endYear}}</div>

            </b-card>
          </div>
        </b-row>
        <div class="p-4">
          <b-button class="form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2" to="/reg-educ">{{
            $t('back')}}
          </b-button>
          <b-button class="form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg" to="/tutor-timing">
            {{ $t('next')}}
          </b-button>
        </div>
      </b-row>
  </b-container>
  </div>
</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core'

  import {faTrashAlt,faFileAlt} from '@fortawesome/free-solid-svg-icons'

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


          this.$axios.post('/experience/create', this.formData).then(
            rsp => {
              this.t_items = rsp.data
              console.log(rsp)
            }
          ).catch(error => {
            if (error.response.data.errors) {
              this.errors = error.response.data.errors
            }
            console.log(error)
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
        this.$axios.post('experience/list', null).then((res) => {
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
