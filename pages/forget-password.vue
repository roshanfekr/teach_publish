<template>
  <div class="main-body-container-content">
    <b-container class="container-padding">
      <b-row v-if="response.msg!= '' " class="d-md-flex col-md-12 col-lg-10 m-center">
        <b-row class="d-md-flex col-md-12 col-lg-10 m-center">
          <b-alert :variant="response.variant" class="w-100" show>{{response.msg}}</b-alert>

        </b-row>
        <b-row class="d-md-flex col-md-12 col-lg-10 m-center">
          <b-button class="btn btn-crl-mini btn-primary " to="/login">Continue</b-button>
        </b-row>
      </b-row>
      <b-row v-else class="d-md-flex col-md-12 col-lg-10 m-center">
        <div class="text-wrap p-4 p-lg-5   d-flex text-center align-items-center ">
          <div class="text w-100">
            <h2>{{$t('forgetPasswordTitle')}}</h2>
            <p class="mt-5">{{$t('rememberPassword')}}</p>
            <b-button pill class="my-3 btn-white btn-outline-white"  :to="localePath('/login')" >{{$t('signIn')}}</b-button>

          </div>
        </div>
        <div class="login-wrap p-4 p-lg-5">
          <b-form class="m-right" @submit.stop.prevent="onSubmit"
                  @reset="onReset">
            <div class="d-flex">
              <div class="w-100">
                <h3 class="mb-4 font-weight-bold" style="font-size: medium ; ">{{$t('forgetPassword')}}</h3>
              </div>
            </div>
            <b-form-group id="input-group-Login1"  :label="$t('email')"
                          label-for="input-email-login">
              <b-form-input
                :class="{ 'is-invalid': $v.formData.email.$error }"
                autocomplete="off"
                id="input-email-login"
                v-model.trim="$v.formData.email.$model"
              ></b-form-input>
              <div class="invalid-feedback" v-if="!$v.formData.email.required">{{ $t('emailRequired') }}
              </div>
              <div class="invalid-feedback" v-if="!$v.formData.email.serverError">
                {{errors.email.msg}}
              </div>
            </b-form-group>

            <b-form-group>
              <b-button class="form-control btn btn-primary submit px-3" type="submit">{{ $t('send') }}</b-button>
            </b-form-group>
          </b-form>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>


  import {required} from "vuelidate/lib/validators";


  export default {
    middleware: 'auth',
    auth: 'guest',
    name: 'ForgetPassword',
    components: {},
    data() {
      return {
        response:{
          msg:'',
          variant:''
        },
        formData: {
          email: '',
        },
        errors: null,
      }
    },
    validations: {
      formData: {
        email: {
          required,
          serverError(value) {
            if (value === '') return true
            return !(this.errors != null && this.errors.email && value == this.errors.email.value)
          }
        },
      }
    },
    head() {
      return {
        title: 'Forget Password',
        meta: [
          {
            name: 'description',
            content: 'sign in with Google or Facebook or can create an account'
          },
          {
            name: 'keywords',
            content: 'sign in, login, google, facebook, account'
          }
        ]
      }
    },
    mounted() {
    },
    methods: {

      onReset(evt) {
        evt.preventDefault()
        // Reset our formData values
        this.formData.email = ''

      },

      async onSubmit(evt) {
        this.$v.$reset()
        this.errors = null
        evt.preventDefault()
        this.$v.formData.$touch()
        if (this.$v.formData.$invalid) {
          console.log("vuelidate error")
        } else {
          this.$axios.post('user/forget-password', this.formData).then(async (res) => {
            this.response = res.data
          }).catch(error => {
            if (error.response.data.errors) {
              this.errors = error.response.data.errors
            }
            console.log(error)
          })
        }
      }
    },
  }
</script>

<style scoped>
  @media (max-width: 991.98px) {
    .text-wrap, .login-wrap {
      width: 100% !important;
    }
  }

  .text-wrap, .login-wrap {
    width: 50%;
  }

  .text-wrap {
    background: var(--color2);
    border: 1px solid var(--color2);
    color: #fff;
    background: var(--color1);
    background: -moz-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);
    background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(var(--gradian-color1))), color-stop(100%, rgba(var(--gradian-color2))));
    background: -webkit-linear-gradient(
      -45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);
    background: -o-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);
    background: -ms-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);
    background: -webkit-linear-gradient(
      315deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);
    background: -o-linear-gradient(315deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);
    background: linear-gradient(
      135deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=rgba(var(--gradian-color1)), endColorstr=rgba(var(--gradian-color2)), GradientType=1);
  }


  .btn.btn-white.btn-outline-white {
    border: 1px solid #fff;
    background: transparent;
    color: #fff;
  }

  .btn.btn-white {
    background: #fff;
    border: 1px solid #fff;
    color: #fff;
  }

  .btn {
    height: 48px !important;

    cursor: pointer;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    font-size: 15px;
    padding: 12px 20px;
    border-radius: 50px;
  }

  .btn.btn-white.btn-outline-white:hover {
    border: 1px solid transparent;
    background: #fff;
    color: #000;
  }

  .btn.btn-primary {
    background: var(--color2);
    border: 1px solid var(--color2);
    color: #fff;
    background: var(--color1);
    background: -moz-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);
    background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(var(--gradian-color1))), color-stop(100%, rgba(var(--gradian-color2))));
    background: -webkit-linear-gradient(
      -45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);
    background: -o-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);
    background: -ms-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);
    background: -webkit-linear-gradient(
      315deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);
    background: -o-linear-gradient(315deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);
    background: linear-gradient(
      135deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=rgba(var(--gradian-color1)), endColorstr=rgba(var(--gradian-color2)), GradientType=1);
  }


  .btn.btn-primary:hover {
    border: 1px solid var(--color2);
    background: linear-gradient( 135deg, rgba(var(--gradian-color2)) 0%,rgba(var(--gradian-color1)) 100%);
    color: #fff;
  }

  .social-media .social-icon {
    display: block;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.05);
    font-size: 16px;
    margin-right: 5px;
    border-radius: 50%;
  }

  .social-media .social-icon:hover, .social-media .social-icon:focus {
    background: linear-gradient( 135deg, rgba(var(--gradian-color2)) 0%,rgba(var(--gradian-color1)) 100%);
    color: #fff;
  }

  input:focus, textarea:focus, select:focus {
    outline: none !important;
  }

</style>
