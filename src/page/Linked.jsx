import { Link } from "react-router"
import { HOME, UNKNOWN_PAGE } from "../paths"

const Linked = () => {
    return (
        <>
            <h1>Linked</h1>
            <p>You are now on the linked page.</p>
            <p>
                Go <Link to={HOME}>back</Link> or go to <Link to={UNKNOWN_PAGE}>unknown page.</Link>
            </p>
        </>
    )
}

export default Linked
