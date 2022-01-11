<template>
  <div class="main-body-container-content">
    <b-container  class="container-padding">
      <b-row v-if="!CongratulationsVisible" class="d-md-flex col-md-12 col-lg-10 m-center">
        <div class="text-wrap p-4 p-lg-5  d-flex text-center align-items-center ">
          <div class="text w-100">
            <h2>{{$t('welcomeRegister')}}</h2>
            <p  style="margin-top: 100px">{{$t('alreadyAccount')}}</p>
            <b-button pill class=" btn-white btn-outline-white" :to="localePath('/login')">{{$t('signIn')}}</b-button>
          </div>
        </div>
        <div class="login-wrap p-4 p-lg-5">
          <b-overlay
            :show="busy"
            rounded="lg"
            variant="white"
            opacity="0.8"
          >
          <b-form @submit.stop.prevent="onSubmit"
                  @reset="onReset">

              <div class="d-flex">
                <div class="w-100">
                  <h3 class="mb-4">{{$t('signUp')}}</h3>
                </div>
              </div>
              <b-form-group>
                <div class="text-center">
                  <span class="social-media d-flex justify-content-center">
                     <span :class="{'reg-type-active' : registerForm.role === 'student'}">
                       <b-img v-on:click="registerForm.role = 'student'" class="mx-3 reg-type"
                              :src="require('@/assets/student.svg')" width="70"
                              rounded="circle" alt="student"></b-img>
                       <div style="color: #aaa">{{$t('student')}}</div>
                    </span>
                    <span :class="{'reg-type-active' : registerForm.role !== 'student'}">
                       <b-img v-on:click="registerForm.role = 'tutor'" class="mx-3 reg-type"
                              :src="require('@/assets/tutor.svg')" width="70" rounded="circle"
                              alt="tutor"></b-img>
                       <div style="color: #aaa">{{$t('tutor')}}</div>
                    </span>
                  </span>
                  <b-form-input
                    :class="{ 'is-invalid': $v.registerForm.role.$error }"
                    v-show="false"
                    v-model.trim="$v.registerForm.role.$model"
                  ></b-form-input>
                  <div  class="invalid-feedback" v-if="!$v.registerForm.role.serverError">{{ $t(errors.role.msg) }}</div>

                </div>

              </b-form-group>
              <b-form-group id="input-group-Login1" :label="$t('email')+':'"
                            label-for="input-mail-login">
                <b-form-input
                  :class="{ 'is-invalid': $v.registerForm.email.$error }"
                  autocomplete="off"
                  id="input-mail-login"
                  v-model.trim="$v.registerForm.email.$model"
                ></b-form-input>
                <div class="invalid-feedback" v-if="!$v.registerForm.email.required">{{$t('emailRequired')}}
                </div>
                <div class="invalid-feedback" v-if="!$v.registerForm.email.email">{{$t('emailNotValid')}}
                </div>
                <div class="invalid-feedback" v-if="!$v.registerForm.email.serverError">{{ $t(errors.email.msg) }}</div>
              </b-form-group>
              <b-form-group id="input-group-Login2"  :label="$t('password')+':'"
                            label-for="input-password-login">
                <b-form-input
                  :class="{ 'is-invalid': $v.registerForm.password.$error}"
                  autocomplete="off"
                  type="password"
                  id="input-password-login"
                  v-model.trim="$v.registerForm.password.$model"
                ></b-form-input>
                <div class="invalid-feedback" v-if="!$v.registerForm.password.minLength">
                  {{ $t('passwordMinLen',{minLenNum:$v.registerForm.password.$params.minLength.min})}}
                </div>
                <div class="invalid-feedback" v-if="!$v.registerForm.password.required">{{ $t('passwordRequired') }}</div>
                <div class="invalid-feedback" v-if="!$v.registerForm.password.serverError">{{ $t(errors.password.msg) }}</div>
              </b-form-group>
              <b-form-group id="input-group-Login2" :label="$t('confirmPassword')+':'"
                            label-for="input-cPassword-login">
                <b-form-input
                  :class="{ 'is-invalid': $v.registerForm.cPassword.$error}"
                  autocomplete="off"
                  type="password"
                  id="input-cPassword-login"
                  v-model.trim="$v.registerForm.cPassword.$model"
                ></b-form-input>
                <div class="invalid-feedback" v-if="!$v.registerForm.cPassword.sameAsPassword">{{$t('passwordsIdentical')}}
                </div>
              </b-form-group>
              <b-form-group class="mb-4">
                <div class="d-md-flex">
                  <div class="text-left custom-control custom-checkbox ">
                    <input type="checkbox" class="custom-control-input"
                           :class="{ 'is-invalid': $v.registerForm.ruleCheck.$error}"
                           v-model="$v.registerForm.ruleCheck.$model"
                           id="customCheck"
                           name="example1">

                    <label class="custom-control-label small pt-1" for="customCheck">{{$t('agree')}}
                      <b-link href="./legal/terms-of-agreement" target="_blank" class="sign-link-color">{{$t('termsConditions')}}</b-link>
                      {{$t('and')}}
                      <b-link href="./legal/privacy-policy" target="_blank" class="sign-link-color">{{$t('privacyPolicy')}}</b-link>
                    </label>
                    <div   class="invalid-feedback" v-if="!$v.registerForm.ruleCheck.check"  >{{$t('privacyPolicyChecked')}}</div>
                  </div>
                   </div>
              </b-form-group>
              <div class="invalid-feedback">Please Checked This Terms</div>
            <b-form-group>

              <b-button class="form-control btn btn-primary submit px-3" type="submit">{{ $t('register')}} </b-button>

            </b-form-group>
          </b-form>
        </b-overlay>
        </div>

      </b-row>
      <b-row v-else class="d-md-flex col-md-12 col-lg-10 m-center">
        <b-card header-tag="header" class="m-center">
          <template #header>
            <b-row class="w-100 "  >

              <svg xmlns="http://www.w3.org/2000/svg"
                   width="32" style="fill: green" height="32" fill="currentColor"
                   class="bi bi-patch-check" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
              </svg>
              <div style="text-align: center" class="mt-2 ml-2">
                Congratulations
              </div>

            </b-row>
          </template>

          <b-row class="w-100 mt-1 ml-2">
            {{$t("comfirm_email_after_register")}}
          </b-row>
          <b-row>
            <b-button  class="btn-primary  btn ctl-btn m-center mt-4" @click="goHome">OK</b-button>
          </b-row>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>


