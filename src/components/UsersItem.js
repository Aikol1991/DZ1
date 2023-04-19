import {Link} from "react-router-dom";

export default function UsersItem({id, name}) {

    return (
        <>
            <li key={id}>
                <Link to={`/user/${id}`}>
                    {name}
                </Link>
            </li>
        </>
    )
}