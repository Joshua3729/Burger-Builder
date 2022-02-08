import axios from "axios";

const instances = axios.create({
  baseURL: "https://myburgerbuilder-c8641-default-rtdb.firebaseio.com/",
});

export default instances;
