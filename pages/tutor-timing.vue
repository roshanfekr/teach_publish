<template>
  <div class="main-body-container-content">
    <b-container class="container-padding">
      <b-row class="col-md-12 pb-5 col-lg-10 m-center">
        <div class="w-100">
          <h3 class="mb-4 text-center">{{ $t('tutorApplication') }}</h3>
        </div>
        <b-row class="w-100 mx-0 mb-3">
          <h4 class="mb-2">{{ $t('availability') }}</h4>
          <b-progress value="5" max="5" class="w-100" height="10px" variant="danger"></b-progress>
          <span>5/5</span>
        </b-row>
        <b-row class="w-100 pt-4 mx-0 font-weight-bold justify-content-center pb-3">
          {{ $t('tutorTimingSubject1') }}
        </b-row>
        <b-row class="w-100 mx-0 justify-content-center pb-4">
          {{ $t('tutorTimingSubject2') }}
        </b-row>
        <b-overlay
          :show="busy"
          class="w-100"
          rounded="lg"
          variant="white"
          opacity="0.8">
          <div class="w-100" style="overflow-x: auto; overflow-y: hidden">
          <div class="w-100 " style="min-width: 750px">
            <div class="mb-2 float-right">
              <b-button class="form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2" to="/reg-educ">{{
                  $t('back')
                }}
              </b-button>
              <b-button class="form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg " @click="nextStep">
                {{ $t('finish') }}
              </b-button>
            </div>
            <b-row class="w-100 mx-0 text-center  border-bottom border-top  border-left border-right p-0 " style="height:50px;">
              <b-col>
                <font-awesome-icon style="font-size: x-large; margin-top: 11px; color: #cccfd2;" :icon="['far', 'clock']"/>
              </b-col>
              <b-col class="border-left p-0" v-for="(item,index) in week" :key="index">
                <div style="margin-top: 11px;"> {{ item }}</div>
              </b-col>
            </b-row>
            <b-row class="w-100 mx-0 border-bottom border-right" v-for="(clockItem, clockIndex) in clock" :key="clockIndex">
              <b-col class="border-left text-center ">
                <div class="align-content-center align-middle" :class="clockIndex % 2 === 0 ? 'm-even-time' : 'd-none'">
                  {{ clockIndex < 10 ? '0' + Math.floor(clockIndex/2) : clockIndex/2}}:{{ (clockIndex % 2 === 0 )? '00' :
                  '30'}}
                </div>
              </b-col>
              <b-col class="border-left p-0" v-for="(item,index) in week" :key="index">
                <div :class="timing[index][clockIndex] ?'m-selected':''" class="m-pointer"
                     @click="changer(index,clockIndex)">
                  {{timing[index][clockIndex] ?
                  ((clockIndex < 10 ? '0' + Math.floor(clockIndex/2) : Math.floor(clockIndex/2) )+':'+((clockIndex % 2 === 0
                  )? '00' : '30') ) + ' - ' +
                  (((clockIndex+2) < 10 ? '0' + Math.floor((clockIndex+2)/2) : Math.floor((clockIndex+2)/2)
                  )+':'+(((clockIndex+2) % 2 === 0 )? '00' : '30') ) :
                  '&nbsp;'}}
                </div>
              </b-col>
            </b-row>
          </div>
            <div class="mb-2">
              <b-button class="form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2" to="/reg-educ">{{
                  $t('back')
                }}
              </b-button>
              <b-button class="form-control btn btn-crl  btn-primary submit px-3 mt-4 btn-reg " @click="nextStep">
                {{ $t('finish') }}
              </b-button>
            </div>
        </div>
        </b-overlay>

      </b-row>

    </b-container>
  </div>

</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core'

  import {faClock} from '@fortawesome/free-regular-svg-icons'

  import {required, requiredIf} from "vuelidate/lib/validators";
  import timing from "./user-panel/timing";

  // import {required, numeric, minLength, maxLength} from "vuelidate/lib/validators";


  library.add(faClock)


  export default {
    middleware: 'auth',
    name: "tutor-timing",
    data() {
      return {
        nextPush: "/tutor-finish",
        busy: true,
        week: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        timing: [],
        clock: []
      }
    },
    mounted() {
      for (let i = 0; i < 48; i++)
        this.clock.push(i)
      this.week.forEach(() => {
        const sArr = [];
        this.clock.forEach(function (c) {
          sArr[c] = false
        });
        this.timing.push(sArr)
      });
      this.loadTiming()
    },
    methods: {
      hideOverlay()
      {
        this.busy = false
      },
      showOverlay()
      {
        this.busy = true
      },
      loadTiming() {
        try{
          this.showOverlay()
          this.$axios.post('/timing/getTiming').then((res) => {
            res.data.forEach((item) => {
              this.$set(this.timing[item.dayOfWeek], item.timeStart, true);
            })
          }).catch(error => {
            console.log(error.response)
          }).finally(()=>{
            this.hideOverlay()
          })
        }catch (e) {
          this.hideOverlay()
        }
      },

      nextStep(){
        let flag = false
        for (let clockIndex = 0; clockIndex < 48; clockIndex++) {
          for (let w = 0; w < 7; w++) {
            if(this.timing[w][clockIndex] === true)
            {
              flag = true
              break
            }
          }
          if(flag)
            break
        }

        if (!flag) {
          this.$bvModal.msgBoxConfirm(this.$t('schedule.empty_alert'), {
            title: 'Confirm',
            size: 'md',
            buttonSize: 'sm',
            okVariant: 'danger',
            okTitle: 'YES',
            cancelTitle: 'NO',
            footerClass: 'p-2 border-top-0',
            hideHeaderClose: false,
            headerClass: 'p-2 border-bottom-0',
            centered: true
          })
            .then(value => {
              if (value === true) {
                this.$router.push(this.nextPush)
              }
            })
            .catch(err => {
            })
        }
        else {
          this.$router.push(this.nextPush)
        }
      }
      ,

      changer(it, id) {
        if (id === this.clock.length - 1)
          return
        if (this.timing[it][id + 1])
          return
        if (id < 0)
          return

        this.$set(this.timing[it], id, !this.timing[it][id]);
        this.saveToTiming(it, id, !this.timing[it][id])
      },

      saveToTiming(day, start, checked) {
        let formData = {
          checked: checked,
          day: day,
          start: start
        }
        this.$axios.post('/timing/save-tutor-timing', formData).then((res) => {

        }).catch(error => {

        })
      },


      makeToast(variant = 'success', header = 'Message', msg = '') {
        this.$bvToast.toast(this.$t(msg), {
          title: header,
          variant: variant,
          solid: true
        })
      },

      onReset(evt) {
        evt.preventDefault()
        // Reset our registerForm values


      },
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
