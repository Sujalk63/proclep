import axios from "axios";
import { authHeader, multipartHeader } from "./auth-header";

const getAll = (roleId, keyword, page, perPage, excludeId, filterUser, all, active) => {
  return axios.get(process.env.REACT_APP_API_URL + "users/list", {
    headers: authHeader(),
    data: {},
    params: {
      roleId: roleId,
      keyword: keyword,
      page: page,
      perPage: perPage,
      excludeId: excludeId,
      filterUser,
      all,
      active
    },
  });
};

const get = (id) => {
  return axios.get(process.env.REACT_APP_API_URL + `user/view`, {
    headers: authHeader(),
    data: {},
    params: {
      userId: id,
    },
  });
};

const create = (data) => {
  return axios.post(process.env.REACT_APP_API_URL + `user/create`, data, {
    headers: multipartHeader(),
  });
};

const update = (id, data) => {
  return axios.put(process.env.REACT_APP_API_URL + `user/update/${id}`, data, {
    headers: multipartHeader(),
  });
};

const updateStatus = (id, data) => {
  return axios.put(
    process.env.REACT_APP_API_URL + `user/updateStatus/${id}`, data,
    {
      headers: authHeader(),
    }
  );
};

const verifyUserTaxInfo = (id, data) => {
  return axios.put(
    process.env.REACT_APP_API_URL + `user/verifyUserTaxInfo/${id}`,
    data,
    {
      headers: authHeader(),
    }
  );
};

const deleteUser = (id, data) => {
  return axios.delete(process.env.REACT_APP_API_URL + `user/delete/${id}`, {
    headers: authHeader(),
    data,
  });
};

const restore = (id, data) => {
  return axios.get(process.env.REACT_APP_API_URL + `user/restore/${id}`, {
    headers: authHeader(),
    params: data
  });
};

export default {
  getAll,
  get,
  create,
  update,
  updateStatus,
  verifyUserTaxInfo,
  deleteUser,
  restore
};
