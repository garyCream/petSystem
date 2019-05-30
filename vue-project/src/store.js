import Vue from 'vue'
import Vuex from 'vuex'
import students from "./store/students.js";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    students
  }
})
