import {
    RETRIEVE_USERS,
    RETRIEVE_LOGGEDIN_USER,
    UPDATE_USER,
    UPDATE_USER_STATUS,
    RESTORE_USER,
    DELETE_USER,
    VERIFY_TAX_INFO,
    CREATE_USER,
  } from "../actions/types";
  
  const initialState = { users : [], totalUserCount : 0 };

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case RETRIEVE_USERS:
      return {
        users: payload.rows,
        totalUserCount: payload.count,
      };

    case RETRIEVE_LOGGEDIN_USER:
      return payload;

    case CREATE_USER:
      return payload;

    case UPDATE_USER:
      return payload;

    case UPDATE_USER_STATUS:
      return {
        users: payload.rows,
        totalUserCount: payload.count,
      };

    case DELETE_USER:
      return {
        users: payload.rows,
        totalUserCount: payload.count,
      };
    
    case RESTORE_USER:
      return {
        users: payload.rows,
        totalUserCount: payload.count,
      };

    case VERIFY_TAX_INFO:
      return payload;

    default:
      return state;
  }
};

export default userReducer;