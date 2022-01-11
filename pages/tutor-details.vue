<template>
  <div class="main-body-container-content">

    <b-container class="container-padding">
      <b-overlay
        :show="busy"
        rounded="lg"
        variant="white"
        blur=""
        opacity="0.9">
        <b-row class="col-md-12 pb-5 col-lg-10 m-center">
        <div class="w-100">
          <h3 class="mb-4 text-center">{{ $t('completeRegistration') }}</h3>
        </div>
        <b-row class="w-100 mx-0">
          <h4 class="mb-2">{{ $t('generalInfo') }}</h4>
          <b-progress value="1" max="5" class="w-100" height="10px" variant="danger"></b-progress>
          <span>1/5</span>
        </b-row>
        <b-row class="mx-0 py-5 col-xl-7 col-lg-8 col-md-12">
          <b-form class="w-100 py-4" @submit.stop.prevent="onSubmit"
                  @reset="onReset">

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

            <b-form-group  class="pt-3" id="input-group-name" :label="$t('fName')" label-for="input-name">
              <b-form-input
                :class="{ 'is-invalid': $v.registerForm.name.$error }"
                autocomplete="off"
                id="input-name"
                v-model.trim="$v.registerForm.name.$model"
              ></b-form-input>
              <div class="invalid-feedback" v-if="!$v.registerForm.name.required">{{ $t('firstNameRequired') }}
              </div>
              <div class="invalid-feedback" v-if="!$v.registerForm.name.serverError">{{ $t(errors.name.msg) }}</div>
            </b-form-group>
            <b-form-group id="input-group-lastname" :label="$t('lName')"
                          label-for="input-lastname">
              <b-form-input
                :class="{ 'is-invalid': $v.registerForm.lastName.$error}"
                autocomplete="off"
                id="input-lastname"
                v-model.trim="$v.registerForm.lastName.$model"
              ></b-form-input>
              <div class="invalid-feedback" v-if="!$v.registerForm.lastName.required">{{ $t('lastNameRequired') }}</div>
            </b-form-group>
            <b-form-group id="input-group-headline" :label="$t('headline')"
                          label-for="input-headline">
              <b-form-input
                :class="{ 'is-invalid': $v.registerForm.headline.$error }"
                autocomplete="off"
                id="input-headline"
                :placeholder="$t('headline_placeholder')"
                v-model.trim="$v.registerForm.headline.$model"
              ></b-form-input>
              <div class="invalid-feedback" v-if="!$v.registerForm.headline.required">{{ $t('headlineRequired') }}
              </div>
            </b-form-group>
            <b-form-group id="input-group-bioMore" :label="$t('bioMore')"
                          label-for="input-bioMore">
              <b-form-textarea
                :class="{ 'is-invalid': $v.registerForm.bioMore.$error }"
                autocomplete="off"
                rows="4"
                id="input-bioMore"
                :placeholder="$t('bioMore_placeholder')"
                v-model.trim="$v.registerForm.bioMore.$model"
              ></b-form-textarea>
              <div class="invalid-feedback" v-if="!$v.registerForm.bioMore.required">{{ $t('bioMoreRequired') }}
              </div>
            </b-form-group>
            <b-form-group class="w-75" id="input-group-trainingMethods" :label="$t('information.trainingMethods.label')"
                          label-for="input-trainingMethods">
              <v-select id="input-trainingMethods"
                        :placeholder="$t('information.trainingMethods.placeholder')"
                        v-model.trim="registerForm.trainingMethod"
                        class="m-v-select2 w-70"
                        label="text"
                        :reduce = "x => x.value"
                        :class="{ 'is-invalid  d-block': $v.registerForm.trainingMethod.$error }"
                        :options="options_methods">
              </v-select>
              <div class="invalid-feedback" v-if="!$v.registerForm.trainingMethod.required">
                {{ $t('information.trainingMethods.required') }}
              </div>
            </b-form-group>



            <div class="mt-5">
              <b-button class="form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2" type="submit">
                {{ $t('next') }}
              </b-button>
            </div>
          </b-form>
        </b-row>
      </b-row>
      </b-overlay>
    </b-container>
  </div>
