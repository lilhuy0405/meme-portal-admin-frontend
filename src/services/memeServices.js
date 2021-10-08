import axiosClient from './axiosClient';

const memeServices = {
  login: async (body) => {
    const url = "/login"
    return await axiosClient.post(url, body)
  },
}

export default memeServices