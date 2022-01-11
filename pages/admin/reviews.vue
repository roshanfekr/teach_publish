<template>
    <b-container>
    <b-row id="toolbar" class="d-md-flex col-md-12 col-lg-12 m-center w-100 " >
      <b-col>
        <b-card no-body class="pb-3 mb-1 w-100">
          <b-card-header header-tag="header" role="tab">
          </b-card-header>

          <div class="mt-4">
            <b-row class="mt-2">
              <b-col>
                <b-form-group label-cols="4" label-cols-lg="2" label-size="sm" label-align-sm="right" :label="$t('lesson')" label-for="input-lesson">
                  <v-select  placeholder="Select one subject"
                             v-model.trim="searchData.lessonId"
                             class="m-v-select2 w-75"
                             :reduce="x => x.id"
                             :options="subjectOptions"
                             label="subject"
                             :selectable="option => !option.hasOwnProperty('group')">
                    <template #option="{ group, subject }">
                      <div v-if="group" class="group">
                        {{ group }}
                      </div>
                      {{ subject }}
                    </template>
                  </v-select>

                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group class="w-75" label-cols="4" label-cols-lg="2" label-align-sm="right" label-size="sm" :label="$t('Status')" label-for="input-acceptStatus">
                  <b-form-select id="input-acceptStatus" class="pt-2  w-75" v-model="searchData.acceptStatus" :options="active_options"></b-form-select>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row class="mt-2">
              <b-col>
                <b-form-group label-cols="4" label-cols-lg="2" label-size="sm" label-align-sm="right" :label="$t('tutorName')" label-for="input-tutorName">
                  <b-form-input id="input-tutorName" class="pt-2  w-75" v-model="searchData.tutorName"></b-form-input>

                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group class="w-75" label-cols="4" label-align-sm="right" label-size="sm" :label="$t('tutorLname')" label-for="input-tutorLname">
                  <b-form-input id="input-tutorLname" class="pt-2 " v-model="searchData.tutorLname"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row class="mt-2">
              <b-button class="m-center w-25" variant="primary" @click="this.search">Search</b-button>
            </b-row>
          </div>
        </b-card>
      </b-col>

    </b-row>


    <b-row class="d-md-flex col-md-12 col-lg-12 m-center mt-1">
      <b-overlay :show="overlay_show" variant="white" no-wrap>
      </b-overlay>
      <b-row class="d-md-flex col-md-12 col-lg-12 m-center mt-3">
        <b-col>
          <b-pagination
            v-model="pageIndex"
            :total-rows="this.searchData.rowCount"
            :per-page="this.searchData.perPage"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
            @change="search"
          ></b-pagination>
        </b-col>
      </b-row>
      <b-row class="d-md-flex col-md-12 col-lg-12 m-center mt-1">
        <b-col>
          <b-table head-variant="light" striped hover :items="t_items" :fields="t_fields">

            <template #cell(acceptStatus)="row">
              <b-badge variant="warning" v-if="row.item.acceptStatus === 0"> {{$t("Pending")}}</b-badge>
              <b-badge variant="success" v-if="row.item.acceptStatus === 1"> {{$t("Accepted")}}</b-badge>
              <b-badge variant="danger" v-if="row.item.acceptStatus === 2"> {{$t("Rejected")}}</b-badge>
            </template>

            <template #cell(show_details)="row">
              <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                {{ row.detailsShowing ? 'Hide' : 'Show'}} Comment
              </b-button>

            </template>

            <template #cell(verify_action)="row">
              <b-button variant="info"  size="sm" @click="verify(row)" :ref="'btnEdit' + row.index">Verify</b-button>
            </template>
            <template #cell(reject_action)="row">
              <b-button variant="info"  size="sm" @click="reject(row)" :ref="'btnEdit' + row.index">Reject</b-button>
            </template>

            <template #row-details="row">
              <b-card>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Comment:</b></b-col>
                  <b-col>{{ row.item.comment }}</b-col>
                </b-row>

