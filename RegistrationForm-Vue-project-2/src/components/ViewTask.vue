<template>
  <div>
    <button @click="Edit">Edit</button>
    <!-- <router-link to="/tasks">Back to All Task</router-link> -->
    <p>User Id : {{ this.taskId }}</p>
    <h3>Task Name: {{ task.name }}</h3>
    <p>Task Description: {{ task.description }}</p>
    <p>Priority: {{ task.priority }}</p>
    <p>Estimatted Time: {{ task.estimatedTime }}</p>
    <p>Assigned To: {{ task.assignedTo }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAllTask"]),
  },
  data() {
    return {
      taskId: this.$route.params.id,
      task: {},
    };
  },
  methods: {
    Edit() {
      this.$router.push("/tasks/add/" + this.taskId);
    },
  },

  mounted() {
    this.task = this.getAllTask.find((uniqueId) => uniqueId.id === this.taskId);
    console.log(this.task);
  },
  // inject: ["AddTasks"],
};
</script>
