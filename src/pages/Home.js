import {useEffect, useState} from "react";
import fetchUsers from "../API/fetchUsers";
import UsersList from "../components/UsersList";

export default function Home() {
    const [users, setUsers] = useState([]);
useEffect(() => {
    fetchUsers.then((data) => setUsers(data))
});
    return (

        <>
           <div>
               {users.length && <UsersList users={users}/>}
           </div>
        </>
    )
}