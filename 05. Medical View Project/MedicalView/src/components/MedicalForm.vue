<template>
    <div class="medicalFormContainer">
        <div class="header-part">
          <h2>Please give us information about your medical status.</h2>
        </div>
        <span class="user-input-row">
          <label for="user-blood-type">Blood type:</label>
          <select class="left-margin text-input" id="user-blood-type" v-model="blood_type">
            <option id="0" value="A+">A+</option>
            <option id="0" value="A-">A-</option>
            <option id="0" value="B+">B+</option>
            <option id="0" value="B-">B-</option>
            <option id="0" value="Ab+">Ab+</option>
            <option id="0" value="O+">O+</option>
            <option id="0" value="O-">O-</option>
          </select>
        </span>
        <span class="user-input-row">
          <label for="covid19">Do you have Corona Virus ?</label>
          <input id="covid19" type="checkbox" v-model="has_covid19" />
        </span>
        <span class="user-input-row">
          <span class="label-layout">Drugs:</span>
          <label for="asprin">Asprin</label>
          <input id="asprin" type="checkbox" value="Asprin" v-model="drugs" />
          <label for="zinc">Zinc</label>
          <input id="zinc" type="checkbox" value="Zinc" v-model="drugs" />
          <label for="metadol">Metadol</label>
          <input id="metadol" type="checkbox" value="Metadol" v-model="drugs" />
        </span>
        <span class="user-input-row">
          <label for="comments">Any comments ?</label><br />
          <textarea id="comments" v-model="comment"></textarea>
        </span>
    </div>
</template>

<script>
export default {
  name: 'MedicalForm',
  data: () => ({
    blood_type: undefined,
    has_covid19: undefined,
    drugs: [],
    comment: undefined
  })
}
</script>

<style scoped>
.text-input {
  margin-left: 20px;
  padding: 10px;
  border-radius: 5px;
  width: 50%;
  outline: none;
}

.text-input:hover {
  background-color: gray;
  border: 1px solid gray;
  color: white;
}

.left-margin {
  margin-left: 20px;
}
</style>
