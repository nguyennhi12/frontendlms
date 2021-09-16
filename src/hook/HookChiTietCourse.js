import {useState, useEffect, useCallback} from 'react';

import  RoadMaps  from "../configs/Course";
const initroadmapcontent={"idRoadMap": "",
    "roadMap": null,
    "title": "",
    "content": "",
    "createAssignment": [],
    "documents":[]};

export const HookChiTietCourse=({id, idCourse})=>{
    var initposition = -1;
    var initpositionass = 0;
    const [results, setresult]=useState([]);
    const [position, setposition]= useState(initposition)
    const[roadmapcontent, setroadmapcontent]= useState(initroadmapcontent);
    const [positionass, setpositionass]= useState(initpositionass)
    const[check, setcheck]=useState(false)
    const fetchRoadmap = useCallback( async()=>{
        try{
            setposition(0)
            const detail=await RoadMaps.getRoadmapContents(id);   
            if(detail.success==true){
                setcheck(true);
            }         
            setresult(detail.data);             
            setroadmapcontent(results[0])            
            setposition(0)
            
        }catch(error){
           
        }
       
    },[results, id])        
    
    useEffect(()=>{ 
        try{
            if((position<0 || check==false)){ 
                fetchRoadmap();
            }
            
            else{
                setroadmapcontent(results[position])   
                   
               
            }
        }catch{

        }
        
    },[fetchRoadmap,position,check] )
    
    useEffect(()=>{ 
       setposition(initposition)
       setpositionass(0)
    
       
    },[id] )   
    
    
   
   
    const [results_details, setresult_details]=useState([]);
    const [position_details, setposition_details]= useState(-1)
    const [course, setcourse]= useState({})
    const getdata = useCallback( async()=>{
        try{
            const detail_nav=await RoadMaps.getDetailCourses(idCourse);
            setresult_details(detail_nav.data);
            setcourse(detail_nav.courses)
            setposition_details(0)
            console.log(course)
        }catch(error){
           
        }
       
    },[])        
    
    
    useEffect(()=>{
        async function fetchdata(){
            try{
                if(results_details.length===0 && position_details<0){
                    await getdata();                
                }
                else{                
                   
                }
            }catch{

            }
           
        }
        fetchdata()
    }, [results_details, position_details, getdata])
    return {results, results_details, position, setposition, positionass, setpositionass, roadmapcontent, course};
}


