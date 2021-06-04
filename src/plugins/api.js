export default function ({ $axios }, inject) {
  const api = new API($axios)

  inject('api', api)
}

class API {
  constructor (axios) {
    this.axios = axios
  }

  async getHoge () {
    const res = await this.axios.$get("/api/")
    console.log(res.channel)
  }
}