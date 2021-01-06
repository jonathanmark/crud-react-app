import React from 'react';
import { ListUsers } from '../components/ListUsers';
import InputForm from './InputForm';


export const Main = () => {
    return (
        <div>
            {/* {updateButton ? <UpdateUser/> : <InputForm/>} */}
            <InputForm/>
            <ListUsers/>
        </div>
    )
}