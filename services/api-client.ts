import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a6f8e11b419b463a9751c8cf9de3d43b",
  },
});
