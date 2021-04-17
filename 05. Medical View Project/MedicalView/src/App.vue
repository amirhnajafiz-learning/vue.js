<template>
    <div>
        <PersonalForm></PersonalForm>
        <MedicalForm></MedicalForm>
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
  }
}

</script>
