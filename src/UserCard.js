import React from 'react';
import "./UserCard.css";

const UserCard = (props) => {
    return(
        
        <div className = "ui card">
            <div className = "content">
                  <div className = "header">{props.children}</div>
                     <div className = "description">
                         
                  </div>
            </div>
            <div className = "UI button button">
                <i className = "add icon"></i>
                Add Friend
            </div>
        </div>
       
    )

}

export default UserCard;