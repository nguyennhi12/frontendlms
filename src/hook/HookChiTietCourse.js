import {useState, useEffect, useCallback} from 'react';

import  RoadMaps  from "../configs/Course";
const initroadmapcontent={"idRoadMap": "",
    "roadMap": null,
    "title": "",
    "content": "",
    "createAssignment": [],
    "documents":[]};

export const HookChiTietCourse=({id})=>{
    var initposition = -1;
    var initpositionass = 0;
    const [results, setresult]=useState([]);
    const [position, setposition]= useState(initposition)
    const[roadmapcontent, setroadmapcontent]= useState(initroadmapcontent);
    const [positionass, setpositionass]= useState(initpositionass)
    const fetchRoadmap = useCallback( async()=>{
        try{
            setposition(0)
            const detail=await RoadMaps.getRoadmapContents(id);            
            setresult(detail.data);             
            setroadmapcontent(results[0])
            console.warn(results)
            setposition(0)
            
        }catch(error){
           
        }
       
    },[results, id])        
    
    useEffect(()=>{ 
        try{
            if((position<0 || results==null)){ 
                fetchRoadmap();
            }
            
            else{
                setroadmapcontent(results[position])   
                   
               
            }
        }catch{

        }
        
    },[fetchRoadmap,position,results] )
    
    useEffect(()=>{ 
       setposition(initposition)
       setpositionass(0)
       console.log(position)
       
    },[id] )   
    
    
   
   
    const [results_details, setresult_details]=useState([]);
    const [position_details, setposition_details]= useState(-1)
    const [course, setcourse]= useState({})
    const getdata = useCallback( async()=>{
        try{
            const detail_nav=await RoadMaps.getDetailCourses();
            setresult_details(detail_nav.data);
            setcourse(detail_nav.courses)
            setposition_details(0)
           
        }catch(error){
           
        }
       
    },[])        
    
    
    useEffect(()=>{
        async function fetchdata(){
            if(results_details.length===0 && position_details<0){
                await getdata();                
            }
            else{                
               
            }
        }
        fetchdata()
    }, [results_details.length, position_details, getdata])


    const [results_infos, setresult_infos]=useState([]);   
    
    const getdatainfocourse = useCallback( async()=>{
        try{
            const info_course=await RoadMaps.getInfoCourses();
            setresult_infos(info_course.data);           
           
        }catch(error){
           
        }
       
    },[])        
    
    
    
    
    return {results, results_details, position, setposition, positionass, setpositionass, roadmapcontent, course};
}


