<script>
  import { onMount } from "svelte";
  import { each } from "svelte/internal";
  export let params = {};
  let id = params.id;

  const url = "https://api.themoviedb.org/3/movie/";
  const key = "?api_key=8a5a696b9d894af5405fd6e22982b6d6&language=en-US";
  const urlFinal = url + id + key;

  let pelicula = {};
  let generos = [];
  onMount(async () => {
    const res = await fetch(urlFinal);
    pelicula = await res.json();
    generos = await pelicula.generes;
  });
</script>

<div class="row mt-5">
  <div class="col-lg-6">
    <img
      src="https://image.tmdb.org/t/p/w500{pelicula.poster_path}"
      alt={pelicula.title}
      width="100%"
      height="700"
    />
  </div>
  <div class="col-lg-6">
    <h1>{pelicula.title}</h1>
    <p>{pelicula.overview}</p>

    {#each generos as genero}
      <h4>{generos.name}</h4>
    {/each}

    <div class="rating" align="center">{pelicula.vote_average}</div>
  </div>
</div>
