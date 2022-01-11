<template>
    <b-container fluid>
      <b-row class="mt-5 scol-md-12 pb-5 col-lg-10 m-center">
        <b-overlay
          class="w-100"
          :show="loadOverlay"
          variant="white"
          :opacity=1
          blur="3px"
          rounded="sm">
          <b-row class="mt-4 font-weight-bold mx-0">
            <b-col class="col-xl-8 col-lg-8 mx-auto">
              <svg style="color: #04CB28; margin-bottom: 10px;" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                   class="bi bi-patch-check" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                <path
                  d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
              </svg>

              <span style="color: #04CB28; font-size: 24px;" >{{ $t("tutor_register_finish") }}</span>
            </b-col>
          </b-row>

          <b-row class="mt-4 font-weight-bold mx-0" v-if="!result.emailComfirmed">
            <b-col class="col-xl-8 col-lg-8 mx-auto">
              <font-awesome-icon style="color: #ffc252; margin-bottom: 1px;" :icon="['fas', 'exclamation-triangle']"/>
              {{ $t("account.unVerifiedAlert") }}
            </b-col>
          </b-row>

          <b-row class="mt-4 font-weight-bold mx-0" v-if="!result.subject">
            <b-col class="col-xl-8 col-lg-8 mx-auto">
              <font-awesome-icon style="color: #ffc252; margin-bottom: 1px;" :icon="['fas', 'exclamation-triangle']"/>
              {{ $t("tutor_register_finish.nosubject") }}
            </b-col>
          </b-row>
          <b-row class="mt-4 font-weight-bold mx-0" v-if="!result.tutorTiming">
            <b-col class="col-xl-8 col-lg-8 mx-auto">
              <font-awesome-icon style="color: #FFC252FF; margin-bottom: 1px;" class="font-color" :icon="['fas', 'exclamation-triangle']"/>
              {{ $t("tutor_register_finish.timing") }}
            </b-col>
          </b-row>

          <b-row class="mt-5 font-weight-bold mx-0">
            <b-col class="col-xl-8 col-lg-8 mx-auto">
              <b-button class="btn btn-crl btn-primary px-4" to="/">Continue to Home Page</b-button>
            </b-col>
          </b-row>
        </b-overlay>


      </b-row>
    </b-container>

</template>

<script>


import {library} from '@fortawesome/fontawesome-svg-core'
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'



library.add(faExclamationTriangle)


export default {
  middleware: 'auth',
  name: "tutor-finish",
  data() {
    return {
      loadOverlay: true ,
      result:{
        emailComfirmed: false ,
        subject : false ,
        tutorTiming : false
      }

    }
  },
  mounted() {
    this.check()
  },
  methods: {
    check()
    {
      this.$axios.post("/user/getTutorStatus", null ).then( (res) =>{
        this.loadOverlay = false
        this.result = res.data
      }).catch((err) =>{

      }).finally(()=>{
        this.loadOverlay = false
      })

    }

  },
}
</script>

<style scoped>
.m-selected {
  padding-top: 16px;
  z-index: 99;
  height: 50px;
  width: calc(100% + 2px);
  position: absolute;
  background-color: rgba(var(--gradian-color4));
  color: white;
  margin: -1px;
  font-size: small;
  text-align: center;
  box-shadow: inset 0 0 15px rgba(var(--gradian-color1));
}

.m-even-time {
  padding-top: 14px;
  width: 100%;
  z-index: 999;
  position: absolute;
  height: 49px;
  background-color: white;
  margin-left: -15px;
  text-align: center;
}


</style>
