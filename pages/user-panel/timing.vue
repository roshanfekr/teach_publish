<template>
  <div>
    <b-container class="container-padding" >
      <b-row class="d-md-flex m-center">
        <div class="login-wrap mb-4 px-xl-5 px-lg-5 px-md-3 px-sm-2 px-2 col-md-12 col-lg-12 col-xl-12">
        <b-row class="w-100 mx-0 mb-2">
          <h3 class="mb-2">{{ $t('availability') }}</h3>
        </b-row>
        <b-row class="w-100 pt-4 mx-0 font-weight-bold justify-content-center pb-3">
          {{ $t('tutorTimingSubject1') }}
        </b-row>
        <b-row class="w-100 mx-0 justify-content-center pb-4">
          {{ $t('tutorTimingSubject2') }}
        </b-row>
        <div class="w-100" style="overflow-x: auto; overflow-y: hidden">
          <div class="w-100 " style="min-width: 750px">
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

        </div>
        </div>
      </b-row>

    </b-container>
  </div>

</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core'

  import {faClock} from '@fortawesome/free-regular-svg-icons'

  import {required, requiredIf} from "vuelidate/lib/validators";

  // import {required, numeric, minLength, maxLength} from "vuelidate/lib/validators";


  library.add(faClock)


  export default {
    name: "tutor-timing",
    data() {
      return {
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
      loadTiming() {
        this.$axios.post('/timing/getTiming').then((res) => {
          res.data.forEach((item) => {
            this.$set(this.timing[item.dayOfWeek], item.timeStart, true);
          })
        }).catch(error => {
          console.log(error.response)
        })
      },
      changer(it, id) {

        if (id == this.clock.length - 1)
          // if(this.timing[it][id-2]){
          //   return
          // }
          // else{
          return
        // id = id - 1
        // }

        if (this.timing[it][id + 1])
          // if(this.timing[it][id-2]){
          //   return
          // }else{
          return
        // id = id - 1
        // }
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
          console.log(res)
        }).catch(error => {

          console.log(error.response)
        })
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
