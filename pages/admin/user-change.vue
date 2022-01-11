<template>
  <b-container fluid>
    <b-row class="mx-0 bg-info" >
      <b-col class="float-left"><h3> {{ this.$t("user_change")}} </h3></b-col>
      <b-col >
        <b-button class="float-right" @click="backBtn" v-if="reviewMode">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
          </svg> {{ $t("back") }}
        </b-button>
      </b-col>
    </b-row>



    <b-row class="mt-1" v-if="!reviewMode">
        <b-row class="row ml-3 mr-3 p-2 w-100">



        </b-row>

      <b-row class="d-md-flex col-md-12 col-lg-12 m-center mt-3">
        <b-col>
          <b-pagination
            v-model="searchData.pageIndex"
            :total-rows="searchData.count"
            :per-page="searchData.perPage"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
            @change="show"
          ></b-pagination>
        </b-col>
      </b-row>
      <b-row class="d-md-flex col-md-12 col-lg-12 m-center mt-1">
        <b-col>
          <b-overlay :show="overlay_show" no-wrap>
          </b-overlay>
          <b-table head-variant="light" striped hover small  :items="t_items" :fields="t_fields">
            <template #cell(email)="row" >
              {{ row.item.email  }}
              <b-badge pill v-if="row.item.changed === 1" variant="success">
               Changed
              </b-badge>
            </template>
            <template #cell(state)="row" >
              <b-badge pill v-if="row.item.acceptStatus === -1" variant="danger">
                {{$t('Disable')}}
              </b-badge>
              <b-badge pill v-if="row.item.acceptStatus === 0 || row.item.acceptStatus === null" variant="warning">
                {{$t('Pending')}}
              </b-badge>
              <b-badge pill v-if="row.item.acceptStatus === 1 " variant="success">
                {{$t('Accepted')}}
              </b-badge>
            </template>
            <template #cell(econfirmed)="row">
              <b-badge pill v-if="row.item.emailConfirmed === 1 " variant="success">{{$t("Confirmed")}}</b-badge>
              <b-badge pill v-if="row.item.emailConfirmed === 0 || row.item.emailConfirmed === null" variant="warning">{{$t("Not Confirmed")}}</b-badge>
            </template>
            <template #cell(view)="row" >
                <b-button variant="info"  size="sm" class="w-50"  @click="showEditModal(row)" :ref="'btnEdit' + row.index">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                  Edit</b-button>
            </template>

          </b-table>
        </b-col>
      </b-row>
    </b-row>

    <b-row id="review_panel_master" v-if="reviewMode && (reviewItem.acceptStatus === 0 || reviewItem.acceptStatus=== null)" style="box-shadow: 0 1px 15px 1px rgb(0 0 20%); " class="pt-3 mt-3 paper  panel panel-default d-md-flex col-md-12 col-lg-12 m-center mt-1">
      <b-card  class="text-center mb-1 w-100 "
               border-variant="secondary"
               :header='this.$t("User Information")'
               header-border-variant="secondary"
               no-body>
        <b-collapse id="certCollapse" visible   accordion="certCollapse" role="tabpanel">

          <b-row id="review_panel_master_2" class="d-md-flex col-md-12 col-lg-12 m-center mt-1">
            <b-col class="w-50 text-left">
              <p>
                <b-avatar
                  size="7rem"
                  :src="reviewItem.path != null ? '/'+ reviewItem.path : ''"
                  alt="Cropped Image"/>
              </p>

              <p >{{this.$t("email")}} :
                <span class=" font-weight-bold">{{ reviewItem.email}}</span>
              </p>
              <p >{{this.$t("fName")}} :
                <span class="font-weight-bold">{{ reviewItem.name}}</span>
              </p>
              <p >{{this.$t("lName")}} :
                <span class=" font-weight-bold">{{ reviewItem.lastName}}</span>
              </p>
              <p >{{this.$t("bioMore")}} :
                <span class=" font-weight-bold">{{ reviewItem.bioMore}}</span>
              </p>
              <p >{{this.$t("headline")}} :
                <span class=" text-bold">{{ reviewItem.headLine}}</span>
              </p>

              <p >{{this.$t("CreatedAt")}} :
                <span class=" font-weight-bold">{{ reviewItem.createdAt}}</span>
              </p>
              <p >{{this.$t("UpdatedAt")}} :
                <span class="font-weight-bold">{{ reviewItem.updatedAt}}</span>
              </p>
              <p>
              <b-button variant="info" size="sm" class="w-100"  @click="accept('user' , reviewItem.id)" >Accept</b-button>
              </p>
            </b-col>

          </b-row>


        </b-collapse>

      </b-card>

    </b-row>

    <b-row id="review_panel1" v-if="reviewMode  && certItems.length > 0" style="box-shadow: 0 1px 15px 1px rgb(0 0 20%); " class="pt-3 mt-3 paper  panel panel-default d-md-flex col-md-12 col-lg-12 m-center mt-1">
      <b-card  class="text-center mb-1 w-100 "
               border-variant="secondary"
               :header='this.$t("certificate.title")'
               header-border-variant="secondary"
               no-body>
        <b-collapse id="certCollapse" visible  v-model="certVisible" accordion="certCollapse" role="tabpanel">

            <b-row id="review_panel_cert" class="d-md-flex col-md-12 col-lg-12 m-center mt-1">
              <b-col class="w-100">
                <b-table head-variant="light" striped hover small  :items="certItems" :fields="r_cert_fields">

                  <template  #cell(description)="row" >
                    <p  class="float-left" >
                      {{ row.item.description.substr(1,20) }}
                      <p class="float-left ml-1" style="cursor: pointer" v-if="row.item.description.length > 20">
                        ...
                        <svg  :id="'tooltip-description' + row.item.id "  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>

                        <b-tooltip  :target="'tooltip-description' + row.item.id ">
                          {{ row.item.description }}
                        </b-tooltip>

                      </p>
                    </p>

                  </template>
                  <template #cell(acceptStatus)="row" >
                    <b-badge variant="warning" v-if="row.item.acceptStatus === 0 || row.item.acceptStatus === null"> {{$t("Pending")}}</b-badge>
                    <b-badge variant="success" v-if="row.item.acceptStatus === 1"> {{$t("Accepted")}}</b-badge>
                    <b-badge variant="danger" v-if="row.item.acceptStatus === 2"> {{$t("Rejected")}}</b-badge>
                  </template>

                  <template #cell(action_download)="row" >
                    <b-button variant="info"  size="sm" class="w-100"  @click="downloadFile(row.item)" :ref="'btnEdit' + row.index">
                      Download</b-button>
                  </template>

                  <template #cell(action_accept)="row" >
                    <b-button variant="info" size="sm" class="w-100"  @click="accept('cert' , row.item.id)" :ref="'btnEdit' + row.index">
                      Accept</b-button>
                  </template>

                  <template #cell(action_reject)="row" >
                    <b-button variant="info"  size="sm" class="w-100"  @click="reject('cert' , row.item.id)" :ref="'btnEdit' + row.index">
                      Reject</b-button>
                  </template>

                </b-table>
              </b-col>
            </b-row>

        </b-collapse>

      </b-card>

    </b-row>

    <b-row id="review_panel2" v-if="reviewMode && eduItems.length > 0" style="box-shadow: 0 1px 15px 1px rgb(0 0 20%); " class="pt-3 mt-3 paper  panel panel-default d-md-flex col-md-12 col-lg-12 m-center mt-1">
      <b-card  class="text-center mb-1 w-100 "
               border-variant="secondary"
               :header='this.$t("education")'
               header-border-variant="secondary"
               no-body>

          <b-row id="review_panel_educ" class="d-md-flex col-md-12 col-lg-12 m-center mt-1">
            <b-col class="w-100">
              <b-table head-variant="light" striped hover small  :items="eduItems" :fields="r_educ_fields">

                <template #cell(acceptStatus)="row" >
                  <b-badge variant="warning" v-if="row.item.acceptStatus === 0"> {{$t("Pending")}}</b-badge>
                  <b-badge variant="success" v-if="row.item.acceptStatus === 1"> {{$t("Accepted")}}</b-badge>
                  <b-badge variant="danger" v-if="row.item.acceptStatus === 2"> {{$t("Rejected")}}</b-badge>
                </template>

                <template #cell(action_download)="row" >
                  <b-button variant="info"  size="sm" class="w-100"  @click="downloadFile(row.item)" :ref="'btnEdit_educ' + row.index">
                    Download</b-button>
                </template>

                <template #cell(action_accept)="row" >
                  <b-button variant="info"  size="sm" class="w-100"  @click="accept('educ' , row.item.id)" :ref="'btnEdit_educ' + row.index">
                    Accept</b-button>
                </template>

                <template #cell(action_reject)="row" >
                  <b-button variant="info"  size="sm" class="w-100"  @click="reject('educ' , row.item.id)" :ref="'btnEdit_educ' + row.index">
                    Reject</b-button>
                </template>

              </b-table>
            </b-col>
          </b-row>

      </b-card>

    </b-row>

    <b-row id="review_panel3" v-if="reviewMode && lessonItems.length > 0" style="box-shadow: 0 1px 15px 1px rgb(0 0 20%); " class="pt-3 mt-3 paper  panel panel-default d-md-flex col-md-12 col-lg-12 m-center mt-1">
      <b-card  class="text-center mb-1 w-100 "
               border-variant="secondary"
               :header='this.$t("Lessons")'
               header-border-variant="secondary"
               no-body>

        <b-row id="review_panel_lesson" class="d-md-flex col-md-12 col-lg-12 m-center mt-1">
          <b-col class="w-100">
            <b-table head-variant="light" striped hover small  :items="lessonItems" :fields="r_lesson_fields">

              <template #cell(acceptStatus)="row" >
                <b-badge variant="warning" v-if="row.item.acceptStatus === 0"> {{$t("Pending")}}</b-badge>
                <b-badge variant="success" v-if="row.item.acceptStatus === 1"> {{$t("Accepted")}}</b-badge>
                <b-badge variant="danger" v-if="row.item.acceptStatus === 2"> {{$t("Rejected")}}</b-badge>
              </template>

              <template #cell(action_download)="row" >
                <b-button variant="info"  size="sm" class="w-100"  @click="downloadFile(row.item)" :ref="'btnEdit_lesson' + row.index">
                  Download</b-button>
              </template>

              <template #cell(action_accept)="row" >
                <b-button variant="info"  size="sm" class="w-100"  @click="accept('lesson' , row.item.id)" :ref="'btnEdit_lesson' + row.index">
                  Accept</b-button>
              </template>

              <template #cell(action_reject)="row" >
                <b-button variant="info"  size="sm" class="w-100"  @click="reject('lesson' , row.item.id)" :ref="'btnEdit_lesson' + row.index">
                  Reject</b-button>
              </template>

            </b-table>
          </b-col>
        </b-row>

      </b-card>

    </b-row>


  </b-container>
