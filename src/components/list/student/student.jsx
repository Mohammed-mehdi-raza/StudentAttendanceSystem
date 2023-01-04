import React, { useState,useEffect } from "react";
import './student.css';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';

function Student({D,ot}){
    const [del,setDel]=useState(true);
    const handleClick=()=>{
        ot(D.id);
        setDel(false);
    }

    useEffect(()=>{
        if(D.out!=="NA"){
            setDel(false);
        }
    },[D])

    return(
        <div className="student">
            <p>{D.id}</p>
            <p>{D.name}</p>
            <p>CheckIn Time:<br/>{D.check}</p>
            <p>CheckOut Time:<br/>{D.out}</p>
            {
                del?<IconButton color="secondary" onClick={handleClick}>
                        <LogoutIcon/>
                    </IconButton>
                :<></>
            }
        </div>
    )
}

export default Student;