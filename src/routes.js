import { index, route } from "@react-router/dev/routes";
import { LINKED_PAGE } from "./paths";

export default [
    index('page/Home.jsx'),
    route(LINKED_PAGE, 'page/Linked.jsx')
]
