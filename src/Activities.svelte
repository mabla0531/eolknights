<script lang="ts">
  import CarouselItem from "./CarouselItem.svelte";
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
    <a href="https://calendar.google.com/calendar/u/0?cid=MGQ3OTlmMjJhMjBmOGZlM2ZjZDcxMWY4MTY1ZTdmNWNlNTAyODZmZDljZjI3NWMwOWE5MDg5YTdhN2FkZTQ5ZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t">
      <button class="btn btn-primary btn-soft">Event Calendar</button>
    </a>
  </div>
</CarouselItem>
