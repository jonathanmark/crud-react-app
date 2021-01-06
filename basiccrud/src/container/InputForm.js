import React  from 'react';
import useInputForm from '../components/AddUser';
// import {GlobalContext} from '../context/GlobalContext';
import {
    Form, 
    FormGroup,
    Label,
    Input, 
    Button
} from 'reactstrap'

const InputForm = () => {
    // const {updateButton} = useContext(GlobalContext);
    const {handleChange, handleSubmit, users} = useInputForm();
    return (
        <div className = "w-75 p-5">
            <Form onSubmit = {handleSubmit}>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type = "text" name = "name" className = "form-control form-control-lg" placeholder = "Enter Name" value = {users.name || ''} onChange = {handleChange} required = {true}></Input>
                    <Label>Email</Label>
                    <Input type = "email" name = "email" className = "form-control form-control-lg" placeholder = "Enter email" value = {users.email || ''} onChange = {handleChange} required = {true}></Input>
                    <Label>Contact</Label>
                    <Input type = "text"  name = "phone" className = "form-control form-control-lg"  placeholder = "Enter contact number" value = {users.phone || ''} onChange = {handleChange} required = {true}></Input>
                </FormGroup>
                <Button type = "submit">Add</Button>
                {/* {updateButton ? <Button className = "btn btn-warning">Update</Button> : <Button type = "submit">Add</Button>} */}
            </Form>
        </div>
    )
}

export default InputForm;
