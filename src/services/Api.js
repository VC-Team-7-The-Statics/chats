class ApiService {
  constructor(axios) {
    this.API = axios.create({
      // baseURL: "/api",
      baseURL: "/",
      timeout: 5000,
    });

    this.API.interceptors.request.use((req) => {
      const token = window.token;
      req.headers.Authorization = `Bearer ${token}`;
      return req;
    });
  }

  getProfile = () => this.API.get("/user/profile");

  getChatlist = () => this.API.get("/chat/list");
}

export default ApiService;
