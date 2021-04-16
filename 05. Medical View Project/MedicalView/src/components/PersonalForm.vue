<template>
    <div class="personalFormContainer">
        <h2>Please fill out this form about your personal information.</h2>
        <hr />
        <span>
          <label for="user-firstname">First name:</label>
          <input id="user-firstname" type="text" v-model="firstName" placeholder="Peter" />
        </span>
        <span>
          <label for="user-lastname">Last name:</label>
          <input id="user-lastname" type="text" v-model="lastName" placeholder="Griffen" />
        </span>
        <span>
          <label for="user-age">Age:</label>
          <input id="user-age" type="number" v-model="age" />
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
    nationalId: undefined,
    bloodType: undefined
  })
}
</script>
