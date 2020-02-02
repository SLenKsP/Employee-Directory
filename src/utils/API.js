import axios from "axios";
const BaseURL = "https://randomuser.me/api/?results=40&nat=us&inc=id,picture,name,email,phone,dob";

export default {
    getEmployeeData: function () {
        return axios.get(BaseURL);
      }
}