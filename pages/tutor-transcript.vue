<template>


  <div class="main-body-container-content">

    <b-container class="container-padding">
      <b-row class="col-md-12 pb-5 col-lg-10 m-center">
        <div class="w-100">
          <h3 class="mb-4 text-center">{{ $t('completeRegistration') }}</h3>
        </div>
        <b-row class="w-100 mx-0">
          <h4 class="mb-2">{{ $t('transcript.title') }}</h4>
          <b-progress value="3" max="5" class="w-100" height="10px" variant="danger"></b-progress>
          <span>3/5</span>


          <p style="font-size: small" class="w-100 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
            </svg>
            <span class="ml-1">{{$t("transcript.header_alert")}}</span>

          </p>

        </b-row>


        <b-row class="mx-0 py-3 col-xl-7 col-lg-8 col-md-12">
          <b-form class="w-100" @submit.stop.prevent="onSubmit"
                  @reset="onReset">

            <b-overlay
              :show="busy"
              rounded="lg"
              variant="white"
              opacity="0.8"
            >
              <p class="border-bottom" v-if="fileInfo!==null && fileInfo.fileId > 0">{{$t("transcript.history")}}</p>
              <b-row class="w-100 ml-1 mb-4 border-bottom pt-2 pb-3" v-if="fileInfo!==null && fileInfo.fileId > 0">
                <div class="w-100" v-if="fileInfo!==null && fileInfo.fileId > 0">
                  <font-awesome-icon  style="font-size: x-large" :icon="['fas', 'file-alt']"/>
                  <span class="mx-2">{{ Math.trunc(fileInfo.size) + " KB" }}</span>
                  <a style="cursor: pointer" @click="downloadFile(fileInfo.fileId)"
                     class="white-icon align-items-center justify-content-center">
                    {{$t("transcript.download")}}
                  </a>
                </div>
              </b-row>

              <div class="">
                <b-form-group id="input-group-4" :label="$t('transcript.label')" label-for="input4" >
                  <b-form-file
                    :browse-text="$t('browse')"
                    :class="{ 'is-invalid': $v.selectedFile.$error }"
                    id="input4"
                    style="direction: ltr"
                    v-model="$v.selectedFile.$model"
                    :placeholder="$t('chooseFile')"
                    :drop-placeholder="$t('dropFile')"
                  ></b-form-file>
                  <b-row class="small text-small ml-2 mt-2">
                    Maximum file size – 2MB.
                  </b-row>

                  <div class="invalid-feedback d-block"
                       v-if="!$v.selectedFile.isValidSize">{{ $t('file.isValidSize') }}
                  </div>
                  <div class="mt-3" v-if="selectedFile">

                    <font-awesome-icon style="font-size: x-large" :icon="['fas', 'file-alt']"/>
                    <span class="mx-2">{{ selectedFile ? Math.trunc(selectedFile.size / 1024) + " KB" : '' }}</span>

                  </div>
                </b-form-group>
              </div>
            </b-overlay>

            <div>
              <div  class="float-left d-block">
                <b-button class="form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2" to="/tutor-subject">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                  <span>{{$t('back')}}</span>
                </b-button>
                <b-button class="form-control btn btn-crl  btn-primary submit btn-reg px-3 mt-4"  type="submit" >
                  <span class="mt-2">{{$t('next')}}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </b-button>
              </div>

              <div class="float-right mt-5 w-50 text-right">
                <b-link href="" @click="nextStep" >{{$t("skipStep")}}</b-link>
              </div>
            </div>


          </b-form>
        </b-row>
      </b-row>
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

  library.add(faGoogle)
  library.add(faFacebookF)

  export default {
    middleware: 'auth',
    name: 'ToturDetails',
    mounted() {
      this.fillUserInfo();
    },
    components: {
      VueCropper,
    },
    data() {
      return {
        nextPush: "/reg-educ",
        fileInfo: null,
        busy: false,
        hasImage : null,
        selectedFile: null,
        data: null,
        fileSizeNotValid : false,
        registerForm: {
          File: null,
          transcript_fileId: 0
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
      }
    },

    methods: {
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
          console.log(e);
        }
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
      nextStep() {

          this.$router.push(this.nextPush)

      },
      onSubmit(evt) {
        this.$v.$reset()
        this.errors = null
        evt.preventDefault()
        this.$v.registerForm.$touch()
        if (this.$v.registerForm.$invalid) {
          console.log("vuelidate error")
        } else {

          if(this.selectedFile===null)
          {
            this.busy = false
            this.$router.push(this.nextPush)
            return
          }
          this.busy = true
          var formData = new FormData();
          if(this.selectedFile!==null)
            formData.append("file", this.selectedFile, this.selectedFile.name)
          formData.append('registerForm', JSON.stringify(this.registerForm))
          this.$axios.post('/user/save-transcript', formData).then((res) => {
            this.busy = false
            this.registerForm = res.data
            this.makeToast('success', 'Message', this.$t('done_successfully'))
            this.$router.push(this.nextPush)
          }).catch(error => {
            this.busy = false
            if(error.response!=null)
              if (error.response.data.errors) {
                this.errors = error.response.data.errors
              }
          }).finally(() => {
            this.busy = false
          })
        }
      },
      fillUserInfo() {
        this.$axios.post('/user/get-transcript').then((res) => {
          // this.registerForm.Communications = res.data.Communications
          this.fileInfo = res.data;
          this.imagePath = res.data !=null ? res.data.fileId : ''
        }).catch(error => {
          if (error.response.data.errors) {
            this.errors = error.response.data.errors
          }
          console.log(error)
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
