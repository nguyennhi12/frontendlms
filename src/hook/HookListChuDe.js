import {useState, useEffect} from 'react';
const initstate ={
    Titles:[],
    //Contents:[]
}

export const HookListChuDe =()=>{
    const[state,setState]=useState(initstate);
    const [loading, setLoading]=useState(false);
    const [error,setError]=useState();
    const[check, setcheck]=useState(false)

    const FeatchTitles= async(page)=>{
        try{
            setLoading(true);
            setError(false)
            const newTitles= await [{id:0,title:'Chủ đề 1',content:'Nội dung 1',assTitle:'Assignment 1', ass:'Assignment: 1'}, 
                                    {id:1,title:'Chủ đề 2', content:'Nội dung 2',assTitle:'Assignment 2', ass:'Assignment: 2'},
                                    {id:2,title:'Chủ đề 3', content:'Nội dung 3',assTitle:'Assignment 3', ass:'Assignment: 3'}]
            console.log('dôoo')
            //const newContents=['Nội dung 1', 'Nội dung 2', 'Nội dung 3'];
            setState(prev=>({
                ...newTitles, Titles: [...newTitles]
            }))



        }catch(error){
            setError(true)
        }
    }



    
    //Search
    useEffect(()=>{        
        setState(initstate)
        FeatchTitles(1)
    },[])

    return {state};

}
