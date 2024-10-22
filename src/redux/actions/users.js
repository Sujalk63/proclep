import {
    RETRIEVE_USERS,
    RETRIEVE_LOGGEDIN_USER,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER,
    RESTORE_USER,
    UPDATE_USER_STATUS,
    VERIFY_TAX_INFO,
} from "./types";
  
import UserService from "../../redux/services/user.service";

export const retrieveUsers = (roleId, keyword = '', page = '', perPage = '', excludeId, filterUser, all = true, active = true) => async (dispatch) => {
  try {
    const res = await UserService.getAll(roleId, keyword, page, perPage, excludeId, filterUser, all, active);
    dispatch({
      type: RETRIEVE_USERS,
      payload: res.data.listUsers,
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveLoggedInUser = ( id ) => async (dispatch) => {
  try {
    const res = await UserService.get ( id );
    dispatch({
      type: RETRIEVE_LOGGEDIN_USER,
      payload: { user : res.data.userInfo },
    });
    
  } catch (err) {
    console.log(err);
    
  }
};

export const createUser = (data) => async (dispatch) => {
  try {
    const res = await UserService.create(data);

    dispatch({
      type: CREATE_USER,
      payload: res.data.userInfo,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateUser = (id, data) => async (dispatch) => {
  try {
    const res = await UserService.update(id, data);

    dispatch({
      type: UPDATE_USER,
      payload: res.data.userInfo,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateUserStatus = (id, data) => async (dispatch) => {
  try {
    const res = await UserService.updateStatus(id, data);

    dispatch({
      type: UPDATE_USER_STATUS,
      payload: res.data.listUsers,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const verifyUserTaxInfo = (id, data) => async (dispatch) => {
  try {
    const res = await UserService.verifyUserTaxInfo(id, data);

    dispatch({
      type: VERIFY_TAX_INFO,
      payload: res.data.userInfo,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteUser = (id, data) => async (dispatch) => {
  try {
    const res = await UserService.deleteUser(id, data);

    dispatch({
      type: DELETE_USER,
      payload: res.data.listUsers,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const restoreUser = (id, data) => async (dispatch) => {
  try {
    const res = await UserService.restore(id, data);

    dispatch({
      type: RESTORE_USER,
      payload: res.data.listUsers,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};