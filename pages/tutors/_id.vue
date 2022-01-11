<template>
  <b-container class="h-100 mx-0 px-0" fluid>
    <div class="d-flex min-vh-100">
      <client-only>
        <b-button class="btn btn-crl  btn-primary  " v-if="windowWidth !== 'xl' && windowWidth !== 'lg'"
                  style="position:fixed; right: 0px; margin-top: 20px; margin-right: 25px; z-index: 999"
                  v-b-toggle.sidebar-1>
          <font-awesome-icon style="font-size: small; margin-bottom: 1px; color: #fff;"
                             :icon="['fas', 'filter']"/>
        </b-button>
        <b-nav v-if="windowWidth === 'xl' || windowWidth === 'lg'" vertical style="width: 280px;"
               class="px-3 py-4 shadow">
          <h5 style="color:#bbb;" class="pb-3 my-0">Filter</h5>

          <div class="pb-1">{{ $t('tutorName') }}</div>
          <b-form-input
            @keyup="changeTutorName()"
            v-model.trim="tutorName"></b-form-input>


          <hr class="w-100"/>
          <div class="pb-1">{{ $t('tutors.universities') }}</div>

          <v-select @input="loadSubjects"
                    :placeholder="$t('tutors.universities.placeholder')"
                    v-model="uniHost"
                    class="m-v-select2"
                    :reduce="x => x.host"
                    :options="universities_options"
                    label="text">
          </v-select>


          <div class="pb-1 mt-2">{{ $t('subject') }}</div>

          <v-select @input="changeSubject()" placeholder="Select one subject" v-model="subject" class="m-v-select2"
                    :reduce="subject => subject.id"
                    :loading="lessonLoading"
                    :options="options" label="subject" :selectable="option => !option.hasOwnProperty('group')">
            <template #option="{ group, subject }">
              <div v-if="group" class="group">
                {{ group }}
              </div>
              {{ subject }}
            </template>
          </v-select>
          <hr class="w-100"/>
          <div class="pb-1">{{ $t('tutors.trainingMethods.label') }}</div>
          <v-select id="input-trainingMethods"
                    placeholder="Select one method"
                    v-model="trainingMethod"
                    label="text"
                    class="m-v-select2"
                    :reduce = "trainingMethod => trainingMethod.value"
                    :options="options_methods">
          </v-select>
          <hr class="w-100"/>
          <div class="pb-1">{{ $t('price.label') }}(CAD)</div>
          <div class="py-4 pl-1 pr-2" >
            <vue-slider v-model="rangePrice" class="w-100" tooltip="always"
                        :tooltip-placement="['bottom','top' ]"
                        :min="MinPrice"
                        :tooltip-formatter="formatter2"
                        :process-style="{ backgroundColor: 'var(--color1)' }"
                        :tooltip-style="{ backgroundColor: 'var(--color1)', borderColor: 'var(--color1)'}"
                        :max="MaxPrice"></vue-slider>
          </div>
          <hr class="w-100"/>
          <div class="pb-1">{{ $t('rate.label') }}</div>
          <div class="py-4 pl-1 pr-2" >
            <vue-slider v-model="rangeRate" class="w-100" :tooltip="'always'"
                        :tooltip-placement="['top','top' ]"
                        :min="0"
                        :marks="marks"
                        :process-style="{ backgroundColor: '#ffc107' }"
                        :tooltip-style="{ backgroundColor: '#ffc107', borderColor: '#ffc107'}"
                        :max="5"></vue-slider>
          </div>
          <hr class="w-100"/>
         <div class="pb-1">{{ $t('availability') }}</div>
          <div style="min-width: 255px">
            <b-row class="m-0 w-100 text-center border-left border-bottom border-top border-right p-0 "
                   style="height:25px;">
              <b-col class="p-0" style="min-width: 62px!important;">
                <font-awesome-icon style="font-size: small; margin-bottom: 1px; color: #bbb;"
                                   :icon="['far', 'clock']"/>
              </b-col>
              <b-col class="border-left p-0" v-for="(v,i) in week" :key="i">
                <div style="margin-top: 5px; font-size: xx-small"> {{ v }}</div>
              </b-col>
            </b-row>
            <b-row class="m-0 w-100 border-bottom  border-left border-right" v-for="(v, c) in clock" :key="c">
              <b-col class="text-center px-0" style="min-width: 62px!important; padding-top:7px ; min-height: 25px">
                <div style="font-size: xx-small" class="align-content-center align-middle "
                >
                  <div v-if="c === 0">
                    00:00 - 06:00
                  </div>
                  <div v-if="c === 1">
                    00:06 - 12:00
                  </div>
                  <div v-if="c === 2">
                    12:00 - 18:00
                  </div>
                  <div v-if="c === 3">
                    18:00 - 00:00
                  </div>
                </div>
              </b-col>
              <b-col class="border-left p-0" v-for="(t,w) in week" :key="w">
                <div style="min-height: 25px;" :class="timing[w][c] ?'m-selected':''" class="m-pointer"
                     @click="filterAvalibility(w,c)">

                </div>
              </b-col>
            </b-row>
          </div>
          <div class="d-flex">
            <b-button class="btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2"
                      @click="changeUrl(true)">Filter
            </b-button>
            <b-button class="btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2"
                      @click="clearFillter()">Clear
            </b-button>
          </div>


        </b-nav>
        <b-sidebar id="sidebar-1" backdrop no-header :no-close-on-route-change="true" bg-variant="white" shadow v-else>
          <b-button variant="link" class="btn" v-show="windowWidth !== 'xl' && windowWidth !== 'lg'"
                    style=" color:var(--color1);
                  border-bottom-right-radius: 25px!important;border-top-right-radius: 25px!important;
                position:relative;  float: right; z-index: 999" v-b-toggle.sidebar-1>
            <font-awesome-icon style="font-size: small; margin-bottom: 1px;"
                               :icon="['fas', 'times']"/>
          </b-button>
          <h5 style="color:#bbb;" class="p-3 my-0">Filter</h5>
          <div class="px-3 pt-0 pb-3">
            <div class="pb-1">{{ $t('tutorName') }}</div>
            <b-form-input
              @keyup="changeTutorName()"
              v-model.trim="tutorName"></b-form-input>
            <hr class="w-100"/>
            <div class="pb-1">{{ $t('subject') }}</div>

            <v-select @input="changeSubject()" placeholder="Select one subject" v-model="subject" class="m-v-select2"
                      :reduce="subject => subject.id"
                      :options="options" label="subject" :selectable="option => !option.hasOwnProperty('group')">
              <template #option="{ group, subject }">
                <div v-if="group" class="group">
                  {{ group }}
                </div>
                {{ subject }}
              </template>
            </v-select>
            <hr class="w-100"/>
            <div class="pb-1">{{ $t('tutors.trainingMethods.label') }}</div>
            <v-select id="input-trainingMethods"
                      placeholder="Select one method"
                      v-model="trainingMethod"
                      label="text"
                      class="m-v-select2"
                      :reduce = "trainingMethod => trainingMethod.value"
                      :options="options_methods">
            </v-select>
            <hr class="w-100"/>
            <div class="pb-1">{{ $t('price.label') }}(CAD)</div>
            <div class="py-4 pl-1 pr-3" >
                <vue-slider v-model="rangePrice" class="w-100" tooltip="always"
                            :tooltip-placement="['bottom','top' ]"
                            :min="MinPrice"
                            :tooltip-formatter="formatter2"
                            :process-style="{ backgroundColor: 'var(--color1)' }"
                            :tooltip-style="{ backgroundColor: 'var(--color1)', borderColor: 'var(--color1)'}"
                            :max="MaxPrice"></vue-slider>
              </div>
            <hr class="w-100"/>
            <div class="pb-1">{{ $t('rate.label') }}</div>
            <div class="py-4 pl-1 pr-3" >
              <vue-slider v-model="rangeRate" class="w-100" :tooltip="'always'"
                          :tooltip-placement="['top','top' ]"
                          :min="0"
                          :marks="marks"
                          :process-style="{ backgroundColor: '#ffc107' }"
                          :tooltip-style="{ backgroundColor: '#ffc107', borderColor: '#ffc107'}"
                          :max="5"></vue-slider>

            </div>
            <hr class="w-100"/>
            <div class="pb-1">{{ $t('availability') }}</div>
            <div style="min-width: 255px">
              <b-row class="m-0 w-100 text-center border-left border-bottom border-top border-right p-0 "
                     style="height:25px;">
                <b-col class="p-0" style="min-width: 62px!important;">
                  <font-awesome-icon style="font-size: small; margin-bottom: 1px; color: #cccfd2;"
                                     :icon="['far', 'clock']"/>
                </b-col>
                <b-col class="border-left p-0" v-for="(v,i) in week" :key="i">
                  <div style="margin-top: 5px; font-size: xx-small"> {{ v }}</div>
                </b-col>
              </b-row>
              <b-row class="m-0 w-100 border-bottom  border-left border-right" v-for="(v, c) in clock" :key="c">
                <b-col class="text-center px-0" style="min-width: 62px!important; padding-top:7px ; min-height: 25px">
                  <div style="font-size: xx-small" class="align-content-center align-middle "
                  >
                    <div v-if="c == 0">
                      00:00 - 06:00
                    </div>
                    <div v-if="c == 1">
                      00:06 - 12:00
                    </div>
                    <div v-if="c == 2">
                      12:00 - 18:00
                    </div>
                    <div v-if="c == 3">
                      18:00 - 00:00
                    </div>
                  </div>
                </b-col>
                <b-col class="border-left p-0" v-for="(t,w) in week" :key="w">
                  <div style="min-height: 25px;" :class="timing[w][c] ?'m-selected':''" class="m-pointer"
                       @click="filterAvalibility(w,c)">

                  </div>
                </b-col>
              </b-row>
            </div>
            <b-button @click="changeUrl(true)" class="btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2"
                      v-b-toggle.sidebar-1>Filter
            </b-button>
            <b-button class="btn btn-crl  btn-primary submit px-3 mt-4 btn-reg mr-2"
                      @click="clearFillter()">Clear
            </b-button>
          </div>
        </b-sidebar>
      </client-only>
      <div style="width:100%;">
        <div class="w-100">
          <div v-if="data.length > 0" class="px-5 pt-4 w-100">
            {{ $t('findTutors') }}
          </div>
          <div v-else class="px-5 pt-4 w-100  text-center" style="color: gray; font-size: medium">
            {{ $t('findTutors-notFound') }}
          </div>
        </div>

        <div class="shadow m-4 p-4 d-xl-flex d-lg-flex d-md-flex" id="my-list" v-for="(item,index) in data"
             v-bind:key="index">
          <b-avatar
            :to="'/tutor/'+item.id"
            size="7rem"
            :src="item.File != null ? '/'+item.File.path : ''"
            alt="Cropped Image"
          />
          <div class="pt-3 px-lg-4 px-xl-4 px-md-4 w-100">
            <div>
              <h3>
                <b-link :to="'/tutor/'+item.id"> {{ item.name }} {{ item.lastName }}</b-link>
              </h3>
            </div>
            <b-form-rating class="px-0 ml-n1" style="outline:none; box-shadow: none;" id="rating-sm-no-border"
                           variant="warning" v-model="item.AvgRate" readonly no-border inline
                           size="lg"></b-form-rating>

            <div class="pt-2 font-weight-bold">
              {{ item.headline }}
            </div>
            <div class="pt-2">

              <span style="color: var(--color2);">Subject: </span>
              <span v-for="(subject,index) in subjectPars(item.Subjects)">
              <span v-if="index != 0">,</span>
              <span style=" white-space: nowrap;">
                  <font-awesome-icon v-if="subject.accepted == 1" style="color: #03ef1c ;"
                                     :icon="['fas', 'check-circle']"/>
                {{ subject.name }}
                <span style="color: #dc3545; text-decoration: underline;">
                   {{ subject.price > 0 ? subject.price + ' CAD' : $t('price-0') }}
                </span>
                <span class="ml-1" v-if="subject.rate !== '' && subject.rate > 0" style="width: unset!important;">
                  <span class="outline-badge" variant="warning" style="display: inline-flex!important;">
                    <font-awesome-icon style=" color: #ffc107 ;"
                                       :icon="['fas', 'star']"/>

                    <span
                      style="color: #ffc107; padding-left: 3px!important;">{{
                        subject.rate
                      }}
                    </span>
                  </span>

                </span>

              </span>
              </span>
              <!--              <span-->
              <!--              v-for="(subject,index) in item.UserLessons">{{index == 0?'' :','}} {{ subject.Lesson.subject }}</span>-->
            </div>
            <div class="pt-2 mt-1" v-if="item.training_method !== undefined && item.training_method !== null">
              <span style="color: var(--color2);">{{ $t('tutors.trainingMethods.label') }}: </span>
              {{ trainingType(item.training_method) }}
            </div>
            <div class="pt-2 three-dot mt-3">
              {{ item.bioMore }}
            </div>

          </div>
          <div style="min-width: 255px" class="mt-3">
            <b-row class="w-100 mx-0 ">

              <b-button class="btn btn-outline-primary w-100" @click="showMessageDialog(item.id)">
                {{ $t("sendMessage") }}
                <font-awesome-icon style=" margin-top: 5px;margin-right: 5px;" :icon="['fas', 'paper-plane']"/>
              </b-button>

            </b-row>
            <b-row class="mt-2 w-100 mx-0 text-center border-left border-bottom border-top border-right p-0 "
                   style="height:25px;">
              <b-col class="p-0" style="min-width: 62px!important;">
                <font-awesome-icon style="font-size: small; margin-bottom: 1px; color: #cccfd2;"
                                   :icon="['far', 'clock']"/>
              </b-col>
              <b-col class="border-left p-0" v-for="(v,i) in week" :key="i">
                <div style="margin-top: 5px; font-size: xx-small"> {{ v }}</div>
              </b-col>
            </b-row>
            <b-row class="w-100 mx-0 border-bottom  border-left border-right" v-for="(v, i) in clock" :key="i">
              <b-col class="text-center px-0" style="min-width: 62px!important; padding-top:7px; min-height: 25px">
                <div style="font-size: xx-small" class="align-content-center align-middle"
                >
                  <div v-if="i == 0">
                    00:00 - 06:00
                  </div>
                  <div v-if="i == 1">
                    00:06 - 12:00
                  </div>
                  <div v-if="i == 2">
                    12:00 - 18:00
                  </div>
                  <div v-if="i == 3">
                    18:00 - 00:00
                  </div>
                </div>
              </b-col>
              <b-col class="border-left p-0" v-for="(t,j) in week" :key="j">
                <div style="min-height: 25px;" :class="checkTiming(item.Timings,i , j) ?'m-selected2':''">

                </div>
              </b-col>
            </b-row>
            <b-row class="w-100 mx-0 mt-2">
              <b-button class="btn btn-primary w-100" @click="booklesson(item.id)">
                {{ $t("bookLesson") }}
              </b-button>

            </b-row>
          </div>
        </div>
        <div class="w-100">
          <b-pagination
            @input="goPage"
            dir="ltr"
            class="pt-4"
            align="center"
            v-show="perPage < totalRows"
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            aria-controls="my-list"
          ></b-pagination>

        </div>
      </div>
    </div>

    <b-modal centered ref="sm_modal" size="md" hide-footer title="Send Message">
      <b-overlay :show="showOverlay" rounded="sm" variant="white" opacity="0.5">
        <b-row class="mt-1">
          <b-textarea class="ml-3 mr-3"
                      id="textarea-rows"
                      v-model="textMessage"
                      :placeholder="this.$t('please_type_message')"
                      rows="4"
                      :lazy="true"
          ></b-textarea>
        </b-row>
        <b-row class="mt-3">
          <b-col>
            <b-button class="float-right w-50" variant="primary" @click="this.sendMessage">{{ $t("Send") }}
            </b-button>

          </b-col>
          <b-col>
            <b-button class="float-left w-50" variant="primary" @click="this.cancelSendMessage">
              {{ $t("cancel") }}
            </b-button>

          </b-col>
        </b-row>
      </b-overlay>
    </b-modal>

    <b-modal centered scrollable ref="booklesson_modal" size="xl" hide-footer title="Book Lesson">

      <BooklessonModal v-model="tutorId"/>

    </b-modal>


  </b-container>

