<template>
    <div>
        <PersonalForm ref='pform'></PersonalForm>
        <MedicalForm ref='mform'></MedicalForm>
        <button class="submit-button" v-on:click='submitAll'>Send</button>
    </div>
</template>

<script>
import PersonalForm from '@/components/PersonalForm.vue'
import MedicalForm from '@/components/MedicalForm.vue'

export default {
  name: 'App',
  components: {
    PersonalForm,
    MedicalForm
  },
  methods: {
    download (content, fileName) {
      var a = document.createElement('a')
      var file = new Blob([content], {type: 'text/plain'})
      a.href = URL.createObjectURL(file)
      a.download = fileName
      a.click()
    },
    submitFunction () {
      let perdata = this.$refs.pform.$data
      let meddata = this.$refs.mform.$data
      if (perdata.firstName === undefined || perdata.lastName === undefined) {
        return
      }
      var fileName = perdata.nationalId + '.txt'
      this.download(JSON.stringify(Object.assign({}, perdata, meddata), null, 4), fileName)
    },
    submitAll () {
      this.submitFunction()
    }
  }
}
</script>

<style>
* {
    box-sizing: border-box;
    font-size: 16px;
}

body {
    margin: 0;
    padding: 0;
    background-color: rgba(229,33,101);
}

.submit-button {
  display: block;
  margin: 10px auto;
  padding: 10px;
  width: 100px;
  border-radius: 5px;
}

.user-input-row {
  background-color: rgb(13,17,55);
  color: white;
  display: block;
  padding: 30px 30px;
  margin: 20px auto;
  border: 1px solid black;
  width: 50%;
  border-radius: 8px;
}

h2 {
  color: white;
  padding: 15px;
  font-size: 24px;
  margin: 15px;
}
</style>
