<script lang="ts">
  import CarouselItem from "./CarouselItem.svelte";
  import { marked } from "marked";
  import { onMount } from "svelte";

  let html = "";

  onMount(async () => {
    const res = await fetch("/officers_body.md");
    const md = await res.text();
    html = marked(md);
  });
</script>

<CarouselItem title="Officers" id="officers">
  {@html html}
</CarouselItem>
