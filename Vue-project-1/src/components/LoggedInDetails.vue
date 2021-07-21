<template>
  <div class="main-section">
    <div class="log-section">
      <user-celebration></user-celebration>
    </div>
    <div class="org-section">
      <org-tools></org-tools>
    </div>
  </div>
</template>
<script>
import OrgTools from "./OrgTools.vue";
import UserCelebration from "./UserCelebration.vue";
export default {
  components: { UserCelebration, OrgTools },
};
</script>
<style scoped>
.org-section {
  height: 40%;
  width: 70%;
  margin-top: 10px;

  background: #79554859;
}
.main-section {
  display: flex;
  /* height: 100vh; */
  background: #80808033;
}
</style>
