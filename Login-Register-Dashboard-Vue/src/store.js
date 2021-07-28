import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      userDetails: {},
      allData: [],
      allTask: [],
    };
  },
  //used for mainly for async but can work for sync aswell
  actions: {
    addMemberDetails(context, payload) {
      setTimeout(() => {
        context.commit("addUserDetail", payload);
      }, 3000);
    },
    userLogin(context) {
      context.commit("setAuth", true);
      console.log(context.state.isLoggedIn);
    },
    userlogout(context) {
      context.commit("setAuth", false);
    },
    actionFetchAllData(context, payload) {
      context.commit("fetchAllData", payload);
    },
    actionAllTask(context, payload) {
      context.commit("mutateAllTask", payload);
    },
  },
  //used for only sync process
  //we can use callback functions inside mutations but the diff will be my app
  //performance will be lower as compared to actions.As mutation is sync and actions are sync
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload;
    },

    // addUserDetail(state, payload) {
    //   setTimeout(() => {
    //     state.userDetails = payload;
    //   }, 6000);

    // },

    addUserDetail(state, payload) {
      state.userDetails = payload;
    },
    fetchAllData(state, payload) {
      state.allData = payload;
    },
    mutateAllTask(state, payload) {
      state.allTask.push(payload);
    },
  },
  getters: {
    userUsAuthenticated(user) {
      return user.isLoggedIn;
    },
    getUserDetails(user) {
      return user.userDetails;
    },
    getAllData(data) {
      return data.allData;
    },
    getAllTask(state) {
      return state.allTask;
    },
  },
});
export default store;
