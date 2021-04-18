<template>
    <div>
        <PersonalForm ref='pform'></PersonalForm>
        <div class="spliter"></div>
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
  transition: width 2s;
}

.user-input-row:hover {
  background-color: rgb(13,17,40);
  width: 60%;
}

.header-part {
  display: block;
  color: rgba(229,33,101);
  padding: 15px;
  text-align: center;
  background-color: white;
  width: 60%;
  margin: 80px auto;
  border-radius: 30px;
}

.header-part:hover {
  color: rgba(229,33,101, 0.5);
}

h2 {
  font-size: 24px;
}

.spliter {
  display: block;
  width: 80%;
  height: 10px;
  border-bottom: 3px solid rgb(13,17,55);
  margin: 0 auto;
  margin-top: 80px
}

label {
  font-size: 19px;
  margin-right: 10px
}

input[type="checkbox"] {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin-right: 12px;
}

.label-layout {
  font-size: 19px;
  margin-right: 10px
}

textarea {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  resize: vertical;
  width: 70%;
  height: 200px;
  padding: 10px;
  margin: 15px 0;
  border-radius: 10px;
  outline: none;
}

textarea:focus {
  background-color: gray;
  border: 1px solid gray;
  color: white;
}
</style>
