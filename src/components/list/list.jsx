import React from "react";
import Student from "./student/student.jsx";
import './list.css';

function List({d,r,t}){
    const handleClick=()=>{
        r();
    }
    const ot=(id)=>{
        t(id);
    }
    return(
        <div className="container">
            <div className="list">
                <h3>List of Students</h3>
                {d.map((D)=>{
                    return(
                        <Student D={D} key={D.id} ot={ot}/>
                    )
                })}
                <input type="button" value="Add Student" onClick={handleClick} className="btn"/>
            </div>
            <div className="count">
                <h3>Total Students Present Today: {d.length}</h3>
                <h3>Total Students Present Now: {d.filter(el=>el.out==="NA").length}</h3>
            </div>
        </div>
    )
}

export default List;