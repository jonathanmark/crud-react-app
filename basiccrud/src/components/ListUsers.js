import React, { useContext} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
// import axios from 'axios';
import {GlobalContext} from '../context/GlobalContext';
// import UpdateUser from '../components/UpdateUser';


export const ListUsers = ({setToTrueAndGetUserData}) => {
    const {users, deleteUser} = useContext(GlobalContext);

    const updateUser = () => {}

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
                                    <Link className = "btn btn-warning mr-2" to = {`/update/${user.id}`}>Update Old</Link>
                                    <Button className = "mr-2" color = "warning" onClick = {() => setToTrueAndGetUserData(user.id)} >Update New</Button>
                                    <Button color = "danger" onClick = {() => deleteUser(user.id)} >Delete</Button>
                                    
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
