<template>
  <b-container fluid class="h-100">
    <div class="w-100 h-100 d-flex" style="">
      <b-row v-show="(selectedNotification === null)"
             class="m-0" :class="(windowWidth === 'xl' || windowWidth === 'lg') ? 'w-100' : 'w-100'">
        <b-overlay :show="loadingNotification"
                   variant="transparent"
                   :opacity=0.8
                   class="w-100"
                   blur="3px"
                   rounded="sm">
          <div :style="(windowWidth === 'xl' || windowWidth === 'lg')?' min-width: 400px;':'min-width: 100%; ' " class="mt-2">
            <div class="mt-1 w-100  " style="height: 50px" v-for="(item,index) in notifications" :key="index" @click="selectUser(item,index)">

              <div  class="w-100 p-2 mt-0 shadow-sm d-flex e rounded-lg" style="cursor: pointer"  :style="Rows[index] === true ? 'background-color: rgba(144,169,244,0.32)': '' "  >

                <div class="pl-3 w-100">
                  <span class="font-weight-bold"> {{ item.Notification.title }}</span>
                  <span class="float-right small">{{ item.Notification.updatedAt | moment('MMM Do YYYY, h:mm:ss a') }}</span>
                  <div class="w-100 three-dot-one-line">
                    <b-badge v-if="item.view === 0 || item.view === false || item.view === null" variant="success">Unread</b-badge>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </b-overlay>
      </b-row>

      <div v-if="(selectedNotification!==null)" style=" border-radius: 20px"
           class="w-100 shadow h-100 mt-2 ml-3 p-1 rounded-bottom">
        <div class=" rounded-bottom" style="background-color: #fad2dc;border-radius: 20px">
          <div class="d-flex" >
            <div>
              <b-button class="btn-crl-mini btn-primary " @click="backButton">Back</b-button>
            </div>
            <div class="pl-2 w-100 mt-1 " >
              <span class="font-weight-bold"> {{ selectedNotification.Notification.title }}</span>
            </div>

          </div>
          <div class="small mb-n1 ml-5">
            <span> {{(selectedNotification.Notification.createdAt != null ? selectedNotification.Notification.createdAt : "") | moment('MMM Do YYYY, h:mm:ss a') }} </span>
          </div>
        </div>


        <div class="h-100" >

            <div class="d-flex">


              <b-link v-show="windowWidth !== 'xl' && windowWidth !== 'lg'" class="float-right"
                      @click="selectedNotification = null">
                <svg data-v-41be6633="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
                     aria-label="arrow90deg left" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                     class="bi-arrow90deg-left mx-auto b-icon bi">
                  <g data-v-41be6633="">
                    <path fill-rule="evenodd"
                          d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"></path>
                  </g>
                </svg>

              </b-link>
            </div>
            <div class="h-100 mt-2" style="max-height: 400px;!important; overflow: auto"  id="chatBox">
                <span  class="p-3" style=" white-space: pre-wrap;">{{ selectedNotification.Notification.text }}</span>

            </div>

        </div>
      </div>
    </div>

  </b-container>

</template>

<script>

import {library} from '@fortawesome/fontawesome-svg-core'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

library.add(faPaperPlane)
export default {
  name: 'system-msg',
  data() {
    return {
      notifDetail: null,
      Rows: [],
      windowWidth: process.browser ? window.getComputedStyle(document.documentElement).getPropertyValue('--screen-mode') : 'sm',
      selectedNotification: null,
      notifications: [],
      loadingNotificationSelect: true,
      loadingNotification: false,
    }
  },
  mounted() {

    this.loadingNotification = true;
    this.getNotifications()
    // this.refreshTimer()
    this.userId = this.$auth.user.id
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })

  },
  methods: {
    onResize() {
      if (process.browser)
        this.windowWidth = window.getComputedStyle(document.documentElement).getPropertyValue('--screen-mode')
    },
    backButton(){
      this.selectedNotification = null
    },
    selectUser(item , index) {
      this.loadingNotificationSelect = true;

      this.getNotificationDetail(item, index)
    },

    getNotifications() {
      try {
        this.$axios.post(`/notification/get-all`, null).then((res) => {
          this.notifications = res.data.rows

          this.loadingNotification = false
          console.log(res.data);

        }).catch((err) => {

        });

      } catch (e) {
        console.log(e);

      }
    },

    getNotificationDetail(row, index) {
      // this.selectedNotification = item
      let reqData = {Id: row.id}
      this.$axios.post(`/notification/get-notification-detail`, reqData).then((res) => {
        this.loadingNotificationSelect = false;
        this.notifications[index] = res.data.data
        this.notifDetail= res.data.data
        this.selectedNotification = res.data.data
      }).catch((err) => {
        this.loadingNotificationSelect = false;
      }).finally(() => {
        this.loadingNotificationSelect = false;
      });

    },

    // refreshTimer() {
    //   this.getNotifications();
    //   if (this.selectedNotification !== null)
    //     this.getNotificationDetail(this.selectedNotification, false);
    // }

  },
  beforeDestroy() {
    clearInterval(this.intervalX)
    window.removeEventListener('resize', this.onResize);
  },

}

</script>


<style scoped>

</style>
