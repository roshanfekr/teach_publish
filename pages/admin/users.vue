<template>
    <div>
      <b-modal centered ref="role-modal" hide-footer  size="md" title="Set Roles">
        <div class="d-block text-center">
          <b-form-checkbox-group
            id="checkbox-group-1"
            v-model="roleSelected"
            :options="roleOptions"
            name="flavour-1"
          ></b-form-checkbox-group>

        </div>
        <b-row class="mt-3">
          <b-col>
            <b-button class="float-right w-50" variant="primary" @click="this.setRoles">{{$t("set")}}</b-button>

          </b-col>
          <b-col>
            <b-button class="float-left w-50" variant="primary" @click="this.setRoleCancel">{{$t("cancel")}}</b-button>

          </b-col>
        </b-row>
      </b-modal>

      <b-card class="mx-3" header-tag="header" no-body footer-tag="footer">
        <template #header>
          {{$t("users")}}
          <div class="float-right" v-if="visible" @click="visible = false">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
              <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
            </svg>
          </div>
          <div class="float-right" v-if="!visible" @click="visible = true">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
            </svg>
          </div>
        </template>

        <b-row class="d-md-flex col-md-12 col-lg-12 m-center">

          <b-collapse v-model="visible" id="search-1" visible accordion="my-accordion" class="w-100" role="tabpanel">
            <b-row class="mt-3">
              <b-col>
                <b-form-group label-cols="4" label-cols-lg="2" label-size="sm" label-align-sm="right" :label="$t('email')" label-for="input-username">
                  <b-form-input
                    id="input-username"
                    v-model="searchData.email"
                    placeholder="Email"
                  />
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label-cols="4" label-cols-lg="2" label-align-sm="right" label-size="sm" :label="$t('name')" label-for="input-name">

                  <b-form-input
                    id="input-name"
                    v-model="searchData.name"
                    placeholder="Name"
                  />
                </b-form-group>
              </b-col>
            </b-row>

            <b-row class="mt-2">
              <b-col>
                <b-form-group label-cols="4" label-cols-lg="2" label-align-sm="right" label-size="sm" :label="$t('lastname')" label-for="input-lastname">
                  <b-form-input
                    id="input-lastname"
                    v-model="searchData.lastname"
                    placeholder="Last Name"
                  />
                </b-form-group>
              </b-col>
              <b-col>

                <b-form-group label-cols="4" label-cols-lg="2" label-align-sm="right" label-size="sm" :label="$t('Status')" label-for="input-select">
                  <b-form-select id="input-select" v-model="searchData.active" :options="active_options"></b-form-select>
                </b-form-group>

              </b-col>
            </b-row>

            <b-row class="mt-2 mb-3">
              <b-button class="m-center w-10" variant="primary" @click="search">Search</b-button>
            </b-row>
          </b-collapse>

        </b-row>

      </b-card>

      <b-row>

        <b-row class="d-md-flex col-md-12 col-lg-12 m-center mt-3">

          <b-col>
            <b-pagination
              v-model="searchData.pageIndex"
              :per-page="searchData.perPage"
              :total-rows="this.searchData.rowsCount"
              first-text="First"
              prev-text="Prev"
              next-text="Next"
              last-text="Last"
              @change="search"
            ></b-pagination>
          </b-col>
        </b-row>

        <b-row class="d-md-flex col-md-12 col-lg-12 m-center mt-1">
          <b-overlay :show="overlay_show" no-wrap>
          </b-overlay>
          <b-col>
            <b-table head-variant="light"  hover :items="t_items" :fields="t_fields">

              <template #cell(roles)="row">
                <b-badge v-if="hasRole('student' ,row.item.roles)" variant="info">Student</b-badge>
                <b-badge v-if="hasRole('tutor', row.item.roles)" variant="danger">Tutor</b-badge>
                <b-badge v-if="hasRole('admin', row.item.roles)" variant="primary">Admin</b-badge>
              </template>
              <template #cell(acceptStatus)="row" >
                <b-badge variant="warning" v-if="row.item.acceptStatus === 0 || row.item.acceptStatus === null"> {{$t("Pending")}}</b-badge>
                <b-badge variant="success" v-if="row.item.acceptStatus === 1"> {{$t("Accepted")}}</b-badge>
                <b-badge variant="danger" v-if="row.item.acceptStatus === 2"> {{$t("Rejected")}}</b-badge>
              </template>
              <template #cell(econfirmed)="row">
                <b-badge pill v-if="row.item.emailConfirmed" variant="success">{{$t("Confirmed")}}</b-badge>
                <b-badge pill v-if="!row.item.emailConfirmed" variant="warning">{{$t("Not Confirmed")}}</b-badge>

              </template>
              <template #cell(view)="row">
