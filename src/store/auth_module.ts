import {
    AUTH,
    LOGOUT,
    USER_ME,
    CHECK_AUTH, GET_NUMBER_CONFIRM_ORDERS
} from "@/store/actions_type";
import UserDataService from "@/services/UserDataService";
import jwt_service from "@/http-common/jwt_service";
import type UserDataAuth from "@/types/UserDataAuth";
import {
    SET_AUTH,
    PURGE_AUTH,
    SET_USER_DATA} from "@/store/mutations_type";
import type UserDataInfo from "@/types/UserDataInfo";
import {store} from "@/store/index";
import type ResponseData from "@/types/ResponseData";

const state = {
  userData: {},
  errors: null,
  isAuthenticated: false
};

const getters = {
  currentUser(state: any) {
    return state.userData;
  },
  isAuthenticated(state: any) {
    return state.isAuthenticated;
  }
};

const actions = {

    [AUTH](context: any, userDataAuth: UserDataAuth) {
        return new Promise((resolve, reject) => {
            UserDataService.auth(userDataAuth)
                .then(({data}) => {
                    jwt_service.saveToken(data.access_token)
                    context.commit(SET_AUTH)
                    resolve(data);
                })
                .catch(({response}) => {
                    // context.commit(SET_ERROR, response.data.errors);
                    reject(response);
                });
        });
    },

    [USER_ME](context: any) {
        return new Promise((resolve, reject) => {
            UserDataService.userMe()
                .then((data) => {
                    context.commit(SET_USER_DATA, data.data)
                    resolve(data)
                })
                .catch((e: Error) => {
                    console.log(e);
                    resolve(e)
                    context.commit(PURGE_AUTH);
                })
        });
    },

    [LOGOUT](context: any) {
        return new Promise((resolve, reject) => {
            resolve()
            context.commit(PURGE_AUTH);
        });
    },

    [CHECK_AUTH](context: any) {
        return new Promise((resolve, reject) => {
            if (jwt_service.getToken()) {
                context.commit(SET_AUTH)
                store.dispatch(USER_ME)
                    .then((data: ResponseData) => {
                        resolve(data)
                        store.dispatch(GET_NUMBER_CONFIRM_ORDERS)
                            .then((data: ResponseData) => {
                            })
                            .catch((e: Error) => {
                                console.log(e);
                            });
                    })
                    .catch((e: Error) => {
                        context.commit(PURGE_AUTH);
                        console.log(e);
                    })
            } else {
                context.commit(PURGE_AUTH);
            }
            resolve()
        })

    }
}

const mutations = {
  [SET_AUTH](state: any) {
    state.isAuthenticated = true
  },
  [PURGE_AUTH](state: any) {
    state.isAuthenticated = false
    state.userData = {};
    state.errors = "";
    jwt_service.destroyToken();
  },
  [SET_USER_DATA](state: any, userData: UserDataInfo) {
    state.userData = userData
  },
};

export default {
  state,
  actions,
  mutations,
  getters
};
