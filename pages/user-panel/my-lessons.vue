<template>
  <div class="w-100" style="overflow-x: auto; overflow-y: hidden">
    <div class="m-3 pt-3">
      <b-row id="toolbar" class="w-100 mb-3">
        <b-col lg="4" >
          <b-form-group
            :label='$t("mylesson.filter.acceptStatus")'
            label-for="input-acceptStatus"
            label-cols-lg="3"
            label-align-lg="right"
            label-size="sm"
            class="mb-0"
          >
            <b-form-select size="sm" id="input-acceptStatus" class="w-100" v-model="searchData.acceptStatus"
                           :options="status_options"></b-form-select>
          </b-form-group>
        </b-col>
        <b-col lg="4" >
          <b-form-group
            :label='$t("mylesson.filter.lessons")'
            label-for="select-lesson"
            label-cols-lg="3"
            label-align-lg="right"
            label-size="sm"
            class="mb-0"
          >

            <v-select id="select-lesson"
                      :placeholder="$t('mylesson.filter.lessons')"
                      v-model="searchData.lessonId"
                      class="m-v-select2 w-100"
                      :reduce="x => x.id"
                      :options="lesson_options"
                      label="subject">
            </v-select>
          </b-form-group>
        </b-col>
        <b-col lg="4" class="mt-xl-0 mt-lg-0 mt-md-2 mt-sm-2 mt-2" >
          <b-button size="sm" variant="primary" @click="this.loadMyLesson">
          <span v-if="busy">
            <b-spinner small type="grow">
          </b-spinner>
          </span>
            <span v-if="busy">Searching...</span>
            <span v-if="!busy">Search</span>
          </b-button>
        </b-col>
      </b-row>
      <div style="min-width: 750px">
        <b-row class="d-md-flex col-md-12 col-lg-12 m-center">
          <b-pagination
            v-model="searchData.pageIndex"
            :total-rows="this.searchData.rowCount"
            :per-page="this.searchData.perPage"
            v-if="this.searchData.rowCount / this.searchData.perPage > 1"
            @change="loadMyLesson"
          ></b-pagination>
        </b-row>
        <div class="w-100 h-100">
          <div class="w-100 shadow-sm d-flex font-weight-bold border rounded-bottom"
               style="border-radius: 10px;background-color: #d8d6d6">
            <div class="pl-5  mt-3" style="size: 3rem">
              <span class="" style="size: 3rem"></span>
            </div>
            <div class="pl-3 w-40 mt-1">
              <span class="">{{ $t("mylesson.grid.studentname") }}</span>
            </div>
            <div class="pl-3 w-30 mt-1">
              <span class="">{{ $t("mylesson.grid.lesson") }}</span>
            </div>
            <div class=" w-20 mt-1 text-center">
              <span class="">{{ $t("mylesson.grid.status") }}</span>
            </div>
            <div class="pl-3 w-25 mt-1 text-center">
              <span class="">{{ $t("mylesson.grid.date") }}</span>
            </div>
            <div class="pl-3 w-15 mt-1">
            </div>
            <div class="pl-3 w-15 mt-1">
            </div>
          </div>
          <div class="mx-0 w-100"
               v-for="(item,index) in mylessonRows" :key="index">

            <div class="w-100 p-2 mt-2 shadow-sm ">
              <div class="w-100 d-flex">
                <div class=" m-pointer" @click="$root.$emit('bv::toggle::collapse', 'coll_message_' + item.id  )">
                  <b-avatar
                    size="3rem"
                    :src="item.student.File != null ? '/'+ item.student.File.path : ''"
                    alt="Cropped Image"/>
                </div>
                <div class="pl-3 w-40 mt-2  m-pointer" @click="$root.$emit('bv::toggle::collapse', 'coll_message_' + item.id  )">
                  <span class="font-weight-bold"> {{ item.student.name + " " + item.student.lastName }}</span>
                </div>
                <div class="pl-3 w-30 mt-2   m-pointer" @click="$root.$emit('bv::toggle::collapse', 'coll_message_' + item.id  )">
                  <span class="font-weight-bold">{{ item.Lesson.subject }}</span>
                </div>
                <div class="text-center w-20 mt-2   m-pointer" @click="$root.$emit('bv::toggle::collapse', 'coll_message_' + item.id  )">
                  <b-badge variant="warning" v-if="item.acceptStatus === 0"> {{ $t("mylesson.acceptStatus.pending") }}
                  </b-badge>
                  <b-badge variant="success" v-if="item.acceptStatus === 1">
                    {{ $t("mylesson.acceptStatus.verified") }}
                  </b-badge>
                  <b-badge variant="danger" v-if="item.acceptStatus === 2"> {{ $t("mylesson.acceptStatus.rejected") }}
                  </b-badge>

                </div>
                <div class="text-center w-25 mt-2   m-pointer" @click="$root.$emit('bv::toggle::collapse', 'coll_message_' + item.id  )">
                  <span class="small">{{ item.createdAt | moment("ddd , MMM DD ,YYYY - hh:mm ") }}</span>
                </div>
                <div class="text-center w-15 ">
                  <b-button size="sm" v-if="item.acceptStatus === 0|| item.acceptStatus === null"
                            @click="showAcceptStatusDialog(1 , item.id, index)" class="mr-1 btn-crl btn-primary">
                    {{ $t("mylesson.acceptStatus.action.accept") }}
                  </b-button>
                </div>
                <div class="text-center w-15 ">
                  <b-button size="sm" v-if="item.acceptStatus === 0 || item.acceptStatus === null"
                            @click="showAcceptStatusDialog(2 , item.id, index)" class="mr-1 btn-crl btn-primary">
                    {{ $t("mylesson.acceptStatus.action.reject") }}
                  </b-button>
                </div>
              </div>
              <b-collapse :id="'coll_message_' + item.id "  class="p-2 w-100 ">
                <div class="rounded-lg p-2 m-1 border" style="background-color: rgb(252, 253, 253) ; ">

                  <div class="w-100 mt-1 ">
                    <span class="font-weight-bold" style="font-size: smaller">Week Day :</span>
                    <span class="w-100 ">{{  DayOfWeek(item.dayOfWeek) }}</span>
                  </div>
                  <div class="w-100 mt-1 ">
                    <span class="font-weight-bold" style="font-size: smaller;">Time :</span>
                    <span class="w-100 ">{{  GetTime(item.timeStart , item.timeEnd)}}</span>
                  </div>
                  <div class="w-100 mt-1 ">
                    <span class="font-weight-bold" style="font-size: smaller;">{{$t("mylesson.grid.lesson")}}:</span>
                    <span class="w-100 ">{{ item.Lesson.subject  }}</span>
                  </div>

