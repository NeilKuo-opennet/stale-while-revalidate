import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:80',
});


export const hello = async(id: string) => {
  try {
    const { data } = await instance.get(`/hello?id=${id}`);
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  }
}
