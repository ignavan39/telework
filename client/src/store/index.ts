import {createStore} from 'vuex'
//import teachers from "@/store/modules/teachers";
import type { App } from 'vue';
//import teachers from "@/store/modules/teachers";

export const store = createStore({
  //modules: {teachers}
})

export function setupStore(app: App<Element>) {
  app.use(store);
}
export default store;