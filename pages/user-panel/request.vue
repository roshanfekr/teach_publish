<template>
  <b-container fluid>
    <div v-if="visibleMain">
      <div style="height: 15px">
        <b-spinner v-if="visibleProgress" small label="Small Spinner" type="grow"></b-spinner>
      </div>
      <b-row>

        <b-col lg="4" class="my-1">
          <b-form-group
            label="Filter"
            label-for="filter-input"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"
          >
            <b-input-group size="sm">
              <b-form-input
                id="filter-input"
                v-model="filter"
                type="search"
                placeholder="Type to Search"
              ></b-form-input>

              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col lg="4" class="my-1">
          <b-form-group
            label="Filter On"
            description="Leave all unchecked to filter on all data"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-checkbox-group
              v-model="filterOn"
              :aria-describedby="ariaDescribedby"
              class="mt-1"
            >
              <b-form-checkbox value="viewName">Name</b-form-checkbox>
              <b-form-checkbox value="text">Message</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-overlay
        id="overlay-background"
        :show="showChatMessagesOverlay"
        variant="white"
        :opacity="0.81"
        rounded="sm"
      >
        <b-table
          hover
          :fields="fields"
          :filter="filter"
          :items="request_rows"
          :filter-included-fields="filterOn"
          class="mt-3"
          show-empty
          :tbody-tr-class="rowClass"
          @row-clicked="onclick"
        >

          <template #cell(viewName)="row" class="mt-3">
            <b-avatar
              size="3rem"
              :src="row.item.image_ru != null ? '/'+ row.item.image_ru : ''"
              alt="Cropped Image"/>
            <span> {{ row.item.viewName + " " + row.item.viewLname }}</span>
          </template>
          <template #cell(test)="row" class="mt-3">
            <span>{{ row.item.text + " " }} <b-badge v-if="row.item.unread > 0"
                                                     variant="success">{{ row.item.unread }}</b-badge> </span>
          </template>
          <template #cell(updatedAt)="row" class="mt-3">
            <i>{{ cDate(row.item.updatedAt) }}</i>
          </template>

        </b-table>
      </b-overlay>
    </div>

    <div v-if="!visibleMain" class="w-100 h-100">
      <b-button variant="light" class="mt-2 mb-2" @click="back">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>
      </b-button>

      <div class="card" style="min-height: 400px ; ">


        <div id="chatbox" style="max-height: 400px; overflow-y: auto">


          <div v-for="item in messagesHtml">
            <!--left-->
            <div :id="'msg_' + item.id" v-if="item.receiverId === userId && item.type === 0"
                 class="d-flex flex-row p-3 w-100" style="">
              <b-avatar
                size="3rem"
                :src="currentChatRoom.image_ru != null ? '/'+ currentChatRoom.image_ru : ''"
                alt="Cropped Image"/>

              <span class="chat ml-2 p-3" style="white-space: pre;"> {{ item.text }}

                      <span class="time-right">{{ item.createdAt != null ? item.createdAt : "" }}</span>

                    </span>

            </div>


            <!--right-->
            <div :id="'msg_' + item.id" v-if="item.receiverId !== userId && item.type === 0"
                 class="d-flex flex-row p-3 w-100 float-right" style="">
              <div class="bg-white mr-2 p-3 w-100 text-right">
                <span class="text-muted " style="white-space: pre;"> {{ item.text }} </span>

                <span class="time-left">{{ item.createdAt != null ? item.createdAt : "" }}
                      <svg v-if="item.viewed === 0 || item.viewed === null" xmlns="http://www.w3.org/2000/svg"
                           width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                        <path
                          d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                      </svg>
                      <svg v-if="item.viewed === true" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                           fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
                        <path
                          d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
                      </svg>

                    </span>

              </div>
              <b-avatar
                size="3rem"
                :src="currentChatRoom.image_su != null ? '/'+ currentChatRoom.image_su : ''"
                alt="Cropped Image"
                class="right"
              />

            </div>

            <!--           verify lesson-->
            <div :id="'msg_' + item.id" v-if="item.receiverId !== userId && item.type === 1"
                 class="d-flex flex-row p-3 w-100 float-right" style="">
              <div class="bg-white mr-2 p-3 w-100 text-right">
                <span class="text-muted " style="white-space: pre;"> {{ item.text }} </span>

                <span class="time-left">{{ item.createdAt != null ? item.createdAt : "" }}
                      <svg v-if="item.viewed === 0 || item.viewed === null" xmlns="http://www.w3.org/2000/svg"
                           width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                        <path
                          d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                      </svg>
                      <svg v-if="item.viewed === true" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                           fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
                        <path
                          d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
                      </svg>

                    </span>

              </div>
              <b-avatar
                size="3rem"
                :src="currentChatRoom.image_su != null ? '/'+ currentChatRoom.image_su : ''"
                alt="Cropped Image"
                class="right"
              />

            </div>


          </div>

        </div>

      </div>

      <div class="p-3" style=" width: 100%">
        <b-overlay :show="busy" rounded="lg" opacity="0.6">
          <template #overlay>
            <div class="d-flex align-items-center">
              <b-spinner small type="grow" variant="secondary"></b-spinner>
              <b-spinner type="grow" variant="dark"></b-spinner>
              <b-spinner small type="grow" variant="secondary"></b-spinner>
              <!-- We add an SR only text for screen readers -->
              <span class="sr-only">Please wait...</span>
            </div>
          </template>
          <b-input-group size="lg">
            <b-form-textarea
              id="textarea"
              v-model="msgTextBox"
              placeholder="Enter Message..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>

            <b-input-group-append>
              <b-button ref="button" v-scroll-to="'#msg_8'" :disabled="busy" variant="primary" @click="sendMessage">
                Send
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-overlay>
      </div>

    </div>


  </b-container>
