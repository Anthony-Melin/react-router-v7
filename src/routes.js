import { route } from "@react-router/dev/routes";
import { HOME, LINKED_PAGE } from "./paths";

export default [
    route(HOME, 'page/Home.jsx'),
    route(LINKED_PAGE, 'page/Linked.jsx')
]
