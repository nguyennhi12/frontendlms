import React from 'react'
import SidebarTeacher from '../SidebarTeacher/SidebarTeacher'
import './Chitietkhoahoc.css'
import {BsFillPeopleFill} from 'react-icons/bs'
import {AiOutlineClockCircle, AiOutlineBell} from 'react-icons/ai'
import {FaPlaceOfWorship, FaCheck} from 'react-icons/fa'
function Chitietkhoahoc() {
  
    return (
        <div className="wrap">
            <SidebarTeacher/>
            <div className="wrap-content">
            
            <div classNameName="content">
                <h2 className="header-title">HTML, CSS Tips & Trick</h2>

                
                  
                  <div className="content__learn">
                        <span className= "content__learn-info">HTML, CSS Tips & Trick</span>
                        <div className= "content__learn-course">Tutorials về HTML, CSS, UI, UX sẽ được tổng hợp tại 
                            khóa học này, các video có 
                            nội dung ngắn gọn, súc tích giúp học viên có thể 
                            ứng dụng ngay vào thực tế</div>
                        <div className= "content__learn-get">Bạn đã học được gì</div>
                        <div className="content__learn-get-info"> <FaCheck style={{color:'orange',marginTop:'-5px', marginRight:'5px'}}/> Cách làm đúng đắn trong thực tế (best practice)</div>
                        <div> <FaCheck style={{color:'orange',marginTop:'-5px', marginRight:'5px'}}/>Các thủ thuật, kinh nghiệm xây dựng UI, UX</div>

                 </div>
              
            </div> 
            <div classNameName="card-info">
                <div className="card">
            <img
            src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt=""
            className="card-image"
            />
            <div className="card-content">
                <div className="card-top">
                    <h3 className="card-title">Khóa học html css</h3>
                    <span><AiOutlineBell style={{marginTop:'-5px', marginRight:'5px'}}/>Trình độ cơ bản</span>
                    <span> <BsFillPeopleFill style={{marginTop:'-5px', marginRight:'5px'}}/> Số sinh viên trong lớp: 3</span>
                    <span><AiOutlineClockCircle style={{marginTop:'-5px', marginRight:'5px'}}/>Thời lượng: 3</span>
                    
                    <span><FaPlaceOfWorship style={{marginTop:'-5px', marginRight:'5px'}}/>Học mọi lúc mọi nơi</span>
                </div>
                <div className="card-bottom">
                  
                   
                    <button className="card-live">Xem danh sách sinh viên</button>
                    <button className="card-live">Danh sách các bài kiểm tra</button>
                    <button className="card-live">Danh sách bài tập</button>
                    <button className="card-live">Quản lý kế hoạch</button>
                    <button className="card-live">Đề cử mentor</button>


                </div>
                </div>
                </div>
                </div>
            </div>
        </div>

       
    )
}

export default Chitietkhoahoc
