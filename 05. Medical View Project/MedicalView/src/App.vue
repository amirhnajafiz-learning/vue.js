<template>
    <div>
        <PersonalForm ref='pform'></PersonalForm>
        <MedicalForm ref='mform'></MedicalForm>
        <button v-on:click='submitAll'>Send</button>
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
      // eslint-disable-next-line no-undef
      if (this.$refs.pform.$data.firstName === undefined || this.$refs.pform.lastName === undefined) {
        return
      }
      var fileName = this.$refs.pform.firstName + '_' + this.$refs.pform.lastName + '.txt'
      this.download(JSON.stringify(Object.assign({}, this.$refs.pform.$data, this.$refs.mform.$data)), fileName)
    },
    submitAll () {
      this.submitFunction()
    }
  }
}

</script>
