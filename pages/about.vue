<template>
    <div class="main-body-container-content mb-5 pb-5">
      <b-container class="container-padding">

<!--        <div>-->
<!--          <b-carousel-->
<!--            id="carousel-1"-->
<!--            v-model="slide"-->
<!--            :interval="4000"-->
<!--            indicators-->
<!--            background="#ababab"-->
<!--            img-width="1024"-->
<!--            img-height="200"-->
<!--            style="text-shadow: 1px 1px 2px #333;"-->
<!--            @sliding-start="onSlideStart"-->
<!--            @sliding-end="onSlideEnd"-->
<!--          >-->
<!--            <b-carousel-slide :img-src="require('@/assets/gallery/honey14.jpg')">-->
<!--            </b-carousel-slide>-->
<!--            <b-carousel-slide :img-src="require('@/assets/gallery/honey22.jpg')">-->
<!--            </b-carousel-slide>-->
<!--          </b-carousel>-->

<!--        </div>-->

<!--        <div class="fusion-separator">-->
<!--                    <span class="icon-wrapper">-->
<!--                        <font-awesome-icon class="font-color" :icon="['fas', 'graduation-cap']"/>-->
<!--                    </span>-->
<!--        </div>-->

        <b-row class="pb-4">
          <b-col class="col-12 text-center pb-4 mb-4">

            <b-img class="mx-auto" :src="require('@/assets/logo.png')" width="200" rounded="circle" alt="about me"></b-img>

          </b-col>
          <b-col class="col-12">
            <div class="m-right text-justify" style="font-size: medium;">
<!--              <h1 class="content-title">َAbout Us</h1>-->
              <p>TuteLoop is a free website developed by students to address the lack of effective tutoring services available to students at the University of Toronto. Our goal is to have a centralized tutoring repository that can be queried for suitable tutors and to become a central hub exclusive to you at your university. This way, you can find another student that has taken the same courses that you have and get specific, targeted help for the courses you are struggling with. You can become a tutor yourself after passing a course and help others with the same course. </p>
              <p>TuteLoop is a completely free platform that can be used by anyone with a University of Toronto email address. While we have tried to make this website as straightforward as possible, there are some terms and conditions that we have set up to protect you and ourselves. Please have a read through these before using our services.</p>
              <p>Happy studying</p>

            </div>
          </b-col>
        </b-row>
        <b-row>

<!--              <b-img class="mx-auto mb-4" :src="require('@/assets/ronaldo.png')" width="200" rounded="circle" alt="about me"></b-img>-->

<!--              <b-img class="mx-auto mb-4" :src="require('@/assets/ronaldo.png')" width="200" rounded="circle" alt="about me"></b-img>-->

<!--              <b-img class="mx-auto mb-4" :src="require('@/assets/ronaldo.png')" width="200" rounded="circle" alt="about me"></b-img>-->

<!--              <b-img class="mx-auto mb-4" :src="require('@/assets/ronaldo.png')" width="200" rounded="circle" alt="about me"></b-img>-->


        </b-row>
      </b-container>

    </div>
</template>

<script>
export default {
  name: 'About',
  head () {
    return {
      title: 'About Me',
      meta: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        }
      ]
    }
     },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart () {
      this.sliding = true
    },
    onSlideEnd () {
      this.sliding = false
    }
  }
}
</script>

<style scoped>

</style>
