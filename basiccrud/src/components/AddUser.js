import {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {GlobalContext} from '../context/GlobalContext';
import axios from 'axios';


const useInputForm = () => {
    const {loadUsers} = useContext(GlobalContext);
    let history = useHistory();
    const [users, setUsers] = useState({
        name: '',
        email:'',
        phone:''
    })
    // const {name, email, phone} = users;
    const handleChange = (e) => {
        setUsers({...users, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users/", users)
                .then(response => {
                    console.log(response.request)
                    alert("User has been added successfully")
                })
                .catch(error => console.log(error));
        history.push("/");  
        loadUsers();
    };

    return {handleChange, handleSubmit, users}
}

export default useInputForm;
