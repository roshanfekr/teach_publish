<template>
  <div>
    <div class="main-bg ">
      <div class="container search-container ">
        <b-row class="w-100 mx-0">
          <b-col class="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12"><h1 class="text-white mb-4">
            Central Tutoring Hub to Connect Students to Students
          </h1>
            <h4 class="text-white text-justify mb-5">
              TuteLoop seamlessly connects students to other students that offer tutoring. This website is exclusive to University of Toronto students. Get help from your senior colleagues who have taken the class you are struggling with, maybe even with the same professor and TAs. Just choose a course and then select a tutor to set up a session.
            </h4>
            <b-input-group class="w-100">
              <client-only>
                  <div class="w-100">
                    <v-select :placeholder="$t('page.first.universities.placeholder')"
                              class="m-v-select w-100" v-model="uniId"
                              :options="universities_options"
                              label="text"
                              @input="loadSubjects"
                              :reduce = "x => x.id"
                              v-if="!subdomain"
                              :selectable="option => !option.hasOwnProperty('group')">
                      <template #option="{ text }">
                        {{ text }}
                      </template>
                    </v-select>

                  </div>
                  <div class="w-75 float-right mt-2">
                    <v-select :placeholder="$t('page.first.subjets.placeholder')"
                              :loading="lessonLoading"
                              class="m-v-select w-100 h-100"
                              v-model="selected"

                              :options="options" label="subject" :selectable="option => !option.hasOwnProperty('group')">
                      <template #option="{ group, subject }">
                        <div v-if="group" class="group">
                          {{ group }}
                        </div>
                        {{ subject }}
                      </template>
                    </v-select>

                  </div>

                <div class="mt-2">
                  <b-input-group-append>
                    <b-button variant="dark" class="btn-search ml-2" @click="clickSearch">Search</b-button>
                  </b-input-group-append>
                </div>
              </client-only>

            </b-input-group>
          </b-col>
          <b-col class="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <b-img class="w-100" style="z-index: 2;" alt="" src="../assets/bg-main.png"></b-img>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="container bg-white mb-5 m-panel">
      <div class="shadow round-panel" >
        <b-carousel
          class="py-4 px-xl-4 px-lg-4 px-md-4"
        id="carousel-1"
        :interval="4000"
        indicators
      >
        <b-carousel-slide img-blank>
          <b-row class="m-slider w-100  mb-3 mx-0 mt-xl-1 mt-lg-1 mt-md-1 mt-sm-4 mt-5">
            <h4 class="w-100 text-center">
              What’s TuteLoop?
            </h4>
          </b-row>
          <b-row class="m-slider mx-0">
            <b-col style="line-height: 1.8rem;" class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 text-justify pb-2">
              TuteLoop is a free website operated by students for students. This platform is exclusive to University of Totonto students and acts as a central hub to help tutors and students connect. The tutors you will find here are your senior colleagues who have taken the class you are struggling with, maybe even with the same professor and TAs. Therefore, you will get specific, targeted and time-effective tutoring. Do well in your class with help of your senior colleagues and later you can tutor the same course to others.
            </b-col>
            <b-col class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
              <b-img style="width: 100%" :src="require('@/assets/main-slider/online-learning.jpg')">
              </b-img>
            </b-col>
          </b-row>
        </b-carousel-slide>
        <b-carousel-slide img-blank>
          <b-row class="m-slider w-100  mb-3 mx-0 mt-xl-1 mt-lg-1 mt-md-1 mt-sm-4 mt-5">
            <h4 class="w-100 text-center">
              Why you’ll like TuteLoop
            </h4>
          </b-row>
          <b-row class="m-slider mx-0 mt-5">
            <b-col class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4">
              <div class="w-100 text-center">
                <b-img :src="require('@/assets/main-slider/quick.png')"></b-img>
              </div>
              <h4 class="pt-3">
                It’s Quick
              </h4>
              <div class="w-100 text-center mt-4">
                Just search for a class and find a tutor that’s right for you
              </div>
            </b-col>
            <b-col class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4">
              <div class="w-100 text-center">
                <b-img :src="require('@/assets/main-slider/vetted.png')"></b-img>
              </div>
              <h4 class="pt-3">
                It’s Vetted
              </h4>
              <div class="w-100 text-center mt-4">
                Students can leave reviews and a five-star rating for their tutors.
              </div>
            </b-col>
            <b-col class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4">
              <div class="w-100 text-center">
                <b-img :src="require('@/assets/main-slider/free.png')"></b-img>
              </div>
              <h4 class="pt-3">
                It’s Free
              </h4>
              <div class="w-100 text-center mt-4">
                There are no hidden fees. This service is completely free to use.
              </div>
            </b-col>
          </b-row>
        </b-carousel-slide>
        <b-carousel-slide img-blank>
          <b-row class="m-slider w-100  mb-3 mx-0 mt-xl-1 mt-lg-1 mt-md-1 mt-sm-4 mt-5">
            <h4 class="w-100 text-center">
              How to find a tutor
            </h4>
          </b-row>
          <b-row class="m-slider mx-0 mt-5 w-100">
            <b-col class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 mb-4">
              <b-img style="width: 90%" class="mt-n5" :src="require('@/assets/main-slider/booklesson.png')">
              </b-img>
            </b-col>
            <b-col class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7  text-left mt-xl-5 mt-lg-5 mt-md-5 mt-sm-1 mt-1">
              <h6 class="pb-2">Search for a Course</h6>
              <h6 class="pb-2">Pick a tutor based on preferences</h6>
              <h6> Create a profile in two steps to message and arrange a session. </h6>
            </b-col>
          </b-row>
        </b-carousel-slide>
        <b-carousel-slide img-blank>
          <b-row class="m-slider w-100  mb-3 mx-0 mt-xl-1 mt-lg-1 mt-md-1 mt-sm-4 mt-5">
          <h4 class="w-100 text-center">
            How to register as a tutor
          </h4>
            <h6 class="w-100 text-center">
              Just 3 steps to set up a professional tutoring page
            </h6>

          </b-row>
          <b-row class="m-slider mx-0 mt-5 w-100">
            <b-col class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 mb-4">
              <b-img style="width: 80%" class="mt-n3" :src="require('@/assets/main-slider/register.png')">
              </b-img>
            </b-col>
            <b-col class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7  text-left mt-xl-5 mt-lg-5 mt-md-5 mt-sm-1 mt-1">
            <h6 class="pb-2"> Create a profile using your University email address</h6>
              <h6 class="pb-2">Optional: upload your transcript to become a Verified Tutor</h6>
              <h6>Start making a reputation for yourself!</h6>
            </b-col>
          </b-row>
        </b-carousel-slide>
        <b-carousel-slide img-blank>
          <b-row class="mx-0 mt-5 m-slider w-100  mb-3 mx-0">
            <h4 class="w-100 text-center mt-5">
              Ready to get started?
            </h4>
            <h6 class="w-100 mt-4 text-center mx-0">
              Find your tutor right now!
            </h6 >
            <div class="w-100 text-center mt-3 mx-0">
              <b-button class="btn btn-crl  btn-primary submit px-4 my-4" to="/tutors">
                Find a Tutor
              </b-button>

            </div>

          </b-row>

        </b-carousel-slide>
      </b-carousel>
      </div>
    </div>

  </div>

