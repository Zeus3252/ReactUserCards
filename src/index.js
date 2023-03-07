import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './image/profile1.png'
import profile2 from './image/profile2.png'
import profile4 from './image/profile4.gif'
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
    return(
        <div className = "ui comments">
           <UserCard>
            <SingleComment 
                 name = "Faust" 
                 message = "Back to square one" 
                 time = "Today at 4:00AM" 
                 picture  = {profile4}/>
           </UserCard>

        <UserCard>
           <SingleComment 
           name = "Johnny" 
           message = "Yo what's up Faust" 
           time = "Today at 5:00AM" 
           picture  = {profile2}/> 
        </UserCard>

        <UserCard>
           <SingleComment 
           name = "Joe"  
           message = "Sup guys" 
           time = "Today at 6:00AM" 
           picture  = {profile1}/> 
        </UserCard>   
        </div>
       
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

