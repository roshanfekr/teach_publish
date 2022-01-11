<template>
  <b-container class="container-padding">
    <b-row class="d-md-flex m-center">
      <div class="login-wrap px-xl-5 px-lg-5 px-md-3 px-sm-2 px-2 col-md-12 col-lg-10 col-xl-8">
      <b-form @submit.stop.prevent="onSubmit" @reset="onReset">
        <div class="d-flex">
          <div class="w-100">
            <h3 class="mb-4">{{$t('accountSetting')}}</h3>
          </div>
        </div>
        <h5> {{$t('email')}}</h5>
        <hr class="mt-0 mb-2">
        <div class="mt-4">

          <span class="font-weight-bold " style="font-size: large">{{$auth.user.email}}</span>
          <b-badge v-if="$auth.loggedIn && $auth.user.emailConfirmed === true" variant="success">{{$t("account.verified")}}
            <font-awesome-icon :icon="['fas', 'check-circle']"/>
          </b-badge>
          <b-badge v-else  variant="warning">{{$t("account.unVerified")}}  <font-awesome-icon :icon="['fas', 'exclamation-triangle']"/>
          </b-badge>
          <b-alert :show="$auth.loggedIn && $auth.user.emailConfirmed !== true"
                   class="mt-3"
                   variant="warning">
            {{$t("account.unVerifiedAlert")}}
            <br/>
            <br/>
            {{$t("account.reSendMessage")}}
            <br/>
            <b-button class="mt-2" variant="info" @click="reSendVerificationEmail" size="sm">{{$t('account.sendEmailAgain')}}</b-button>
          </b-alert>
        </div>
        <div class="mt-4">

          <b-alert v-if="hasRole('tutor')" :show="$auth.loggedIn "
                   class="mt-3"
                   :variant="disable === null || disable === false? 'danger' : 'info'">
            {{ disable === null || disable === false ? $t("account.disableMessage") : $t("account.activeMessage")}}
            <br/>
            <b-button class="mt-2" v-if="disable === null || disable === false" variant="warning" @click="disableAccount" size="sm">
              <b-spinner v-show="disBusy" small type="grow"></b-spinner>
              {{$t('account.disable')}}</b-button>
            <b-button class="mt-2" v-if="disable === true" variant="info" @click="activeAccount" size="sm">
              <b-spinner v-show="disBusy" small type="grow"></b-spinner>

              {{$t('account.active')}}</b-button>
          </b-alert>

<!--          <b-alert :show="(deleteAccount === false || deleteAccount === null)"-->
<!--                   class="mt-3"-->
<!--                   variant="danger">-->

<!--            {{$t("account.disableMessage")}}-->
<!--            <br/>-->
<!--            <b-button class="mt-2" variant="danger" @click="deleteAccount" size="sm">{{$t('account.delete')}}-->

<!--              <b-spinner v-show="delbusy" small type="grow"></b-spinner>-->
<!--            </b-button>-->
<!--          </b-alert>-->


        </div>

        <h5 class="mt-5">
          {{$t('changePassword')}}
        </h5>
        <hr class="mt-0 mb-2">
        <b-form-group :label="$t('oldPassword')+':'"
                      label-for="input-oldPassword-login">
          <b-form-input
            :class="{ 'is-invalid': $v.formData.oldPassword.$error}"
            autocomplete="off"
            type="password"
            id="input-oldPassword-login"
            v-model.trim="$v.formData.oldPassword.$model"
          ></b-form-input>
          <div class="invalid-feedback" v-if="!$v.formData.oldPassword.required">{{ $t('oldPasswordRequired') }}
          </div>
          <div class="invalid-feedback" v-if="!$v.formData.oldPassword.serverError">{{ $t(errors.oldPassword.msg) }}
          </div>
        </b-form-group>
        <b-form-group id="input-group-Login2" :label="$t('newPassword')+':'"
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
        <b-form-group id="input-group-Login2" :label="$t('confirmNewPassword')+':'"
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
          <b-button class="form-control btn btn-crl  btn-primary submit  mt-4 btn-reg w-30" type="submit">{{
              $t('changePassword')}}
          </b-button>
        </b-form-group>


      </b-form>
      </div>
    </b-row>
  </b-container>
</template>

<script>


import {library} from '@fortawesome/fontawesome-svg-core'
import {faCheckCircle,faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
library.add(faCheckCircle,faExclamationTriangle)
import {required, minLength, sameAs} from "vuelidate/lib/validators";

export default {
  layout: 'UserPanel',
  name: 'Account',
  components: {},
  data() {
    return {
      disBusy: false,
      delbusy: false,
      disable: null ,
      deleteAccount: null ,
      errors: null,
      formData: {
        oldPassword: '',
        password: '',
        cPassword: '',
      },
    }
  },
  validations: {
    formData: {
      oldPassword: {
        required,
        serverError(value) {
          if (value === '') {
            return true
          }
          return !(this.errors != null && this.errors.oldPassword && value === this.errors.oldPassword.value)
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
    }
  },
  mounted() {
    this.getDisableStatus()
  },

  methods: {
    hasRole: function (role) {
      return this.$auth.hasScope(role)
    },
    onReset(evt) {
      evt.preventDefault()
      this.formData.oldPassword = ''
      this.formData.password = ''
      this.formData.cPassword = ''
    },
    reSendVerificationEmail(){
      this.$axios.post('user/reSendVerificationEmail').then((res) => {
        this.makeToast('success', 'Message', this.$t('account.reSendSuccessFull'))
        console.log(res.data)
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors
        }
        console.log(error.response)
      })
    },

    getDisableStatus(){
      this.$axios.post('/user/get-disable-status').then((res) => {
        this.disable = res.data.disable
        this.deleteAccount = res.data.del

      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors
        }
        console.log(error.response)
      })
    },

    disableAccount() {

      this.$bvModal.msgBoxConfirm(this.$t('account.disable.alert'), {
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
          if (value === true) {
            let data = {dis: true}
            this.disBusy = true;
            this.$axios.post('/user/set-disable-status', data).then((res) => {
              this.disable = res.data.disable
              this.deleteAccount = res.data.del
              location.reload()
            })
              .catch(error => {
                if (error.response.data.errors) {
                  this.errors = error.response.data.errors
                }
              }).finally(()=>{
              this.disBusy = false;
            })
          }
          })

    },
    activeAccount(){
      this.$bvModal.msgBoxConfirm(this.$t('account.disable.alert'), {
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
          if (value === true) {
            let data = {dis: false}
            this.disBusy = true;
            this.$axios.post('/user/set-disable-status', data).then((res) => {
              this.disable = res.data.disable
              this.deleteAccount = res.data.del
              location.reload()
            })
              .catch(error => {
                if (error.response.data.errors) {
                  this.errors = error.response.data.errors
                }
                console.log(error.response)
              }).finally(()=>{
              this.disBusy = false;
            })
          }
        })
    },
    async logout() {
      await this.$auth.logout();  // this method will logout the user and make token to false on the local storage of the user browser
      this.$router.push('/login')
    },
    onSubmit(evt) {
      this.$v.$reset()
      this.errors = null
      evt.preventDefault()
      this.$v.formData.$touch()
      if (this.$v.formData.$invalid) {
        console.log("vuelidate error")
      } else {
        this.$axios.post('user/change-password', this.formData,
          {
            withCredentials: true
          }).then((res) => {
          this.makeToast('success', 'Message', this.$t('account.passwordChanged'))
          this.logout()

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
