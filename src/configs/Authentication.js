import { API_URL, Authentication } from "./config";

const apiSettings = {
    Register: async (person) => {
        console.warn(person);
        const endpoint = `${API_URL}${Authentication}register`;
        const result = await( await fetch(endpoint,
            {
                method:'POST',
                body: JSON.stringify(person),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                }
            })).json();        
        console.warn("result: ", result);
        return result;
      }
}

export default apiSettings