<!--                 @click="view(row.item)"-->
                <b-button variant="info"  size="sm">View</b-button>
              </template>
              <template #cell(setrole)="row">
                <b-button variant="info"  size="sm" @click="setRoleDialog(row.item)" :ref="'btnView' + row.index">Set</b-button>
              </template>

            </b-table>

          </b-col>
        </b-row>
      </b-row>

    </div>

</template>

<script>
import {required, requiredIf} from "vuelidate/lib/validators";

export default {
  layout: 'AdminTemplate',
  name: "users"
  ,
  data() {
    return {
      setRoleUserId: 0,
      roleSelected: [],
      roleOptions: [
        { text: 'Administrator', value: '1' },
        { text: 'Tutor', value: '2' },
        { text: 'Student', value: '3' },
      ],
      overlay_show: false ,
      visible: true,
      active_options:[
        { value: 2, text: 'All' },
        { value: 0, text: 'Pending' },
        { value: -1, text: 'Disable' },
        { value: 1, text: 'Enable' },
      ],
      searchData: {
        pageIndex: 1,
        rowsCount: 0,
        perPage: 10,
        email: "",
        name: "",
        lastname: "",
        active: 2 // 2=all , 0= disable , 1= enable
      },
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
          key: 'roles',
          label: 'Role',
          sortable: false
        },
        {
          key: 'acceptStatus',
          label: 'Status',
          sortable: false
        },
        {
          key: 'createdAt',
          label: this.$t('CreatedAt'),
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
          sortable: false
        },
        {
          key: 'setrole',
          label: this.$t('SetRole'),
          sortable: false
        }
      ],
      t_items: []
    }
  },
  mounted()
  {
    this.search()
  },
  methods:
  {
    setRoleDialog(item){
      this.roleSelected = item.rolesId
      this.setRoleUserId = item.id
      this.showModal()
    },
    setRoles(){
      try {
        const formData = {
          roles : this.roleSelected ,
          userId: this.setRoleUserId
        }
        this.$axios.post("/users/setRole" , formData).then((res)=>{
          if(res.data.result === true)
          {
            this.hideModal()
            this.search(this.searchData.pageIndex)
          }
        }).catch((err) => {
          this.makeToast("danger" , "Error" , "search_error" )
        })
      }catch (e) {

      }

    },
    setRoleCancel(){
      this.hideModal()
    },
    showModal() {
      this.$refs['role-modal'].show()
    },
    hideModal() {
      this.$refs['role-modal'].hide()
    },

    hasRole: function (role, roles) {
      if (roles !== undefined)
        return roles.indexOf(role) !== -1;
      return false
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
        this.searchData.pageIndex = 1
      this.overlay_show = true;
      this.$axios.post('users/list', this.searchData).then((res) => {
        this.t_items = res.data.rows
        this.searchData.rowsCount = res.data.row_count;
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
.p-10{
  padding-top: 100px;
  padding-left: 100px;
  padding-right: 100px;
}
.w-10 {
  width: 10% !important;
}
.w-5 {
  width: 5% !important;
}
</style>
