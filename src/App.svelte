<script>
  import Menu from "./Componentes/Menu.svelte";
  import Router from "svelte-spa-router";
  import { link } from "svelte-spa-router";
  import routes from "./routes.js";
</script>

<Menu />
<div class="container">
  <Router {routes} />
</div>