</template>

<script>
import {URL} from 'url';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faQuestionCircle} from "@fortawesome/free-regular-svg-icons";

library.add(faQuestionCircle)
library.add(faGoogle)
export default {
  name: 'Index',
  data() {
    return {
      value: 'Some value',
      busy: false,
      timeout: null,
      userId: 0,
      msgTextBox: "",
      currentChatRoom: null,
      showChatMessagesOverlay: false,
      messagesHtml: [],
      visibleMain: true,
      visibleProgress: false,
      intervalX: null,
      filter: null,
      filterOn: [],
      fields: [
        {
          key: 'viewName',
          label: 'Name',
          sortable: true,
          thStyle: {width: '25%'},
        },
        {
          key: 'text',
          label: 'Message',
          sortable: true,
          thStyle: {width: '50%'},
        },
        {
          key: 'updatedAt',
          label: 'Date',
          sortable: true,
          thStyle: {width: '25%'},
        },
      ],
      request_rows: []
    }
  },
  mounted() {
    this.showRequests()
    this.intervalX = setInterval(this.refreshTimer, 20 * 1000);
    this.userId = this.$auth.user.id
  },
  methods: {

    rowClass(item, type) {
      if (!item || type !== 'row') return
      let font = ""
      if (item.unread > 0)
        font = 'font-weight-bold font-italic w-100'
      return 'mt-7 ' + font
    },

    showRequests() {
      try {
        if (!this.visibleMain)
          return
        this.visibleProgress = true
        this.$axios.post(`request/getRequests`, null).then((res) => {
          this.visibleProgress = false
          this.request_rows = res.data.data

        }).catch((err) => {
          this.visibleProgress = false
        });

      } catch (e) {
        console.log(e);
        this.visibleProgress = false
      }
    }
    ,
    onclick(row, index) {
      try {
        let sUid = this.$auth.user.id
        if (sUid === row.receiverId)
          sUid = row.senderId
        else
          sUid = row.receiverId

        this.visibleProgress = false
        this.showChatMessagesOverlay = true
        let reqData = {sUid: sUid}
        this.currentChatRoom = row

        this.$axios.post(`request/getUserRequests`, reqData).then((res) => {
          if (res.data.data.length > 0) {
            this.messagesHtml = res.data.data
          }
          this.visibleMain = false;
          this.showChatMessagesOverlay = false

          this.$axios.post(`/request/setview`, reqData).then((res) => {
            row.viewed = 1

          }).catch(error => {

          })


        }).catch((err) => {
          this.showChatMessagesOverlay = false
          this.visibleMain = true;
        });

      } catch (e) {
        this.showChatMessagesOverlay = false
      }
    }
    ,
    sendMessage() {
      try {
        if (this.msgTextBox.length === 0)
          return

        let reqData = {
          receiverId: this.currentChatRoom.receiverId === this.userId ? this.currentChatRoom.senderId : this.currentChatRoom.receiverId,
          text: this.msgTextBox,
          type: 0, // simple message
          entityId: 0
        }
        var options = {
          container: '#chatbox',
          easing: 'ease-in',
          lazy: false,
          offset: -60,
          force: true,
          cancelable: true,
          onStart: function (element) {
            // scrolling started
          },
          onDone: function (element) {
            // scrolling is done
          },
          onCancel: function () {
            // scrolling has been interrupted
          },
          x: false,
          y: true
        }

        this.$axios.post(`/request/create`, reqData).then((res) => {
          if (res.data.ok === true) {
            this.msgTextBox = ""
            this.messagesHtml.push(res.data.data)
            let element = '#msg_' + (res.data.data.id - 1)
            var VueScrollTo = require('vue-scrollto');
            VueScrollTo.scrollTo(element, 100, options)


          }

        }).catch((err) => {
          console.log(err)
        });
      } catch (e) {

      }
    }
    ,
    chatMessages() {

    },
    cDate(date) {
      return date.toLocaleString()
    }
    ,
    back() {
      this.visibleMain = true
      this.visibleProgress = true

    },
    refreshTimer() {
      console.log('----hi------')
      if (this.visibleMain) {
        this.showRequests();
      }
    }

  },
  beforeDestroy() {
    console.log('----bye------')
    clearInterval(this.intervalX)
  },
}
</script>

<style scoped>
@import '../../assets/chatcss.css';

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

</style>
