import ApiClient from "@/services/ApiClient"

export default {
  getVideoList(userId) {
    return ApiClient.get(`/userprofiles/video/${userId}`)
  }
}
