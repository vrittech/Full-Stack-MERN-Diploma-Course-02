import jwt_decode from "jwt-decode";
import { isEmpty } from "lodash";

const getUserDetailsFromToken = (token) => {
  const userData = jwt_decode(token);
  if (userData && isEmpty(userData)) {
    return {};
  }
  return userData;
};

export default getUserDetailsFromToken;
