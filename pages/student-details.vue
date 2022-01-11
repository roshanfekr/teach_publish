<template>
  <div class="main-body-container-content">
    <b-container class="container-padding">
      <b-overlay
        :show="busy"
        rounded="lg"
        variant="white"
        opacity="0.8"
      >
      <b-row  v-if="!CongratulationsVisible" class="w-75 d-md-flex col-md-12 col-lg-10 m-center">
        <div class="w-75 login-wrap p-4 p-lg-5  m-center">
          <b-form class="m-right" @submit.stop.prevent="onSubmit"
                  @reset="onReset">
            <div class="d-flex">
              <div class="w-100">
                <h3 class="mb-4">{{$t('completeRegistration')}}</h3>
              </div>
            </div>

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
                          :aspect-ratio="1 / 1"
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
                      $t('file.isValidSize') }}
                  </div>
                </div>


              </b-form-row>
            </b-form-group>

            <b-form-group class="pt-3" id="input-group-name" :label="$t('fName')+':'"
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

                <b-button class="form-control btn btn-crl  btn-primary submit px-3 mt-4" type="submit">{{ $t('save')}}</b-button>
            </b-form-group>

          </b-form>
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
            <b-button  class="btn-primary  btn ctl-btn m-center mt-4" @click="goHome">Continue to Home Page</b-button>
          </b-row>
        </b-card>

      </b-row>
      </b-overlay>
    </b-container>
  </div>
</template>
<script>


  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faGoogle} from '@fortawesome/free-brands-svg-icons'
  import {faFacebookF} from '@fortawesome/free-brands-svg-icons'

  import {required, minLength, sameAs, email, requiredIf} from "vuelidate/lib/validators";
  import VueCropper from 'vue-cropperjs'
  import 'cropperjs/dist/cropper.css';
  import jwt_decode from "jwt-decode";

  library.add(faGoogle)
  library.add(faFacebookF)

  export default {
    components: {
      VueCropper,
    },
    middleware: 'auth',
    name: 'StudentDetails',

    mounted() {
      this.showOverlay()
      this.fillUserInfo();
    },
    data() {

      return {
        busy: true ,
        CongratulationsVisible: false,
        hasImage: false,
        imgSrc: null,
        cropImg: '',
        data: null,
         options: [
          {value: 'Skype', text: 'Skype'},
          {value: 'Hangout', text: 'Hangout'},
        ],
        fileSizeNotValid: false,
        registerForm: {
          File: null,
          name: '',
          lastName: '',
          program: ''
        },
        errors: null,
      }
    },
    validations: {
      registerForm: {
        program:{

        },
        File: {
        },
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

      }
    },
    methods: {

      showOverlay()
      {
        this.busy = true
      },
      hideOverlay()
      {
        this.busy = false
      },

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

      goHome(){
        this.$router.push('/')
      },

      onReset(evt) {
        evt.preventDefault()
        // Reset our registerForm values
        this.registerForm.name = ''
        this.registerForm.lastName = ''
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
    }
    ,
    onSubmit(evt) {
        this.$v.$reset()
        this.errors = null
        const self = this
        evt.preventDefault()
        this.$v.registerForm.$touch()
        if (this.$v.registerForm.$invalid) {
          console.log("vuelidate error")
        } else {
          this.showOverlay()
          var formData = new FormData();
          formData.append('registerForm', JSON.stringify(this.registerForm))
          this.$axios.post('/user/save-student-detail', formData).then(async (res) => {
            this.hideOverlay()
            this.makeToast('success', 'Message', this.$t('done_successfully'))
            this.registerForm = res.data
            this.CongratulationsVisible = true

            const oldRedirect = self.$auth.options.redirect;
            self.$auth.options.redirect = false;
            await self.$auth.setUserToken(res.data.token)
            let decoded = jwt_decode(res.data.token);
            self.$auth.setUser(decoded)
            self.$auth.options.rewriteRedirects = oldRedirect;

          }).catch(error => {
            this.hideOverlay()
            if (error.response.data.errors) {
              this.errors = error.response.data.errors
            }
          })
        }
      }
      ,
    fillUserInfo() {
        this.showOverlay()
        this.$axios.post('/user/get-student-detail').then((res) => {
          this.hideOverlay()
          this.registerForm = res.data;
        }).catch(error => {
          this.hideOverlay()
          if (error.response.data.errors) {
            this.errors = error.response.data.errors
          }
          // console.log(error)
        })
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
