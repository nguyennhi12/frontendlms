import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem} from 'react-bootstrap'
//Styles


const Thumb=({title,titleId,clickable})=>(    
    <div>
        {clickable?(
            <Link to={`/chitietcourse_teachers?id=${titleId}`}   style={{textDecoration:'none', fontSize:'1vmax'}}>
                <NavItem class="nav-link active text-white" >{title}</NavItem>
                
            </Link>
        ):(
            <NavItem class="nav-link active text-white" >{title}</NavItem>
        )}
        
    </div>
);

export default Thumb;