<template>
  <div>
    <b-row class="col-md-12 col-lg-10 m-center" v-if="tutorData != null">
      <div class="mx-0 w-100 shadow mt-5  pl-xl-5 p-lg-5 p-md-5 p-sm-3 p-3 d-xl-flex d-lg-flex d-md-flex">
        <b-modal ref="sm_modal" centered size="md" hide-footer title="Send Message">
          <b-overlay :show="showOverlay" rounded="sm">
            <b-row class="mt-1">
              <b-textarea class="ml-3 mr-3"
                          id="textarea-rows" v-model="textMessage"
                          :placeholder="this.$t('please_type_message')"
                          rows="4"
                          :lazy="true"
              ></b-textarea>
            </b-row>
            <b-row class="mt-3">
              <b-col>
                <b-button class="float-right w-50" variant="primary" @click="this.sendMessage">{{ $t("Send") }}
                </b-button>

              </b-col>
              <b-col>
                <b-button class="float-left w-50" variant="primary" @click="this.cancelSendMessage">
                  {{ $t("cancel") }}
                </b-button>

              </b-col>
            </b-row>
          </b-overlay>
        </b-modal>

        <b-avatar
          size="7rem"
          :src="tutorData.File != null ? '/'+tutorData.File.path : ''"
          alt="Cropped Image"
        />
        <div class="pt-4 px-lg-4 px-xl-4 px-md-4 w-100">
          <div>
            <h3> {{ tutorData.name }} {{ tutorData.lastName }}</h3>
          </div>
          <b-form-rating class="px-0 ml-n1" style="outline:none; box-shadow: none;" id="rating-sm-no-border"
                         variant="warning" v-model="tutorData.AvgRate" readonly no-border inline
                         size="lg"></b-form-rating>
          <h5 class="pt-2"> {{ tutorData.headline }}</h5>
          <div class="pt-2 mt-1" v-if="tutorData.training_method !== undefined && tutorData.training_method !== null">
            <span style="color: var(--color2);">{{ $t('tutors.trainingMethods.label') }}: </span>
            {{ trainingType(tutorData.training_method) }}
          </div>
          <h3 class="pt-4 pb-2"> {{ $t('aboutMe') }}</h3>
          <h6> {{ tutorData.bioMore }}</h6>
          <div v-if="windowWidth === 'xl' || windowWidth === 'lg' || windowWidth === 'md'">
            <b-button style=" right: 40px; top: 70px;" class="position-absolute btn btn-outline-primary"
                      @click="showMessageDialog">
              {{ $t("sendMessage") }}
              <font-awesome-icon style=" margin-top: 5px;margin-right: 5px;" :icon="['fas', 'paper-plane']"/>
            </b-button>
            <b-button style=" right: 40px; top: 120px; width: 160px" class="position-absolute btn btn-primary"
                      @click="booklesson">
              {{ $t("bookLesson") }}
            </b-button>
          </div>
          <div v-else class="mt-3 w-100">
            <b-button style="width: 160px" class="btn btn-outline-primary mb-3"
                      @click="showMessageDialog">
              {{ $t("sendMessage") }}
              <font-awesome-icon :icon="['fas', 'paper-plane']"/>
            </b-button>
            <b-button style="width: 160px" class="btn btn-primary mb-3"
                      @click="booklesson">
              {{ $t("bookLesson") }}
            </b-button>
          </div>
        </div>
      </div>
      <b-row class="mx-0 w-100 shadow mt-5  pl-xl-5 p-lg-5 p-md-5 p-sm-3 p-3">
        <h3 class="pb-3">{{ $t("subjects.title") }}</h3>
        <div v-for="item in tutorData.UserLessons" :key="item.id" class="w-100">
          <div class=" title-color  pb-2">

            <font-awesome-icon v-if="item.acceptStatus === 1" style="color: #03ef1c ;"
                               :icon="['fas', 'check-circle']"/>
            {{ item.Lesson.subject }}
            {{ item.Lesson.code }}
            <span class="ml-1" v-if="item.rate !== '' && item.rate > 0" style="width: unset!important;">
                  <span class="outline-badge" variant="warning" style="position: absolute!important;">
                    <font-awesome-icon style=" color: #ffc107 ;"
                                       :icon="['fas', 'star']"/>

                    <span
                      style="color: #ffc107; left: 7px!important;">{{
                        item.rate
                      }}
                    </span>
                  </span>

                </span>
          </div>
          <div class="small  title-color">
            {{ $t('subjects.grade_title') }}:<span class="font-weight-bold">  {{ item.grade }}</span>
          </div>
          <div class="small title-color">
            {{ $t('subjects.price.label') }}: <span
            class="font-weight-bold"> {{ item.price > 0 ? item.price + ' CAD' : $t('price-0') }}</span>


          </div>
          <div class="small title-color">

            {{ $t('subjects.tutor.year') }}: <span class="font-weight-bold"> {{ item.year }}</span>

          </div>
          <div class="small  title-color">
            {{ item.description }}
          </div>
          <hr class="my-2">
        </div>
      </b-row>

      <b-row class="mx-0 w-100 shadow mt-5 pl-xl-5 p-lg-5 p-md-5 p-sm-3 p-3">
        <h3 class="pb-3">Education</h3>
        <div v-for="item in tutorData.Educations" :key="item.id" class="w-100 ">
          <div class="small  title-color">
            {{ $t('university') }}:<span class="font-weight-bold">   {{ item.university }}</span>
          </div>
          <div class="small  title-color">
            {{ $t('years') }}:<span class="font-weight-bold">   {{ item.startYear }} - {{ item.endYear }}</span>
          </div>
          <div class="small  title-color">
            {{ $t('levelEducation') }}:<span class="font-weight-bold">   {{ item.levelEducation }}</span>
          </div>
          <div class="small  title-color">
            {{ $t('department') }}:<span class="font-weight-bold">        {{ item.department }}</span>
          </div>
          <hr class="my-2">
        </div>
      </b-row>
      <client-only>
        <b-row class="mx-0 w-100 shadow mt-5  pl-xl-5 p-lg-5 p-md-5 p-sm-3 p-3 overflow: auto" id="takeLesson">
          <h3 class="pb-3">{{ $t('schedule.label') }}</h3>
          <div class="w-100 font-weight-bold mb-3">{{ $t('schedule.title') }}</div>
          <div class="w-100" style="overflow-x: auto; overflow-y: hidden">
            <div class="w-100 " style="min-width: 750px">
              <b-row class="mx-0 w-100 text-center  border-bottom border-top  border-left border-right p-0 "
                     style="height:50px;">
                <b-col>
                  <font-awesome-icon style="font-size: x-large; margin-top: 11px; color: #cccfd2;"
                                     :icon="['far', 'clock']"/>
                </b-col>
                <b-col class="border-left p-0" v-for="(item,index) in week" :key="index">
                  <div style="margin-top: 11px;"> {{ item }}</div>
                </b-col>
              </b-row>
              <b-row class="mx-0 w-100 border-bottom border-right" v-for="(clockItem, clockIndex) in clock"
                     :key="clockIndex">
                <b-col class="border-left text-center ">
                  <div class="align-content-center align-middle"
                       :class="clockIndex % 2 === 0 ? 'm-even-time' : 'd-none'">
                    {{ clockIndex < 10 ? '0' + Math.floor(clockIndex / 2) : clockIndex / 2 }}:{{
                      (clockIndex % 2 === 0) ? '00' :
                        '30'
                    }}
                  </div>
                </b-col>
                <b-col class="border-left p-0" v-for="(item,index) in week" :key="index">
                  <div :id="'tooltip-timing-' + index + '_' + clockIndex"
                       :class="(timing[index][clockIndex].value === true
                       && timing[index][clockIndex].acceptStatus === 0 )? 'm-selected_1' : (timing[index][clockIndex].value === true   ? 'm-selected m-pointer' : '')"

                       @click="selectTime(index,clockIndex)">
                    {{
                      timing[index][clockIndex] ?
                        ((clockIndex < 10 ? '0' + Math.floor(clockIndex / 2) : Math.floor(clockIndex / 2)) + ':' + ((clockIndex % 2 === 0
                        ) ? '00' : '30')) + ' - ' +
                        (((clockIndex + 2) < 10 ? '0' + Math.floor((clockIndex + 2) / 2) : Math.floor((clockIndex + 2) / 2)
                        ) + ':' + (((clockIndex + 2) % 2 === 0) ? '00' : '30')) :
                        '&nbsp;'
                    }}

                    <b-tooltip v-if="timing[index][clockIndex].selected" class=""
                               :target="'tooltip-timing-' + index + '_' + clockIndex">
                      {{ timing[index][clockIndex].subject }}
                      <b-badge v-if="timing[index][clockIndex].acceptStatus === 0" variant="warning">Pending</b-badge>
                      <!--                        <b-badge  v-if="timing[index][clockIndex].acceptStatus === 1" variant="success">Verified</b-badge>-->
                      <!--                        <b-badge  v-if="timing[index][clockIndex].acceptStatus === 2" variant="dark">Rejected</b-badge>-->
                    </b-tooltip>

                  </div>
                </b-col>
              </b-row>
            </div>

          </div>
        </b-row>
      </client-only>


      <b-form-group class="mx-0 w-100 shadow mt-5  pl-xl-5 p-lg-5 p-md-5 p-sm-3 p-3">
        <h3 class="pb-1">{{ $t("Reviews") }}</h3>

        <div class="w-50 float-left d-block">
          <b-pagination class="mt-2" @change="reviewPageChange" v-model="reviewCurrentPage" :per-page="perPage"
                        v-show="perPage < reviewRowCount" pills
                        :total-rows="reviewRowCount" size="sm"></b-pagination>
        </div>

        <div style="font-size: small" v-if=" (reviewRowCount === 0 || reviewRowCount === null) && !$auth.loggedIn" class="w-100 float-left d-block">
          {{$t("reviews.no_comment")}}
          <b-link @click="loginPage">Click here</b-link>
        </div>

        <b-row class="w-100 overflow-hidden mt-4 mx-0" v-for="(reviewItem, index)  in reviewRows" :key="reviewItem.id"
               style="border-bottom: 1px solid #dedcdc">
          <div class="w-100 text-right position-relative">
              <span v-if="reviewItem.stu_userId === $auth.user.id">
            <a @click="editReview(index)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg>
            </a>
            <a @click="deleteReview(index , reviewItem)">
              <svg id="delreview" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   class="bi bi-trash ml-2" viewBox="0 0 16 16">
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </a>

          </span>
          </div>
          <div class="mx-0 w-100 d-xl-flex d-lg-flex d-md-flex "
               :class="reviewItem.stu_userId === $auth.user.id? 'mt-n3' : ''">


            <b-avatar
              size="3rem"
              alt="Cropped Image"
              :src=" reviewItem.student !== null && reviewItem.student !== undefined
                && reviewItem.student.File !== undefined && reviewItem.student.File !== null &&
                  reviewItem.student.File.path != null && reviewItem.student.File.path !== undefined ? '/'+ reviewItem.student.File.path : ''"
            />

            <div class="pt-2 px-lg-2 px-xl-2 px-md-2 w-100">
              {{ reviewItem.student.name + " " + reviewItem.student.lastname }}

              <div style="font-size: x-small">
                {{ new Date(reviewItem.updatedAt).toDateString('YYYY/MM/DD') }}
              </div>


              <div class="mt-2 w-100 d-block">
                Subject : {{ reviewItem.Lesson.subject }}
              </div>
              <div class="w-100 d-block">
                <b-form-rating class="px-0 ml-n1" style="outline:none; box-shadow: none;" id="rating-sm-no-border"
                               variant="warning" v-model="reviewItem.rate"
                               readonly no-border inline
                ></b-form-rating>
              </div>
              <div class="mt-1">
                <p style="font-family: 'Segoe UI'; font-size: 18px;display: flex;
              white-space: normal;
              word-break: break-word;">{{ reviewItem.comment }}</p>
              </div>
            </div>


          </div>

        </b-row>
        <b-row
          class="w-100 mt-4 mx-0" v-if="$auth.loggedIn">
          <div class="w-100 font-weight-bold mb-3">{{ $t('insert.review') }}</div>
          <div id="exixstid" class="invalid-feedback" :class="{ 'is-invalid  d-block': reviewError.exist }"
               v-if="reviewError.exist">{{ $t("review_exist") }}
          </div>

          <b-form-group class="col-12 col-xl-6 col-lg-6" id="input-group-subject"
                        :label="$t('review.reviewLessonId.label')"
                        label-for="input-lessonId">
            <v-select :placeholder="$t('review.reviewLessonId.placeholder')"
                      id="input-lessonId"
                      v-model.trim="$v.reviewForm.lessonId.$model"
                      class="m-v-select2"
                      :class="{ 'is-invalid  d-block': $v.reviewForm.lessonId.$error }"
                      :reduce="x => x.id"
                      :options="reviewLessons"
                      label="subject"
                      :selectable="option => !option.hasOwnProperty('group')">

              <template #option="{ group, subject }">
                {{ subject }}
              </template>
            </v-select>
            <div class="invalid-feedback" v-if="!$v.reviewForm.lessonId.serverError">{{
                $t(errors.lessonId.msg)
              }}
            </div>
            <div class="invalid-feedback" v-if="!$v.reviewForm.lessonId.required">
              {{ $t('review.reviewLessonId.required') }}
            </div>
          </b-form-group>

          <b-form-group class="col-12" id="input-group-rate" :label="$t('review.rate.label')"
                        label-for="input-rate">
            <b-form-rating class="px-0 ml-n1" style="outline:none; box-shadow: none;" id="rating-sm-no-border"
                           :class="{ 'is-invalid  d-block': $v.reviewForm.rate.$error }"
                           variant="warning" v-model="reviewForm.rate" no-border inline
                           size="lg"></b-form-rating>
            <div class="invalid-feedback" v-if="!$v.reviewForm.rate.required">
              {{ $t('review.rate.required') }}
            </div>

          </b-form-group>

          <b-form-group class="col-12" id="input-group-comment" :label="$t('review.comment.label')"
                        label-for="input-comment">
            <b-form-textarea
              rows="4"
              autocomplete="off"
              :placeholder="$t('review.comment.placeholder')"
              id="input-comment"
              v-model.trim="reviewForm.comment"
              :lazy="true"
            >
            </b-form-textarea>

