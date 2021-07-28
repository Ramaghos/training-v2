<template>
  <div>
    <div>
      <!-- <h1>Dashboard</h1>
      <p>
        {{ routeParamValue }}
      </p>

      <form>
        <div class="row">
          <div class="form-group">
            <label>
              First Name
            </label>
            <input type="text" name="" id="" />
          </div>
        </div>
      </form> -->
      <header>
        <nav>
          <ul class="navItems">
            <li>
              <router-link to="/tasks/add">Add Task</router-link>
            </li>
            <li>
              <router-link to="/tasks">All Tasks</router-link>
            </li>
          </ul>
          <ul class="userDetail">
            <li class="pull-right">
              <!-- <a href="">Hello! {{ routeParamValue }}</a> -->
              <p class="mb-0">Hello! {{ routeParamValue }}</p>
            </li>
            <li class="pull-right">
              <a href="" id="logout" class="btn btn-danger" @click="logout()"
                >Logout</a
              >
              <!-- <router-link to="/login-details">Logout</router-link> -->
            </li>
          </ul>
        </nav>
      </header>
      <!-- <h3>{{ user.emailAddress }}</h3> -->
      <!-- <h3>{{ getUserDetails.emailAddress }}</h3> -->

      <!-- <p>{{ user.UserName }}</p> -->
    </div>

    <!-- <auto-logout></auto-logout> -->
    <!-- <auto-logout></auto-logout> -->
  </div>
  <router-view></router-view>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

// import AutoLogout from "./AutoLogout.vue";
// import AutoLogout from "./AutoLogout.vue";
export default {
  // components: { AutoLogout },
  // components: { AutoLogout },
  data() {
    return {
      colorfull: false,
      routeParamValue: this.$route.params.username,
    };
  },

  // beforeRouteEnter(to, from, next) {
  //   if (to.params.username == undefined) {
  //     next("Signin-page");
  //   } else {
  //     next();
  //   }
  // console.log(to, from, next);
  // next();
  // },
  computed: {
    ...mapGetters(["getUserDetails"]),

    // user() {
    //   return this.$store.getters.getUserDetails;
    // },
  },
  methods: {
    ...mapActions(["userlogout"]),
    logout() {
      this.userlogout();
      //this.$store.commit("setAuth", false);
      console.log("after logout" + this.$store.getters.userUsAuthenticated);
      this.$router.push("/Signin-page");
    },
  },
};
</script>
<style scoped>
.green {
  color: pink;
}
header {
  width: 100%;
  height: 100px;
  background-color: #282a35;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
}
p {
  color: white;
  font-size: 1.25rem;
}
a {
  text-decoration: none;
  color: white;
  font-size: 1.25rem;
}

ul.navItems {
  justify-content: flex-start;
}
ul.userDetail {
  float: right;
}
li {
  margin: 0 1rem;
}
nav {
  height: 100%;
}
li a:hover,
li a.router-link-active,
li a.router-link-exact-active {
  color: indianred;
  cursor: pointer;
}
</style>
