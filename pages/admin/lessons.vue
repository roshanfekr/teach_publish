<template>
    <b-container>
    <b-row id="toolbar" class="d-md-flex col-md-12 col-lg-12 m-center w-100 " >
      <b-col>
        <b-card no-body class="pb-3 mb-1 w-100">
          <b-card-header header-tag="header" role="tab">
            <b-button  @click="this.addNewToggle" class=" mb-2" variant="success">Add New</b-button>
            <b-button  @click="this.addFromCVS" class=" mb-2 ml-2" variant="success">Add From CVS</b-button>
          </b-card-header>

          <div class="mt-4">
            <b-row class="mt-2">
              <b-col>
                <b-form-group label-cols="4" label-cols-lg="2" label-size="sm" label-align-sm="right" :label="$t('lesson')" label-for="input-lesson">
                  <b-form-input
                    id="input-lesson"
                    v-model="searchData.subject"
                    placeholder="Please enter subject title"
                  />
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group class="w-75" label-cols="4" label-cols-lg="2" label-align-sm="right" label-size="sm" :label="$t('Status')" label-for="input-select">
                  <b-form-select  class="pt-2" v-model="searchData.active" :options="active_options"></b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row class="mt-2">
              <b-col>
                <b-form-group class="w-75" label-cols="4" label-cols-lg="3" label-align-sm="right" label-size="sm" :label="$t('admin.lessons.universities')" label-for="input-select-universities">
                  <b-form-select id="input-select-universities" v-model="searchData.uniId" :options="universities_options"></b-form-select>
                </b-form-group>
              </b-col>
              <b-col class="w-50">

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
      <b-overlay :show="overlay_show" no-wrap>
      </b-overlay>
      <b-row class="d-md-flex col-md-12 col-lg-12 m-center mt-3">
        <b-col>
          <b-pagination
            v-model="pageIndex"
            :total-rows="this.searchData.pageCount"
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

            <template #cell(state)="row">
              <b-badge v-if="row.item.stateValue" variant="info">Enable</b-badge>
              <b-badge v-if="!row.item.stateValue" variant="warning">Disable</b-badge>
            </template>
            <template #cell(actions)="row">
              <b-button variant="info"  size="sm" @click="prepare_edit(row.item)" :ref="'btnEdit' + row.index">Edit</b-button>
            </template>

          </b-table>
        </b-col>
      </b-row>
    </b-row>

      <b-modal ref="edit-modal" centered hide-footer :title="header_title">
          <b-row class="mt-2">
            <b-col>
              <b-form-group label-cols="3" label-cols-lg="2"  label-align-sm="right" :label="$t('subject')" label-for="input-subject_name">
                <b-form-input
                  id="input-subject"
                  v-model.trim="$v.nData.subject.$model"
                  :placeholder= "$t('please_enter_subject')"
                  :state="!$v.nData.subject.$error"
                  aria-describedby="input-lesson_subject-feedback"
                  trim
                />
                <b-form-invalid-feedback id="input-lesson_subject-feedback">
                  {{ this.$t("v_enter_Required") }}
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label-cols="3" label-cols-lg="2"  label-align-sm="right" :label="$t('admin.lessons.universities')" label-for="input-subject-universities">
                <b-form-select id="input-select-universities" v-model="nData.uniId" :options="universities_options"></b-form-select>

                <b-form-invalid-feedback id="input-lesson-universities-feedback">
                  {{ this.$t("v_enter_Required") }}
                </b-form-invalid-feedback>
              </b-form-group>

            </b-col>
          </b-row>

          <b-row class="mt-2">
            <b-col>
              <b-form-group  label-cols="3" label-cols-lg="2"  class="mb-2" label-align-sm="right"
                             :label="$t('active')" label-for="checkbox-active">
                <b-form-checkbox
                  class="mt-2"
                  id="checkbox-edit-active"
                  v-model="nData.active"
                  name="checkbox-1"
                  :value="true"
                  :unchecked-value="false"
                ></b-form-checkbox>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row class="mt-2">
            <b-col class="float-right">
              <b-button class="m-center w-50 float-right" variant="primary" @click="this.saveEdit">Save</b-button>

            </b-col>
            <b-col class="float-left">
              <b-button class="m-center w-50 float-left" variant="primary" @click="this.cancel">Cancel</b-button>

            </b-col>
          </b-row>
      </b-modal>

      <b-modal ref="add-modal-cvs" size="xl" centered hide-footer :title="header_title">
        <b-row class="mt-2">
          <b-col>

            <b-form-group label-cols="3" label-cols-lg="2"  label-align-sm="right" :label="$t('admin.lessons.universities')" label-for="input-subject-universities">
              <b-form-select id="input-select-universities" v-model="cvsData.uniId" :options="universities_options"></b-form-select>

              <b-form-invalid-feedback id="input-lesson-universities-feedback">
                {{ this.$t("v_enter_Required") }}
              </b-form-invalid-feedback>
            </b-form-group>

          </b-col>
        </b-row>

        <b-row class="mt-2">
          <b-col>
            <b-form-group  label-cols="3" label-cols-lg="2"  class="mb-2" label-align-sm="right"
                           :label="$t('active')" label-for="checkbox-active">
              <b-form-checkbox
                class="mt-2"
                id="checkbox-edit-active"
                v-model="cvsData.active"
                name="checkbox-1"
                :value="true"
                :unchecked-value="false"
              ></b-form-checkbox>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col>
