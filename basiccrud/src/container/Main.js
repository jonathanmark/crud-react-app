import React,{useState} from 'react';
import { ListUsers } from '../components/ListUsers';
import InputForm from './InputForm';
import UpdateUser from '../components/UpdateUser'

export const Main = () => {

    const [isUpdating, setIsUpdating] = useState(false);

    const setToTrueAndGetUserData = (userToUpdate) => {
        setIsUpdating(true);
        const userId = userToUpdate;
    }

    console.log("isUpdating is:" + isUpdating);
    return (
        <div>
            {isUpdating ? <UpdateUser userToUpdate = {setToTrueAndGetUserData.userId}/> : <InputForm/>}
            <ListUsers setToTrueAndGetUserData={setToTrueAndGetUserData}/>
        </div>
    )
    
}