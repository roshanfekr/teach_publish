<template>
        <div class="main-body-container-content mb-5">
            <b-container class="container-padding">
                <b-row >
                    <b-col class="text-center col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <b-img alt="teach" width="100px" :src="require('@/assets/logo.png')"/>
                        <div class="text-left" style="font-size: larger; font-family: sans-serif">
                            <br/>
                          {{$t("contactus.text")}}
                            <br/>
                          {{$t("contactus.text1")}}
                          <br/>
                          <br/>
                         <span style="font-size: smaller;color: #1c92ff" class="font-weight-bold" >info@tuteloop.ca</span>
                        </div>
                    </b-col>
                    <b-col class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="image-panel">
                            <b-img alt="teach" :src="require('@/assets/knowledge.jpg')"/>
                        </div>
                    </b-col>

                </b-row>

                <div class="fusion-separator">
                    <span class="icon-wrapper">
                        <font-awesome-icon class="font-color" :icon="['fas', 'graduation-cap']"/>
                    </span>
                </div>

                <b-row class="pr-2 pl-2">
                  <b-col class="col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12">
                    <b-form class="w-100" @submit.stop.prevent="onSubmit" @reset="onReset" v-if="show">
                      <div class="mb-4 text-primary">Send your message</div>
                      <b-form-group id="input-group-1" label="Name " label-for="input-1">
                        <b-form-input
                          :class="{ 'is-invalid': $v.form.name.$error , 'is-valid': !$v.form.name.$invalid }"
                          id="input-1"
                          autocomplete="off"
                          v-model.trim="$v.form.name.$model"
                        ></b-form-input>
                        <div class="invalid-feedback" v-if="!$v.form.name.required">Name is required
                        </div>
                        <div class="invalid-feedback" v-if="!$v.form.name.serverError">{{errors.name.msg}}</div>
                      </b-form-group>
                      <b-form-group id="input-group-2" label="Subject " label-for="input-2">
                        <b-form-input
                          :class="{ 'is-invalid': $v.form.subject.$error , 'is-valid': !$v.form.subject.$invalid }"
                          autocomplete="off"
                          id="input-2"
                          v-model.trim="$v.form.subject.$model"
                        ></b-form-input>
                        <div class="invalid-feedback" v-if="!$v.form.subject.required">Required
                        </div>
                        <div class="invalid-feedback" v-if="!$v.form.subject.serverError">{{errors.subject.msg}}</div>
                      </b-form-group>
                      <b-form-group  id="input-group-3" label="Email " label-for="input-3">
                        <b-form-input
                          :class="{ 'is-invalid': $v.form.email.$error , 'is-valid': !$v.form.email.$invalid }"
                          autocomplete="off"
                          id="input-3"
                          v-model.trim="$v.form.email.$model"

                        ></b-form-input>
                        <div class="invalid-feedback" v-if="!$v.form.email.required">Required
                        </div>
                        <div class="invalid-feedback" v-if="!$v.form.email.email">Email format not correct
                        </div>
                        <div class="invalid-feedback" v-if="!$v.form.email.serverError">{{errors.email.msg}}</div>
                      </b-form-group>
                      <b-form-group id="input-group-4" label="Message " label-for="input-4">
                        <b-form-textarea
                          :class="{ 'is-invalid': $v.form.msg.$error , 'is-valid': !$v.form.msg.$invalid }"
                          id="input-4"
                          autocomplete="off"
                          v-model.trim="$v.form.msg.$model"
                          rows="4"
                          placeholder="Insert your message"
                        ></b-form-textarea>
                        <div class="invalid-feedback" v-if="!$v.form.msg.required">Message is required
                        </div>
                        <div class="invalid-feedback" v-if="!$v.form.msg.serverError">{{errors.msg.msg}}</div>
                      </b-form-group>
                      <b-button class="m-2" type="submit" variant="primary">Send
                        <b-spinner v-show="inProgress" style="width: 24px; height: 24px;color: #ffffff" type="grow"></b-spinner>
                      </b-button>
                      <b-button class="m-2" type="reset" variant="danger">Clear Form</b-button>
                    </b-form>
                    <b-row v-else class="w-100">
                      <b-alert class="w-100" variant="success" show>Send message success.</b-alert>
                      <b-button class="m-2" @click="onReset" variant="primary">New message</b-button>
                    </b-row>
                  </b-col>

                </b-row>
            </b-container>

        </div>
</template>

<script>

import {email, maxLength, minLength, numeric, required, requiredIf} from 'vuelidate/lib/validators'

export default {
  name: 'ContactUs',
  components: {},
  data () {
    return {
      inProgress: false,
      form: {
        name: '',
        subject: '',
        tel: '',
        email: '',
        msg: '',
        token: ''
      },
      show: true
    }
  },
  head () {
    return {
      title:  'Contact Us',
      meta: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        }
      ]
    }
  },
  validations: {
    form: {
      name: {
        required,
        serverError (value) {
          if (value === '') {
            return true
          }
          return !(this.errors != null && this.errors.username && value === this.errors.username.value)
        }
      },
      subject: {
        required,
        serverError (value) {
          if (value === '') {
            return true
          }
          return !(this.errors != null && this.errors.subject && value === this.errors.subject.value)
        }
      },
      email: {
        required,
        email,
        serverError (value) {
          if (value === '') {
            return true
          }
          return !(this.errors != null && this.errors.email && value === this.errors.email.value)
        }
      },
      msg: {
        required,
        serverError (value) {
          if (value === '') { return true }
          return !(this.errors != null && this.errors.msg && value === this.errors.msg.value)
        }
      }
    }
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async onSubmit(evt) {
      this.inProgress = true
      this.errors = null
      this.$v.$reset()
      evt.preventDefault()
      this.$v.form.$touch()
      if (this.$v.form.$invalid) {
        this.inProgress = false
        console.log('vuelidate error')
      } else {
        this.form.token = await this.$recaptcha.execute('contactus');

        this.$axios.post('message/create', this.form).then(() => {
          this.show = false
        }).catch((error) => {
          if (error.response.data.errors) {
            // console.log(JSON.stringify(error.response.data.errors))
            this.errors = error.response.data.errors
          }
          console.log(error)
        }).finally(() => {
          this.inProgress = false
        })
      }
    },
    onReset (evt) {
      this.errors = null
      this.$v.$reset()
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.tel = ''
      this.form.subject = ''
      this.form.msg = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
  ,
  beforeDestroy() {
    this.$recaptcha.destroy()
  }
}
</script>

<style scoped>

</style>
