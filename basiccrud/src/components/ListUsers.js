import React, { useContext} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
// import axios from 'axios';
import {GlobalContext} from '../context/GlobalContext';
// import UpdateUser from '../components/UpdateUser';


export const ListUsers = () => {
    const {users, deleteUser} = useContext(GlobalContext);
    return (
        <div>
            <table className = "table border shadow ml-2">
                <thead className = "thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                { users.map((user) => (
                        <tr key = {user.id}>
                                <th scope = "row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link className = "btn btn-primary mr-2" to = {`/view/${user.id}`}>View</Link>
                                    <Button className = "mr-2" color = "warning" onClick = {() => deleteUser(user.id)} >Update</Button>
                                    <Button color = "danger" onClick = {() => deleteUser(user.id)} >Delete</Button>
                                    
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
