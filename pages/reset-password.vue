<template>
  <b-container class="container-padding">
    <b-row class="d-md-flex col-md-12 col-lg-10 m-center">
      <div v-if="response.variant === ''" class="w-100 d-flex justify-content-center mb-3">
        <b-spinner style="width: 3rem; height: 3rem;" variant="danger"  type="grow" label="Loading..."></b-spinner>
      </div>
      <b-row v-else-if="response.variant=== 'danger' " class="d-md-flex col-md-12 col-lg-10 m-center">
        <b-alert :variant="response.variant" class="w-100" show>{{response.msg}}</b-alert>
      </b-row>
      <div v-else-if="response.variant=== 'success' " class="login-wrap p-4 p-lg-5">
      <b-form @submit.stop.prevent="onSubmit"
              @reset="onReset">
        <div class="d-flex">
          <div class="w-100">
            <h3 class="mb-4">{{$t('accountSetting')}}</h3>
          </div>
        </div>
        <h5>
          {{$t('changePassword')}}
        </h5>
        <hr class="mt-0 mb-2">
        <b-form-group id="input-group-Login2" :label="$t('newPassword')"
                      label-for="input-password-login">
          <b-form-input
            :class="{ 'is-invalid': $v.formData.password.$error}"
            autocomplete="off"
            type="password"
            id="input-password-login"
            v-model.trim="$v.formData.password.$model"
          ></b-form-input>
          <div class="invalid-feedback" v-if="!$v.formData.password.minLength">
            {{ $t('passwordMinLen',{minLenNum:$v.formData.password.$params.minLength.min})}}
          </div>
          <div class="invalid-feedback" v-if="!$v.formData.password.required">{{ $t('passwordRequired') }}</div>
          <div class="invalid-feedback" v-if="!$v.formData.password.serverError">{{ $t(errors.password.msg) }}</div>
        </b-form-group>
        <b-form-group id="input-group-Login2" :label="$t('confirmNewPassword')"
                      label-for="input-cPassword-login">
          <b-form-input
            :class="{ 'is-invalid': $v.formData.cPassword.$error}"
            autocomplete="off"
            type="password"
            id="input-cPassword-login"
            v-model.trim="$v.formData.cPassword.$model"
          ></b-form-input>
          <div class="invalid-feedback" v-if="!$v.formData.cPassword.sameAsPassword">{{$t('passwordsIdentical')}}
          </div>
        </b-form-group>
        <b-form-group>
          <b-button class="form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2" type="submit">{{
              $t('save')}}
          </b-button>
        </b-form-group>


      </b-form>
      </div>
    </b-row>
  </b-container>
</template>

<script>



import {required, minLength, sameAs} from "vuelidate/lib/validators";
import jwt_decode from "jwt-decode";
export default {
  middleware: 'auth',
  auth: 'guest',
  name: 'reset-password',
  components: {},
  data() {
    return {
      formData: {
        email: '',
        resetCode: '',
        password: '',
        cPassword: ''
      },
      response:{
        msg:'',
        variant:''
      },
      errors: null,
    }
  },
  validations: {
    formData: {
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
    }
  },
  head() {
    return {
      title: 'Reset Password',
      meta: [
        {
          name: 'description',
          content: 'Activation your account , email'
        },
        {
          name: 'keywords',
          content: 'active, account, email'
        }
      ]
    }
  },
  mounted() {
    this.formData.resetCode = this.$route.query.code
    this.formData.email = this.$route.query.email
    this.checkResetCode()
  },
  methods: {
    checkResetCode() {
      this.$axios.post('user/reset-password-code', this.formData).then(async (res) => {
        console.log(res.data)
        this.response = res.data
      }).catch(error => {
        this.response = error.response.data
        console.log(error)
      })
    },

    onReset(evt) {
      evt.preventDefault()
      this.formData.password = ''
      this.formData.cPassword = ''
    },
    onSubmit(evt) {
      this.$v.$reset()
      this.errors = null
      evt.preventDefault()
      this.$v.formData.$touch()
      if (this.$v.formData.$invalid) {
        console.log("vuelidate error")
      } else {
        this.$axios.post('user/reset-password', this.formData).then(async (res) => {
          this.makeToast('success', 'Message', this.$t('passwordChanged'))

          let loginForm = {
            email: this.formData.email,
            password: this.formData.password
          }
          let response = await this.$auth.loginWith('local', {data: loginForm})
          await this.$auth.setUserToken(response.data.token)
          let decoded = jwt_decode(response.data.token);
          this.$auth.setUser(decoded)

          this.$router.push('/')


          console.log(res.data)
        }).catch(error => {
          if (error.response.data.errors) {
            this.errors = error.response.data.errors
          }
          console.log(error.response)
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
  },

}
</script>

<style scoped>

</style>
