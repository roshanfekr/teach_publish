<template>
  <b-container >
    <b-row class="mr-1">
      <b-col>
        <p class="float-left mt-2">{{header_title}}</p>
        <b-button  @click="this.showAddModal" class="float-right mb-2" variant="success">Add New</b-button>
      </b-col>
    </b-row>
    <b-modal centered ref="edit-modal" size="lg" hide-footer title="Edit Lesson">
      <b-row id="toolbar" class="" >
        <b-col>
              <b-row class="mt-2">
                <b-col>
                  <b-form-group label-cols="5" label-cols-lg="4"  label-align-sm="right" :label="$t('university_name')" label-for="input-university_name">
                    <b-form-input
                      id="input-university_name"
                      v-model.trim="$v.nData.name.$model"
                      :placeholder= "$t('Please_enter_university_name')"
                      :state="!$v.nData.name.$error"
                      aria-describedby="input-university_name-feedback"
                      trim
                    />
                    <b-form-invalid-feedback id="input-university_name-feedback">
                      {{ this.$t("v_enter_university_name") }}
                    </b-form-invalid-feedback>
                  </b-form-group>


                </b-col>

              </b-row>

              <b-row class="mt-2">
                <b-col>
                  <b-form-group label-cols="4" label-cols-lg="4"  label-align-sm="right" :label="$t('university_email')" label-for="input-email">
                    <b-form-input
                      id="input-email"
                      v-model.trim="$v.nData.email.$model"
                      :placeholder= "$t('university_email')"
                      :state="!$v.nData.email.$error"
                      aria-describedby="input-email-feedback"
                      trim
                    />
                    <b-form-invalid-feedback id="input-email-feedback">
                      {{ this.$t("v_enter_university_email") }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row class="mt-2">
                <b-col>
                  <b-form-group label-cols="4" label-cols-lg="4"  label-align-sm="right" :label="$t('university_emailPattern')" label-for="input-university_emailPattern">
                    <b-form-input
                      id="input-university_emailPattern"
                      v-model.trim="$v.nData.emailPattern.$model"
                      :placeholder= "$t('university_emailPattern')"
                      :state="!$v.nData.emailPattern.$error"
                      aria-describedby="input-emailPattern-feedback"
                      trim
                    />
                    <b-form-invalid-feedback id="input-emailPattern-feedback">
                      {{ this.$t("v_enter_university_emailPattern") }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row class="mt-2">
                <b-col>
                  <b-form-group label-cols="4" label-cols-lg="4"  label-align-sm="right" :label="$t('isactive')" label-for="input-isenable">
                    <b-form-checkbox
                      class="mt-2"
                      id="input-isenable"
                      v-model ="nData.isenable"
                      :placeholder= "$t('isenable')"
                      trim
                    />

                  </b-form-group>
                </b-col>
              </b-row>

              <b-row class="mt-3">
                <b-col>
                  <b-button class="float-right w-50" variant="primary" @click="this.save">{{$t("save")}}</b-button>

                </b-col>
                <b-col>
                  <b-button class="float-left w-50" variant="primary" @click="this.cancel">{{$t("cancel")}}</b-button>

                </b-col>
              </b-row>

      </b-col>

      </b-row>
    </b-modal>

    <b-row class="">
      <b-overlay :show="overlay_show" no-wrap>
      </b-overlay>
      <b-row class="d-md-flex col-md-12 col-lg-12 m-center mt-1">
        <b-col>
          <b-table head-variant="light" striped hover :items="t_items" :fields="t_fields">

            <template #cell(actions)="row">
              <b-button variant="info"  size="sm" @click="showEditModal(row.item)" :ref="'btnEdit' + row.index">Edit</b-button>
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
  name: "university"
  ,
  data() {
    return {
      editId: 0,
      header_title:'',
      overlay_show: false ,
      tabVisible: 0,
      pageIndex: 1,
      search_visible: true, add_visible: false,
      nData: {
        id: 0,
        name: "",
        emailPattern: "",
        email: "",
        isenable: true,
      },
      active_options:[
        { value: 2, text: 'All' },
        { value: 0, text: 'Disable' },
        { value: 1, text: 'Enable' },
      ],
      t_fields:[
        {
          key: 'name',
          label: 'Name',
          sortable: true
        },
        {
          key: 'emailPattern',
          label: 'Email Pattern',
          sortable: false,

        },
        {
          key: 'email',
          label: 'Email',
          sortable: false,
        },
        {
          key: 'status',
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
    this.loadUniversity()
  },

  validations: {
    nData:{
      name:{
        required,
      },
      email:{
        required,
      },
      emailPattern:{
        required,
      }
    }
  },

  methods:
    {
      showAddModal() {
        this.editId = 0
        this.nData.id = 0
        this.nData.emailPattern = ""
        this.nData.name = ""
        this.nData.isenable = true
        this.nData.email = ""
        this.$refs['edit-modal'].show()
      },
      showEditModal(item) {
        this.editId = item.id
        this.nData.id = item.id
        this.nData.emailPattern = item.emailPattern
        this.nData.name = item.name
        this.nData.isenable = item.isenable
        this.nData.email = item.email

        this.$refs['edit-modal'].show()
      },
      hideModal(name) {
        this.editId = 0
        this.$refs[name].hide()
      },
      makeToast(variant = 'success', header = 'Message', msg = '')
      {
        this.$bvToast.toast(this.$t(msg), {
          title: header,
          variant: variant,
          solid: true
        })
      },
      save(evt)
      {
        this.$v.$reset()
        this.errors = null
        evt.preventDefault()
        this.$v.nData.$touch()
        if (this.$v.nData.$invalid) {
          console.log("vuelidate error")
        } else {
          // add new record
          if (this.nData.id === 0) {
            this.$axios.post('/definitions/createUny', this.nData).then(
              rsp => {
                //this.t_items = rsp.data
                this.t_items.push({ id: rsp.data.id , name: rsp.data.name, emailPattern: rsp.data.emailPattern  ,
                  email: rsp.data.email ,  isenable: rsp.data.isenable ? "Enable" : "Disable"})
                this.hideModal('edit-modal')
                this.makeToast("success" , "Success" , this.$t("done_successfully" ))

              })

          }
          else
          {
            this.$axios.post('/definitions/editUny', this.nData).then(
              rsp => {
                this.hideModal('edit-modal')
                this.makeToast("success" , "Success" , this.$t("done_successfully" ))
                this.loadUniversity()
              })
          }
        }
      },
      cancel(){
        this.editId = 0
        this.nData.id = 0
        this.hideModal('edit-modal')
      },
      loadUniversity()
      {
        this.$axios.post('/definitions/universityList', this.searchData).then((res) => {
          this.t_items = res.data
          this.overlay_show = false;
        }).catch(error => {
          this.overlay_show = false;
          this.makeToast("danger" , "Error" , this.$t("search_error") )
          console.log(error)
        });
      }

    }

}
</script>

<style scoped>

</style>