</template>
<script>

import {library} from '@fortawesome/fontawesome-svg-core'
import {faSearchengin} from '@fortawesome/free-brands-svg-icons'
import {faMicroscope} from '@fortawesome/free-solid-svg-icons'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import {faSquareRootAlt} from '@fortawesome/free-solid-svg-icons'
import {faStethoscope} from '@fortawesome/free-solid-svg-icons'
import {faLaptop} from '@fortawesome/free-solid-svg-icons'

import {required, minLength, sameAs, email} from "vuelidate/lib/validators";
// import {required, numeric, minLength, maxLength} from "vuelidate/lib/validators";


library.add(faMicroscope)
library.add(faSquareRootAlt)
library.add(faStethoscope)
library.add(faGraduationCap)
library.add(faLaptop)
library.add(faSearchengin)

export default {
  name: 'Home',
  head() {
    return {
      title: 'Online one-to-one tutors',
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
  data() {
    return {
      subName : "",
      subdomain: true,
      host: "",
      lessonLoading : false,
      universities_options: [],
      uniId: 0 ,
      options: [],
      selected: null,
    }
  },

  mounted() {
    this.Init()
  },
  methods: {

    Init(){
      this.host = window.location.hostname
      this.host = this.host.replace('www.' , '')
      console.log(this.host)
      let subs = this.host.split('.')
      if(subs.length  < 2) // check subdomain mode
      {
        this.subdomain = false
      }
      else {
        this.subName = subs[0]
        this.subdomain = true
      }

      if(!this.subdomain)
        this.loadUniversity()
      else
        this.loadSubjects(this.host)
    },
    loadUniversity() {
      this.$axios.post('/definitions/universityList' , ).then((res) => {
        var rows = res.data
        this.universities_options = []
        for (let i = 0; i < rows.length ; i++) {
          var row = rows[i]
          this.universities_options.push({id: row.id , text: row.name })
        }
        this.loadSubjects()
      }).catch(error => {
        console.log(error)
      })
    },
    loadSubjects(subname) {
      this.lessonLoading = true;
      let data = {} ;
      if(this.uniId!=null && this.uniId > 0)
        data["uniId"] = this.uniId
      if(this.subdomain)
        data["host"] = this.host
      this.$axios.post('/definitions/getAllLessons' , data).then((res) => {
        this.options = res.data;
        this.lessonLoading = false;
      }).catch(error => {
        console.log(error)
      })
    },
    clickSearch() {
      if (this.selected)
        this.$router.push("/tutors/1?subject=" + this.selected.id)
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


.m-v-select {
  font-size: 1.3rem;
  width: calc(100% - 100px);
}

.m-v-select .vs__search::placeholder,
.m-v-select .vs__dropdown-toggle,
.m-v-select .vs__dropdown-menu {
  background: #FFFFFF !important;
  border-top-left-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 4px;
}

.m-v-select .vs__clear {
  margin-top: -4px;
  margin-right: 10px;
  fill: var(--color1);
}

.m-v-select .vs__open-indicator {
  margin-right: 5px;
  fill: var(--color1);
}

/*.vs__dropdown-option{*/
/*  background: #ededed;*/
/*  color: #3b3b3b;*/
/*}*/
/*.vs__dropdown-option--disabled {*/
/*  background: #ededed;*/
/*  color: #3b3b3b;*/
/*}*/
.img-fluid{
  display: none!important;
}
.carousel{
  min-height: 500px!important;
}

.carousel-caption {
  position: relative!important;
  top: 0px;
  right: 0px;
  left: 0px;
}

.carousel-indicators li {
  background-color: var(--color1) !important;
}

.m-slider {
  color: #888888;
}
</style>
<style scoped>
.btn-search {
  width: 100px;
}

@media (max-width: 575.98px) {

}

@media (min-width: 576px) and (max-width: 767.98px) {

}

@media (min-width: 768px) and (max-width: 991.98px) {

}

@media (min-width: 992px) and (max-width: 1199.98px) {

}

@media (min-width: 1200px) {

}


.m-icon {
  font-size: xxx-large;
  color: var(--color1);
}

.main-bg {
  min-height: calc(100vh - 63px);
  background-image: url('../assets/bg.jpg');
  background-size: 100% 100%;
  background-position: top center;
  background-repeat: no-repeat;

  /*background: var(--color2) !important;*/
  /*border: 1px solid var(--color2) !important;*/
  /*color: #fff !important;*/
  /*background: var(--color1) !important;*/
  /*background: -moz-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%) !important;*/
  /*background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(var(--gradian-color1))), color-stop(100%, rgba(var(--gradian-color2)))) !important;*/
  /*background: -webkit-linear-gradient(*/
  /*  -45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%) !important;*/
  /*background: -o-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%) !important;*/
  /*background: -ms-linear-gradient(-45deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%) !important;*/
  /*background: -webkit-linear-gradient(*/
  /*  315deg, rgba(var(--gradian-color1)) 0%, var(--gradian-color2) 100%) !important;*/
  /*background: -o-linear-gradient(315deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%) !important;*/
  /*background: linear-gradient(*/
  /*  135deg, rgba(var(--gradian-color1)) 0%, rgba(var(--gradian-color2)) 100%) !important;*/
  /*filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=rgba(var(--gradian-color1)), endColorstr=rgba(var(--gradian-color2)), GradientType=1) !important;*/

}

.search-container {
  padding-top: 7%;
}

.m-panel {
  z-index: 999;
  margin-top: -100px;
  background: transparent !important;
}

.round-panel {
  background: white;
  border-radius: 20px;

}


</style>
