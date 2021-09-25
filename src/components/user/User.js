import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities/fakedb';
import './User.css'
const User = (props) => {
    const {name, email, _id, about} = props.user;
    const handleClick = (id) => {
       addToDb(id)
    }
    const hanldeDelete = id => {
        deleteFromDb(id)
    }
     return (
        <div className='user'>
            <h1 className='fs-1'>Name : {name}</h1>
            <p>Email : {email}</p>
            <p>id : {_id}</p>
            <p>{about}</p>
            <button onClick={() => handleClick(_id)} className='btn btn-warning'>Buy Now</button> 
            <button onClick={() => hanldeDelete(_id)} className='btn btn-danger'>Delete</button>
        </div>
    );
};

export default User;