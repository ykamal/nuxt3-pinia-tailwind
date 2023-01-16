import {defineStore} from 'pinia'

export const useFlowersStore = defineStore({
    id: `flower-store`,
    state: () => ({
        flowers: [`rose`, `tulip`]
    }),
    actions: {},
    getters: {
        flowersList: state => state.flowers
    }
})