<!--            <b-form-group v-if="!checkView" label-cols="3" label-cols-lg="2"  class="mb-2" label-align-sm="right"  label-for="cvsUpload">-->
<!--              <b-form-file class="mb-2" id="cvsUpload"-->
<!--                v-model="file1"-->
<!--                :state="Boolean(file1)"-->
<!--                placeholder="Choose lesson text file or drop it here..."-->
<!--                drop-placeholder="Drop file here..."-->
<!--                @input="uploadCVSFile"-->
<!--              ></b-form-file>-->
<!--            </b-form-group>-->
            <b-form-group v-if="!checkView" label-cols="3" label-cols-lg="2"  class="mb-2" label-align-sm="right" :label="$t('admin.lessons.csvtext')" label-for="textarea-csv">
              <b-form-textarea
                class="mt-2"
                id="textarea-csv"
                rows="8"
                v-model="cvs_data"
                @change = "cvsParser"
              ></b-form-textarea>

              <div  class="w-100 " style="overflow: scroll;height: 200px;">
              <div v-for="(item,index) in cvsData.cvs" :key="index">
               <div>
                 <b-form-checkbox
                   :id="'ch-lesson_' +  index "
                   v-model="item.checked"
                   name="checkbox-1">
                   {{item.code}} -> {{item.name}}
                 </b-form-checkbox>
               </div>
              </div>
            </div>

            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col class="float-right">
            <b-button class="m-center w-50 float-right" variant="primary" @click="this.saveCVSEdit">Save</b-button>
          </b-col>
          <b-col class="float-left">
            <b-button class="m-center w-50 float-left" variant="primary" @click="this.closeCVS">Cancel</b-button>
          </b-col>
        </b-row>
      </b-modal>

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
      file1: null,
      checkView: false,
      cvs_data:null,
      selected: null,
      options: ['list', 'of', 'options'],
      header_title: '',
      overlay_show: false ,
      tabVisible: 0,
      pageIndex: 1,
      nData: { id: 0 , subject: "" , active: true , uniId: null  },
      cvsData: { id: 0 , active: true , uniId: null  , cvs: null},
      active_options:[
        { value: 2, text: 'All' },
        { value: 0, text: 'Disable' },
        { value: 1, text: 'Enable' },
      ],
      universities_options:[ ],
      searchData: {
        pageIndex: 0,
        pageCount: 0,
        perPage: 10,
        id: 0,
        subject: "",
        uniId: null,
        active: 2 // 2=all , 0= disable , 1= enable
      },
      t_fields:[
        {
          key: 'subject',
          label: 'Subject',
          sortable: true
        },
        {
          key: 'University',
          label: 'University',
          sortable: true
        },
        {
          key: 'state',
          label: 'Status',
          sortable: false,

        },
        {
          key: 'actions',
          label: 'Edit',
          sortable: false
        },
      ],
      t_items: []
    }
  }
  ,
  mounted()
  {

    this.searchToggle()
    this.search()
    this.init()
  },

  validations: {
    nData:{
      subject:{
        required,
      }
    },
    cvsData:{
      cvs:{
        required,
      }
    },
  },


  methods:
  {
    cvsParser(){
      this.cvsData.cvs = [];
      if(this.cvs_data!=null)
      {
        let rows = this.cvs_data.split('\n')
        for (let i = 0; i < rows.length; i++) {

          if(rows[i].length > 0){
            let r = rows[i]
            let cols = r.split('\t')
            this.cvsData.cvs.push({code:cols[0] ,name:cols[1] , checked: true })
          }

        }
      }
    },
    // uploadCVSFile(file){
    //   alert(file)
    //   //require('fs').readFileSync('../static/data.json', 'utf8')
    // },

    init(){
      this.$axios.post('/definitions/universityList', null).then((res) => {
        var rows = res.data
        this.universities_options = []
        for (let i = 0; i < res.data.length ; i++) {
          var row = rows[i]
          this.universities_options.push({value: row.id , text: row.name })
        }
      }).catch(error => {
        console.log(error)
      });
    },
    showModal() {
      this.$refs['edit-modal'].show()
    },
    hideModal(id) {
      this.$refs[id].hide()
    },

    addNewToggle()
    {
      this.header_title = this.$t('Add_new_lesson')
      this.add_visible = true;
      this.nData.id = 0
      this.nData.subject = ""
      this.nData.active = true
      this.$refs['edit-modal'].show()
    },
    addFromCVS(){
      this.header_title = this.$t('Add_new_lesson')
      this.add_visible = true;
      this.nData.id = 0
      this.nData.subject = ""
      this.nData.active = true
      this.$refs['add-modal-cvs'].show()
    },
    searchToggle()
    {
      this.header_title = this.$t('search')
      this.add_visible = false;
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
      this.$axios.post('/definitions/lessonList', this.searchData).then((res) => {
        this.t_items = res.data.data
        this.searchData.pageCount = res.data.count
        this.overlay_show = false;
      }).catch(error => {
        this.overlay_show = false;
        this.makeToast("danger" , "Error" , "search_error" )
        console.log(error)
      });
    }
    ,
    cancel(){
      this.nData.id = 0
      this.hideModal('edit-modal')
    },
    closeCVS(){
      this.cvsData.cvs = null
      this.cvsData.uniId = null
      this.cvsData.id = 0
      this.cvsData.active = true
      this.hideModal('add-modal-cvs')
    },
    prepare_edit(item)
    {
      this.header_title = this.$t("edit_lesson")
      this.nData.id = item.id
      this.nData.subject = item.subject
      this.nData.active = item.state !== "Disable"
      this.nData.uniId = item.UniversityId
      this.showModal()

    },
    saveEdit()
    {
      this.$v.$reset()
      this.$v.nData.$touch()
      if (this.$v.nData.$invalid) {
        console.log("vuelidate error")
      } else {

        if (this.nData.id > 0) {
          this.$axios.post('definitions/editLesson', this.nData).then((res) => {
            this.hideModal("edit-modal")
            this.nData.active = true
            this.overlay_show = false;
            this.search();
          }).catch(error => {
            this.overlay_show = false;
            this.makeToast("danger", "Error", "save_error")
            console.log(error)
          });
        }
        else
        {
          this.$axios.post('definitions/createLesson', this.nData).then((res) => {
            //this.t_items = res.data
            this.nData.subject = ""
            this.nData.active = true
            this.hideModal()
            this.search();

          }).catch(error => {
            this.overlay_show = false;
            this.makeToast("danger", "Error", error)
            console.log(error)
          });
        }
        this.nData.id = 0
      }


    },

    saveCVSEdit()
    {
      this.$v.$reset()
      this.$v.cvsData.$touch()
      if (this.$v.cvsData.$invalid) {
        console.log("vuelidate error")
      } else {
          this.$axios.post('definitions/createLessonBulk', this.cvsData).then((res) => {
            this.search();
            this.closeCVS()
          }).catch(error => {
            this.overlay_show = false;
            this.makeToast("danger", "Error", error)
            console.log(error)
          });
        }
        this.nData.id = 0


    }

  }

}
</script>

<style scoped>

</style>
