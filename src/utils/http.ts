import axios from 'axios'

// define the functional digital api instance
const http = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: { Accept: 'application/json' }
  });



// define the functional digital api instance
// const FdcApi = create({
//   baseURL: process.env.BASE_API_URL,
//   headers: { Accept: 'application/json' },
// })


export const setAuthToken = (token: string | null) => {
  console.log("setting up tokenn");
  if (token) {
    // http.setHeader('Authorization', `Bearer ${token}`)
    http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
  } else {
    // http.setHeader('Authorization', '')
    delete http.defaults.headers.common['Authorization'];
  }
};

export default http
