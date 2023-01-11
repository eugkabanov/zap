import {
    SET_DATA_ORDER_FOR_CART,
    CLEAR_DATA_ORDER_FOR_CART,
} from "@/store/actions_type";
import {
    SET_DATA,
    CLEAR_DATA,
} from "@/store/mutations_type";

const state = {
  orderDataState: Boolean,
  errors: null,
};

const getters = {
  currentStateOrderData(state: any) {
    return state.orderDataState;
  },
};

const actions = {

    [SET_DATA_ORDER_FOR_CART](context: any ) {
        return new Promise((resolve, reject) => {
            context.commit(SET_DATA);
        });
    },

    [CLEAR_DATA_ORDER_FOR_CART](context: any ) {
        return new Promise((resolve, reject) => {
            context.commit(CLEAR_DATA);
        });
    },

}

const mutations = {
  [SET_DATA](state: any) {
    state.orderDataState = true
  },
  [CLEAR_DATA](state: any) {
      state.orderDataState = false
  },
};

export default {
  state,
  actions,
  mutations,
  getters
};
