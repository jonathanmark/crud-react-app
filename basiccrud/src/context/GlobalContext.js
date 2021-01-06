import React, {useState, createContext, useEffect} from 'react';
import axios from 'axios';

export const GlobalContext = createContext();


export const GlobalProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [updateButton, setUpdateButton] = useState(false);
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        await axios.get("http://localhost:3001/users/")
       .then((response) => setUsers(response.data))
       .catch((error) => console.log(error));
    }

    // const fetchUsers = async () => {
    //     const response = await axios.get(`http://localhost:3001/users/${id}`);
    //     setUser(response.data)
    // }

    
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`)
                                    .then(response => console.log(response.request))
                                    .catch((error) => console.log(error));
        loadUsers();
    }

    return (
        <GlobalContext.Provider value = {{users, setUsers, deleteUser, loadUsers, updateButton, setUpdateButton}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
