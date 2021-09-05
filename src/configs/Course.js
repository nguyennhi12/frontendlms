import { API_URL, Course, RoadMaps, CreateAssigments, RoadMapContents } from "./config";

const apiSettings = {
    getDetailCourses: async () => {
        
        const endpoint = `${API_URL}${Course}/getDetailCourse/b8d5f3d3-c1db-4dc0-a5cc-f2699cca9277`;
        const result = await( await fetch(endpoint,
            {
                method:'GET',                
                headers:{                                  
                    "Authorization":"Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ndXllbnBoYW5uaGF0dHVAZ21haWwuY29tIiwibmJmIjoxNjMwMzc4MzE5LCJleHAiOjE2MzA5ODMxMTksImlhdCI6MTYzMDM3ODMxOSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMCJ9.5kUC6HfQONR_UNHQi99wJSYLKBXbPONNmeX4gkoQTDA"
                }
            })).json();             
        return result;
      },

      getRoadmapContents: async (idroadmap) => {
       
        const endpoint = `${API_URL}${RoadMapContents}/getAllRoadMapContentsOfRM/${idroadmap}`;
        const result = await( await fetch(endpoint,
            {
                method:'GET',    
                headers:{                                  
                    "Authorization":"Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ndXllbnBoYW5uaGF0dHVAZ21haWwuY29tIiwibmJmIjoxNjMwMzc4MzE5LCJleHAiOjE2MzA5ODMxMTksImlhdCI6MTYzMDM3ODMxOSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMCJ9.5kUC6HfQONR_UNHQi99wJSYLKBXbPONNmeX4gkoQTDA"
                }         
               
            })).json();        
            
        return result;
      },

      getAssigment: async () => {
        
        const endpoint = `${API_URL}${Course}/getDetailCourse/b8d5f3d3-c1db-4dc0-a5cc-f2699cca9277`;
        const result = await( await fetch(endpoint,
            {
                method:'GET',                
                headers:{                                  
                    "Authorization":"Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ndXllbnBoYW5uaGF0dHVAZ21haWwuY29tIiwibmJmIjoxNjMwMzc4MzE5LCJleHAiOjE2MzA5ODMxMTksImlhdCI6MTYzMDM3ODMxOSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMCJ9.5kUC6HfQONR_UNHQi99wJSYLKBXbPONNmeX4gkoQTDA"
                }
            })).json();        
        
        return result;
      },
}

export default apiSettings
