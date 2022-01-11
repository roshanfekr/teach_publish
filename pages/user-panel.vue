<template>
  <b-container class="h-100 mx-0 px-0" fluid>
    <div class="d-flex min-vh-100">
      <client-only>
        <b-button squared class="btn  btn-primary" v-show="windowWidth!== 'xl' && windowWidth !== 'lg'"
                  style="border-bottom-right-radius: 25px!important;border-top-right-radius: 25px!important;
                position:fixed; left: -5px; margin-top: 25px; z-index: 999" v-b-toggle.sidebar-1>
          <font-awesome-icon style="font-size: small; margin-bottom: 1px; color: #fff;"
                             :icon="['fas', 'chevron-right']"/>
        </b-button>
        <b-nav v-show="windowWidth=== 'xl' || windowWidth === 'lg'" vertical style="width: 400px;"
               class="px-3 py-4 shadow">

          <b-nav-item to="/user-panel/taken-lessons" v-if="hasPermission('student') || hasPermission('tutor')"
                      :active="this.$route.path === '/user-panel/taken-lessons' || this.$route.path === '/user-panel/taken-lessons'">
            <font-awesome-icon class="m-menu-icon" :icon="['far', 'address-book']"/>
            {{ $t('myLessons.taken') }}
          </b-nav-item>
          <b-nav-item to="/user-panel/requests" :active="this.$route.path === '/user-panel/requests'">
            <font-awesome-icon class="m-menu-icon" :icon="['far', 'comment']"/>
            {{ $t('requests') }}
          </b-nav-item>
          <b-nav-item class="accordion" v-if="hasPermission('tutor')" v-b-toggle.accordion-1>
            <font-awesome-icon class="m-menu-icon" :icon="['fas', 'chalkboard-teacher']"/>
            {{ $t('tutor_account_profile') }}
          </b-nav-item>
          <b-collapse id="accordion-1"
                      visible
                      accordion="my-accordion">
            <b-nav vertical class="sub">

              <b-nav-item to="/user-panel/my-lessons" v-if="hasPermission('tutor')"
                          :active="this.$route.path === '/user-panel/my-lessons' || this.$route.path === '/user-panel/my-lessons'">
                <font-awesome-icon class="m-menu-icon-sub" :icon="['far', 'calendar-alt']"/>
                {{ $t('myLessons') }}
              </b-nav-item>

              <b-nav-item to="/user-panel/subject" v-if="hasPermission('tutor')"
                          :active="this.$route.path === '/user-panel/subject'">
                <font-awesome-icon class="m-menu-icon-sub" :icon="['fas', 'book-open']"/>
                {{ $t('Course.label') }}
              </b-nav-item>
              <b-nav-item to="/user-panel/tutor-transcript" v-if="hasPermission('tutor')"
                          :active="this.$route.path === '/user-panel/tutor-transcript'">
                <font-awesome-icon class="m-menu-icon-sub" :icon="['fas', 'scroll']"/>
                {{ $t('transcript.title') }}
              </b-nav-item>

              <b-nav-item to="/user-panel/educs" v-if="hasPermission('tutor')"
                          :active="this.$route.path === '/user-panel/educs'">
                <font-awesome-icon class="m-menu-icon-sub" :icon="['fas', 'graduation-cap']"/>
                {{ $t('education') }}
              </b-nav-item>
              {{ $t() }}

              <b-nav-item to="/user-panel/timing" v-if="hasPermission('tutor')"
                          :active="this.$route.path === '/user-panel/timing'">
                <font-awesome-icon class="m-menu-icon-sub" :icon="['fas', 'clock']"/>
                {{ $t('Timing') }}
              </b-nav-item>

            </b-nav>
          </b-collapse>

          <b-nav-item to="/user-panel/system-msg" :active="this.$route.path === '/user-panel/system-msg'">
            <!--          <font-awesome-icon class="m-menu-icon" :icon="['far', 'envelope']"/>-->
            <font-awesome-icon class="m-menu-icon" style="font-size: 22px; margin-top: 2px;" :icon="['far', 'bell']"/>

            {{ $t('tutor_account_system_msg') }}
          </b-nav-item>

          <b-nav-item v-if="hasPermission('tutor')" to="/user-panel/profile"
                      :active="this.$route.path === '/user-panel/profile'">
            <font-awesome-icon class="m-menu-icon" :icon="['fas', 'user']"/>
            {{ $t('profile') }}
          </b-nav-item>
          <b-nav-item v-else to="/user-panel/st-profile" :active="this.$route.path === '/user-panel/st-profile'">
            <font-awesome-icon class="m-menu-icon" :icon="['fas', 'user']"/>
            {{ $t('profile') }}
          </b-nav-item>
          <b-nav-item to="/user-panel/account" :active="this.$route.path === '/user-panel/account'">
            <font-awesome-icon class="m-menu-icon" :icon="['fas', 'lock']"/>
            {{ $t('account') }}
          </b-nav-item>
        </b-nav>

        <b-sidebar id="sidebar-1" backdrop no-header :no-close-on-route-change="true" bg-variant="white" shadow
                   v-show="windowWidth !== 'xl' && windowWidth !== 'lg'">
          <b-button variant="link" class="btn" v-show="windowWidth !== 'xl' && windowWidth !== 'lg'" style=" color:var(--color1);
                  border-bottom-right-radius: 25px!important;border-top-right-radius: 25px!important;
                position:absolute; right: 0px; z-index: 999" v-b-toggle.sidebar-1>
            <font-awesome-icon style="font-size: small; margin-bottom: 1px; "
                               :icon="['fas', 'chevron-left']"/>
          </b-button>
          <b-nav vertical class="pt-4">

            <b-nav-item to="/user-panel/taken-lessons" v-if="hasPermission('student') || hasPermission('tutor')"
                        :active="this.$route.path === '/user-panel/taken-lessons' || this.$route.path === '/user-panel/taken-lessons'">
              <font-awesome-icon class="m-menu-icon" :icon="['far', 'address-book']"/>
              {{ $t('myLessons.taken') }}
            </b-nav-item>
            <b-nav-item to="/user-panel/requests" :active="this.$route.path === '/user-panel/requests'">
              <font-awesome-icon class="m-menu-icon" :icon="['far', 'comment']"/>
              {{ $t('requests') }}
            </b-nav-item>

            <b-nav-item class="accordion" v-if="hasPermission('tutor')" v-b-toggle.accordion-1>
              <font-awesome-icon class="m-menu-icon" :icon="['fas', 'chalkboard-teacher']"/>
              {{ $t('tutor_account_profile') }}
            </b-nav-item>
            <b-collapse id="accordion-1"
                        visible
                        accordion="my-accordion">
              <b-nav vertical class="sub">
                <b-nav-item to="/user-panel/my-lessons" v-if="hasPermission('tutor')"
                            :active="this.$route.path === '/user-panel/my-lessons' || this.$route.path === '/user-panel/my-lessons'">
                  <font-awesome-icon class="m-menu-icon-sub" :icon="['far', 'calendar-alt']"/>
                  {{ $t('myLessons') }}
                </b-nav-item>
                <b-nav-item to="/user-panel/subject" v-if="hasPermission('tutor')"
                            :active="this.$route.path === '/user-panel/subject'">
                  <font-awesome-icon class="m-menu-icon-sub" :icon="['fas', 'book-open']"/>
                  {{ $t('Course.label') }}
                </b-nav-item>
                <b-nav-item to="/user-panel/tutor-transcript" v-if="hasPermission('tutor')"
                            :active="this.$route.path === '/user-panel/tutor-transcript'">
                  <font-awesome-icon class="m-menu-icon-sub" :icon="['fas', 'scroll']"/>
                  {{ $t('transcript.title') }}
                </b-nav-item>

                <b-nav-item to="/user-panel/educs" v-if="hasPermission('tutor')"
                            :active="this.$route.path === '/user-panel/educs'">
                  <font-awesome-icon class="m-menu-icon-sub" :icon="['fas', 'graduation-cap']"/>
                  {{ $t('education') }}
                </b-nav-item>
                {{ $t() }}

                <b-nav-item to="/user-panel/timing" v-if="hasPermission('tutor')"
                            :active="this.$route.path === '/user-panel/timing'">
                  <font-awesome-icon class="m-menu-icon-sub" :icon="['fas', 'clock']"/>
                  {{ $t('Timing') }}
                </b-nav-item>

              </b-nav>
            </b-collapse>

            <b-nav-item to="/user-panel/system-msg" :active="this.$route.path === '/user-panel/system-msg'">
              <!--            <font-awesome-icon class="m-menu-icon" :icon="['far', 'envelope']"/>-->
              <font-awesome-icon class="m-menu-icon" style="font-size: 22px; margin-top: 2px;" :icon="['far', 'bell']"/>

              {{ $t('tutor_account_system_msg') }}
            </b-nav-item>

            <b-nav-item v-if="hasPermission('tutor')" to="/user-panel/profile"
                        :active="this.$route.path === '/user-panel/profile'">
              <font-awesome-icon class="m-menu-icon" :icon="['fas', 'user']"/>
              {{ $t('profile') }}
            </b-nav-item>
            <b-nav-item v-else to="/user-panel/st-profile" :active="this.$route.path === '/user-panel/st-profile'">
              <font-awesome-icon class="m-menu-icon" :icon="['fas', 'user']"/>
              {{ $t('profile') }}
            </b-nav-item>
            <b-nav-item to="/user-panel/account" :active="this.$route.path === '/user-panel/account'">
              <font-awesome-icon class="m-menu-icon" :icon="['fas', 'lock']"/>
              {{ $t('account') }}
            </b-nav-item>
          </b-nav>

        </b-sidebar>
      </client-only>
      <div style="width:100%;">
        <NuxtChild/>
      </div>
    </div>
  </b-container>

