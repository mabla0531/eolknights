<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import { marked } from "marked";

  import "../app.css";

  const renderer = {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);

      let text_size_string = "text-md";

      switch (depth) {
        case -1:
          text_size_string = "text-sm";
        case 1:
          text_size_string = "text-2xl";
          break;
        case 2:
          text_size_string = "text-xl";
          break;
        case 3:
          text_size_string = "text-lg";
          break;
      }

      return `<div class="${text_size_string} font-bold">${text}</div>`;
    },
    table({ header, rows }) {
      const headerRow = header
        .map((cell) => `<th>${this.parser.parseInline(cell.tokens)}</th>`)
        .join("");

      const bodyRows = rows
        .map((row) => {
          const cells = row
            .map((cell) => `<td>${this.parser.parseInline(cell.tokens)}</td>`)
            .join("");
          return `<tr>${cells}</tr>`;
        })
        .join("");

      return `
        <table class="table w-auto">
          <thead><tr>${headerRow}</tr></thead>
          <tbody>${bodyRows}</tbody>
        </table>
      `;
    },
  };

  marked.use({ renderer });

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
