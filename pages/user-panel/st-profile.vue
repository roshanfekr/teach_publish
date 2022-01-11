<template>
    <b-container class="">
      <div class="w-100" >
        <div class="mt-5 d-block mb-3"> {{$t('change_to_tutor.title')}}
          <b-button class ="btn-crl-mini btn-primary" @click="changeToTutorDialog">{{$t('change_to_tutor')}}</b-button>
        </div>
        <b-modal ref="change-tutor-modal"  centered hide-footer title="Change">
          <div class="w-100">
            <b-row class="m-3">
              {{$t('change_to_tutor.alert')}}
            </b-row>
            <div class="w-100 text-center mt-5">
              <b-button class="btn-primary btn" @click="changeToTutor">Change</b-button>
            </div>
          </div>
        </b-modal>
      </div>

      <hr class="mt-0 mb-2">
      <b-row class="d-md-flex m-center">
        <div class="login-wrap px-xl-5 px-lg-5 px-md-3 px-sm-2 px-2 col-md-12 col-lg-10 col-xl-8">
          <b-form class="m-right" @submit.stop.prevent="onSubmit"
                  @reset="onReset">
            <div class="d-flex">
              <div class="w-100">
                <h3 class="mb-4">{{$t('profile')}}</h3>
              </div>
            </div>

            <b-overlay
              :show="busy"
              rounded="lg"
              variant="white"
              opacity="0.8"
            >
              <b-form-group>
                <b-form-row class="w-100">
                  <input
                    class="d-none"
                    ref="input"
                    type="file"
                    name="image"
                    accept="image/png, image/jpeg"
                    @click="removeInputImage"
                    @change="setImage"
                  />
                  <b-row class="mx-0" v-if="!hasImage">
                    <b-col class="col-12 col-md-4 col-xl-4 col-lg-4">
                      <b-avatar
                        size="7rem"
                        :src="registerForm.File != null ? '/' + registerForm.File.path : ''"
                        alt="Cropped Image"
                      />
                    </b-col>
                    <b-col class="col-12 pt-3 col-md-8 col-xl-8 col-lg-8">
                      <b-row class="text-large pb-2">Profile photo</b-row>
                      <b-row class="small text-small">
                        Please make sure your photo with appropriate attire. Face should be in focus. Maximum size – 1MB.
                        JPG or PNG
                      </b-row>
                      <b-row class="small text-small">
                        <b-button class="btn-primary btn-add py-1 mt-2 mr-2" @click="showEditPhoto">
                          {{ $t('upload') }}
                        </b-button>
                        <b-button v-if="registerForm.File !== null" class="btn-primary btn-add py-1 mt-2"
                                  @click="removeImage">
                          {{ $t('remove') }}
                        </b-button>
                      </b-row>
                      <b-row>

                      </b-row>
                    </b-col>
                  </b-row>
                  <div v-else>
                    <section>
                      <div class="img-cropper">
                        <client-only>
                          <vue-cropper
                            style="aspect-ratio: 1/1; width:15rem; height: 15rem;"
                            drag-mode="move"
                            :view-mode=3
                            ref="cropper"
                            :auto-crop-area=0.6
                            :aspect-ratio="1"
                            :toggle-drag-mode-on-dblclick=false
                            :src="imgSrc"
                            preview=".preview"
                          />
                        </client-only>
                      </div>
                      <div class="actions">
                        <b-button class="btn-primary btn-add py-1 mt-2" @click.prevent="cropImage">
                          {{ $t('save') }}
                        </b-button>
                        <b-button class="btn-primary btn-add py-1 mt-2" @click.prevent="showFileChooser">
                          {{ $t('upload') }}
                        </b-button>
                        <b-button class="btn-primary btn-add py-1 mt-2" @click.prevent="rotate(90)">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                               class="bi bi-arrow-90deg-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"/>
                          </svg>
                        </b-button>
                        <b-button class="btn-primary btn-add py-1 mt-2" @click.prevent="rotate(-90)">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                               class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
                          </svg>
                        </b-button>
                        <b-button ref="flipX" class="btn-primary btn-add py-1 mt-2" @click.prevent="flipX">

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                               class="bi bi-symmetry-vertical" viewBox="0 0 16 16">
                            <path
                              d="M7 2.5a.5.5 0 0 0-.939-.24l-6 11A.5.5 0 0 0 .5 14h6a.5.5 0 0 0 .5-.5v-11zm2.376-.484a.5.5 0 0 1 .563.245l6 11A.5.5 0 0 1 15.5 14h-6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .376-.484zM10 4.46V13h4.658L10 4.46z"/>
                          </svg>
                        </b-button>
                        <b-button ref="flipY" class="btn-primary btn-add py-1 mt-2" @click.prevent="flipY">

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                               class="bi bi-symmetry-horizontal" viewBox="0 0 16 16">
                            <path
                              d="M13.5 7a.5.5 0 0 0 .24-.939l-11-6A.5.5 0 0 0 2 .5v6a.5.5 0 0 0 .5.5h11zm.485 2.376a.5.5 0 0 1-.246.563l-11 6A.5.5 0 0 1 2 15.5v-6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .485.376zM11.539 10H3v4.658L11.54 10z"/>
                          </svg>
                        </b-button>

                        <b-button class="btn-primary btn-add py-1 mt-2" @click.prevent="cancelUploadImage">
                          {{ $t('cancel') }}
                        </b-button>

                      </div>
                    </section>
                    <div class="invalid-feedback d-block"
                         v-if="fileSizeNotValid">{{
                        $t('file.isValidSize')
                      }}
                    </div>
                    <!--                  <div>-->
                    <!--                    <div class="invalid-feedback d-block ml-1"-->
                    <!--                         v-if="$v.registerForm.File.$dirty && !$v.registerForm.File.required">{{-->
                    <!--                        $t('file.saved')-->
                    <!--                      }}-->
                    <!--                    </div>-->
                    <!--                  </div>-->
                  </div>


                </b-form-row>
              </b-form-group>

              <b-form-group class="mt-3" id="input-group-name" :label="$t('fName')+':'"
                            label-for="input-name">
                <b-form-input
                  :class="{ 'is-invalid': $v.registerForm.name.$error }"
                  autocomplete="off"
                  id="input-name"
                  v-model.trim="$v.registerForm.name.$model"
                ></b-form-input>
                <div class="invalid-feedback" v-if="!$v.registerForm.name.required">{{$t('firstNameRequired')}}
                </div>
                <div class="invalid-feedback" v-if="!$v.registerForm.name.serverError">{{ $t(errors.name.msg) }}</div>
              </b-form-group>
              <b-form-group id="input-group-lastname"  :label="$t('lName')+':'"
                            label-for="input-lastname">
                <b-form-input
                  :class="{ 'is-invalid': $v.registerForm.lastName.$error}"
                  autocomplete="off"
                  id="input-lastname"
                  v-model.trim="$v.registerForm.lastName.$model"
                ></b-form-input>
                <div class="invalid-feedback" v-if="!$v.registerForm.lastName.required">{{ $t('lastNameRequired') }}</div>
              </b-form-group>
              <b-form-group id="input-group-program"  :label="$t('program')+':'"
                            label-for="input-program">
                <b-form-input
                  :placeholder="$t('program_placeholder')"
                  :class="{ 'is-invalid': $v.registerForm.program.$error}"
                  autocomplete="off"
                  id="input-program"
                  v-model.trim="$v.registerForm.program.$model"
                ></b-form-input>
                <div class="invalid-feedback" v-if="!$v.registerForm.program.required">{{ $t('lastNameRequired') }}</div>
              </b-form-group>

              <b-form-group>
                <b-button class="form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2" type="submit">{{
                    $t('save')}}
                </b-button>
              </b-form-group>
            </b-overlay>
          </b-form>
        </div>
      </b-row>
    </b-container>
