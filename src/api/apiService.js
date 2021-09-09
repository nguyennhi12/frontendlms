import axios from 'axios';
let API_URL=" https://uy72xy9qjk.execute-api.ap-southeast-1.amazonaws.com/api";
export default function callApi(endpoint, method='PUT',body){
    return axios({
        method,
        url:`${API_URL}/${endpoint}`,
        headers:{
            "Authorization":"Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imluc3RydWN0b3JAZ21haWwuY29tIiwibmJmIjoxNjMwNzI1NzQ5LCJleHAiOjE2MzEzMzA1NDksImlhdCI6MTYzMDcyNTc0OSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMCJ9.tQdLALot1HbjEwQNBeqyqplOjhGhLcQ6Tm82TauBSlo"
        },
        data:body,
    }).catch(e=>{
        console.log(e)
    })
}



