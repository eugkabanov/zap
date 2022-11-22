import {
    AUTH,
    LOGOUT,
    USER_ME
} from "@/store/actions_type";
import UserDataService from "@/services/UserDataService";
import jwt_service from "@/http-common/jwt_service";
import type UserDataAuth from "@/types/UserDataAuth";
import {SET_AUTH, PURGE_AUTH, SET_USER_DATA} from "@/store/mutations_type";
import type UserDataInfo from "@/types/UserDataInfo";

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
        .then(({ data }) => {
            jwt_service.saveToken(data.access_token)
            context.commit(SET_AUTH)
            resolve(data);
          })
          .catch(({ response }) => {
            // context.commit(SET_ERROR, response.data.errors);
            alert(response.statusText)
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
                })
        });
    },

    [LOGOUT](context: any) {
        return new Promise((resolve, reject) => {
            context.commit(PURGE_AUTH);
        });
    }
};

const mutations = {
  [SET_AUTH](state: any) {
    state.isAuthenticated = true
  },
  [PURGE_AUTH](state: any) {
    state.isAuthenticated = false
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