</template>

<script>


import {library} from '@fortawesome/fontawesome-svg-core'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'

import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css';
import {required, minLength, sameAs, email, requiredIf} from "vuelidate/lib/validators";
import jwt_decode from "jwt-decode";
// import {required, numeric, minLength, maxLength} from "vuelidate/lib/validators";


library.add(faGoogle)
library.add(faFacebookF)

export default {
  name: 'StudentDetails',
  components: {
    VueCropper,
  },
  mounted() {
    this.fillUserInfo();
    if(this.$auth.hasScope("tutor"))
      this.$router.push("/user-panel/profile")
  },
  data() {

    return {
      busy: true,
      hasImage: false,
      imgSrc: null,
      cropImg: '',
      data: null,
      options: [
        {value: 'Skype', text: 'Skype'},
        {value: 'Hangout', text: 'Hangout'},
      ],
      fileSizeNotValid : false,
      registerForm: {
        File: null,
        name: '',
        lastName: '',
        program: null
      },
      errors: null,
    }

  },
  validations: {
    registerForm: {
      name: {
        required,
        serverError(value) {
          if (value === '') {
            return true
          }
          return !(this.errors != null && this.errors.name && value === this.errors.name.value)
        }
      },
      lastName: {
        required,
        serverError(value) {
          if (value === '') {
            return true
          }
          return !(this.errors != null && this.errors.lastName && value === this.errors.lastName.value)
        }
      },
      program: {

      }
    }
  },
  methods: {
    removeInputImage(event) {
      event.target.value = null
    },
    cancelUploadImage() {
      this.hasImage = false;
    },
    removeImage() {
      this.$bvModal.msgBoxConfirm(this.$t('remove.image.confirm.msg'), {
        title: 'Confirm',
        size: 'md',
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
            if (this.registerForm.File !== null)
              this.$axios.post('/user/remove-user-image').then((res) => {
                this.registerForm.File = null
              }).catch(error => {
                if (error.response.data.errors) {
                  this.errors = error.response.data.errors
                }
                // console.log(error)
              })
          } else {

          }
        })
        .catch(err => {
        })

    },
    showEditPhoto() {
      this.showFileChooser()

    },
    cropImage() {

      var imgFileSize = Math.round((this.$refs.cropper.getCroppedCanvas().toDataURL().length) * 3 / 4);

      if (imgFileSize > (1 * 1024 * 1024)) {
        this.fileSizeNotValid = true
        return
      }


      this.hasImage = false;
      // get image data for post processing, e.g. upload or setting image src

      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      this.registerForm.File = this.dataURLtoFile(this.cropImg, 'avatar.jpg');

      var form1 = new FormData();
      form1.append("file", this.registerForm.File, this.registerForm.File.name)
      this.$axios.post('/user/save-user-image', form1).then((res) => {
        this.registerForm.File = res.data
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors
        }
        // console.log(error)
      })

    },
    flipX() {
      const dom = this.$refs.flipX;
      let scale = dom.getAttribute('data-scale');
      scale = scale ? -scale : -1;
      this.$refs.cropper.scaleX(scale);
      dom.setAttribute('data-scale', scale);
    },
    flipY() {
      const dom = this.$refs.flipY;
      let scale = dom.getAttribute('data-scale');
      scale = scale ? -scale : -1;
      this.$refs.cropper.scaleY(scale);
      dom.setAttribute('data-scale', scale);
    },
    rotate(deg) {
      this.$refs.cropper.rotate(deg);
    },
    setImage(e) {
      const file = e.target.files[0];
      if (file === undefined)
        return

      this.fileSizeNotValid = false
      if (file.type.indexOf('image/jpeg') === -1 && file.type.indexOf('image/png') === -1 ) {
        alert('Please select an image file with JPEG or PNG type');
        return;
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        this.hasImage = true;
        reader.readAsDataURL(file);
      } else {
        alert('Sorry, FileReader API not supported');
      }
    },
    showFileChooser() {
      this.$refs.input.click();
    },
    dataURLtoFile(dataurl, filename) {

      var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], filename, {type: mime});
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
      this.registerForm.name = ''
      this.registerForm.lastName = ''
    },
    onSubmit(evt) {
      try{
        this.$v.$reset()
        this.errors = null
        evt.preventDefault()
        this.$v.registerForm.$touch()
        if (this.$v.registerForm.$invalid) {
          console.log("vuelidate error")
        } else {
          this.busy = true
          var formData = new FormData();
          formData.append('registerForm', JSON.stringify(this.registerForm))
          this.$axios.post('/user/save-student-detail', formData).then((res) => {
            // localStorage.setItem('userToken', res.data)
            this.makeToast('success', 'Message', 'done_successfully')
          }).catch(error => {

            if (error.response.data.errors) {
              this.errors = error.response.data.errors
            }
            this.makeToast('danger', 'Error', 'faild_message')

            console.log(error)
          }).finally(()=>{
            this.busy = false
          })
        }
      }catch (e) {
        console.log(e)
        this.busy = false
      }
    },
    fillUserInfo() {
      try {
        this.busy = true
        this.$axios.post('/user/get-student-detail').then((res) => {
          this.registerForm = res.data;
          console.log(res.data)
        }).catch(error => {
          if (error.response.data.errors) {
            this.errors = error.response.data.errors
          }
          console.log(error)
        }).finally(() => {
          this.busy = false
        })
      } catch (e) {
        this.busy = false
      }
    }
    ,
    changeToTutorDialog()
    {
      this.$refs['change-tutor-modal'].show()
    }
    ,
    changeToTutor() {
      try {
        const self = this
        this.$axios.post("/user/change-to-tutor", null).then(async (res) => {
          if (res.data.result === true)
          {
            const oldRedirect = self.$auth.options.redirect;
            self.$auth.options.redirect = false;
            await self.$auth.setUserToken(res.data.token)
            let decoded = jwt_decode(res.data.token);
            self.$auth.setUser(decoded)
            self.$auth.options.rewriteRedirects = oldRedirect;

            this.makeToast('success', 'Message', this.$t('done_successfully'))
            this.$refs['change-tutor-modal'].hide()

            this.$router.push("/tutor-details")
          }
        }).catch((err) => {

        })
      } catch (e) {

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


.btn.btn-white {
  background: #fff;
  border: 1px solid #fff;
  color: #fff;
}


.btn-add {
  cursor: pointer;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  font-size: 15px;
  border-radius: 50px;
}

.btn-crl {
  height: 48px !important;
  cursor: pointer;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  font-size: 15px;
  padding: 12px 20px;
  border-radius: 50px;
}

.btn-crl.btn-white.btn-outline-white:hover {
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
