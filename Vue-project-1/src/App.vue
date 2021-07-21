<template>
  <router-view> </router-view>
</template>

<script>
export default {
  data() {
    return {
      task: [],
    };
  },
  methods: {
    insertTask(insertData) {
      this.task.push(insertData);
    },
  },
  provide() {
    return {
      AddTasks: this.task,
      insertTask: this.insertTask,
    };
  },
};
</script>
<style>
ul {
  margin: 0px;
  padding: 0px !important;
}
</style>
