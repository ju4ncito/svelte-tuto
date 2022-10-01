<script>
  import Router from "svelte-spa-router"; //siempre se importa solo
  import { link, push } from "svelte-spa-router";
  import routes from "./routes.js";

  function pagina() {
    push("/acerca/45");
  }

  let nombre = "juancito";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <span>Svelte rutas</span>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon" />
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/" use:link>Inicio </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/acerca/123/{nombre}" use:link>Acerca de</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contactos" use:link>Contactos</a>
      </li>
      <li class="nav-item" />
    </ul>
  </div>
</nav>

<button class="btn btn-warning" on:click={pagina}>acerca de</button>
<Router {routes} />
