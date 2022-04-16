import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
    state: () => {
        return {
            counter: 0,
            name: "Eduardo",
            isAdmin: true,
        };
    },
    getters: {
        getCounter(state){
            return state.counter * 10
        }
    },
    actions: {
        changeState(num:number){
            this.counter += num;
        }
    },
});
