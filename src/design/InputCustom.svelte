<script>
  export let control;
  export let value;
  export let placeholder;
  export let type;
  export let nombre;
  export let id;
  ///variables necesarias
</script>

<div class="form-group">
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label {id}>{nombre}</label>
  {#if control === "textarea"}
    <textarea
      {id}
      {placeholder}
      {value}
      on:input
      rows="10"
      class="form-control"
    />
  {:else}
    <input {type} class="form-control" {id} {placeholder} {value} on:input />
  {/if}
</div>
