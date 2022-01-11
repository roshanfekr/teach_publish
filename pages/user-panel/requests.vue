<template>
  <b-container fluid class="h-100">
    <div class="w-100 h-100 d-flex" style="">
      <b-row v-show=" (windowWidth === 'xl' || windowWidth === 'lg') ?true :(selectedChat === null)"
             class="m-0" :class="(windowWidth === 'xl' || windowWidth === 'lg') ? 'w-70' : 'w-100'">
        <p class="text-center w-100 mt-3" v-if="requests.length === 0"  style="color: #a8a7a7;">{{$t("no_message")}}</p>
        <b-overlay :show="loadingRequest"
                   variant="transparent"
                   :opacity=0.8
                   class="w-100"
                   blur="3px"
                   rounded="sm">
          <div :style="(windowWidth === 'xl' || windowWidth === 'lg')?' min-width: 400px;':'min-width: 100%;' " class="mt-2">
            <div class="mt-1 w-100 " v-for="(item,index) in requests" :key="index" @click="selectUser(item,index)">

              <div  class="w-100 p-2 mt-0 shadow-sm d-flex e rounded-lg" style="cursor: pointer"  :style="Rows[index] === true ? 'background-color: rgba(144,169,244,0.32)': '' "  >
                <b-avatar
                  size="3rem"
                  :src="item.image_ru != null ? '/'+ item.image_ru : ''"
                  alt="Cropped Image"/>

                <div class="pl-3 w-100">

                  <span class="font-weight-bold"> {{ item.viewName + " " + (item.viewLname !== null ? item.viewLname : "") }}</span>
                  <span class="float-right small">
                    {{ item.createdAt | moment('ddd, MMM DD, YYYY, hh:mm:ss a')}}
                  <b-link class="mr-4" style="color: #bfbfbf;"
                          @click="deleteMessage(item.senderId, item.receiverId)"
                          size="sm">
                    <font-awesome-icon class="shop-icon" :icon="['fas', 'trash']"/>
                  </b-link>

          </span>
                  <div class="w-100 three-dot-one-line">
                    {{ item.text + " " }}
                    <b-badge v-if="item.unread > 0"
                             variant="success">{{ item.unread }}
                    </b-badge>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </b-overlay>
      </b-row>

      <div v-show="(windowWidth === 'xl' || windowWidth === 'lg' )?true :(selectedChat!==null)"
           class="w-100 shadow h-100 mt-2 ml-3 p-3">
        <div v-if="selectedChat === null" class="text-center" style="color: #a8a7a7;">
          {{$t("Please_select_one_message")}}
        </div>
        <div v-else>
          <b-overlay :show="loadingChat"
                     variant="transparent"
                     :opacity=0.8
                     blur="3px"
                     rounded="sm">
            <div class="d-flex">
              <b-avatar
                size="3rem"
                :src="selectedChat.image_ru != null ? '/'+ selectedChat.image_ru : ''"
                alt="Cropped Image"/>
              <div class="pl-3 w-100 mt-3">
                <span class="font-weight-bold"> {{ selectedChat.viewName + " " + selectedChat.viewLname }}</span>
              </div>
              <b-link v-show="windowWidth !== 'xl' && windowWidth !== 'lg'" class="float-right"
                      @click="selectedChat = null">
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
            <div class="h-100 mt-2" style="max-height: 400px;!important; overflow: auto"
                 id="chatBox">
              <div v-for="message in messages" class="message mb-2"
                   :class="message.receiverId === userId ? 'message-in' : 'message-out'">

                <span v-if="message.type === 0" style="white-space: pre-wrap;">{{ message.text }}</span>
                <span v-if="message.type === 1" style="white-space: pre-wrap;">
                  <div class="p-2 mx-1" style="background-color: white;border-radius: 10px;">
                    <span class="font-weight-bold" style="color: #dc3545">{{$t("mylesson.request.from.user")}} </span>
                    <div class="mt-2" style="white-space: normal">
                      <div><span style="color: black">Lesson: </span>{{message.MyLesson != null ?message.MyLesson.Lesson.subject : ""}}</div>
                      <div><span style="color: black">Week Day :</span>{{ message.MyLesson!= null ? DayOfWeek(message.MyLesson.dayOfWeek) : ""   }} </div>
                      <div ><span style="color: black ">Time :{{  message.MyLesson!= null ? GetTime(message.MyLesson.timeStart , message.MyLesson.timeEnd) : ""}}</span></div>

                      <div class="text-center">
                          <b-button class="btn btn-info small mt-2 " size="sm"  :to="message.senderId === userId ? '/user-panel/taken-lessons' : '/user-panel/my-lessons'" >{{$t("mylesson.request.from.user.link")}} </b-button>
                      </div>
                    </div>
                  </div>
                  <div style="white-space: normal">
                    <hr class="my-0" style="width:100%;text-align:left;margin-left:0">
                    <span  style="white-space: pre-wrap;">{{ message.text }}</span>
                  </div>
                </span>
                <!--  accept my lesson -->
                <span v-if="message.type === 2" style="white-space: pre-wrap;">
                  <div class="p-2 mx-1" style="background-color: #e3fde3;border-radius: 10px;">
                    <span class="font-weight-bold" style="color: #046b0f">{{$t("mylesson.request.verify.user")}} </span>
                    <div class="mt-2" style="white-space: normal">
                      <div><span style="color: black">Lesson: </span>{{message.MyLesson != null ?message.MyLesson.Lesson.subject : ""}}</div>
                      <div><span style="color: black">Week Day :</span>{{ message.MyLesson!= null ? DayOfWeek(message.MyLesson.dayOfWeek) : ""   }} </div>
                      <div ><span style="color: black ">Time :{{  message.MyLesson!= null ? GetTime(message.MyLesson.timeStart , message.MyLesson.timeEnd) : ""}}</span></div>

                      <div class="text-center">
                          <b-button class="btn btn-info small mt-2 " size="sm"  :to="message.senderId !== userId ? '/user-panel/taken-lessons' : '/user-panel/my-lessons'" >{{$t("mylesson.request.from.user.link")}} </b-button>
                      </div>
                    </div>
                  </div>
                  <div style="white-space: normal">
                    <hr class="my-0" style="width:100%;text-align:left;margin-left:0">
                    <span  style="white-space: pre-wrap;">{{ message.text }}</span>
                  </div>
                </span>
                <!--  reject my lesson -->
                <span v-if="message.type === 3" style="white-space: pre-wrap;">
                  <div class="p-2 mx-1" style="background-color: #ffe7e8;border-radius: 10px;">
                    <span class="font-weight-bold" style="color: #f81f1f">{{$t("mylesson.request.reject.user")}} </span>
                    <div class="mt-2" style="white-space: normal">
                      <div><span style="color: black">Lesson: </span>{{message.MyLesson != null ?message.MyLesson.Lesson.subject : ""}}</div>
                      <div><span style="color: black">Week Day :</span>{{ message.MyLesson!= null ? DayOfWeek(message.MyLesson.dayOfWeek) : ""   }} </div>
                      <div ><span style="color: black ">Time :{{  message.MyLesson!= null ? GetTime(message.MyLesson.timeStart , message.MyLesson.timeEnd) : ""}}</span></div>

                      <div class="text-center">
                          <b-button class="btn btn-info small mt-2 " size="sm"  :to="message.senderId !== userId ? '/user-panel/taken-lessons' : '/user-panel/my-lessons'" >{{$t("mylesson.request.from.user.link")}} </b-button>
                      </div>
                    </div>
                  </div>
                  <div style="white-space: normal">
                    <hr class="my-0" style="width:100%;text-align:left;margin-left:0">
                    <span  style="white-space: pre-wrap;">{{ message.text }}</span>
                  </div>
                </span>

                <div class="text-right small mr-2 mb-n1">
                  <span> {{(message.createdAt != null ? message.createdAt : "") | moment('ddd, MMM DD, YYYY, hh:mm:ss a') }} </span>
                  <span v-show="message.receiverId !== userId">
                    <svg
                    v-if="message.viewed === false ||message.viewed === 0 || message.viewed === null"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                        <path
                          d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                      </svg>
                    <svg v-if="message.viewed === true" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                           fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
                        <path
                          d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
                      </svg>
                  </span>
                </div>
              </div>
            </div>
          </b-overlay>
          <div class="d-flex mt-2">
            <b-input-group>
              <b-form-textarea
                no-resize
                rows="2"
                class="overflow-hidden"
                v-on:keypress.enter.exact.prevent="sendMessage"
                v-model="msgTextBox">
              </b-form-textarea>
              <b-input-group-append>
                <b-button class="btn btn-primary px-4" @click="sendMessage">
                  <font-awesome-icon style="margin-right: 5px;"
                                     :icon="['fas', 'paper-plane']"/>
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </div>

        </div>
      </div>
    </div>

  </b-container>
