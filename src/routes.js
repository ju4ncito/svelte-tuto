import Inicio from "./Paginas/Inicio.svelte";
import Pelicula from "./Paginas/Pelicula.svelte";
import ErrorRuta from "./Paginas/ErrorRuta.svelte";

const routes = {
  "/": Inicio,
  "/pelicula/:id": Pelicula,
  "*": ErrorRuta,
};

export default routes;
