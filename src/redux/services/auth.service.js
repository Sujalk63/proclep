import axios from "axios";
import { Navigate } from "react-router-dom";

const login = (email, password, rememberMe) => {
  return axios
    .post(process.env.REACT_APP_API_URL + "user/signin", {
      email,
      password,
    })
    .then((response) => {
      if ( response.data.userInfo.token && response.data.userInfo.isActive === 1) {

        if ( !rememberMe ) {
          response.data.userInfo.expiry = new Date().getTime() + 1000 * 60 * 30;
        }

        const userObj = 
        { 
          id: response.data?.userInfo?.id,
          roleId: response.data?.userInfo?.roleId,
          firstName: response.data?.userInfo?.firstName,
          lastName: response.data?.userInfo?.lastName,
          email: response.data?.userInfo?.email,
          profileImage: response.data?.userInfo?.profileImage,
          expiry: response.data?.userInfo?.expiry,
          token: response.data?.userInfo?.token,
        }

        localStorage.setItem("_stl",JSON.stringify(userObj))

      }
      return response.data.userInfo;
    });
};

const logout = () => {
  localStorage.removeItem("_stl");
  <Navigate to="/login" />;
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { login, logout };
