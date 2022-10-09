<script>
  import Card from "./Card.svelte";
  import { push } from "svelte-spa-router";

  export let peliculas;
</script>

<div class="row mt-3">
  {#each peliculas as item}
    <div class="col-sm-4">
      <Card
        title={item.title}
        image={item.poster_path}
        on:ver-mas={() => push("/pelicula/" + item.id)}
      />
    </div>
  {/each}
</div>
