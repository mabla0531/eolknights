<script lang="ts">
  import CarouselItem from "$lib/components/CarouselItem.svelte";
  import { marked } from "marked";
  import { onMount } from "svelte";

  let html = "";

  onMount(async () => {
    const res = await fetch("/activities_body.md");
    const md = await res.text();
    html = marked(md);
  });
</script>

<CarouselItem title="Activities" id="activities">
  {@html html}
  <div class="flex w-full justify-end">
    <button class="btn btn-primary btn-soft">Event Calendar</button>
  </div>
</CarouselItem>
