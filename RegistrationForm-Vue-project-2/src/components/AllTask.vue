<template>
  <section class="p-5">
    <!-- <router-link to="/tasks/add">Back to Add Task</router-link> -->
    <h3>List of Tasks!!</h3>

    <table class="task-list">
      <tr>
        <th>Task Name</th>
        <th>Task Description</th>
        <th>Task Priority</th>
        <th>Duration Of Task</th>
        <th>Task Assigned To</th>
        <th>View Details</th>
      </tr>
      <!-- <tr v-for="task in AddTasks" :key="task.id"> -->
      <tr
        v-for="(task, index) in getAllTask"
        :key="task.id"
        @click="toggleTaskStatus(task)"
        :class="{ taskCompletion: task.completed }"
      >
        <td>{{ task.name }}</td>
        <td>{{ task.description }}</td>
        <td>{{ task.priority }}</td>
        <td>{{ task.estimatedTime }}</td>
        <td>{{ task.assignedTo }}</td>
        <td>
          <router-link :to="'/tasks/' + task.id">View Details</router-link>

          <!-- <router-link :to="{ name: 'task-view', params: { id: task.id }}">View Details</router-link> -->
        </td>
        <td>
          <button @click="deleteTask(index)">Delete</button>
        </td>
      </tr>
    </table>

    <!-- <ul>
      <li class="jumbotron">
        <h4>Task name: {{ AddTasks.name }}</h4>
        <p>Task Description: {{ AddTasks.description }}</p>
        <p>Task priority: {{ AddTasks.priority }}</p>
        <p>Duration of task: {{ AddTasks.estimatedTime }}</p>
        <p>Task assigned to: {{ AddTasks.assignedTo }}</p>

        <router-link :to="'/tasks/' + task.id">View Details</router-link> 
      </li>
    </ul>  -->
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAllTask"]),
  },
  mounted() {
    console.log("inside all task");
    console.log(this.getAllTask);
    //this.allTask = this.$store.getters.getAllTask;
    //console.log(this.allTask);
  },
  methods: {
    deleteTask(index) {
      // var index = this.getAllTask.indexOf(task);
      this.getAllTask.splice(index, 1);
    },
    toggleTaskStatus(task) {
      task.completed = !task.completed;
    },
  },
  data() {},

  // data() {
  //   return {
  //     //routeAddTask: this.$route.params.task.name,
  //     viewTask: {},
  //   };
  // },
  // mounted() {
  //   console.log("view task" + this.task.id);
  // },
  // inject: ["AddTasks"],
};
</script>
<style scoped>
.task-list,
th,
tr,
td {
  border: 1px solid #cccccc;
  padding: 10px;
}
.taskCompletion {
  text-decoration: line-through;
}
</style>
