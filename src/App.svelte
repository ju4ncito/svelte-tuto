<script>
    let nombre='Jorge'
    let v1=0
    let v2=0
    let check=false
</script>
<main>
    <h1>DATABINGING</h1>
    <h2>{nombre}</h2>
    <input type="text"bind:value={nombre}>
    <hr>
    Valor1<input type="range"bind:value={v1}>
    Valor2<input type="range"bind:value={v2}>
    <p>{v1}+{v2}={v1+v2}</p>
    <hr>
    Habilitar boton <input type="checkbox" bind:checked={check}>
	<button disabled={!check}>Guardar</button>
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