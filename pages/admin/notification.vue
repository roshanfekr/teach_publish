<template>

<div>
  <!--  <b-col>-->
  <client-only>
    <vue-editor v-model="txt" :editorToolbar="editorToolbar" />
  </client-only>
  <!--  </b-col>-->
  <div class="w-100" style="overflow-x: auto; overflow-y: hidden">
    <div class="m-3 pt-3">
      <b-row id="toolbar" class="w-100 mb-3">
        <b-col lg="4" >
          <b-form-group
            :label='$t("notification.admin.filter.title")'
            label-for="input-title"
            label-cols-lg="3"
            label-align-lg="right"
            label-size="sm"
            class="mb-0"
          >
            <b-form-input size="sm" id="input-title" class="w-100" v-model="searchData.title"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="4" >
          <b-form-group
            :label='$t("notification.admin.filter.text")'
            label-for="select-text"
            label-cols-lg="3"
            label-align-lg="right"
            label-size="sm"
            class="mb-0"
          >

            <b-form-input id="select-text"
                      :placeholder="$t('mylesson.filter.lessons')"
                      v-model="searchData.text"
                      class="m-v-select2 w-100">
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="4" class="mt-xl-0 mt-lg-0 mt-md-2 mt-sm-2 mt-2" >
          <b-button size="sm" variant="primary" @click="this.loadNotification">
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
            @change="loadNotification"
          ></b-pagination>
        </b-row>
        <div class="w-100 h-100">
          <div class="w-100 shadow-sm d-flex font-weight-bold border rounded-bottom"
               style="border-radius: 10px;background-color: #d8d6d6">
            <div class="pl-5  mt-3" style="size: 3rem">
              <span class="" style="size: 3rem"></span>
            </div>
            <div class="pl-3 w-40 mt-1">
              <span class="">{{ $t("notification.admin.grid.title") }}</span>
            </div>
            <div class="pl-3 w-30 mt-1">
              <span class="">{{ $t("notification.admin.grid.level") }}</span>
            </div>
            <div class="pl-3 w-25 mt-1 text-center">
              <span class="">{{ $t("notification.admin.grid.createdAt") }}</span>
            </div>
            <div class="pl-3 w-25 mt-1 text-center">
              <span class="">{{ $t("notification.admin.grid.updatedAt") }}</span>
            </div>
            <div class="pl-3 w-15 mt-1">
            </div>
            <div class="pl-3 w-15 mt-1">
            </div>
          </div>
          <div class="mx-0 w-100 m-pointer" @click="$root.$emit('bv::toggle::collapse', 'coll_message_' + item.id  )"
               v-for="(item,index) in notificationRows" :key="index">

            <div class="w-100 p-2 mt-2 shadow-sm ">
              <div class="w-100 d-flex">
                <div class="pl-3 w-40 mt-2">
                  <span class="font-weight-bold"> {{ item.title }}</span>
                </div>

                <div class=" w-20 mt-2  text-center">
                  <b-badge variant="success" v-if="item.level === 0"> {{ $t("notification.level.low") }}</b-badge>
                  <b-badge variant="success" v-if="item.level === 1"> {{ $t("notification.level.normal") }}</b-badge>
                  <b-badge variant="warning" v-if="item.level === 2"> {{ $t("notification.level.high") }}</b-badge>
                </div>
                <div class="text-center w-20 mt-2">
                  <span class="font-weight-bold">{{ item.createdAt | moment("YYYY-MM-DD - hh:mm ") }} </span>
                </div>
                <div class="text-center w-25 mt-2">
                  <span class="small">{{ item.updatedAt | moment("YYYY-MM-DD - hh:mm ") }}</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

      <b-modal id="acceptStatus_modal" centered size="md" hide-footer :title="this.acceptStatusData.acceptStatus===1 ? 'Verify Message' : 'Reject Message' ">
        <b-row class="mt-1">
          <b-textarea class="ml-3 mr-3"
                      id="textarea-rows" v-model="$v.msg.$model"
                      :placeholder="this.$t('please_type_message')"
                      rows="4"
                      :lazy="true"
          ></b-textarea>
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
  </div>

  <div>
  </div>
</div>
</template>

<script>

import customToolbar from "@/plugins/customToolbar";
export default {
  layout: 'AdminTemplate',
  components: { 
  },
  name: "Notifications",
  data() {
    return {
      editorToolbar:  customToolbar ,
      txt: "",
      busy: false,
      notificationRows: [],
      options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
      search: '',
      value: [],
      searchData: {
        pageIndex: 0,
        rowCount: 0,
        perPage: 5,

      },
    }
  },
  methods: {
    loadNotification(pageIndex){
      this.$axios.post("/notification/get-admin-notifications", null ).then( (res) =>{
        this.loadOverlay = false
        this.result = res.data
      }).catch((err) =>{

      }).finally(()=>{
        this.loadOverlay = false
      })
    },
    onOptionClick({ option, addTag }) {
      addTag(option)
      this.search = ''
    }
  }
}
</script>