<!--                  <div class="w-100 ">-->
<!--                    <span class="" style="font-size: x-small">Message:</span>-->
<!--                    <span class="w-100 ">{{ item.message }}</span>-->
<!--                  </div>-->
                </div>
              </b-collapse>

            </div>

          </div>
        </div>
      </div>


    </div>
    <b-modal id="acceptStatus_modal" centered size="md" hide-footer :title="acceptStatus_title === 1 ? 'Accept Message' : 'Reject Message' ">

      <div class="rounded-lg p-2 m-1 border" style="background-color: rgb(252, 253, 253) ; ">

        <div class="w-100 mt-1 ">
          <span class="font-weight-bold" style="font-size: smaller">Week Day :</span>
          <span class="w-100 ">{{  DayOfWeek(selectedItem.dayOfWeek) }}</span>
        </div>
        <div class="w-100 mt-1 ">
          <span class="font-weight-bold" style="font-size: smaller;">Time :</span>
          <span class="w-100 ">{{  GetTime(selectedItem.timeStart , selectedItem.timeEnd)}}</span>
        </div>
        <div class="w-100 mt-1 ">
          <span class="font-weight-bold" style="font-size: smaller;">{{$t("mylesson.grid.lesson")}}:</span>
          <span class="w-100 ">{{selectedItem.Lesson!=null ? selectedItem.Lesson.subject : ""  }}</span>
        </div>

      </div>
      <b-row class="mt-1">
        <b-textarea class="ml-3 mr-3"
                    id="textarea-rows"
                    v-model="$v.msg.$model"
                    :placeholder="this.$t('please_type_message')"
                    :state="$v.msg.required"
                    rows="4"
        ></b-textarea>
        <div class="ml-3 invalid-feedback" v-if="!$v.msg.required">
          {{ $t('mylesson.tutor.message.required') }}
        </div>
      </b-row>
      <b-row class="mt-3">
        <b-col>
          <b-button class="float-right w-50" variant="primary" @click="changeAcceptStatus">{{ $t("Send") }}
          </b-button>

        </b-col>
        <b-col>
          <b-button class="float-left w-50" variant="primary" @click="cancelAcceptStatus">
            {{ $t("cancel") }}
          </b-button>

        </b-col>
      </b-row>
    </b-modal>

  </div>
</template>

<script>
import axios from "axios";
import moment from "vue-moment"
import {required} from "vuelidate/lib/validators";

