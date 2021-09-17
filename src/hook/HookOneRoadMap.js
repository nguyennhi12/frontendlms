import {useState, useEffect, useCallback} from 'react';
import  RoadMaps  from "../configs/Course";
export const HookgetOneResult=({idroadmap})=>{
    const [results, setresults]= useState([])
    const[check, setcheck]=useState(false)
    const getdatainfocourse = useCallback( async()=>{
        try{
            console.log(idroadmap)
            const roadmap=await RoadMaps.getOneRoadMap(idroadmap);  
            console.log(results)
            setresults(roadmap.data)
            if(roadmap.success==true){
                setcheck(true)
            }
        }catch(error){
            console.log(error)
        }
       
    },[idroadmap])
    useEffect(()=>{
        async function fetchdata(){
            try{
                if(check==false){
                    await getdatainfocourse();   
                    console.log(results)       
                }
                else{  
                    console.log(results)   
                                
                
                }
            }catch{

            }
           
        }
        fetchdata()
    }, [getdatainfocourse,check])

  
    return { results};
}


