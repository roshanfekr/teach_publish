<template>
  <div class="w-100" style="overflow-x: auto; overflow-y: hidden">
    <div class="m-3 pt-3">
      <b-row id="toolbar" class="w-100 mb-3">
        <b-col lg="4">
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
        <b-col lg="4">
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
        <b-col lg="4" class="mt-xl-0 mt-lg-0 mt-md-2 mt-sm-2 mt-2">
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
        <b-row class="d-md-flex col-md-12 col-lg-12 m-center  ">
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
            <div class="pl-3 w-5 mt-1">
              <span class=""></span>
            </div>
            <div class="pl-3 w-45 mt-1">
              <span class="">{{ $t("mylesson.grid.tutorname") }}</span>
            </div>
            <div class="pl-3 w-40 mt-1">
              <span class="">{{ $t("mylesson.grid.lesson") }}</span>
            </div>
            <div class=" w-20 mt-1 text-center">
              <span class="">{{ $t("mylesson.grid.status") }}</span>
            </div>
            <div class="pl-3 w-25 mt-1 text-center">
              <span class="">{{ $t("mylesson.grid.takendate") }}</span>
            </div>
            <div class="pl-3 w-25 mt-1">
              <span class="">{{  }}</span>
            </div>
          </div>
          <div class="mx-0 w-100 " v-for="(item,index) in mylessonRows" :key="index">
            <div class="w-100 p-2 mt-2 shadow-sm ">
              <div class="w-100 d-flex">
                <div class="w-5 mt-3 m-pointer" v-if="item.open === undefined || mylessonRows[index].open === false" @click="openDetail(item,index)">

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                  </svg>
                </div>
                <div class="w-5 mt-3 m-pointer" v-if="item.open === true" @click="closeDetail(item , index)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </div>

                <b-avatar
                  size="3rem"
                  :src="item.tutor.File != null ? '/'+ item.tutor.File.path : ''"
                  alt="Cropped Image"/>

                <div class="pl-3 w-40 mt-3" >
                  <b-link class="font-weight-bold"  :href="'/tutor/' + item.tutor.id" > {{ item.tutor.name + " " + item.tutor.lastName }}</b-link>
                </div>
                <div class="pl-3 w-40 mt-3" >
                  <span class="font-weight-bold">{{ item.Lesson.subject }}</span>
                </div>

                <div class="text-center w-20 mt-3">
                  <b-badge variant="warning" v-if="item.acceptStatus === 0"> {{ $t("mylesson.acceptStatus.pending") }}
                  </b-badge>
                  <b-badge variant="success" v-if="item.acceptStatus === 1">
                    {{ $t("mylesson.acceptStatus.verified") }}
                  </b-badge>
                  <b-badge variant="danger" v-if="item.acceptStatus === 2"> {{ $t("mylesson.acceptStatus.rejected") }}
                  </b-badge>

                </div>
                <div class="text-center w-25 mt-3">
                  <span class="small">{{ item.createdAt | moment("ddd ,MMM DD, YYYY - hh:mm") }}</span>
                </div>

                <div class="text-center w-25 mt-2">
                  <span class="small">
                    <b-button class="btn-primary btn-crl-mini " @click="sendMessage(item)">Send Message</b-button>
                  </span>
                  <span class="small">
                    <b-button class="btn-primary btn-crl-mini w-30" @click="openDetail(item,index)">Detail</b-button>
                  </span>
                </div>

              </div>
              <b-collapse :id="'coll_message_' + item.id " class="p-2 w-100 ">
                <div class="rounded-lg p-2" style="background-color: rgb(252, 253, 253)">
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

                </div>
              </b-collapse>

            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "vue-moment"

export default {
  name: "my-lessons",
  data() {
    return {
      windowWidth: process.browser ? window.getComputedStyle(document.documentElement).getPropertyValue('--screen-mode') : 'sm',
      acceptStatusData: {},
      busy: true,
      lesson_options: [],
      status_options: [
        {value: -1, text: this.$t('mylesson.filter.status.all')},
        {value: 0, text: this.$t('mylesson.filter.status.pending')},
        {value: 1, text: this.$t('mylesson.filter.status.verified')},
        {value: 2, text: this.$t('mylesson.filter.status.rejected')},
      ],
      showOverlay: false,
      mylessonRows: [],
      fields: [
        {
          key: 'tutor_image',
          label: ''
        },
        {
          key: 'tutor.name',
          label: 'Tutor Name',
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
        acceptStatus: -1, // 0=unverified , 1= verified , 2= rejected
      },
    }
  },
  mounted() {
    this.initFilter()
    this.loadMyLesson()
  },
  methods:
    {
      sendMessage(item)
      {
        this.$router.push("/user-panel/requests?cid=" + item.tutorUserId)
      },
      closeDetail(item , index){
        this.$root.$emit('bv::toggle::collapse', 'coll_message_' + item.id  )
        item.open = false
        this.$set(this.mylessonRows, index, item)
      },
      openDetail(item,index){
        this.$root.$emit('bv::toggle::collapse', 'coll_message_' + item.id  )
        item.open =  true
        this.$set(this.mylessonRows, index, item)
      },
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
      initFilter() {
        try {

          this.$axios.post("/mylessons/get-student-lessons", null).then((res) => {
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
          this.$axios.post("/mylessons/get-student-mylessons", this.searchData).then((res) => {
            this.mylessonRows = res.data.rows
            this.searchData.rowCount = res.data.count
            for (let i = 0; i < this.mylessonRows.length; i++) {
              this.mylessonRows[i].open = true
            }
          }).catch((err) => {

          }).finally(() => {
            this.busy = false
          })

        } catch (e) {
          this.busy = false
        }
      },

      changeAcceptStatus(verify, id, index) {
        try {
          this.acceptStatusData.acceptStatus = verify
          this.acceptStatusData.myLessonId = id
          this.acceptStatusData.index = index

          let alert_msg = "mylessons.acceptStatus.verify.alert"
          if (verify === 2)
            alert_msg = "mylessons.acceptStatus.reject.alert"
          this.$bvModal.msgBoxConfirm(this.$t(alert_msg), {
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
            .then((value) => {
              if (value === true) {
                this.busy = true
                let data = {
                  acceptStatus: this.acceptStatusData.acceptStatus,
                  myLessonId: this.acceptStatusData.myLessonId
                }
                this.$axios.post("/mylessons/acceptMyLessonByTutor", data).then((res) => {
                  if (res.data !== null) {
                    this.mylessonRows[this.acceptStatusData.index].acceptStatus = res.data.acceptStatus
                  }
                }).catch((err) => {
                  this.busy = false
                }).finally(() => {
                  this.busy = false
                })
              }
            })
            .catch(err => {
            })


        } catch (e) {
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

.w-20 {
  width: 20% !important
}

.m-v-select2 {
  font-size: 0.9rem;
}

</style>
