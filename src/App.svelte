<script>
  let nombre = "Jorge";
  let v1 = 0;
  let v2 = 0;
  let check = false;

  function alerta1() {
    alert("alerta1");
  }

  const alerta2 = () => alert("alerta2");

  let contador = 0;

  $: resultado = contador * 10;
  let texto = "";
  $: if (resultado === 30) {
    texto = "ok";
  } else {
    texto = "ouch";
  }

  let login = true;
  const cambio = () => (login = !login);

  let nombres = ["m", "a", "ruben"];

  let promesa = ajax();
  let users = [];
  const url = "https://jsonplaceholder.typicode.com/users";

  async function ajax() {
    const res = await fetch(url); //significa que esta esperando la respuesta de la api
    users = await res.json();

    if (res.ok) {
      return users;
    } else {
      throw new Error("no se pudo conectar con la API");
    }
  }
</script>

<main>
  <h1>DATABINGING</h1>
  <h2>{nombre}</h2>
  <input type="text" bind:value={nombre} />
  <hr />
  Valor1<input type="range" bind:value={v1} />
  Valor2<input type="range" bind:value={v2} />
  <p>{v1}+{v2}={v1 + v2}</p>
  <hr />
  Habilitar boton<input type="checkbox" bind:checked={check} />
  <button disabled={!check}>Guardar</button>

  <h1>ONCLICK</h1>
  <button on:click={alerta1}> Alerta 1</button>
  <button on:click={() => alert(alerta2)}> Alerta 2</button>

  <h1>Variables reactvias</h1>

  <button on:click={() => (contador += 1)}>Contador</button>

  <p>Contador: {contador}, x10 {resultado}</p>
  <p>CONTROL: ----- {texto}</p>

  <h1>BLOQUES IF</h1>

  {#if login}
    <h2>logeado</h2>
  {:else}
    <h3>no log</h3>
  {/if}

  <button on:click={() => cambio(login)}> anaie</button>

  <hr />

  <h1>EACH</h1>
  <ul>
    {#each nombres as nombre, i}
      <li>{i + 1} {nombre}</li>
    {/each}
  </ul>

  <h1>AWAIT</h1>
  {#await promesa}
    <p>cargando api</p>
  {:then usuarios}
    {#each usuarios as users, i}
      <li>{users.name} es el usuario numero {i + 1}</li>
    {/each}
  {:catch error}
    <p style="color:red;">{error}</p>
  {/await}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
