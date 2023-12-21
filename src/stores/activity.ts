import { defineStore } from 'pinia'
import { getAPI } from '@/api'
import router from '@/router'

export const useActivityStore = defineStore('activity', {
  state: () => {
    return {
      initialActivitiesResponse: null
    }
  },
  getters: {
    getActivityList(state) {
      if (state.initialActivitiesResponse) {
        return state.initialActivitiesResponse.results.data;
      }
    }
  },
  actions: {
    async getApiActivityList(searchQuery) {
      const response = await getAPI('sp/service-provider-list', `?search=${searchQuery}`);
      this.initialActivitiesResponse = response.data;
    }
  }
})
