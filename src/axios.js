import axios from "axios";
import {baseurl} from "./constants/Constants"

const instance = axios.create({
    baseURL: baseurl,
  });
  export default instance