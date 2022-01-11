<template>
  <div>
    <b-form class="m-right" enctype='multipart/form-data' @submit.stop.prevent="onSubmit" >
    <h1>
      Upload files
    </h1>
    <input type='file' name='file' @change="filesChange($event.target.name, $event.target.files)">
  </b-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
      onSubmit(evt) {
      },

      filesChange (filename, files) {
      if (!files.length) {
        return
      }

      console.log(filename, files)
      const formData = new FormData()
      for (let i = 0; i < files.length; i++) {
        formData.append(filename, files[i], files[i].name)
      }

      this.$axios.post('cert/create', formData,{onUploadProgress: progress => {
        const { total, loaded } = progress;
        const totalSizeInMB = total / 1000000;
        const loadedSizeInMB = loaded / 1000000;
        const uploadPercentage = (loadedSizeInMB / totalSizeInMB) * 100;
        console.log("total size in MB ==> ", totalSizeInMB);
        console.log("uploaded size in MB ==> ", loadedSizeInMB);
      }}).then(
        rsp => {
          console.log(rsp)
        }
      ).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
