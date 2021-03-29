import axios, {AxiosResponse,AxiosInstance} from 'axios';
 

const connect :AxiosInstance =  axios.create({
    baseURL: `http://localhost:3004`,
});
  
export const get = (url: string) :Promise<AxiosResponse<any>> => {
   return connect.get(url)
}

