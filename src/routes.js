import Inicio from "./rutas/Inicio.svelte";
import Contactos from "./rutas/Contactos.svelte";
import Acerca from "./rutas/Acerca.svelte";
import Errorpag from "./rutas/Error.svelte";

const routes = {
  "/": Inicio,
  "/acerca/:id/:nombre?": Acerca,
  "/contactos": Contactos,
  "*": Errorpag,
};

export default routes;