export default {
  name: "my-lessons",
  data() {
    return {
      selectedItem: {} ,
      rejectTemplateMessages: [{text:"Template 1" , value:this.$t('mylesson.reject.messages.temp.1')}
          , {text:"Template 2" , value:this.$t('mylesson.reject.messages.temp.2')}
          , {text:"Template 3" , value:this.$t('mylesson.reject.messages.temp.3')}
          , {text:"Template 4" , value:this.$t('mylesson.reject.messages.temp.4')} ],

      verifyTemplateMessages: [{text:"Template 1" , value:this.$t('mylesson.verify.messages.temp.1')}
        , {text:"Template 2" , value:this.$t('mylesson.verify.messages.temp.2')}
        , {text:"Template 3" , value:this.$t('mylesson.verify.messages.temp.3')}
        , {text:"Template 4" , value:this.$t('mylesson.verify.messages.temp.4')} ],

      windowWidth: process.browser ? window.getComputedStyle(document.documentElement).getPropertyValue('--screen-mode') : 'sm',
      acceptStatusData: {},
      busy: true,
      msg: null,
      lesson_options: [],
      status_options: [
        {value: -1, text: this.$t('mylesson.filter.status.all')},
        {value: 0, text: this.$t('mylesson.filter.status.pending')},
        {value: 1, text: this.$t('mylesson.filter.status.verified')},
        {value: 2, text: this.$t('mylesson.filter.status.rejected')},
      ],
      acceptStatus_title: 0 ,
      showOverlay: false,
      mylessonRows: [],
      fields: [
        {
          key: 'student_image',
          label: ''
        },
        {
          key: 'student.name',
          label: 'Student Name',
          sortable: true,
          thStyle: {width: '25%'},
        },
        {
          key: 'Lesson.subject',
          label: 'Lesson',
          sortable: true,
          thStyle: {width: '25%'},
        },
        {
          key: 'finish',
          label: 'Done',
          thStyle: {width: '25%'},
        },
        {
          key: 'updatedAt',
          label: 'Date',
          sortable: true,
          thStyle: {width: '40%'},
        },
        {
          key: 'acceptStatus',
          label: "Status",
          sortable: false,
          thStyle: {width: '25%'},
        },
        {
          key: 'verify',
          label: "",
          sortable: false,
          thStyle: {width: '25%'},
        },
        {
          key: 'reject',
          label: "",
          sortable: false,
          thStyle: {width: '25%'},
        },
      ],
      searchData: {
        pageIndex: 0,
        rowCount: 0,
        perPage: 10,
        lessonId: null,
        acceptStatus: -1, // -1= all , 0=unverified , 1= verified , 2= rejected
      },
    }
  },
  mounted() {
    this.initFilter()
    this.loadMyLesson()
  },
  validations: {
    msg:{
      required,
    }
  },
  methods:
    {
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
      showAcceptStatusDialog(verify, id, index) {
        this.selectedItem = this.mylessonRows[index]
        this.acceptStatus_title = verify
        this.acceptStatusData.acceptStatus = verify
        this.acceptStatusData.myLessonId = id
        this.acceptStatusData.index = index
        this.msg = null
        this.showModal("acceptStatus_modal")
      },
      cancelAcceptStatus() {
        this.selectedItem = {}
        this.acceptStatusData.acceptStatus = 0
        this.acceptStatusData.myLessonId = 0
        this.acceptStatusData.index = 0

        this.hideModal("acceptStatus_modal")
      },
      initFilter() {
        try {

          this.$axios.post("/mylessons/get-tutor-lessons", null).then((res) => {
            if (res.data !== false) {
              if (res.data.length > 0) {
                this.lesson_options = res.data
              }
            }
          }).catch((err) => {

          })
        } catch (e) {

        }
      },

      cDate(date) {
        return date.toLocaleString()
      },

      loadMyLesson(index) {
        try {
          this.busy = true
          this.searchData.pageIndex = index
          this.$axios.post("/mylessons/getTutorMylessons", this.searchData).then((res) => {
            this.mylessonRows = res.data.rows
            this.searchData.rowCount = res.data.count

          }).catch((err) => {

          }).finally(() => {
            this.busy = false
          })

        } catch (e) {
          this.busy = false
        }
      },

      showModal(modalId) {
        this.$bvModal.show(modalId)
      },
      hideModal(modalId) {
        this.$bvModal.hide(modalId)
      },

      changeAcceptStatus()
      {
        try {
          this.$v.$reset()
          this.$v.msg.$touch()
          if (this.$v.msg.$invalid) {
            console.log("vuelidate error")
          } else {
            this.busy = true
            let data = {
              acceptStatus: this.acceptStatusData.acceptStatus,
              myLessonId: this.acceptStatusData.myLessonId,
              msg: this.msg
            }
            this.$axios.post("/mylessons/acceptMyLessonByTutor", data).then((res) => {
              if (res.data !== null) {
                this.mylessonRows[this.acceptStatusData.index].acceptStatus = res.data.acceptStatus
                this.hideModal("acceptStatus_modal")
              }
            }).catch((err) => {
              this.busy = false
            }).finally(() => {
              this.busy = false
            })

          }
        } catch (e) {
          console.log(e)
          this.busy = false
        }
      }


    }
}
</script>

<style scoped>
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.m-v-select2 {
  font-size: 0.9rem;
}
</style>