<!--            <div class="invalid-feedback" v-if="!$v.reviewForm.comment.required">-->
<!--              {{ $t('review.comment.required') }}-->
<!--            </div>-->

          </b-form-group>
          <b-form-group class="col-12">
            <b-button :disabled="reviewOverlay" class="btn btn-crl btn-primary submit px-3 mr-2"
                      @click="saveReview">{{
                $t('PostReview')
              }}
              <b-spinner v-if="reviewOverlay" variant="light" small type="grow"></b-spinner>
            </b-button>
            <b-button v-if="reviewForm.tutorId > 0" :disabled="reviewOverlay"
                      class="btn btn-crl btn-primary submit px-3 mr-2"
                      @click="CancelReview">{{
                $t('Cancel')
              }}
            </b-button>
          </b-form-group>

        </b-row>

      </b-form-group>
    </b-row>


    <b-modal hide-header hide-footer centered v-model="lessonDialogVisible" id="add_panel">
      <b-overlay
        id="overlay-background"
        :show="lessonDialogOverlay"
        :opacity="0.8"
        variant="white"
        rounded="sm"
      >

        <b-form class="w-100">
          <div class="w-100">
            <div class="rounded-lg p-2 m-1 border" style="background-color: rgb(252, 253, 253) ; ">
              <div class="w-100 mt-2 ">
                <span class="font-weight-bold" style="font-size: smaller">Week Day :</span>
                <span class="w-100 ">{{  DayOfWeek(myLessonData.dayOfWeek) }}</span>
              </div>
              <div class="w-100 mt-2 mb-2">
                <span class="font-weight-bold" style="font-size: smaller;">Time :</span>
                <span class="w-100 ">{{  GetTime(myLessonData.timeStart , myLessonData.timeEnd)}}</span>
              </div>
            </div>


            <b-form-group
              label="Lesson:"
              label-for="subject-select"
              class="mb-0"
            >
              <b-form-select id="subject-select"
                             v-model.trim="$v.myLessonData.userLesson.$model"
                             :options="selectLessonDialog_options"
                             :state="!$v.myLessonData.userLesson.$error && myLessonData.userLesson !== null"
                             aria-describedby="input-userlessonId-feedback"
              >
              </b-form-select>
              <b-form-invalid-feedback id="input-userlessonId-feedback">
                {{ this.$t("myLesson.userlessonId.required") }}
              </b-form-invalid-feedback>


            </b-form-group>


            <b-form-group
              label="Description:"
              label-for="descriptionField"
              class="mb-0">

              <b-form-textarea
                id="descriptionField"
                v-model="myLessonData.description"
                :placeholder="$t('myLesson.description_placeholder')"
                autocomplete="off"
                :lazy="true"
              ></b-form-textarea>
            </b-form-group>


            <div class="p-2 w-100">

              <b-button class="form-control btn btn-crl btn-primary btn-reg mr-2 w-35" @click="sendLessonRequest">
                {{ $t('myLesson.SendRequest') }}
              </b-button>

              <b-button class="form-control btn btn-crl btn-primary submit px-3 btn-reg mr-2" @click="cancelDialog">
                {{ $t('cancel') }}
              </b-button>


            </div>

          </div>
        </b-form>

      </b-overlay>
    </b-modal>
  </div>