</template>
<script>

import {library} from '@fortawesome/fontawesome-svg-core'

import {faClock} from '@fortawesome/free-regular-svg-icons'
import {faFilter, faStar, faTimes, faCheckCircle,} from '@fortawesome/free-solid-svg-icons'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import BooklessonModal from '~/components/booklesson.vue'

library.add(faClock)
library.add(faFilter)
library.add(faStar)
library.add(faTimes)
library.add(faCheckCircle)
library.add(faPaperPlane)


export default {
  name: "Tutors",
  components: {BooklessonModal},
  data() {
    return {
      uniHost: "",
      subName : "",
      subdomain: true,
      host: "",
      lessonLoading: false,
      universities_options: [],
      formatter2: v => `${('' + v).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
      cc: 23,
      options_methods: [{value: 1 , text: "Online"} , {value: 2 , text: "In-Person"} ,{value: 3 , text: "Both"}  ] ,
      showm: false,
      showOverlay: false,
      windowWidth: process.browser ? window.getComputedStyle(document.documentElement).getPropertyValue('--screen-mode') : 'sm',
      week: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
      timing: [],
      clock: [],
      perPage: 10,
      currentPage: this.$route.params.id === undefined ? 1 : this.$route.params.id,
      data: [],
      totalRows: 0,
      subject: null,
      trainingMethod: null,
      rangeRate: [0, 5],
      rangePrice: [0, 0],
      MaxPrice: 25 ,
      MinPrice: -1 ,
      marks: {   '0': {
          label: <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star b-icon bi text-warning"><g><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path></g></svg> ,
        },
        '1': {          label: <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star b-icon bi text-warning"><g><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path></g></svg> ,
        },
        '2': {          label: <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star b-icon bi text-warning"><g><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path></g></svg> ,
        },
        '3': {          label: <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star b-icon bi text-warning"><g><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path></g></svg> ,
        },
        '4':{          label: <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star b-icon bi text-warning"><g><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path></g></svg> ,
        },
        '5': {          label: <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star b-icon bi text-warning"><g><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path></g></svg> ,
        }} ,

      tutorName: '',
      options: [],
      errors: null,
      tutorId: 0,
      textMessage: null
    }
  },
  async asyncData({$axios, params, query}) {
    const sendData = {
      currentPage: params.id === undefined ? 1 : params.id,
      perPage: process.env.PerPage,
      sortDesc: true,
      sortBy: 'id',
      subject: query.subject,
      tutorName: query.tutor,
      days: query.days,
      rangeRate: query.rate,
      rangePrice:  query.price,
      trainingMethod: query.method
    }
    const res = await $axios.$post('user/tutors', sendData).catch(error => {
      console.log(error.response)
    })

    return {data: res.rows, totalRows: res.totalRows}
  },
  created() {


  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
    this.loadUniversity();
    this.fillMenuCalender()
    //this.loadSubjects()
    this.initMaxPrice();
    this.fillFilterItems();

    this.Init()
  },
  methods:
    {
      Init(){
        this.host = window.location.hostname
        this.host = this.host.replace('www.' , '')
        if(this.host.search('.') === -1)
        {
          this.subdomain = false
        }
        else {
          let subs = this.host.split('.')
          this.subName = subs[0]
          this.subdomain = true
        }

        if(!this.subdomain)
          this.loadUniversity()
        else
        {
          this.uniHost = this.host
          this.loadSubjects(this.host)
        }
      },

      loadUniversity() {
        this.$axios.post('/definitions/universityList' , ).then((res) => {
          var rows = res.data
          this.universities_options = []
          for (let i = 0; i < rows.length ; i++) {
            var row = rows[i]
            this.universities_options.push({host: row.host , text: row.name })
          }
          this.loadSubjects()
        }).catch(error => {
          console.log(error)
        })
    },

      fillFilterItems(){

      if (this.$route.query.days) {
        let days = this.$route.query.days
        if (days.constructor === Array) {
          days.forEach(item => {
            const myArr = item.split("-");
            if (myArr.length === 2)
              this.$set(this.timing[myArr[0]], myArr[1], true);
          })
        } else {
          const myArr = days.split("-");
          if (myArr.length === 2)
            this.$set(this.timing[myArr[0]], myArr[1], true);
        }
      }

      if (this.$route.query.tutor)
        this.tutorName = this.$route.query.tutor

      if (this.$route.query.subject)
        this.subject = this.$route.query.subject < 0 ? null : Number(this.$route.query.subject)

      if (this.$route.query.method)
        this.trainingMethod = this.$route.query.method < 0 ? null :Number(this.$route.query.method)

      if (this.$route.query.price)
      {
        let prices = this.$route.query.price
        if (prices.constructor === Array) {
          prices.forEach((item,index) => {
             this.$set(this.rangePrice,index,item);
          })
        }
      }

      if (this.$route.query.rate)
      {
        let rates = this.$route.query.rate
        if (rates.constructor === Array) {
          rates.forEach((item,index) => {
            this.$set(this.rangeRate,index,item);
          })
        }
      }

    },
      booklesson(id) {
      this.tutorId = id
      if (!this.$auth.loggedIn) {
        this.$router.push('/login')
        return
      }
      this.$refs['booklesson_modal'].show()
    },
      cancelSendMessage() {
      this.hideMessageDialog()
    },

    showMessageDialog(id) {
      this.tutorId = id
      if (!this.$auth.loggedIn) {
        this.$router.push('/login')
      } else {
        this.$refs['sm_modal'].show()
      }
    },

    hideMessageDialog() {
      this.$refs['sm_modal'].hide()
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
    sendMessage() {
      const formMsgData = {
        receiverId: this.tutorId,
        text: this.textMessage,
        type: 0, // simple message
        entityId: 0
      }
      this.showOverlay = true;
      this.$axios.post('/request/create', formMsgData)
        .then((res) => {
          if (res.data.ok === true) {
            this.textMessage = ""
            this.makeToast("success", "Message", "sendMessage_success")
          } else {
            this.makeToast("danger", "Message", "sendMessage_error")
          }
          this.hideMessageDialog()
          this.showOverlay = true;
        }).catch(error => {
        this.makeToast("danger", "Message", "sendMessage_error")
        this.showOverlay = false;
        console.log(error)
      }).finally(() => {
        this.showOverlay = false;
      })
    },
    trainingType(item) {
      switch (item) {
        case 1:
          return 'Online';
        case 2:
          return 'In-Person'
        case 3:
          return 'Online / In-Person'
        default:
          return ''
      }


    },
    subjectPars(subjects) {
      const retArr = [];
      if (subjects !== null && subjects !== undefined) {
        const myArr = subjects.split(',')
        myArr.forEach((item, index) => {
          const tarr = item.split('-')
          const obj = {}
          obj.name = tarr[0]
          obj.rate = tarr[1]
          obj.accepted = tarr[2]
          obj.price = tarr[3]
          retArr.push(obj)
        })
      }
      return retArr
    },
      loadSubjects(subname) {
        this.lessonLoading = true;
        let data = {} ;
        // if(this.uniHost!=null && this.uniHost > 0)
        //   data["uniId"] = this.uniId
        if(this.subdomain)
          data["host"] = this.uniHost
        this.$axios.post('/definitions/getAllLessons' , data).then((res) => {
          this.options = res.data;
          this.lessonLoading = false;
        }).catch(error => {
          console.log(error)
        })
      },
    fillMenuCalender() {
      for (let i = 0; i < 4; i++)
        this.clock.push(i)
      this.week.forEach((w, wIndex) => {
        const sArr = [];
        this.clock.forEach(function (c, cIndex) {
          sArr[c] = false
        });
        this.timing.push(sArr)
      });

    },
    changeTutorName() {
      // this.changeUrl(true)
    },
    changeSubject() {
      // this.changeUrl(true)
    },
    filterAvalibility(w, c) {
      this.$set(this.timing[w], c, !this.timing[w][c]);
      // this.changeUrl(true)
    },
    checkTiming(timings, i, j) {
      var retval = false;
      if (timings) {
        var arr = timings.split(',')
        arr.forEach((item) => {
          let kk = item.split('-')
          if (kk[0] == j) {
            if (kk[1] >= i * 12 && kk[1] < (i + 1) * 12) {
              retval = true
            }
          }
        })
      }


      return retval
    },
    initMaxPrice()
    {
      try {
        this.$axios.post('/subject/max-price', null).then((res) => {

          this.MinPrice = res.data.result.min
          this.MaxPrice = res.data.result.max
          this.$set(this.rangePrice, 0 , this.MinPrice);
          this.$set(this.rangePrice, 1 , this.MaxPrice);

        }).catch(error => {
          if (error.response.data.errors) {
            this.errors = error.response.data.errors
          }
          console.log(error)
        })
      }catch (e) {

      }
    },
    getTutors() {
      const sendData = {
        tutorName: this.tutorName,
        subject: this.subject ? this.subject : -1,
        currentPage: this.currentPage,
        perPage: this.perPage,
        sortDesc: true,
        sortBy: 'id',
        days: this.$route.query.days,
        rangeRate: this.$route.query.rate,
        rangePrice: this.$route.query.price,
        trainingMethod: this.$route.query.method
      }
      this.$axios.post('user/tutors', sendData).then((res) => {
        console.log(res.data)

        this.totalRows = res.data.totalRows
        this.data = res.data.rows
      }).catch(error => {
        if (error.response.data.errors) {
          this.errors = error.response.data.errors
        }
        console.log(error)
      })

    },
    getSelectedTimes() {
      var arr = []
      this.timing.forEach((item, index) => {
        item.forEach((v, idx) => {
          if (v)
            arr.push(index + '-' + idx)
        })
      })
      return arr
    },
    clearFillter() {
      this.tutorName = null
      this.subject = null
      this.timing.forEach((item, index) => {
        item.forEach((v, idx) => {
          this.$set(this.timing[index], idx, false)
        })
      })
      this.rangeRate = [0, 5]
      this.rangePrice = [0, 0]
      this.trainingMethod = null
      this.initMaxPrice()
    },
    changeUrl(callback) {
      let arr = this.getSelectedTimes()
      let subjectId = this.subject ? this.subject : -1
      this.$router.replace({
        path: `/tutors/${this.currentPage}`,
        query: {tutor: this.tutorName, subject: subjectId, days: arr,method:this.trainingMethod,price:this.rangePrice,rate:this.rangeRate}
      }).then(() => {
        if (callback)
          this.getTutors()
      }).catch((err) => {
        if (callback)
          this.getTutors()
      });

      // history.pushState({path : url },'',url)

    },
    goPage() {
      this.changeUrl(false)
    },
    onResize() {
      if (process.browser)
        this.windowWidth = window.getComputedStyle(document.documentElement).getPropertyValue('--screen-mode')
    }
    // windowWidth() {
    //   if (process.browser) {
    //     let x = window.getComputedStyle(document.documentElement).getPropertyValue('--screen-mode')
    //     return (x);
    //   }
    // }
  },
  watch: {
    windowWidth(newHeight) {
      console.log(`it changed to ${newHeight} `)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
}
</script>
<style>

.m-v-select2 {
  margin-right: 5px;
}

.m-v-select2 .vs__clear {
  margin-top: -2px;
  margin-right: 7px;
  fill: var(--color1);
}

.m-selected2 {
  padding-top: 16px;
  z-index: 99;
  height: 27px;
  width: calc(100% + 2px);
  position: absolute;
  background-color: rgba(var(--gradian-color4));
  color: white;
  margin: -1px;
  font-size: small;
  text-align: center;
  box-shadow: inset 0 0 15px rgba(var(--gradian-color1));
}

.m-selected {
  padding-top: 16px;
  z-index: 99;
  height: 27px;
  width: calc(100% + 2px);
  position: absolute;
  background-color: rgba(var(--gradian-color4));
  color: white;
  margin: -1px;
  font-size: small;
  text-align: center;
  box-shadow: inset 0 0 15px rgba(var(--gradian-color1));
}


.nav-item a:hover, .nav-item .active {
  color: var(--color1);
}

.sub .nav-item {
  padding-left: 30px !important;

}

.m-menu-icon {
  font-size: larger;
  width: 30px !important;
  margin-right: 10px;
}

.m-menu-icon-sub {
  font-size: medium;
  width: 30px !important;

}

.btn-crl {
  padding: 12px 17px;
}
</style>
