import axios from "axios";

axios.defaults.baseURL = "https://hbc-api-pj-9ce30abdc101.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;