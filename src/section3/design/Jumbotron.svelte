<script>
  export let nombre;

  import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from "svelte";
  let mostrar;

  function entrar() {
    mostrar = true;
  }

  function salir() {
    mostrar = false;
  }
</script>

<div class="jumbotron mt-4" on:mouseenter={entrar} on:mouseleave={salir}>
  <h1>{nombre}</h1>
  <h2>
    <slot name="subtitulo">
      <span>Suybtitulo</span>
    </slot>
  </h2>
  <h3>
    <slot name="parrafo" />
  </h3>
  <slot {mostrar} />
</div>

<style>
  h2 {
    color: red;
    font-weight: bolder;
    text-decoration: underline;
  }
</style>
