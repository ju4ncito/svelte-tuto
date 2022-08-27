<script>
  import Header from "./design/Header.svelte";
  import CardGrid from "./posts/CardGrid.svelte";
  const color = "light";
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
</script>

<Header {color} />

<div class="container">
  <CardGrid {post} />
</div>
