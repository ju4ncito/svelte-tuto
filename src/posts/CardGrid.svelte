<script>
  import Card from "./Card.svelte";
  export let post;

  let evento = "asd";
  function verMas(e) {
    alert("vermasinfo");
    console.log(e);
    evento = e.detail.id;
  }
  function favorito(event) {
    alert("anashley");
    console.log(event);
    evento = event.detail;
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
        on:favorito={favorito}
      />
    </div>
  {/each}
</div>

<h2>{evento}</h2>
