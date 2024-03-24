import axios from "axios"

const BASE_URI = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_YOUTUBE_KEY,
    'X-RapidAPI-Host': "youtube-v31.p.rapidapi.com",
  }
};

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options)
        return response.data
    }
}