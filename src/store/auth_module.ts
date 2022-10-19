import {
  AUTH
} from "@/store/actions_type";
import UserDataService from "@/services/UserDataService";
import jwt_service from "@/http-common/jwt_service";
import type UserDataAuth from "@/types/UserDataAuth";
import {SET_AUTH } from "@/store/mutations_type";

const state = {
  errors: null,
  isAuthenticated: false
};

const getters = {
  // currentUser(state: any) {
  //   return state.user;
  // },
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
            reject(response);
          });
    });
  }
};

const mutations = {
  [SET_AUTH](state: any) {
    state.isAuthenticated = true
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
