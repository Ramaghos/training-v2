<template>
  <div class="createTaskSection">
    <!-- <router-link to="/dashboard-page">Back to Dashboard</router-link> -->
    <form class="form-control" @submit.prevent="addTaskData()">
      <div class="mb-3">
        <input
          placeholder="Task"
          name="taskName"
          class="form-control"
          v-model="Task.name"
          required
        />
      </div>

      <textarea
        name="description"
        class="form-control"
        placeholder="Description"
        v-model="Task.description"
        maxlength="20"
        minlength="5"
      ></textarea>

      <div class="mb-3">
        <select class="form-control" v-model="Task.priority" required>
          <option disabled value="">Select Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
      <div class="mb-3">
        <input
          type="date"
          name="estimatedTime"
          class="form-control"
          placeholder="estimatedTime"
          v-model="Task.estimatedTime"
        />
      </div>
      <div class="mb-3">
        <input
          name="assignedTo"
          class="form-control"
          placeholder="Assigned to"
          v-model="Task.assignedTo"
          required
        />
      </div>
      <div class="mb-3">
        <select
          class="form-control"
          v-model="Task.assignedTo"
          onfocus="this.size=3;"
          onblur="this.size=1;"
          onchange="this.size=1; this.blur();"
          required
        >
          <option disabled value="">Select Priority</option>
          <option v-for="users in getAllData" :key="users.id">{{
            users.UserName
          }}</option>
        </select>
      </div>
      <button v-if="currentState" class="btn btn-primary" type="submit">
        Create
      </button>
      <button v-else class="btn btn-primary" type="button" @click="update">
        Update
      </button>
    </form>
    <model v-if="Mymodel" @closeModel="close" @saveChange="save"></model>
    <!-- <auto-logout></auto-logout> -->
  </div>
</template>
<script>
// import AutoLogout from "./AutoLogout.vue";
import { mapGetters, mapActions } from "vuex";
import Model from "./Model.vue";
export default {
  components: { Model },
  computed: {
    ...mapGetters(["getAllData", "getAllTask"]),
  },
  // components: { AutoLogout },
  data() {
    return {
      Mymodel: false,
      currentState: true,
      taskId: this.$route.params.id,
      checkAssignedto: false,
      Task: {
        id: "",
        name: "",
        description: "",
        priority: "",
        estimatedTime: "",
        assignedTo: "",
        completed: false,
      },
    };
  },
  mounted() {
    if (this.taskId != undefined) {
      this.currentState = false;
      this.Task = this.getAllTask.find(
        (uniqueId) => uniqueId.id === this.taskId
      );
    }
  },
  // inject: ["insertTask"],
  methods: {
    ...mapActions(["actionAllTask"]),

    addTaskData() {
      alert("ARE YOU SURE YOU WANT TO ADD TASK");
      this.Task.id = new Date().getTime().toString();
      console.log(this.Task.id);
      this.Mymodel = true;
      // this.insertTask(this.Task);
      //this.validateAssignedTo();
      // if (this.checkAssignedto) {
      //   this.actionAllTask(this.Task);
      //   // this.insertTask(this.Task);
      //   console.log("true value for assignee");
      //   this.$router.push("/tasks/");
      // } else {
      //   alert("Assign to correct Users");
      // }
    },
    save() {
      this.actionAllTask(this.Task);
      this.$router.push("/tasks/");
    },
    validateAssignedTo() {
      const userdetail = this.getAllData.find(
        (user) => user.UserName === this.Task.assignedTo
      );
      if (userdetail) {
        this.checkAssignedto = true;
        console.log("assigned to correct");
      } else {
        this.checkAssignedto = false;
        console.log("assigned to wrong");
      }
    },
    update() {
      const Index = this.getAllTask.findIndex(
        (uniqueId) => uniqueId.id === this.Task.id
      );
      console.log(Index);
      this.getAllTask[Index] = this.Task;
      this.$router.push("/tasks");
    },
    close() {
      this.Mymodel = false;
    },
  },
  // provide() {
  //   return {
  //     AddTasks: this.task,
  //   };
  // },
};
</script>
