import axios from "axios";

import { BASE_URL } from "./Constatnts";
import { client } from "./client";
export const UserToken = () => localStorage.getItem("token");

export const config = () => ({
  headers: {
    Authorization: `${UserToken()}`,
  },
});

export const userLogin = (body) => {
  return client.post(`${BASE_URL}/auth/login`, body, config());
};

export const getqrcode = (params) => {
  return client.get(`${BASE_URL}/two-factor/`, { params, ...config() });
};

export const setupmfa = (body) => {
  return client.post(`${BASE_URL}/two-factor/`, body, config());
};

export const Add_Catefory = (body) => {
  console.log(body);
  return client.post(`${BASE_URL}/integration_tool_category/`, body, config());
};

export const Get_Category = () => {
  return client.get(`${BASE_URL}/integration_tool_category/`, config());
};

export const Delete_Category = (body) => {
  return client.delete(
    `${BASE_URL}/integration_tool_category/`,
    body,
    config()
  );
};
export const Update_Catefory = (body) => {
  console.log(body);
  return client.put(`${BASE_URL}/integration_tool_category/`, body, config());
};

export const Get_Sub_Category = () => {
  return client.get(`${BASE_URL}/tool_component/`, config());
};
export const Update_Sub_Catefory = (body) => {
  console.log(body);
  return client.put(`${BASE_URL}/tool_component/`, body, config());
};

export const Add_Sub_Category = (body) => {
  console.log(body);
  return client.post(`${BASE_URL}/tool_component/`, body, config());
};

export const Delete_Sub_Category = (body) => {
  return client.delete(`${BASE_URL}/tool_component/`, body, config());
};
export const Get_Usecase = () => {
  return client.get(`${BASE_URL}/integration_use_case/`, config());
};
export const Add_Usecase = (body) => {
  console.log(body);
  return client.post(`${BASE_URL}/integration_use_case/`, body, config());
};

export const Update_Usecase = (body) => {
  return client.put(`${BASE_URL}/integration_use_case/`, body, config());
};

export const Get_Demo_Report = () => {
  return client.get(`${BASE_URL}/execution_report/`, config());
};

export const Add_feedback = (body) => {
  return client.post(`${BASE_URL}/feedback/`, body, config());
};
