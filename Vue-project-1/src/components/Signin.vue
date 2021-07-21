<template>
  <div class="login">
    <h1>Sign-in</h1>
    <div>
      <input
        type="text"
        name="username"
        v-model="input.username"
        @blur="validInput"
        placeholder="username"
        :style="{ borderColor: !showForm ? 'red' : 'black' }"
      />
      <p v-if="!showForm" style="color: red">
        Please enter the valid name !!!
      </p>
      <input
        type="password"
        name="password"
        v-model="input.password"
        placeholder="password"
        @blur="validInput"
        :style="{ borderColor: !showForm ? 'red' : 'black' }"
      />
      <p v-if="!showForm" style="color: red">
        Please enter the password !!!
      </p>
    </div>

    <button type="button" v-on:click="login">Login</button>
  </div>

  <!-- <div v-else>
    <dashboard>
      <p>{{ input.username }}</p>
    </dashboard>
  </div> -->
  <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
      showForm: true,
      SignInValidation: [],
      UserData: {},
      loading: false,
    };
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log(to, from, next);
  //   next();
  // },
  // beforeRouteLeave(to, from, next) {
  //   // console.log(to, from, next);
  //   if (this) {
  //     next();
  //   }
  // },
  methods: {
    //we need to use spread operator when we are putting more than one function inside actions.
    ...mapActions(["userLogin", "actionFetchAllData"]),
    login() {
      this.loading = true;
      console.log(this.$store.getters.userUsAuthenticated);
      setTimeout(() => {
        axios.get("./Login.json").then((res) => {
          //console.log(res);
          //these are the two ways to accept javascript object
          //if no data it will through error in console
          this.SignInValidation = res.data;
          this.actionFetchAllData(this.SignInValidation);
          //if no data it will not through an error in console
          // this.SignInValidation = res["data"];
          // console.log(this.SignInValidation[0]);
          this.UserData = this.SignInValidation.find(
            (user) =>
              user.UserName === this.input.username &&
              user.Password === this.input.password
          );
          if (
            this.UserData != undefined &&
            Object.keys(this.UserData).length != 0
          ) {
            console.log("signed in");
            // this.$store.commit("setAuth", true);
            this.userLogin();
            // this.$store.commit("addUserDetail", this.UserData);
            this.$store.dispatch("addMemberDetails", this.UserData);
            console.log(this.$store.getters.getUserDetails);
            console.log(this.$store.getters.userUsAuthenticated);

            // this.$router.push("/dashboard-page/" + this.input.username);
            this.$router.push("/LoggedInDetails/" + this.input.username);
          } else {
            console.log("fill correct username and password");
            //this.showForm = !this.showForm;
            this.loading = false;
          }
        });
      }, 3000);

      // this.UserData = this.SignInValidation.find(
      //   (user) =>
      //     user.UserName === this.input.username &&
      //     user.Password === this.input.password
      // );
      // if (this.input.username != "" && this.input.password != "")

      // if (this.UserData) {
      //   console.log("signed in");

      //   this.$router.push("/dashboard-page/" + this.input.username);
      // } else {
      //   console.log("fill correct username and password");
      //   //this.showForm = !this.showForm;
      // }
    },
    validInput() {
      if (this.input.username == "" && this.input.password == "") {
        this.showForm = false;
      } else {
        this.showForm = true;
      }
    },
  },
};
</script>
<style scoped>
.login {
  padding: 100px;
}
.v-spinner {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #b5b1b15e;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
</style>
