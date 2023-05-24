import React, { useEffect, useState } from "react";
import "../assets/css/blog.css";
import ListaCategorias from "../componentes/ListaCategorias";
import ListaPosts from "../componentes/ListaPosts";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { busca } from "../api/api";
import Subcategoria from "../paginas/Subcategoria";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

const Categoria = () => {
  const { id } = useParams();
  const { url, path } = useRouteMatch();

  const [subcategorias, setSubCategorias] = useState([]);

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>

      <ListaCategorias />

      <ul className="lista-categorias container flex">
        {subcategorias.map((subcategoria) => (
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPosts url={`/posts?categoria=${id}`} />
        </Route>

        <Route path={`${path}/:subcategoria`}>
          <Subcategoria />
        </Route>
      </Switch>
    </>
  );
};

export default Categoria;