</template>
<script>

import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faCog,
  faBookOpen,
  faTasks,
  faUser,
  faScroll,
  faLock,
  faChevronRight,
  faChevronLeft,
  faGraduationCap,
  faClock,
  faChalkboardTeacher,
  faCertificate,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons'
import {faCalendarAlt, faComment, faAddressBook} from '@fortawesome/free-regular-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'

library.add([faChalkboardTeacher, faAddressBook, faScroll, faBriefcase, faCertificate, faClock, faGraduationCap, faCalendarAlt, faCog, faBookOpen, faComment, faTasks, faUser, faLock, faChevronRight, faChevronLeft])

export default {
  middleware: 'auth',
  name: "UserPanel",
  data() {
    return {
      windowWidth: process.browser ? window.getComputedStyle(document.documentElement).getPropertyValue('--screen-mode') : 'sm',
      user: null,
      errors: null,
    }
  },
  head() {
    return {
      title: 'TuteLoop',
      htmlAttrs: {
        lang: 'fa',
        amp: undefined
      },
      headAttrs: {
        TuteLoop: true
      },
      bodyAttrs: {
        tabIndex: 0
      }
    }
  },
  watch: {
    windowWidth(newHeight) {
      console.log(`it changed to ${newHeight} `)
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    hasExactPermission(role) {
      return this.$auth.hasScope(role)
    },
    hasPermission(role) {
      if (this.$auth.hasScope('admin')) {
        return true
      }
      return this.$auth.hasScope(role)
    },

    onResize() {
      if (process.browser)
        this.windowWidth = window.getComputedStyle(document.documentElement).getPropertyValue('--screen-mode')
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
  }
}
</script>
<style>
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
</style>