</template>
<script>

import {library} from '@fortawesome/fontawesome-svg-core'
import {faClock} from '@fortawesome/free-regular-svg-icons'
import {faPaperPlane, faStar, faTimes, faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {required} from "vuelidate/lib/validators";

library.add(faClock)
library.add([faPaperPlane, faStar, faTimes, faCheckCircle])

export default {
  name: 'ToturDetails',

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
    for (let i = 0; i < 48; i++)
      this.clock.push(i)
    this.week.forEach(() => {
      const sArr = [];
      this.clock.forEach(function (c) {
        sArr[c] = false
      });
      this.timing.push(sArr)
      this.timingData.push(sArr)
    });
    this.loadTutor();
    this.loadUserLesson()
    this.loadReviews(1)

    this.rou = ((this.$router));


  },
  data() {

    return {
      rou : null,
      bookingSelectDay: null ,
      bookingSelectTime: null ,
      editReviewMode: false,
      reviewRowCount: 0,
      windowWidth: process.browser ? window.getComputedStyle(document.documentElement).getPropertyValue('--screen-mode') : 'sm',
      reviewCurrentPage: 1,
      perPage: 10,
      reviewRows: [],
      reviewError: {exist: false, notexist: false},
      reviewOverlay: false,
      reviewLessons: [],
      reviewForm: {
        lessonId: null,
        comment: "",
        rate: null,
        tutorId: null
      },
      reviewDialog: true,
      lessonDialogOverlay: false,
      myLessons: [],
      myLessonData: {
        id: 0,
        timingId: 0,
        description: "",
        dayOfWeek: 0,
        timeStart: 0,
        timeEnd: 0,
        userlessonId: 0,
        userLesson: null
      },
      selectLessonDialog_options: [],
      description: "",
      timingItem: null,
      textMessage: "",
      showOverlay: false,
      lessonDialogVisible: false,
      week: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
      timing: [],
      timingData: [],
      clock: [],
      tutorId: this.$route.params.id === undefined ? 0 : this.$route.params.id,
      errors: null,
      tutorData: null
    }
  },
  validations: {
    reviewForm: {
      lessonId: {
        required,
        serverError(value) {
          if (value === '') {
            return true
          }
          return !(this.errors != null && this.errors.lessonId && value === this.errors.lessonId.value)
        }
      },
      // comment: {required},
      rate: {required},
    },
    myLessonData: {
      userlessonId: {
        required,
        serverError(value) {
          if (value === '') {
            return true
          }
          return !(this.errors != null && this.errors.userlessonId && value === this.errors.userlessonId.value)
        }
      }
      ,
      userLesson: {
        required,
      }

    }
  },

  computed: {
    debounceText: {
      get() {
        return this.comment;
      },
      set: (function (newValue) {
        this.comment = newValue;
      })
    },
  },
  methods: {
    GetTime(clockIndex ,timeEnd){

      let t1 = (clockIndex < 10 ? '0' + Math.floor(clockIndex / 2) : (clockIndex / 2)).toString()
      let t2 = (clockIndex % 2 === 0) ? '00' : '30'

      let t1_1 = (timeEnd < 10 ? '0' + Math.floor(timeEnd / 2) : (timeEnd / 2)).toString()
      let t2_1 = (timeEnd % 2 === 0) ? '00' : '30'

      return  t1 + ":" + t2 + " - " + t1_1 + ":" + t2_1
    },
    DayOfWeek(dw){
      let  week =  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      return week[dw]
    },

    loginPage(){
      this.$router.push('/login')
    },
    booklesson() {
      // let myElement = document.getElementById('takeLesson')
      // let topPos = myElement.offsetTop;
      // window.scrollTo({ top: topPos, behavior: 'smooth'});
      document.getElementById("takeLesson").scrollIntoView({behavior: 'smooth'});
    },
    trainingType(item) {
      switch (item) {
        case 1:
          return 'Online';
        case 2:
          return 'In-Person'
        case 3:
          return 'Online / In-Person'
        default:
          return ''
      }
    },

    reviewPageChange(pageIndex) {
      this.loadReviews(pageIndex)
    },
    showModal(modalId) {
      this.$bvModal.show(modalId)
    },
    hideModal(modalId) {
      this.$bvModal.hide(modalId)
    },

    showReviewDialog(visible) {
      if (visible) {
        this.clearReview()
        this.showModal("reviewModal")
      } else
        this.hideModal("reviewModal")
    }

    ,
    clearReview() {
      this.editReviewIndex = -1
      this.editReviewMode = false
      this.reviewError.exist = false
      this.reviewError.notexist = false
      this.reviewForm.comment = null
      this.reviewForm.rate = null
      this.reviewForm.lessonId = null
      this.reviewForm.tutorId = null
      this.$v.$reset()

    },
    onResize() {
      if (process.browser)
        this.windowWidth = window.getComputedStyle(document.documentElement).getPropertyValue('--screen-mode')
    },
    editReview(index) {
      this.reviewError.exist = false
      this.reviewError.notexist = false
      this.$v.$reset()
      this.editReviewIndex = index
      this.editReviewMode = true
      this.reviewForm.id = this.reviewRows[index].id
      this.reviewForm.rate = this.reviewRows[index].rate
      this.reviewForm.comment = this.reviewRows[index].comment
      this.reviewForm.lessonId = this.reviewRows[index].lessonId
      this.reviewForm.tutorId = this.tutorId
      this.showModal("reviewModal")
    },

    deleteReview(index, review) {
      let self = this
      this.$bvModal.msgBoxConfirm(this.$t('delete_confirm'), {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        hideHeaderClose: false,
        centered: true
      })
        .then(value => {
          if (value === true) {
            let delData = {id: review.id, lessonId: review.lessonId, tutorId: review.tutor_userId}
            self.$axios.post('/review/delete', delData).then((res) => {

              self.makeToast('success', 'Message', this.$t('success_delete'))
              //debug
              console.log(res.data);

              self.loadReviews()

            }).catch(error => {
              console.log(error)
            });

          }
        })
        .catch(err => {
          console.log(err)
          // An error occurred
        })
    },
    CancelReview() {
      this.clearReview()
    },
    saveReview() {
      try {
        this.reviewError.exist = false
        this.$v.$reset()
        this.errors = null
        //evt.preventDefault()
        this.$v.reviewForm.$touch()
        if (this.$v.reviewForm.$invalid) {
          console.log("vuelidate error")
        } else {
          this.reviewOverlay = true
          this.reviewForm.tutorId = this.tutorId
          let url = '/review/create'
          if (this.editReviewMode)
            url = '/review/edit'
          this.$axios.post(url, this.reviewForm).then((res) => {
            if (res.data.id > 0) {
              if (this.editReviewMode) {
                this.reviewRows[this.editReviewIndex].rate = (res.data.rate)
                this.reviewRows[this.editReviewIndex].comment = (res.data.comment)
              } else
                this.reviewRows.push(res.data)
              this.clearReview()
              this.showReviewDialog(false)
              this.makeToast("success", "Message", "review.saveSuccess")

            }
          }).catch(error => {
            if (error.response.data === "review_notexist")
              this.reviewError.notexist = true

            if (error.response.data === "review_exist") {
              this.reviewError.exist = true
            }
            if (error.response.data.errors) {
              this.errors = error.response.data.errors

            }
          })
            .finally(() => {
              this.reviewOverlay = false
            })
        }
      } catch (e) {
        console.log(e)
      }


    },

    clearSendRequest() {
      this.myLessonData.description = ""
      this.myLessonData.dayOfWeek = 0
      this.myLessonData.timeEnd = 0
      this.myLessonData.id = 0
      this.myLessonData.timingId = 0
      this.myLessonData.userlessonId = 0
    },
    sendLessonRequest() {
      this.$v.$reset()
      this.errors = null
      //evt.preventDefault()
      this.$v.myLessonData.$touch()
      if (this.$v.myLessonData.$invalid) {
        console.log("vuelidate error")
        return
      }
      try {
        let data = {
          timeStart: this.myLessonData.timeStart,
          timeEnd: this.myLessonData.timeEnd,
          dayOfWeek: this.myLessonData.dayOfWeek,
          tutorUserId: this.tutorId,
          lessonId: this.myLessonData.userLesson.lessonId,
          userLessonId: this.myLessonData.userLesson.id,
          description: this.myLessonData.description,
          timingId: this.myLessonData.timingId
        }

        this.lessonDialogOverlay = true
        this.$axios.post('/mylessons/saveMyLesson', data).then((res) => {
          let myLesson = res.data.data
          if (myLesson != null) {
            if (myLesson.ID > 0) {
              let values = this.timing[myLesson.dayOfWeek][myLesson.timeStart]
              values["id"] = myLesson.id
              values["selected"] = true
              values["subject"] = this.myLessonData.userLesson.text
              values["acceptStatus"] = myLesson.acceptStatus
              this.$set(this.timing[myLesson.dayOfWeek], myLesson.timeStart, values);
              this.cancelDialog();
              this.myLessons.push(myLesson)
              this.makeToast("success", "Message", this.$t("mylesson.added"))

            }
          }
          this.lessonDialogVisible = false
          this.lessonDialogOverlay = false
        }).catch(error => {
          const err = error.response.data
          if (err.error === true) {
            if (err.type === "exist") {
              this.makeToast("danger", "Message", this.$t("mylesson.exist"))
              this.lessonDialogError = true
            }
          }
          this.lessonDialogOverlay = false
        })

      } catch (e) {
        this.lessonDialogOverlay = false
      }
    },

    selectTime(it, id) {
      if (!this.$auth.loggedIn) {
        this.$router.push('/login')
        return
      }

      if (this.timing[it][id].value === true) {
        if (this.timingData[it][id].acceptStatus === undefined || this.timingData[it][id].acceptStatus !== 0)
          this.showSelectLessonDialog(this.timingData[it][id])
      }
    },

    cancelDialog() {
      this.lessonDialogVisible = false;
      this.myLessonData.id = 0;
      this.myLessonData.timingId = 0
      this.myLessonData.userlessonId = 0
      this.myLessonData.description = ""
      this.myLessonData.timeEnd = 0
      this.myLessonData.timeStart = 0
      this.myLessonData.timingId = 0
      this.myLessonData.dayOfWeek = 0
    },

    showSelectLessonDialog(timingItem) {
      try {
        this.lessonDialogVisible = true
        this.myLessonData.timeStart = timingItem.item.timeStart
        this.myLessonData.timeEnd = timingItem.item.timeEnd
        this.myLessonData.dayOfWeek = timingItem.item.dayOfWeek
        this.myLessonData.timingId = timingItem.item.id
      } catch (e) {

      }
    },

    loadUserLesson() {
      try {
        let data = {userId: this.tutorId}
        this.$axios.post('/subject/getUserLessonsByUserId', data).then((res) => {
          let userLessons = res.data
          if (userLessons != null)
            var index = 0
          userLessons.forEach((item) => {
            if (index === 0)
              this.myLessonData.userLesson = {id: item.id, lessonId: item.lessonId, text: item.subject};

            index = index + 1;
            this.selectLessonDialog_options.push({
              value: {id: item.id, lessonId: item.lessonId, text: item.subject},
              text: item.subject
            })
          })
        }).catch(error => {
          // this.$router.push('/404')
          console.log(error)
        })

      } catch (e) {

      }
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

    loadTutor() {

      const formData = {
        tutorId: this.tutorId
      }
      this.$axios.post('/user/getTutor', formData).then(async (res) => {
        this.tutorData = res.data
        console.log(this.tutorData)
        // this.tutorData.UserLessons.forEach((item) => {
        //   this.reviewLessons.push(item.Lesson)
        // })
        this.tutorData.TutorTimings.forEach((item) => {
          let values = {value: true, item}
          this.$set(this.timing[item.dayOfWeek], item.timeStart, values);
        })
        let tempReviewLessons = []
        this.tutorData.TutorMyLessons.forEach((item) => {
          this.reviewLessons.push({id: item.lessonId, subject: item.Lesson.subject})
          let values = this.timing[item.dayOfWeek][item.timeStart]
          values["id"] = item.id
          values["value"] = true
          values["selected"] = true
          values["subject"] = item.Lesson.subject
          values["acceptStatus"] = item.acceptStatus
          this.$set(this.timing[item.dayOfWeek], item.timeStart, values);
        })
        const uniqueElementsBy = (arr, fn) =>
          arr.reduce((acc, v) => {
            if (!acc.some(x => fn(v, x))) acc.push(v);
            return acc;
          }, []);
        this.reviewLessons = uniqueElementsBy(this.reviewLessons, (a, b) => a.id === b.id);
      }).catch(error => {
        console.log(error)
      })
    }
    ,
    loadReviews(pageIndex) {
      let data = {
        tutorId: this.tutorId,
        perPage: this.perPage,
        pageIndex: pageIndex
      }

      this.$axios.post('/review/getReviews', data).then((res) => {
        this.reviewRows = res.data.rows
        this.reviewRowCount = res.data.row_count
      }).catch(error => {
        console.log(error)
      })

    }
    ,
    sendMessage() {


      const formMsgData = {
        receiverId: this.tutorId,
        text: this.textMessage,
        type: 0, // simple message
        entityId: 0
      }
      this.showOverlay = true;
      this.$axios.post('/request/create', formMsgData).then((res) => {

        if (res.data.ok === true) {
          this.textMessage = ""
          this.makeToast("success", "Message", "sendMessage_success")
        } else {
          this.makeToast("danger", "Message", "sendMessage_error")
        }
        this.hideMessageDialog()
        this.showOverlay = true;
      }).catch(error => {

        this.makeToast("danger", "Message", "sendMessage_error")
        this.showOverlay = true;
        // this.$router.push('/404')
        console.log(error)
      })
    },

    showMessageDialog() {
      if (!this.$auth.loggedIn) {
        this.$router.push('/login')
        return
      }

      this.$refs['sm_modal'].show()
    },

    hideMessageDialog() {
      this.$refs['sm_modal'].hide()
    },

    cancelSendMessage() {
      this.hideMessageDialog()
    }
    ,

  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

}
</script>

<style scoped>

.title-color {
  color: #707175;
}

.m-selected {
  padding-top: 16px;
  z-index: 99;
  height: 50px;
  width: calc(100% + 2px);
  position: absolute;
  background-color: rgba(var(--gradian-color4));
  color: white;
  margin: -1px;
  font-size: small;
  text-align: center;
  box-shadow: inset 0 0 15px rgba(var(--gradian-color1));
}

.m-selected_2 {
  padding-top: 16px;
  z-index: 99;
  height: 50px;
  width: calc(100% + 2px);
  position: absolute;
  background-color: #a2bb03;
  color: white;
  margin: -1px;
  font-size: small;
  text-align: center;
  box-shadow: inset 0 0 15px #628002;
}

.m-selected_3 {
  padding-top: 16px;
  z-index: 99;
  height: 50px;
  width: calc(100% + 2px);
  position: absolute;
  background-color: #020202;
  color: white;
  margin: -1px;
  font-size: small;
  text-align: center;
  box-shadow: inset 0 0 15px #628002;
}

.m-selected_1 {
  padding-top: 16px;
  z-index: 99;
  height: 50px;
  width: calc(100% + 2px);
  position: absolute;
  background-color: #ff9900;
  color: white;
  margin: -1px;
  font-size: small;
  text-align: center;
  box-shadow: inset 0 0 15px #ef4203;
}

.w-30 {
  width: 30% !important;
}

.w-35 {
  width: 30% !important;
}

.m-even-time {
  padding-top: 14px;
  width: 100%;
  z-index: 999;
  position: absolute;
  height: 49px;
  background-color: white;
  margin-left: -15px;
  text-align: center;
}

.vertical-center {
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.m-pointer {
  cursor: pointer;
}

.simple-menu .ty-menu__submenu .ty-menu__submenu-items {

}

.simple-menu .ty-menu__submenu .ty-menu__submenu-items .ty-menu__submenu-item {
  padding: 10px 20px !important;
}


.simple-menu .ty-menu__submenu .ty-menu__submenu-items .ty-menu__submenu-item .ty-menu__submenu-link {
  font-weight: normal !important;
  padding-top: 7px !important;
}
</style>
