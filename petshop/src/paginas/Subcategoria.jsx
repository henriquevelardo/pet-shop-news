import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ListaPosts from "../componentes/ListaPosts";

const Subcategoria = () => {
    const { subcategoria } = useParams()

    return (
        <ListaPosts url={`/posts?subcategoria=${subcategoria}`}/>
    )
} 

export default Subcategoria;