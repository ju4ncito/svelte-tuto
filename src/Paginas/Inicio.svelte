<script>
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=8a5a696b9d894af5405fd6e22982b6d6&language=en-US&page=1";

  let promise = ajax();
  let peliculas = [];
  async function ajax() {
    const res = await fetch(url);
    peliculas = await res.json();

    if (res.ok) {
      return peliculas.results;
    } else {
      throw new Error("No hya conexion con la api");
    }
  }
</script>

<h1>Peliculas mas populares del momento</h1>

{#await promise}
  <p>cargador</p>
{:then peliculas}
  {#each peliculas as item}
    <li>Titulo: {item.title}</li>
    <li>Popularidad: {item.popularity}</li>
    <br />
  {/each}
{:catch error}
  <p style="color:red;">{error}</p>
{/await}
