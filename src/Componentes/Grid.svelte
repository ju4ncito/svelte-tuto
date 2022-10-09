<script>
  import Card from "./Card.svelte";

  export let peliculas;
</script>

<div class="row mt-3">
  {#each peliculas as item}
    <div class="col-sm-4">
      <Card title={item.title} image={item.poster_path} />
    </div>
  {/each}
</div>
