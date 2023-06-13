import axios from "axios";

const productsDb = axios.create({
  baseURL: 'https://dummyjson.com',
})

export default productsDb;