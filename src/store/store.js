import { createStore } from 'vuex'


import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import auth from "./auth"

const store = createStore({
    getters,
    mutations,
    state,
    actions,
    auth
  });

export default store;