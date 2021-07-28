<template>
  <div class="container">
    <div class="tab">
      <p @click="loginTabFun()">Log in</p>
      <p @click="regTabFun()">Register</p>
    </div>

    <div class="inner-container">
      <div class="login" v-if="loginBox">
        <h1>Sign-in</h1>
        <div>
          <input
            class="input"
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
            class="input"
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
        <a href="#" @click="regTabFun()" style="padding: 5px;"
          >if not a user?
        </a>
      </div>
      <div v-else class="registration">
        <registration @shiftToLogin="goLogin()"></registration>
      </div>
    </div>
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
import Registration from "./Registration.vue";
export default {
  components: { Registration },
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
      loginBox: true,
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
    loginTabFun() {
      this.loginBox = true;
    },
    regTabFun() {
      this.loginBox = false;
    },
    goLogin() {
      console.log("go to login");
      this.loginBox = true;
    },

    //we need to use spread operator when we are putting more than one function inside actions.
    ...mapActions(["userLogin", "actionFetchAllData"]),
    login() {
      this.loading = true;
      console.log(this.$store.getters.userUsAuthenticated);
      setTimeout(() => {
        axios
          .get(
            "https://vue-project-1-10732-default-rtdb.firebaseio.com/user.json"
          )
          .then((res) => {
            console.log(res);
            console.log(res.data);

            for (let key in res.data) {
              let user = {
                id: key,
                ...res.data[key],
              };

              this.SignInValidation.push(user);
            }
            console.log(this.SignInValidation);
            //these are the two ways to accept javascript object
            //if no data it will through error in console
            // for (let userdata in res.data) {
            //   this.SignInValidation.push({
            //     UserName: userdata.UserName,
            //     Password: userdata.Password,
            //   });
            // }
            // // this.SignInValidation = [res.data];
            // console.log(this.SignInValidation);
            this.actionFetchAllData(this.SignInValidation);
            //if no data it will not through an error in console
            // this.SignInValidation = res["data"];
            // console.log(this.SignInValidation[0]);
            this.UserData = this.SignInValidation.find(
              (user) =>
                user.UserName === this.input.username &&
                user.Password === this.input.password
            );
            console.log(this.UserData);
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
.input {
  border-color: black;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  margin: 10px 10px 10px 0px;
}
.inner-container {
  box-shadow: 3px 1px 5px 1px;
}
.registration {
  padding: 30px;
}
.tab {
  margin-top: 20px;
  width: 30%;
}
.tab > p:hover {
  color: indianred;
  cursor: pointer;
}
</style>
