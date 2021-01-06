import React, { useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

const ViewUser = () => {
    const {id} = useParams();
    // const {users, setUsers} = useContext(GlobalContext);
    // const {name, email, phone} = users;
    const [users, setUsers] = useState({
        name: "",
        email: "",
        phone: ""
    })

    useEffect(() => {
        const fetchUsers = async () => {
        const response = await axios.get(`http://localhost:3001/users/${id}`)
        setUsers(response.data)
        console.log(response.request)
                                    
    }
        fetchUsers();
    }, [id])
    

    return (
        <div className = "ml-5 py-4">
            <h1 className = "display-4">ID: {id}</h1>
            <hr/>
            <ul className = "list-group w-50">
                <li className = "list-group-item">Name: {users.name}</li>
                <li className = "list-group-item">Email: {users.email}</li>
                <li className = "list-group-item">Contact: {users.phone}</li>
            </ul>
            <br/>
            <Link className = "btn btn-primary" to = "/">Back</Link>
        </div>
    )
}

export default ViewUser
