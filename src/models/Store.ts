import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';

Vue.use(Vuex);

const someStore: StoreOptions<RootState> = {
    state: {
        isNavMenuOpen: false
    },
    getters: {
      isNavMenuOpen(state) : boolean {
        return state.isNavMenuOpen;
      }
    },
    mutations: {
      toggleNavMenuOpen() : void {
        this.state.isNavMenuOpen = !this.state.isNavMenuOpen;
      }
    }

};

export const store = new Vuex.Store<RootState>(someStore);
