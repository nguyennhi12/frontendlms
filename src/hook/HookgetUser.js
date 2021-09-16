import {useState, useEffect, useCallback} from 'react';
import  Authentication  from "../configs/Authentication";
import  Course  from '../configs/Course';
export const HookgetUser=()=>{
    
    const [user, setuser]=useState([]);
    const[check, setcheck]=useState(false)
    const [ error, seterror]=useState(false)
    const getUser = useCallback( async()=>{
        try{            
            const detail=await Authentication.getUser();             
            if(detail==null){
                seterror(true);
            }else{
                if(detail.success==true){
                    setcheck(true)
                }
                seterror(false);
                setuser(detail.data)
            }
            
        }catch(error){
            seterror(true);
        }
       
    },[])      
    
    useEffect(()=>{ 
        try{
            if(check==false){ 
                getUser();
            }
            
            else{
                console.log(error)
                   
               
            }
        }catch{
            
        }
        
    },[check, getUser] )  


    return {user, error};
}


