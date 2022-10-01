<script>
  import Router from "svelte-spa-router";
  import routes from "./routes.js";
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
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="nav-link">Inicio </a>
      </li>
      <li class="nav-item">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="nav-link">Acerca de</a>
      </li>
      <li class="nav-item">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="nav-link">Contactos</a>
      </li>
      <li class="nav-item" />
    </ul>
  </div>
</nav>

<Router {routes} />
