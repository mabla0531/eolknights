<script lang="ts">
  const { title, children } = $props();
</script>

<div
  class="flex flex-col w-full max-h-full h-full carousel-item gap-4 sm:gap-6 md:gap-8 p-8 w-64 sm:w-108 md:w-196 lg:w-240 mx-auto"
>
  {#if title != ""}<div class="text-2xl font-bold">
      {title}
    </div>{/if}
  <div class="overflow-y-auto scrollbar-hide">{@render children()}</div>
</div>
