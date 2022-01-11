<template>

  <div  class="p-4">


<!--      <b-card-header header-tag="header" class="mt-3 " style="height: 55px" >-->
<!--&lt;!&ndash;        <b-button  @click="this.prepareAddNew" class="float-right mb-2" variant="success">Add New</b-button>&ndash;&gt;-->
<!--      </b-card-header>-->
      <b-modal ref="edit-modal"  centered hide-footer :title="header_title">
        <div class="login-wrap p-4 p-lg-5">
            <b-form-group  id="input-group-name" :label="$t('subject')+':'"   label-for="input-subject">
              <b-form-select id="input-subject"
                             :state="!$v.formData.lessonId.$error"
                             aria-describedby= "input-v-subject-feedback"
                             v-model.trim="$v.formData.lessonId.$model"
                             :options="subjet_options"
                             trim
              ></b-form-select>
              <b-form-invalid-feedback id="input-v-subject-feedback">
                {{ this.$t("v_enter_Required") }}
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group  id="input-group-description" :label="$t('desc')+':'"  label-for="input-description">
              <textarea id="input-description" class="w-100"
                            :state="!$v.formData.description.$error"
                            v-model.trim="$v.formData.description.$model"
                            aria-describedby= "input-v-description-feedback"
                            trim
                            >
              </textarea>
              <b-form-invalid-feedback id="input-v-description-feedback">
                {{ this.$t("v_enter_Required") }}
              </b-form-invalid-feedback>
            </b-form-group>

            <b-row class="mt-2">
              <b-col class="float-right">
                <b-button class="m-center w-50 float-right" variant="primary" @click="this.saveEdit">Save</b-button>

              </b-col>
              <b-col class="float-left">
                <b-button class="m-center w-50 float-left" variant="primary" @click="this.cancel">Cancel</b-button>

              </b-col>
            </b-row>

        </div>

      </b-modal>
      <div>

        <b-card class="mt-4 w-100" header-tag="header" no-body footer-tag="footer">
          <template #header>
            <b-button  @click="prepareAddNew" class="btn btn-crl  btn-primary ">Add New</b-button>
          </template>

          <b-table responsive="sm" outlined show-empty	hover :items="t_subject_items" :fields="t_table_fields">
            <template  #cell(description)= "data" >
              <p  class="float-left">
                {{ data.item.description.substr(1,20) }}
                  <p class="float-left ml-1"  style="cursor: pointer" v-if="data.item.description.length > 20">
                    ...
                    <svg  :id="'tooltip-description' + data.item.id"
                          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg>

                    <b-tooltip  :target="'tooltip-description' + data.item.id ">
                      {{ data.item.description }}
                    </b-tooltip>

                  </p>
              </p>
            </template>
            <template  #cell(edit)= "data" >

              <button class="btn btn-dark" @click="prepareEdit(data)" >{{$t("edit")}}</button>
            </template>

            <template #cell(remove)= "data">

              <button class="btn btn-dark" @click="showDeleteComfirm(data)">{{$t("remove")}}</button>
            </template>

            <template #cell(acceptStatus)= "data">
              <b-badge v-if="data.item.acceptStatus === 0 || data.item.acceptStatus === null || data.item.acceptStatus === undefined" variant="warning">{{$t("pending")}}</b-badge>
              <b-badge v-if="data.item.acceptStatus === 1" variant="success">{{$t("accept")}}</b-badge>
            </template>

          </b-table>

          <template #footer>
            <b-button  @click="reloadTable" size="sm" variant="btn-primary" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
              </svg>
            </b-button>

          </template>
        </b-card>

      </div>



  </div>
</template>

<script>
import {required} from "vuelidate/lib/validators";

export default {
  name: "reg-subject",
  data() {
    return {
      header_title: "" ,
      dismissCountDown: 10,
      delComfirm: false,
      formData: {
        id: 0,
        lessonId: 0,
        description: ''
      },
      subjet_options: [],
      t_table_fields: [
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
          key: 'createdAt',
          label: 'Created At',
          sortable: true
        },
        {
          key: 'acceptStatus',
          label: 'Status',
          sortable: true
        },
        {
          key: 'edit',
          label: '',
          sortable: false
        },
        {
          key: 'remove',
          label: '',
          sortable: false
        },
      ],
      t_subject_items:[]

    }
  },
  validations: {
    formData:{
      lessonId:{
        required,
      },
      description:{
        required,
      }
    },

  },
  mounted() {

    this.fillSubject();
    this.reloadTable();
  },
  methods: {
    hideModal() {
      this.$refs['edit-modal'].hide()
    },

    prepareAddNew()
    {
      this.header_title = "Add New Lesson"
      this.formData.id = 0
      this.formData.description = ""
      this.formData.lessonId = 0
      this.$refs['edit-modal'].show()
    },

    prepareEdit(row)
    {
      this.header_title = "Edit Lesson"
      this.formData.id = row.item.id
      this.formData.description = row.item.description
      this.formData.lessonId = row.item.lessonId
      this.$refs['edit-modal'].show()
    },

    cancel(){
      this.formData.id = 0
      this.hideModal('edit-modal')
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


    fillSubject() {

      this.$axios.post('subject/subjectlist', null , this.config).then((res) => {
        // localStorage.setItem('userToken', res.data)
        // this.$router.push('/profile')
        this.subjet_options = res.data
        console.log(res.data)
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors
        }
        console.log(error)
      })
    },

    reloadTable() {
      this.$axios.post('/subject/items' , null, this.config ).then((res) =>
      {
        this.t_subject_items = [];
        this.t_subject_items = res.data
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors
        }
        console.log(error)
      });

    },

    showDeleteComfirm(rowId) {
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
          this.delComfirm = value

          function deleteRow(id) {
            this.$axios.post('subject/delete' , null , this.config).then((res) =>
            {
              this.makeToast( 'success' , 'Message' ,  this.$t('success_delete') )
              //debug
              console.log(res.data);

              return true;

            }).catch(error => {
              if (error.response.data.errors) {
                this.errors = error.response.data.errors
              }
              console.log(error)
            });

          }

          if(value===true)
          {
            let retValue = deleteRow(rowId.id);
            if(retValue.result === true)
              reloadTable();
          }
        })
        .catch(err => {
          // An error occurred
        })
    },

    saveEdit()
    {
      this.$v.$reset()
      this.$v.formData.$touch()
      if (this.$v.formData.$invalid) {
        console.log("vuelidate error")
      } else {
        if (this.formData.id > 0) {
          this.$axios.post('subject/edit', this.formData).then((res) => {
            this.hideModal()
            this.overlay_show = false;
            this.reloadTable();
          }).catch(error => {
            this.overlay_show = false;
            this.makeToast("danger", "Error", "save_error")
            console.log(error)
          });
        }
        else
        {
          this.$axios.post('subject/create', this.formData).then((res) => {
            //this.t_items = res.data
            this.formData.lessonId = 0
            this.formData.description = ""
            this.formData.id = 0
            this.hideModal()
            this.search();
          }).catch(error => {
            this.overlay_show = false;
            this.makeToast("danger", "Error", error)
            console.log(error)
          });
        }

      }


    }

  },
}
</script>

<style scoped>

</style>
