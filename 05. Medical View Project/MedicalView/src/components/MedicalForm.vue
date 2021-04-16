<template>
    <div class="medicalFormContainer">
        <h2>Please give us information about your medical status.</h2>
        <hr />
        <span>
          <label for="user-alive">Alive ?</label>
          <input id="user-alive" type="checkbox" v-model="dead" />
        </span>
        <span>
          <label for="user-drugs">Drugs:</label>
          <input id="user-drugs" type="text" v-model="drugs" />
        </span>
    </div>
</template>

<script>
export default {
  name: 'MedicalForm',
  data: () => ({
    drugs: undefined,
    dead: undefined
  })
}
</script>
