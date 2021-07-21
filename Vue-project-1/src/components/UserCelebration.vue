<template>
  <section>
    <div>
      <h3 class="emailId tablestyle">{{ user.emailAddress }}</h3>
    </div>
    <div class="celebration tablestyle">
      <h3>Celebrations</h3>

      <table>
        <tr>
          <th>Birthday</th>
        </tr>
        <tr>
          <td>{{ user.dateOfBirth }}</td>
        </tr>
      </table>
    </div>
    <div class="yellow tablestyle ">
      <table>
        <tr>
          <th>Joining Date</th>
        </tr>
        <tr>
          <td>{{ user.joiningDate }}</td>
        </tr>
      </table>
    </div>
    <div class="Nobel tablestyle">
      <table>
        <tr>
          <th>All Members</th>
        </tr>
        <div class="focusOnText">
          <tr v-for="name in allUser" :key="name.id">
            <td>{{ name.UserName }}</td>
          </tr>
        </div>
      </table>
    </div>
  </section>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    return {
      user: computed(() => store.getters.getUserDetails),
      allUser: computed(() => store.getters.getAllData),
    };
  },
};
</script>
<style scoped>
.emailId {
  background: #4caf50;
}
.tablestyle {
  padding-right: 15px;
  padding-left: 16px;
  border-radius: 10px;

  margin: 10px 10px;
}
.celebration {
  background-image: url(https://v2sol.sharepoint.com/SiteAssets/css/../images/celebrationbg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right bottom;
}
.yellow {
  background: #cddc39;
}
.Nobel {
  background: #9e9e9e;
}
.focusOnText td:hover {
  color: white;
  cursor: pointer;
}
</style>
