import React ,{useState,useEffect} from 'react'
import CardList from '../../components/Guest/Card/CardList'
import Carousel from 'react-bootstrap/Carousel'
import Footer from '../../components/Guest/Footer/Footer'
import Navbar from '../../components/Guest/Navbar/Navbar'
import Img from '../../images/homecourse.png'
import {AiOutlineSearch} from 'react-icons/ai'
import callApi from "../../api/apiService";
import './Home.css'
function Home() {
  
    const [courseName, setSearch] = useState('');
    const [test,setTest] = useState('')
    const [courses,setCourse] = useState ([]);
    const [find,setFind] = useState('')
    const searchChange = event=>{
        console.log(event.target.value);
        setSearch(event.target.value);
       
       
    }

    useEffect(() => {
        callApi(`Course/searchCourse?searchCourse=&pageSize=8&pageNumber=1`, "GET").then((res) => {
            // console.log(res.data.data[0].name)
           setCourse(res.data.data)
            
      
       
    
        });
    }, [])

    const handleInput = (e) =>{
        setFind(e.target.value)
    }
    const handleClick = (e) =>{  

        search(courseName)

    }
    const search = (e) => {
        e.preventDefault();
      // Update the document title using the browser API
      callApi(
        `Course/searchCourse?searchCourse=${find}&pageSize=8&pageNumber=1`,
        "GET"
      ).then((res) => {
        // console.log(res.data.data[0].name)
        setCourse(res.data.data);
      });
    };
    
    
       


    return (
        
        <>
        {/* <Navbar handleLoginClick ={handleLoginClick}/>
        <Login isShowLogin ={isShowLogin}/> */}
        <Navbar/>
        <Carousel  variant="dark" style={{paddingTop:'50px'}} >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img} height={600} width ={500}
                alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img} height={600} width ={500}
                alt="Second slide"
                />

             
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img} height={600} width ={500}
                alt="Third slide"
                />
              
               
            </Carousel.Item>
            </Carousel>
            <h5 style={{margin:'40px 0 0px 60px '}} >Danh sách các khóa học</h5>
            <label className="search-label" htmlFor="search-input">
                <input placeholder="Tìm kiếm" className="find" id="search-input" onChange={handleInput}/>
                <AiOutlineSearch className="icon-search" onClick={search}/>
            </label>
          
            <div className="cardlist">
                 <CardList coursesinfo ={courses}/>
            </div>
      
           <Footer/>
        </>
    )
}

export default Home
