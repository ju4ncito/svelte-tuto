<script>
  export let title;
  export let image;
</script>

<div class="card mb-3" style="width:18res;">
  <img
    src="https://image.tmdb.org/t/p/w500{image}"
    alt={title}
    width="100%"
    height="500"
  />

  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <button class="btn btn-primary"> MORE</button>
  </div>
</div>
