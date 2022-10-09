<script>
  export let title;
  export let image;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function ver() {
    dispatch("ver-mas");
  }
</script>

<div class="card mb-3" style="width:18res;">
  <img
    src="https://image.tmdb.org/t/p/w500{image}"
    alt={title}
    width="100%"
    height="500"
  />

  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <button class="btn btn-primary" on:click={ver}> MORE</button>
  </div>
</div>
