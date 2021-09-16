import axios from 'axios';
let API_URL=" https://uy72xy9qjk.execute-api.ap-southeast-1.amazonaws.com/api";
export default function callApi(endpoint, method='PUT',body){
    return axios({
        method,
        url:`${API_URL}/${endpoint}`,
        headers:{
            "Authorization":"Bearer " + localStorage.getItem("accessToken")
        },
        data:body,
    })
    // .catch(e=>{
    //     console.log(e)
    // })
}



