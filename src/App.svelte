<script>
  import Header from "./design/Header.svelte";
  import CardGrid from "./posts/CardGrid.svelte";
  import InputCustom from "./design/InputCustom.svelte";
  const color = "light";
  let titulo = "";
  let imagen = "";
  let descripcion = "";
  let post = [
    {
      id: "1",
      titulo: "Trabajando con svelte",
      descripcion: "Realizando un curso de svelte ",
      imagen:
        "https://cdn.pixabay.com/photo/2017/04/25/22/28/despaired-2261021_960_720.jpg",
    },
    {
      id: "2",
      titulo: "Trabajando con vue",
      descripcion: "Realizando un curso de vue ",
      imagen:
        "https://cdn.pixabay.com/photo/2016/11/23/14/41/action-figure-1853285_960_720.jpg",
    },
    {
      id: "3",
      titulo: "Trabajando con qng",
      descripcion: "Realizando un curso de qng ",
      imagen:
        "https://cdn.pixabay.com/photo/2016/11/29/03/17/action-1867014_960_720.jpg",
    },
  ];

  function agregarPost() {
    const nuevoPost = {
      id: Math.random().toString(),
      titulo: titulo,
      descripcion: descripcion,
      imagen: imagen,
    };

    post = [nuevoPost, ...post]; ///spread operator, convierte un array en serie de argumentos injectable
  }
</script>

<Header {color} />

<div class="container">
  <CardGrid {post} />

  <form on:submit|preventDefault={agregarPost}>
    <!-- <input type="text" placeholder="Titulo" bind:value={titulo} />
    <input type="text" placeholder="Titulo" bind:value={descripcion} />
    <input type="text" placeholder="Titulo" bind:value={imagen} />
    <button type="submit" class="btn btn-info">Guardar</button> -->

    <InputCustom
      type="text"
      nombre="Titulo"
      id="titulo"
      placeholder="Titulo"
      value={titulo}
      on:input={(event) => (titulo = event.target.value)}
    />

    <InputCustom
      type="text"
      nombre="Imagen"
      id="imagen"
      placeholder="Imagen"
      value={imagen}
      on:input={(event) => (imagen = event.target.value)}
    />

    <InputCustom
      control="textarea"
      nombre="Descripcion"
      id="descripcion"
      placeholder="Descripcion"
      value={descripcion}
      on:input={(event) => (descripcion = event.target.value)}
    />

    <button type="submit" class="btn btn-info">Guardar</button>
  </form>
</div>
