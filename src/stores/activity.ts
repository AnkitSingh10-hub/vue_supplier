import { defineStore } from 'pinia'
import { getAPI } from '@/api'
import type {ActivityResponse} from '@/models/Activity.interface'
export const useActivityStore = defineStore('activity', {
  state: () => {
    return {
      initialActivitiesResponse: null as ActivityResponse | null,
      activityDetailResponse: null
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
    async getApiActivityList(searchQuery:string) {
      const response = await getAPI('sp/service-provider-list', `?search=${searchQuery}`);
      this.initialActivitiesResponse = response.data;
    },
    async getApiActivityDetail(id: string) {
      const response = await getAPI(`sp/service-and-provider-detail/${id}`, '');
      this.activityDetailResponse = response.data;
    }
    ,
  async getPaginationData(id:number){
    const response = await getAPI(`sp/service-list`,`?page=${id}`)
    this.initialActivitiesResponse =response.data
  }

  }
})