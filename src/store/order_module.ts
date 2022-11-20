import {
    INCREMENT_STATE_CART,
} from "@/store/actions_type";
import {
    INCREMENT_CART
} from "@/store/mutations_type";

const state = {
    count_cart: 0,
    errors: String,
};

const getters = {
    currentStateCart(state: any) {
        return state.count_cart;
    }
};

const actions = {

    [INCREMENT_STATE_CART](context: any) {
        context.commit(INCREMENT_CART)
    },
};

const mutations = {
    [INCREMENT_CART](state: any) {
        state.count_cart++
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
