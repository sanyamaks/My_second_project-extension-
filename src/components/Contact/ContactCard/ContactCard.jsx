import React from "react";

function ContactCard (props){
    console.log(props)
        return(
            <div className="contact__card">
                <img align="center" src={props.imgUrl}/>
                <h3><font color="#3AC1EF">{props.name}</font></h3>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
    )}

export default ContactCard;