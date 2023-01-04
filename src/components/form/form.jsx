import React,{useState,useEffect} from "react";
import './form.css';

function Form({ren}){
    const [data,setData]=useState({name:"",id:"",check:"",out:"NA"});
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    useEffect(()=>{
        const current = new Date();
        const time = current.toLocaleTimeString("en-US");
        setData({...data,check:time});
    },[])

    const handleSubmit=()=>{
        ren(data);
    }

    return(
        <div className="form">
            <input type="text" name="name" id="Name" value={data.name} onChange={handleChange} placeholder="Student Name" required className="item1"/>
            <input type="number" name="id" id="id" value={data.id} onChange={handleChange} placeholder="Student Id" required className="item2"/>
            <input type="button" value="Add Attendance" onClick={handleSubmit} className="item3"/>
        </div>
    )
}

export default Form;