<script lang="ts">
  import CarouselItem from "$lib/components/CarouselItem.svelte";
  import { marked } from "marked";
  import { onMount } from "svelte";

  let html = "";

  onMount(async () => {
    const res = await fetch("/contact_body.md");
    const md = await res.text();
    html = marked(md);
  });
</script>

<CarouselItem title="Contact" id="contact">
  {@html html}
</CarouselItem>
