<script lang="ts">
  import { marked } from "marked";
  import { onMount } from "svelte";

  let html = "";

  onMount(async () => {
    const res = await fetch("/officers_body.md");
    const md = await res.text();
    html = marked(md);
  });
</script>

<div
  class="flex flex-col w-full h-full carousel-item gap-8 p-8 md:p-16 lg:p-24"
>
  <div>{@html html}</div>
</div>
