<template>
    <div class="personalFormContainer">
        <h2>Please fill out this form about your personal information.</h2>
        <hr />
        <span class="user-input-row">
          <label for="user-firstname">First name:</label>
          <input id="user-firstname" type="text" v-model="firstName" placeholder="Peter" required=true />
        </span>
        <span class="user-input-row">
          <label for="user-lastname">Last name:</label>
          <input id="user-lastname" type="text" v-model="lastName" placeholder="Griffen" required=true />
        </span>
        <span class="user-input-row">
          <label for="user-age">Age:</label>
          <input id="user-age" type="number" v-model="age" required />
        </span>
        <span class="user-input-row">
          <span>Gender:</span>
          <label for="man">Male:</label>
          <input type="radio" v-model="gender" id="man" value="man" />
          <label for="women">Female:</label>
          <input type="radio" v-model="gender" id="women" value="woman" />
        </span>
        <span class="user-input-row">
          <label for="user-nationalId">National ID:</label>
          <input id="user-nationalId" type="text" v-model="nationalId" placeholder="092XXXXXXX" />
        </span>
        <span class="user-input-row">
          <label for="cityOption">City:</label>
          <select id="cityOption" v-model="city">
            <option id="0" value="Teh">Tehran</option>
            <option id="1" value="Mah">Mashhad</option>
            <option id="2" value="Tab">Tabriz</option>
            <option id="3" value="Esf">Esfahan</option>
            <option id="4" value="Shi">Shiraz</option>
          </select>
        </span>
        <span class="user-input-row">
          <label for="marrige">Are you single ?</label>
          <input id="marrige" type="checkbox" v-model="is_single" />
        </span>
    </div>
</template>

<script>
export default {
  name: 'PersonalForm',
  data: () => ({
    firstName: undefined,
    lastName: undefined,
    age: undefined,
    gender: undefined,
    nationalId: undefined,
    city: undefined,
    is_single: undefined
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
  .submit-button {
    display: block;
    margin: 10px auto;
    padding: 10px;
    border-radius: 5px;
    width: 100px;
  }
  .submit-button:hover {
    background-color: darkgray;
  }
</style>
