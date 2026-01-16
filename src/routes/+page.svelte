<script>
  import Contact from "./Contact.svelte";
  import Home from "./Home.svelte";
  import Officers from "./Officers.svelte";
  import Activities from "./Activities.svelte";
  import Membership from "./Membership.svelte";
</script>

<div class="flex flex-col w-screen h-screen text-md md:text-lg overflow-hidden">
  <div
    class="flex w-full max-w-full p-2 gap-2 justify-between items-center shadow-md"
  >
    <div class="flex items-center w-12 sm:w-16 md:w-20 lg:w-24">
      <img class="rounded-box shadow-lg" src="logo.jpg" />
    </div>
    <div class="flex flex-col h-full items-center justify-end gap-2">
      <div class="font-bold text-xl sm:text-2xl md:text-3xl">
        Knights of Columbus
      </div>
      <div class="flex gap-0 sm:gap-1 md:gap-2">
        <div class="p-0.5 sm:p-1 md:p-1.5 text-xs sm:text-sm md:text-lg">
          Home
        </div>
        <div class="p-0.5 sm:p-1 md:p-1.5 text-xs sm:text-sm md:text-lg">
          Activities
        </div>
        <div class="p-0.5 sm:p-1 md:p-1.5 text-xs sm:text-sm md:text-lg">
          Contact
        </div>
        <div class="p-0.5 sm:p-1 md:p-1.5 text-xs sm:text-sm md:text-lg">
          Membership
        </div>
        <div class="p-0.5 sm:p-1 md:p-1.5 text-xs sm:text-sm md:text-lg">
          Officers
        </div>
      </div>
    </div>
    <div class="flex items-center w-12 sm:w-16 md:w-20 lg:w-24">
      <img class="rounded-box shadow-lg" src="logo.jpg" />
    </div>
  </div>
  <div
    class="flex flex-col w-full h-full carousel carousel-vertical overflow-y-auto"
  >
    <Home />
    <Activities />
    <Contact />
    <Membership />
    <Officers />
  </div>
  <div
    class="flex w-full p-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.1)]"
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
