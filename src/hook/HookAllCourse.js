import {useState, useEffect, useCallback} from 'react';
import  Course  from "../configs/Course";

export const HookAllCourse=()=>{ 
    const [results, setresult]=useState([]);    
    const fetchRoadmap = useCallback( async()=>{
        try{  
            console.warn(results)
            const detail=await Course.getAllCourse();            
            setresult(detail.data);            
              
        }catch(error){
            console.warn(error)
        }
       
    },[results])        
    
    useEffect(()=>{ 
        try{
            if((results.length==0)){ 
                fetchRoadmap();
                console.warn(results)
            }        
            else{   
                console.warn(results)
               
                    
                   
               
            }
        }catch(error){
            console.warn(error)
        }
        
    },[results,fetchRoadmap] )
    
   

    
    
    return {results};
}


