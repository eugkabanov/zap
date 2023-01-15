import {
    GET_NUMBER_CONFIRM_ORDERS,
    INCREMENT_NUMBER_CONFIRM_ORDERS,
} from "@/store/actions_type";
import {
    INCREMENT_CONFIRM_ORDERS, NUMBER_CONFIRM_ORDERS,
} from "@/store/mutations_type";
import OrderService from "@/services/OrderService";
import type ResponseData from "@/types/ResponseData";

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

    [INCREMENT_NUMBER_CONFIRM_ORDERS](context: any) {
        context.commit(INCREMENT_CONFIRM_ORDERS)
    },

    [GET_NUMBER_CONFIRM_ORDERS](context: any) {
        OrderService.currentNumberConfirmed()
            .then((response: ResponseData) => {
                context.commit(NUMBER_CONFIRM_ORDERS, response.data.count)
            })
            .catch((e: Error) => {
                console.log(e);
            })
    },
};

const mutations = {
    [INCREMENT_CONFIRM_ORDERS](state: any) {
        state.count_cart++
    },
    [NUMBER_CONFIRM_ORDERS](state: any, count: number) {
        state.count_cart = count
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
