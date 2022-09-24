<script>
  import Card from "./Card.svelte";
  export let post;

  function verMas() {
    alert("vermasinfo");
  }
  function favorito() {
    alert("anashley");
  }
</script>

<div class="row mt-3">
  {#each post as cards}
    <div class="col-sm-4">
      <Card
        titulo={cards.titulo}
        descripcion={cards.descripcion}
        imagen={cards.imagen}
        on:ver-mas={verMas}
        on:favorito={verMas}
      />
    </div>
  {/each}
</div>
