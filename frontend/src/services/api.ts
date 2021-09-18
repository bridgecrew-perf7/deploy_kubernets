import axios from "axios";

class ApiClass {
  async _RequestApi(path: string) {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/${path}/`
    );
    return response.data;
  }
  async GetTodo() {
    return this._RequestApi("todo");
  }
}

export const Api = new ApiClass();