</template>

<script>
import { VBVisible } from 'bootstrap-vue'
import {required} from "vuelidate/lib/validators";

export default {
  layout: 'AdminTemplate',
  name: "user-change"
,
data()
{
  return {
    thisp: this,
    userId: 0 ,
    reviewMode: false,
    visible: true,
    r_lesson_fields:[
      {
        key: 'subject',
        label: 'Subject',
        sortable: true
      },
      {
        key: 'description',
        label: 'Description',
        sortable: true
      },
      {
        key: 'acceptStatus',
        label: 'Status',
        sortable: false
      },
      {
        key: 'action_download',
        label: 'Download',
      },
      {
        key: 'action_accept',
        label: this.$t('accept'),
      },
      {
        key: 'action_reject',
        label: this.$t('reject'),
      },
    ],
    r_educ_fields:[
      {
        key: 'university',
        label: 'University',
        sortable: true
      },
      {
        key: 'degree',
        label: 'Degree',
        sortable: true
      },
      {
        key: 'speciality',
        label: 'Speciality',
        sortable: true
      },
      {
        key: 'acceptStatus',
        label: 'Status',
        sortable: false
      },
      {
        key: 'action_download',
        label: 'Download',
      },
      {
        key: 'action_accept',
        label: this.$t('accept'),
      },
      {
        key: 'action_reject',
        label: this.$t('reject'),
      },
         ],
    r_cert_fields:[
      {
        key: 'certName',
        label: 'Certificate Name',
        sortable: true
      },
      {
        key: 'description',
        label: 'Description',
        sortable: true
      },
      {
        key: 'issuedby',
        label: 'Issued By',
        sortable: true
      },
      {
        key: 'startYear',
        label: 'Start Year',
        sortable: false
      },
      {
        key: 'endYear',
        label: 'End Year',
        sortable: false
      },
      {
        key: 'acceptStatus',
        label: 'Status',
        sortable: false
      },
      {
        key: 'action_download',
        label: 'Download',
      },
      {
        key: 'action_accept',
        label: this.$t('accept'),
      },
      {
        key: 'action_reject',
        label: this.$t('reject'),
      },
          ],
    t_fields:[
      {
        key: 'email',
        label: 'Email/User',
        sortable: true
      },
      {
        key: 'name',
        label: 'Name',
        sortable: true
      },
      {
        key: 'lastname',
        label: 'Last Name',
        sortable: true
      },
      {
        key: 'state',
        label: 'Status',
        sortable: false
      },
      {
        key: 'econfirmed',
        label: 'Email Confirmed',
        sortable: false
      },
      {
        key: 'view',
        label: 'Action',
        sortable: false,
      },
    ],
    t_items: [],
    overlay_show: false,
    certItems: [],
    eduItems: [],
    lessonItems: [],
    reviewItem: null,
    certVisible: true,
    lessonVisible: true ,
    educVisible: true ,
    cert_icon: false,
    userCount: 0,
    searchData: {
      pageIndex: 1,
      count: 0,
      perPage: 10,
      email: "",
      name: "",
      lastname: "",
    },
  }
},
mounted()
{
  this.checkPermission();
  this.show();
}
,
methods: {
  checkPermission()
  {
    this.$axios.post("permisson/hasPermission" , {permission: "admin"}).then((res)=>{
      if(res.data.permission === false)
      {
        this.$router.push('/')
      }
    }).catch((err) => {
      this.$router.push('/')
    })
  },
  makeToast(variant = 'success', header = 'Message', msg = '') {
    this.$bvToast.toast(this.$t(msg), {
      title: header,
      variant: variant,
      solid: true
    })
  },

  show(index) {

    if(index > 0)
      this.searchData.pageIndex = index
    else
      this.searchData.pageIndex = 0

    this.overlay_show = true;
    this.$axios.post('/users/changes', this.searchData).then((res) => {
      this.t_items = res.data.rows
      this.searchData.count = res.data.count
      this.overlay_show = false;
    }).catch(error => {
      this.overlay_show = false;
      this.makeToast("danger", "Error", "search_error")
      console.log(error)
    });
  }
  ,
  showEditModal(item)
  {
    this.userId = item.item.id
    this.certItems = item.item.certItems;
    this.eduItems = item.item.eduItems;
    this.reviewItem = item.item;
    this.lessonItems = item.item.lessonItems;

    this.reviewMode = true
  },

  accept(type, id )
  {
    this.$bvModal.msgBoxConfirm(this.$t('accept_confim'), {
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
        if(value) {
          const ACCEPTED = 1;
          let changeStatus = {type: type, id: id, status: ACCEPTED, userId: this.userId}
          this.$axios.post('/users/changeStatus', changeStatus).then((res) => {
            if (res.data === "success") {

              if(type === "cert")
              {
                this.certItems.forEach(function(item, index, object){
                  if(item.id === id)
                    item.acceptStatus = 1
                    //object.splice(index, 1);
                })
              }

              if(type === "educ")
              {
                this.eduItems.forEach(function(item, index, object){
                  if(item.id === id)
                    item.acceptStatus = 1
                })
              }

              if(type === "lesson")
              {
                this.lessonItems.forEach(function(item, index, object){
                  if(item.id === id)
                    item.acceptStatus = 1
                })
              }

              if(type === "user")
              {
                this.reviewItem.acceptStatus = 1
              }

            }
          }).catch(error => {
            this.overlay_show = false;
            this.makeToast("danger", "Error", "search_error")
            console.log(error)
          });
        }
      })
      .catch(err => {
        // An error occurred
      })

  }
  ,
  reject(type, id)
  {
    const REJECT = 2;
    this.$bvModal.msgBoxConfirm(this.$t('accept_confim'), {
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
        if(value) {
          const ACCEPTED = 1;
          let changeStatus = {type: type, id: id, status: REJECT, userId: this.userId}
          this.$axios.post('/users/changeStatus', changeStatus).then((res) => {
            if (res.data === "success") {

              if(type === "cert")
              {
                this.certItems.forEach(function(item, index, object){
                  if(item.id === id)
                    item.acceptStatus = 2
                })
              }

              if(type === "educ")
              {
                this.eduItems.forEach(function(item, index, object){
                  if(item.id === id)
                    item.acceptStatus = 2
                })
              }

              if(type === "lesson")
              {
                this.lessonItems.forEach(function(item, index, object){
                  if(item.id === id)
                    item.acceptStatus = 2
                })
              }

            }
          }).catch(error => {
            this.overlay_show = false;
            this.makeToast("danger", "Error", "search_error")
            console.log(error)
          });
        }
      })
      .catch(err => {
        // An error occurred
      })


  }
  ,
  sendMessage(msg)
  {

  },

  downloadFile(rowId) {
    try {
      var c = {responseType: 'blob'}

      this.$axios.get(`/download/${rowId.id}` ,  c).then((response) => {
        console.log(response)
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

  backBtn()
  {
    this.$nuxt.$emit('initAdmin')

    this.reviewMode = false
  }

}

}
</script>

<style scoped>

</style>
