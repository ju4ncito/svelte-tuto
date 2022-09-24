<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let titulo;
  export let descripcion;
  export let imagen;

  function ver() {
    dispatch("ver-mas", { id: 123 });
  }

  function favorito() {
    dispatch("favorito", "hopla como estas");
  }
</script>

<div class="card" style="width: 18res;">
  <img src={imagen} alt={titulo} width="100%" height="100%" />
  <div class="card-body">
    <h5 class="card-title">{titulo}</h5>
    <p class="card-text">{descripcion}</p>
    <button on:click={ver} class="btn btn-primary">Ver mas...</button>
    <button on:click={favorito} class="btn btn-danger">favo...</button>
  </div>
</div>
