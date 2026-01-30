<script lang="ts">
  const { title, id, children } = $props();
</script>

<div
  {id}
  class="flex flex-col max-h-full h-full carousel-item gap-4 sm:gap-6 md:gap-8 p-8 w-64 sm:w-108 md:w-196 lg:w-240 mx-auto"
>
  {#if title != ""}<div class="text-2xl font-bold text-center">
      {title}
    </div>{/if}
  <div class="overflow-y-auto hide-scrollbar-on-ios-as-well mx-auto">
    {@render children()}
  </div>
</div>