<!--                <b-row class="mb-2">-->
<!--                  <b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>-->
<!--                  <b-col>{{ row.item.isActive }}</b-col>-->
<!--                </b-row>-->

              </b-card>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-row>


    </b-container>

</template>

<script>
import {required} from "vuelidate/lib/validators";

export default {
  layout: 'AdminTemplate',
  name: "users"
  ,
  data() {
    return {
      subjectOptions : [],
      selected: null,
      // options: ['list', 'of', 'options'],
      header_title: '',
      overlay_show: false ,
      tabVisible: 0,
      pageIndex: 1,
      active_options:[
        { value: 0, text: this.$t('pending') },
        { value: 1, text: this.$t('accept') },
        { value: 2, text: this.$t('reject') },
        { value: -1, text: this.$t('all') },
      ],

      searchData: {
        pageIndex: 0,
        rowCount: 0,
        perPage: 10,
        id: 0,
        lessonId: 0,
        acceptStatus : 0 , // 0=unverified , 1= verified , 2= rejected
        tutorId: 0 ,
        tutorName: null ,
        tutorLname: null
      },
      t_fields:[
        {
          key: 'tutor.name',
          label: 'Tutor Name',
          sortable: true
        },
        {
          key: 'tutor.lastname',
          label: 'Tutor LName',
          sortable: true,
        },
        {
          key: 'acceptStatus',
          label: 'Status',
          sortable: false,
        },
        // {
        //   key: 'comment',
        //   label: 'Comment',
        //   sortable: false,
        // },
        {
          key: 'show_details',
          label: 'Comment',
          sortable: false
        },
        {
          key: 'verify_action',
          label: 'Action',
          sortable: false
        },
        {
          key: 'reject_action',
          label: 'Action',
          sortable: false
        },
      ],
      t_items: []
    }
  }
  ,
  mounted()
  {
    this.loadSubjects()
    this.search()
  },

  validations: {
    nData:{
      subject:{
        required,
      }
    },

  },


  methods:
  {
    verify(row){
      try{
        let item = row.item
        let data = {id: item.id ,  acceptStatus: 1}
        this.$axios.post('/review/changeAcceptStatus', data).then((res) => {
          if(res.data )
            this.makeToast("success" , "Success" , this.$t("verified_msg") )
          else
            this.makeToast("danger" , "Failed" , "verify_failed_msg" )
        }).catch(error => {
          this.overlay_show = false;
          this.makeToast("danger" , "Error" , "verify_failed_msg" )
          console.log(error)
        });
      }catch (e) {

      }
    },
    reject(row){
      try{
        let item = row.item
        let data = {id: item.id ,  acceptStatus: 2}
        this.$axios.post('/review/changeAcceptStatus', data).then((res) => {
          if(res.data)
            this.makeToast("success" , "Success" , this.$t("reject_msg") )
          else
            this.makeToast("danger" , "Failed" , "reject_failed_msg" )
        }).catch(error => {
          this.overlay_show = false;
          this.makeToast("danger" , "Error" , "reject_failed_msg" )
          console.log(error)
        });
      }catch (e) {

      }
    },
    loadSubjects() {
      this.$axios.post('/definitions/getAllLessons').then((res) => {
        this.subjectOptions = res.data;
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors
        }
      })
    },
    makeToast(variant = 'success', header = 'Message', msg = '')
    {
      this.$bvToast.toast(this.$t(msg), {
          title: header,
          variant: variant,
          solid: true
        })
     },

    search(index)
    {
      if(index > 0)
        this.searchData.pageIndex = index
      else
        this.searchData.pageIndex = 0

      this.overlay_show = true;
      this.$axios.post('/review/getReviewSearch', this.searchData).then((res) => {
        this.t_items = res.data.rows
        // for (let i = 0; i < res.data.rows; i++) {
        //   let row = res.data.rows[]
        // }
        this.searchData.rowCount = res.data.row_count
        this.overlay_show = false;
      }).catch(error => {
        this.overlay_show = false;
        this.makeToast("danger" , "Error" , "search_error" )
        console.log(error)
      });
    }




  }

}
</script>

<style scoped>

</style>