</template>
<script>


  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faGoogle} from '@fortawesome/free-brands-svg-icons'
  import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
  import {required, minLength, sameAs, email, requiredIf ,numeric} from "vuelidate/lib/validators";
  import VueCropper from 'vue-cropperjs'
  import 'cropperjs/dist/cropper.css';
  import jwt_decode from "jwt-decode";

  library.add(faGoogle)
  library.add(faFacebookF)

  export default {
    middleware: 'auth',
    name: 'ToturDetails',
    mounted() {
      if(!this.$auth.hasScope("tutor") && !this.$auth.hasScope("admin"))
      {
        this.$router.push("/")
        return
      }
      this.fillUserInfo();

    },
    components: {
      VueCropper,
    },
    data() {
      return {
        busy: true,
        options_methods: [{value: 1 , text: "Online"} , {value: 2 , text: "In-Person"} ,{value: 3 , text: "Both"}  ] ,
        selectedFile: null,
        hasImage: false,
        imgSrc: null,
        cropImg: '',
        data: null,
        fileSizeNotValid : false,
        registerForm: {
          File: null,
          trainingMethod: null,
          name: '',
          lastName: '',
          headline: '',
          bioMore: '',
        },
        errors: null,
      }
    },
    validations: {
      selectedFile:{
        isValidSize(file) {
          if (!file) {
            return true;
          }
          return (file.size < (2 * 1024 * 1024));
        }

      },
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
        headline: {
          required,
          serverError(value) {
            if (value === '') {
              return true
            }
            return !(this.errors != null && this.errors.headline && value === this.errors.headline.value)
          }
        },
        bioMore: {
          required,
          serverError(value) {
            if (value === '') {
              return true
            }
            return !(this.errors != null && this.errors.bioMore && value === this.errors.bioMore.value)
          }
        },
        File: {
          // required: requiredIf(function () {
          //   return this.registerForm.File === null;
          // })
        },
        trainingMethod: {
          required,
        },

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
      downloadFile(fileId) {
        try {
          var c = {responseType: 'blob'}

          this.$axios.get(`/download/${fileId}` ,  c).then((response) => {
            var fileURL = window.URL.createObjectURL(new Blob([response.data],{type: 'application/file'}));
            var fileLink = document.createElement('a');
            var filename = response.headers['filename']
            fileLink.href = fileURL;
            fileLink.setAttribute('download', filename);
            document.body.appendChild(fileLink);

            fileLink.click();
          });

        } catch (e) {
          // console.log(e);
        }
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our registerForm values
        this.registerForm.name = ''
        this.registerForm.lastName = ''
        this.registerForm.headline = ''
        this.registerForm.bioMore = ''
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
      onSubmit(evt) {
        this.$v.$reset()
        const self = this
        this.errors = null
        evt.preventDefault()
        this.$v.registerForm.$touch()
        if (this.$v.registerForm.$invalid) {
          console.log("vuelidate error")
        } else {
          var formData = new FormData();
          if(this.selectedFile!==null)
            formData.append("file", this.selectedFile, this.selectedFile.name)
          formData.append('registerForm', JSON.stringify(this.registerForm))
          this.busy = true
          this.$axios.post('/user/save-student-detail', formData).then(async (res) => {
            this.registerForm = res.data
            this.$router.push('/tutor-subject')

            const oldRedirect = self.$auth.options.redirect;
            self.$auth.options.redirect = false;
            await self.$auth.setUserToken(res.data.token)
            let decoded = jwt_decode(res.data.token);
            self.$auth.setUser(decoded)
            self.$auth.options.rewriteRedirects = oldRedirect;

            this.makeToast('success', 'Message', this.$t('done_successfully'))

          }).catch(error => {
            if (error.response.data.errors) {
              this.errors = error.response.data.errors
            }
            // console.log(error)
          }).finally(()=>{
            this.busy = false
          })
        }
      },
      fillUserInfo() {
        this.$axios.post('/user/get-student-detail').then((res) => {
          // this.registerForm.Communications = res.data.Communications
          this.registerForm = res.data;
        }).catch(error => {
          if (error.response.data.errors) {
            this.errors = error.response.data.errors
          }
          // console.log(error)
        }).finally(()=>{
          this.busy = false
        })
      }
    },

  }
</script>

<style scoped>
  input[type="file"] {
    display: none;
  }

  .header h2 {
    margin: 0;
  }

  .header a {
    text-decoration: none;
    color: black;
  }

  .actions {
    margin-top: 1rem;
  }

</style>
