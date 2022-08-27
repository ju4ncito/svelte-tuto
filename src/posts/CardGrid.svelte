<script>
  import Card from "./Card.svelte";
  export let post;
</script>

<div class="row mt-3">
  {#each post as cards}
    <div class="col sm">
      <Card
        titulo={cards.titulo}
        descripcion={cards.descripcion}
        imagen={cards.imagen}
      />
    </div>
  {/each}
</div>
