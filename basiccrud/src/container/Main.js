import React,{useState} from 'react';
import { ListUsers } from '../components/ListUsers';
import InputForm from './InputForm';
import UpdateUser from '../components/UpdateUser'

export const Main = () => {

    const [isUpdating, setIsUpdating] = useState(false);
    const [userToUpdate, setUserToUpdate] = useState(null);

    const setToTrueAndGetUserData = (userId) => {
        setIsUpdating(true);
        console.log("[Main.js] User to update is:" + userId);
        setUserToUpdate(userId);
    }

    return (
        <div>
            {isUpdating ? <UpdateUser userToUpdate = {userToUpdate}/> : <InputForm/>}
            <ListUsers setToTrueAndGetUserData={setToTrueAndGetUserData}/>
        </div>
    )
    
}