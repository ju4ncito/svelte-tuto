<script>
  export let nombre;
</script>

<div class="jumbotron mt-4">
  <h1>{nombre}</h1>
  <h2>
    <slot name="subtitulo">
      <span>Suybtitulo</span>
    </slot>
  </h2>
  <h3>
    <slot name="parrafo" />
  </h3>
</div>

<style>
  h2 {
    color: red;
    font-weight: bolder;
    text-decoration: underline;
  }
</style>
