<template>
  <div>
    <div>
      <header>
        <nav>
          <ul class="userDetail">
            <li class="pull-right">
              <p class="mb-0">Hello! {{ routeParamValue }}</p>
            </li>
            <li class="pull-right">
              <a href="" id="logout" class="btn btn-danger" @click="logout()"
                >Logout</a
              >
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      colorfull: false,
      routeParamValue: this.$route.params.username,
    };
  },

  computed: {
    ...mapGetters(["getUserDetails"]),
  },
  methods: {
    ...mapActions(["userlogout"]),
    logout() {
      this.userlogout();

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
