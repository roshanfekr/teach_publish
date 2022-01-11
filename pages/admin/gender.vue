<template>
  <b-container >
    <b-row class="mr-1">
      <b-col>
        <p class="float-left mt-2">{{$t("admin.gender.header")}}</p>
        <b-button  @click="this.showAddModal" class="float-right mb-2" variant="success">Add New</b-button>
      </b-col>
    </b-row>
    <b-modal centered ref="edit-modal" size="lg" hide-footer title="Edit Gender">
      <b-row id="toolbar" class="" >
        <b-col>
              <b-row class="mt-2">
                <b-col>
                  <b-form-group label-cols="5" label-cols-lg="4"  label-align-sm="right" :label="$t('admin.gender.field.title')" label-for="input-gender-title">
                    <b-form-input
                      id="input-gender-title"
                      v-model.trim="$v.nData.title.$model"
                      :placeholder= "$t('admin.gender.field.placeholder')"
                      :state="!$v.nData.title.$error"
                      aria-describedby="input-gender-title-feedback"
                      trim
                    />
                    <b-form-invalid-feedback id="input-gender-title-feedback">
                      {{ this.$t("admin.gender.v.title") }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>

              </b-row>

              <b-row class="mt-2">
                <b-col>
                  <b-form-group label-cols="4" label-cols-lg="4"  label-align-sm="right" :label="$t('university_email')" label-for="input-email">
                    <b-check
                      id="input-email"
                      v-model="nData.disable">
                      Disable
                    </b-check>
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
  name: "Gender"
  ,
  data() {
    return {
      header_title:'',
      overlay_show: false ,
      tabVisible: 0,
      pageIndex: 1,
      search_visible: true, add_visible: false,
      nData: {
        id: 0,
        title: null,
        disable: false,
      },
      t_fields:[
        {
          key: 'title',
          label: 'Title',
          sortable: true
        },
        {
          key: 'disable',
          label: 'Disable',
          sortable: false,
        }
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
      title:{
        required,
      }
    }
  },

  methods:
    {
      showAddModal() {
        this.nData.id = 0
        this.nData.title = null
        this.nData.disable = false
        this.$refs['edit-modal'].show()
      },
      showEditModal(item) {
        this.nData.id = item.id
        this.nData.title = item.title
        this.nData.disable = item.disable
        this.$refs['edit-modal'].show()
      },
      hideModal(name) {
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
            this.$axios.post('/definitions/create-gender', this.nData).then(
              rsp => {
                //this.t_items = rsp.data
                this.t_items.push({ id: rsp.data.id , title: rsp.data.title, disable: rsp.data.disable })
                this.hideModal('edit-modal')
                this.makeToast("success" , "Success" , this.$t("done_successfully" ))

              })

          }
          else
          {
            this.$axios.post('/definitions/edit-gender', this.nData).then(
              rsp => {
                this.hideModal('edit-modal')
                this.makeToast("success" , "Success" , this.$t("done_successfully" ))
                this.loadUniversity()
              })
          }
        }
      },
      cancel(){
        this.nData.id = 0
        this.hideModal('edit-modal')
      },
      loadGender()
      {
        this.$axios.post('/definitions/list-gender', null).then((res) => {
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
