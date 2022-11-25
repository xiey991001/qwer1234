import { getApiList } from '../server'
import { defineStore } from 'pinia'
import type { RootObject,Children } from './type';

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0);
//   const doubleCount = computed(() => count.value * 2);
//   function increment() {
//     count.value++;
//   }
//   return { count, doubleCount, increment }
// })

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    list:<RootObject> {},
    item:<Children[]>[]
  }),
  actions: {
    async getList() {
      const result = await getApiList();
      this.list = result
      console.log(result);
    },
  },
});