<script>


import {library} from '@fortawesome/fontawesome-svg-core'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'

import {required, minLength, sameAs, email} from "vuelidate/lib/validators";
import jwt_decode from "jwt-decode";

// import {required, numeric, minLength, maxLength} from "vuelidate/lib/validators";


library.add(faGoogle)
library.add(faFacebookF)

export default {
  middleware: 'auth',
  auth: 'guest',
  name: 'Register',
  components: {},
  head () {
    return {
      title: this.$t('signUp'),
      meta: [
        {
          name: 'description',
          content: 'Register with Google or Facebook or can create an account'
        },
        {
          name: 'keywords',
          content: 'sign up,register, google, facebook, account'
        }
      ]
    }
  },
  data() {
    return {
      busy: false ,
      CongratulationsVisible: false,
      registerForm: {
        role: 'student',
        email: '',
        password: '',
        cPassword: '',
        ruleCheck: false,
        name: '',
        lastName: '',
        program: '',
        token: null
      },
      errors: null,
    }
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.log(e);
    }
  },
  validations: {
    registerForm: {
      role: {
        required,
        serverError(value) {
          if (value === '') {
            return true
          }
          return !(this.errors != null && this.errors.role && value === this.errors.role.value)
        }
      },
      email: {
        required,
        email,
        serverError(value) {
          if (value === '') {
            return true
          }
          return !(this.errors != null && this.errors.email && value === this.errors.email.value)
        }
      },
      password: {
        required,
        minLength: minLength(6),
        serverError(value) {
          if (value === '') {
            return true
          }
          return !(this.errors != null && this.errors.password && value === this.errors.password.value)
        }
      },
      cPassword: {
        sameAsPassword: sameAs('password')
      },
      ruleCheck: {
        check(value)
        {

          return value

        }
      },
    }
  },
  methods: {

    onReset(evt) {
      evt.preventDefault()
      // Reset our registerForm values
      this.registerForm.role = 'student'
      this.registerForm.email = ''
      this.registerForm.password = ''
      this.registerForm.cPassword = ''

    },
    showOverlay()
    {
      this.busy = true
    },
    hideOverlay()
    {
      this.busy = false
    },
    async onSubmit(evt) {

      let this1 = this
      this.$v.$reset()
      this.errors = null
      evt.preventDefault()
      this.$v.registerForm.$touch()
      if (this.$v.registerForm.$invalid) {
        console.log("vuelidate error")
      } else {
        let token = null
        try {
          this.showOverlay()
          token = await this.$recaptcha.execute('register')
          this1.registerForm.token = token
          this1.$axios.post('user/create', this1.registerForm)
            .then(async (res) => {
              this.hideOverlay()
              // localStorage.setItem('userToken', res.data)
              let loginForm = {
                email: this1.registerForm.email,
                password: this1.registerForm.password,
                token : await this.$recaptcha.execute('login')
              }
              let response = await this1.$auth.loginWith('local', {data: loginForm})
              const oldRedirect = this1.$auth.options.redirect;
              this1.$auth.options.redirect = false;
              await this1.$auth.setUserToken(response.data.token)
              this1.$auth.options.rewriteRedirects = oldRedirect;
              let decoded = jwt_decode(response.data.token);
              this1.$auth.setUser(decoded)

              if (this1.registerForm.role === 'student')
                this1.$router.push('/student-details')
              else
                this1.$router.push('/tutor-details')

            })
            .catch(error => {
              this.hideOverlay()
              if (error.response.data.errors) {
                this1.errors = error.response.data.errors
              }
            })

        } catch (error) {
          this.hideOverlay()
          console.log('Login error:', error)
        }


      }

    }
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
  }
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
  border: 1px solid var(--color1);
  background: linear-gradient( 135deg, rgba(var(--gradian-color2)) 0%,rgba(var(--gradian-color1)) 100%);
  color: #fff;
}

.social-media .social-icon {
  display: block;
  width: 40px;
  height: 40px;
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 1);
  font-size: 16px;
  margin-right: 5px;
  border-radius: 50%;
}

.social-media .social-icon:hover, .social-media .social-icon:focus {
  background: #fff;
  color: var(--color2);
}

input:focus, textarea:focus, select:focus {
  outline: none !important;
}

.reg-type {
  border: 3px solid #ccc;
  cursor: pointer;
}

.reg-type-active img {
  border: 3px solid var(--color2) !important;

}

.reg-type-active div {
  color: var(--color2) !important;

}
</style>
