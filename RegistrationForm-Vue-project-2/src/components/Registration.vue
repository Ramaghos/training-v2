<template>
  <div>
    <div class="register">
      <h3>Create An Account</h3>
      <input type="text" placeholder="username" v-model="userdata.UserName" />
      <input
        type="password"
        placeholder="password"
        v-model="userdata.Password"
      />
      <input
        type="email"
        placeholder="email Address"
        v-model="userdata.emailAddress"
      />
      <label for="dateOfBirth">Date Of Birth:</label>
      <input
        name="dateOfBirth"
        type="date"
        placeholder="dateOfBirth"
        v-model="userdata.dateOfBirth"
      />
      <label for="joiningDate">Joining Date:</label>
      <input
        name="joiningDate"
        type="date"
        placeholder="joining Date"
        v-model="userdata.joiningDate"
      />
    </div>
    <button class="btn-success" @click="register">Register</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      userdata: {
        UserName: "",
        Password: "",
        emailAddress: "",
        dateOfBirth: "",
        joiningDate: "",
      },
    };
  },
  methods: {
    register() {
      axios.post(
        "https://vue-project-1-10732-default-rtdb.firebaseio.com/user.json",
        this.userdata
      );
      this.$emit("shiftToLogin");
    },
  },
};
</script>
<style scoped>
.register {
  display: flex;
  flex-direction: column;
}
</style>
