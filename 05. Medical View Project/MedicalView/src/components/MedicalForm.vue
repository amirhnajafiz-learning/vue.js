<template>
    <div class="medicalFormContainer">
        <h2>Please give us information about your medical status.</h2>
        <hr />
        <span class="user-input-row">
          <label for="user-blood-type">Blood type:</label>
          <select id="user-blood-type" v-model="blood_type">
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
          <span>Drugs:</span>
          <label for="asprin">Asprin</label>
          <input id="asprin" type="checkbox" v-model="drugs" />
          <label for="zinc">Zinc</label>
          <input id="zinc" type="checkbox" v-model="drugs" />
          <label for="metadol">Metadol</label>
          <input id="metadol" type="checkbox" v-model="drugs" />
        </span>
        <span class="user-input-row">
          <lable for="comments">Any comments ?</lable><br />
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
  .user-input-row {
    display: block;
    padding: 20px;
    margin: 10px auto;
    border: 1px solid black;
    width: 40%;
    border-radius: 5px;
  }
</style>