</template>

<script>
import {library} from '@fortawesome/fontawesome-svg-core'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faEdit} from '@fortawesome/free-regular-svg-icons'

library.add(faTrash)
library.add(faEdit)
library.add(faPaperPlane)
export default {
  name: 'requests',
  data() {
    return {
      firstRunflag : false,
      cid: null ,
      Rows: [],
      windowWidth: process.browser ? window.getComputedStyle(document.documentElement).getPropertyValue('--screen-mode') : 'sm',
      selectedChat: null,
      messages: [],
      requests: [],
      msgTextBox: "",
      loadingChat: true,
      loadingRequest: false,
    }
  },
  async mounted() {
    this.loadingRequest = true;
    await this.getRequests()
    this.intervalX = setInterval(this.refreshTimer, 5 * 1000);
    this.userId = this.$auth.user.id

    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })


  },
  methods: {
    gotoChat() {
      this.cid = this.$route.query.cid
      if(this.cid > 0 && this.requests !==null)
      {
        for (let i = 0; i < this.requests.length; i++) {
          try{
            let rItem = this.requests[i]
            if(rItem.receiverId == this.cid && rItem.senderId == this.cid)
            {
              this.selectUser(rItem , i)
              return
            } else if(rItem.receiverId == this.cid && rItem.senderId == this.$auth.user.id )
            {
              this.selectUser(rItem , i)
              return
            }else if(rItem.senderId == this.cid && rItem.receiverId == this.$auth.user.id )
            {

              this.selectUser(rItem , i)
              return
            }
          }catch (e) {

          }
        }
      }
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

    deleteMessage(senderId , receiverId) {

      let userId = senderId
      if(senderId === this.$auth.user.id )
        userId = receiverId
      let reqData = {senderId: userId}
      this.$bvModal.msgBoxConfirm(this.$t('requests.delete_all'), {
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
            this.$axios.post('/request/delete-all-request', reqData).then((res) => {
              if (res.data === "removed") {
                // clear all
                this.selectedChat = null
                this.messages = []

              }
            }).catch((err) => {
              console.log(err)
            });
          }
        })

    },

    onResize() {
      if (process.browser)
        this.windowWidth = window.getComputedStyle(document.documentElement).getPropertyValue('--screen-mode')
    },
    sendMessage() {
      try {
        if (this.msgTextBox.length === 0)
          return


        let reqData = {
          receiverId: this.selectedChat.receiverId === this.userId ? this.selectedChat.senderId : this.selectedChat.receiverId,
          text: this.msgTextBox,
          createdAt: new Date(),
          type: 0, // simple messate.now()age
          entityId: 0
        }
        this.msgTextBox = ""
        //this.messages.push(reqData)

        this.$axios.post(`/request/create`, reqData).then((res) => {
          if (res.data.ok === true) {

            // this.messages = res.data.data
            this.messages.push(res.data.data)

            setTimeout(() => {
              let chatBox = document.getElementById('chatBox')
              chatBox.scrollTop = chatBox.scrollHeight
            }, 20);

          }
        }).catch((err) => {
          console.log(err)
        });
      } catch (e) {

      }
    },
    selectUser(item , index) {
      this.deselect(index)
      this.loadingChat = true;
      this.selectedChat = item
      this.getChat(item, true)
    },

    deselect(index)
    {
      for (let   i = 0; i < this.requests.length; i++) {
        this.Rows[i] = false
      }
      if(index > -1)
        this.Rows[index] = true
    }
    ,
    getRequests() {
      try {
        this.$axios.post(`request/getRequests`, null).then((res) => {
          this.requests = res.data.data
          for (let   i = 0; i < this.requests.length; i++) {
            this.Rows[i] = false
          }
          this.loadingRequest = false

          if(this.firstRunflag=== false)
          {
            this.firstRunflag = true
            this.gotoChat()
          }

        }).catch((err) => {

        });

      } catch (e) {
        console.log(e);

      }
    },
    getChat(row, canScroll) {

      let sUid = this.$auth.user.id
      if (sUid === row.receiverId)
        sUid = row.senderId
      else
        sUid = row.receiverId

      let reqData = {sUid: sUid}
      this.$axios.post(`request/getUserRequests`, reqData).then((res) => {
        this.loadingChat = false;

        this.messages = res.data.data
        if (canScroll) {
          setTimeout(() => {
            let chatBox = document.getElementById('chatBox')
            chatBox.scrollTop = chatBox.scrollHeight
          }, 20);
        }


        this.$axios.post(`/request/setview`, reqData).then((res) => {
          row.viewed = 1
        }).catch(error => {
        })
      }).catch((err) => {
        this.loadingChat = false;
      });

    },
    refreshTimer() {
      this.getRequests();
      if (this.selectedChat !== null)
        this.getChat(this.selectedChat, false);
    }

  },
  beforeDestroy() {
    clearInterval(this.intervalX)
    window.removeEventListener('resize', this.onResize);
  },

}
</script>

<style scoped>
textarea {
  height: auto;
}

.message {
  width: 45%;
  border-radius: 10px;
  padding: .5em;
  /*   margin-bottom: .5em; */
  font-size: .8em;
}

.message-out {
/*var(--color2)*/
  background-color: #D2FBA8;
  margin-left: 50%;
}

.message-in {
  background: #f5f5f5;
  color: black;
  border: #b6bbc7 1px solid;
}

.e:hover{
  background-color:rgba(0,51,244,0.05);
}

</style>
