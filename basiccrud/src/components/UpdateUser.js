import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import {GlobalContext} from '../context/GlobalContext';
import axios from 'axios';
// import InputForm from '../container/InputForm';
import {
    Form, 
    FormGroup,
    Label,
    Input, 
    Button
} from 'reactstrap'

export const UpdateUser = () => {
    const {id} = useParams();
    let history = useHistory();
    // const {users, setUsers} = useContext(GlobalContext);
    const [users, setUsers] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const {name, email, phone} = users;

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUsers(result.data);
    };

    const handleChange = (e) => {
        setUsers({...users, [e.target.name]: e.target.value})
    };

    useEffect(() => {
        loadUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, users);
        history.push("/")  
        // loadUser();
    };

    return (
        // <InputForm />
        <div className = "w-75 p-5">
            <Form onSubmit = {handleSubmit}>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type = "text" name = "name" className = "form-control form-control-lg" placeholder = "Enter Name" value = {name || ''} onChange = {handleChange}></Input>
                    <Label>Email</Label>
                    <Input type = "email" name = "email" className = "form-control form-control-lg" placeholder = "Enter email" value = {email || ''} onChange = {handleChange}></Input>
                    <Label>Contact</Label>
                    <Input type = "text"  name = "phone" className = "form-control form-control-lg"  placeholder = "Enter contact number" value = {phone || ''} onChange = {handleChange}></Input>
                </FormGroup>
                <Button className = "btn btn-warning">Update</Button>
            </Form>
        </div>
    )
}

export default UpdateUser;

