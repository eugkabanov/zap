import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import auth from '@/store/auth_module'
import order from '@/store/order_module'
import cart from '@/store/cart_module'


export interface State {
  errors: null,
  isAuthenticated: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: {
    auth,
    order,
    cart
  }
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}