import {Link} from "react-router-dom";
import UsersItem from "./UsersItem";
export default function UsersList({users}) {
const usersElem = users.map(user => <UsersItem key={user.id} {...user}/>)
    return (
        <>
                <ul>
                    {usersElem}
                </ul>
        </>
    )
}