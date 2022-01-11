<template>
  <div class="main-body-container-content">
    <b-container class="container-padding">
      <div v-if="response.variant === ''" class="w-100 d-flex justify-content-center mb-3">
        <b-spinner style="width: 3rem; height: 3rem;" variant="danger"  type="grow" label="Loading..."></b-spinner>
      </div>
      <b-row v-else class="d-md-flex col-md-12 col-lg-10 m-center">
        <b-alert :variant="response.variant" class="w-100" show>{{response.msg}}</b-alert>
      </b-row>
    </b-container>
  </div>
</template>

<script>

  import jwt_decode from "jwt-decode";

  export default {
    name: 'Activation',
    components: {},
    data() {
      return {
        formData: {
          email: '',
          activeCode: ''
        },
        response:{
          msg:'',
          variant:''
        },
        errors: null,
      }
    },
    head() {
      return {
        title: 'Activation',
        meta: [
          {
            name: 'description',
            content: 'Activation your account , email'
          },
          {
            name: 'keywords',
            content: 'active, account, email'
          }
        ]
      }
    },
    mounted() {
      this.formData.activeCode = this.$route.query.code
      this.formData.email = this.$route.query.email
      this.checkActivation()
    },
    methods: {
     checkActivation() {
       const self = this
       this.$axios.post('user/activation', this.formData).then(async (res) => {
         this.response = res.data
         if(this.response.variant === 'success'){
           const oldRedirect = self.$auth.options.redirect;
           self.$auth.options.redirect = false;
           await self.$auth.setUserToken(res.data.token)
           let decoded = jwt_decode(res.data.token);
           self.$auth.setUser(decoded)
           self.$auth.options.rewriteRedirects = oldRedirect;
         }
       }).catch(error => {
         if(error.response !== undefined)
          this.response = error.response.data
         console.log(error)
       })
     }
    },
  }
</script>

<style scoped>


</style>
