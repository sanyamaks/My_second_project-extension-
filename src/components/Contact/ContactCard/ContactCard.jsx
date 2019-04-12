import React from "react";

function ContactCard (props){
    console.log(props)
        return(
            <div className="contact__card">
                <img align="center" src={props.imgUrl}/>
                <h3><font color="#3AC1EF">{props.name}</font></h3>
                <p className="number__phone"
                   style={{display: props.phone ? "block" : "none"}}>Phone: {props.phone}</p>
                <p className="email__user" style={{display : !props.email && "none"}}>Email: {props.email}</p>
            </div>
    )}

export default ContactCard;