<script>
  import About from "./About.svelte";
  import Officers from "./Officers.svelte";
  import Activities from "./Activities.svelte";
  import Membership from "./Membership.svelte";
</script>

<div class="flex flex-col w-screen h-screen overflow-hidden">
  <div class="flex w-full p-2 justify-between items-center shadow-md">
    <div>
      <img src="knights.png" />
    </div>
    <div class="flex flex-col items-center gap-4">
      <div class="font-bold text-2xl">Knights of Columbus</div>
      <div class="flex gap-2">
        <div>Officers</div>
        <div>Membership</div>
        <div>Activities</div>
        <div>About</div>
      </div>
    </div>
    <div>
      <img src="knights.png" />
    </div>
  </div>
  <div
    class="flex flex-col w-full h-full carousel carousel-vertical overflow-y-auto"
  >
    <Officers />
    <Membership />
    <Activities />
    <About />
  </div>
  <div
    class="flex w-full p-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.1)]"
  >
    <div class="flex flex-col w-full items-center">
      <div>Epiphany of Our Lord Council 10605</div>
      <div>3040 Walton Rd • Plymouth Meeting, PA 19454 • (215) 654-7404</div>
      <div class="text-xs p-2">
        Copyright (c) 2026 Knights of Columbus. All Rights Reserved. Send
        comments or questions to steve@dentallogic.com
      </div>
    </div>
  </div>
</div>
