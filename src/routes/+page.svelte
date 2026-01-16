<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Contact from "./Contact.svelte";
  import Home from "./Home.svelte";
  import Officers from "./Officers.svelte";
  import Activities from "./Activities.svelte";
  import Membership from "./Membership.svelte";

  let activeTab = $state(0);
  let carouselRef: HtmlDivElement;
  let isScrolling = false;

  const tabs = ["Home", "Activities", "Contact", "Membership", "Officers"];
  const items = ["home", "activities", "contact", "membership", "officers"];

  const handleScroll = () => {
    if (!carouselRef || isScrolling) return;

    const scrollTop = carouselRef.scrollTop;
    const itemHeight = carouselRef.scrollHeight / items.length;
    const currentIndex = Math.round(scrollTop / itemHeight);

    const clampedIndex = Math.max(0, Math.min(currentIndex, items.length - 1));

    activeTab = clampedIndex;
  };

  const scrollToItem = (index) => {
    isScrolling = true;
    activeTab = index;

    const targetItem = document.getElementById(items[index]);
    if (targetItem) {
      targetItem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  };

  onMount(() => {
    const hash = window.location.hash.slice(1);
    const index = items.indexOf(hash);

    if (index !== -1) {
      setTimeout(() => {
        activeTab = index;
        const targetItem = document.getElementById(items[index]);
        targetItem?.scrollIntoView({ behavior: "auto", block: "start" });
      }, 100);
    }

    if (carouselRef) {
      carouselRef.addEventListener("scroll", handleScroll);

      onDestroy(() => {
        carouselRef?.removeEventListener("scroll", handleScroll);
      });
    }
  });
</script>

<div class="flex flex-col w-dvw h-dvh text-md md:text-lg overflow-hidden">
  <div
    class="flex w-full max-w-full p-2 gap-2 justify-between items-center shadow-md"
  >
    <div class="flex items-center w-8 min-w-8 sm:w-16 md:w-20 lg:w-24">
      <img class="rounded-box shadow-lg" src="logo.jpg" />
    </div>
    <div class="flex flex-col h-full items-center justify-end gap-2">
      <div class="font-bold text-xl sm:text-2xl md:text-3xl">
        Knights of Columbus
      </div>

      <div role="tablist" class="hidden sm:flex gap-0 sm:gap-1 md:gap-2">
        {#each tabs as tab, index (tab)}
          <a
            class={`tab text-sm md:text-md lg:text-lg px-0.5 sm:px-1 md:px-1.5 lg:px-2 font-light ${activeTab == index ? "tab-active" : ""}`}
            onclick={() => scrollToItem(index)}
          >
            {tab}
          </a>
        {/each}
      </div>
    </div>
    <div class="flex items-center w-8 min-w-8 sm:w-16 md:w-20 lg:w-24">
      <img class="rounded-box shadow-lg" src="logo.jpg" />
    </div>
  </div>
  <div
    bind:this={carouselRef}
    class="flex flex-col w-full h-full carousel carousel-vertical overflow-y-auto"
  >
    <Home />
    <Activities />
    <Contact />
    <Membership />
    <Officers />
  </div>
  <div
    class="hidden md:flex w-full p-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.1)]"
  >
    <div class="flex flex-col w-full items-center">
      <div class="text-sm md:text-md">Epiphany of Our Lord Council 10605</div>
      <div class="flex flex-wrap text-sm md:text-md justify-center">
        <div>3040 Walton Rd. Plymouth Meeting, PA 19454</div>
        <div>(215) 654-7404</div>
      </div>
      <div class="text-xs p-2 text-right">
        Copyright (c) 2026 Knights of Columbus. All Rights Reserved. Send
        comments or questions to
        <a href="mailto:steve@dentallogic.com">steve@dentallogic.com</a>
      </div>
    </div>
  </div>
</div>
