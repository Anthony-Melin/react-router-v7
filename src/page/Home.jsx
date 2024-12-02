import { Link } from "react-router"
import { LINKED_PAGE } from "../paths"

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <p>Here is the home page !</p>
            <p>
                What would happen if you click on <Link to={LINKED_PAGE}>this</Link> link ?
            </p>
        </>
    )
}

export default Home
