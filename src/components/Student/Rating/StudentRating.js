import { auto } from 'async';
import React, {useState} from 'react'
import {FaStar} from 'react-icons/fa'

const colors ={
  orange:"#FFBA5A",
  grey:"#a9a9a9"
}
function StudentRating() {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);


  const handleClick = value =>{
    setCurrentValue(value)
  }

  const handleMouseOver = value =>{
    setHoverValue(value)
  }

  const handleMouseLeave = ()=>{
    setHoverValue(undefined)
  }

  return (
    <div style={styles.rating}>
      <div style={styles.feedback}>
      <div>
        <h1>Công nghệ phần mềm</h1>
        <div>Ngày bắt đầu</div>
        <div>Ngày kết thúc</div>
        <div>Khóa học này đánh giá mấy sao</div>
      </div>

      <div style={styles.wrap}>
          <div style ={styles.stars}>
            {stars.map((_,index)=>{
              return(
                <FaStar key ={index}
                size ={50}
                style={{
                  marginRight:10,
                  cursor:"pointer",
                  
                }}
                color={(hoverValue||currentValue) > index ?colors.orange:colors.grey}
                onClick ={()=>handleClick(index+1)}
                onMouseOver={()=>handleMouseOver(index+1)}
                onMouseLeave = {handleMouseLeave}
                />
              )
            })}

          </div>
          <div>Nhận xét của bạn khóa học này như thế nào ? </div>
          <textarea 
            placeholder = "Nhận xét"
            style = {styles.textarea}
          />
          <div style={styles.listButton}>
            <button style={styles.button}>Đánh giá</button>
            <button style={styles.button}>Cancel</button>

          </div>
         

      </div>
    </div>
    </div>
    
  )
}

const styles = {
  rating:{
    width:800,
    height:800
    
  },
  feedback:{
    display:"inline-block",
    marginLeft:700,
    padding:"30px",
    marginTop:100,
    backgroundColor:"#E5E5E5",
    borderRadius:"10px"
    
  },
  wrap :{
    
    display:"flex",
    flexDirection:"column",

  },
  textarea:{
    border :"1px solid #a9a9a9",
    borderRadius : 10,
    width:560,
    padding:10,
    margin:"20px 0 ",
    minHeight: 60
  },
  listButton:{
    display:"flex",
    justifyContent:"space-around"

  },
  button:{
    color:"#fff",
    border :"1px solid #a9a9a9",
    borderRadius : 5,
    backgroundColor:"#1294F2",
    width:180,
    padding:10 ,
   
  }
}

export default StudentRating
