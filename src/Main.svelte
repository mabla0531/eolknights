<script lang="ts">
  import { marked } from "marked";
  import favicon from "/logo.jpg";
  import App from "./App.svelte";

  const renderer = {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);

      let text_size_string = "text-lg";

      switch (depth) {
        case 1:
          text_size_string = "text-3xl";
          break;
        case 2:
          text_size_string = "text-2xl";
          break;
        case 3:
          text_size_string = "text-xl";
          break;
      }

      return `<div class="${text_size_string} font-bold my-4">${text}</div>`;
    },
    table({ header, rows }) {
      const headerRow = header
        .map((cell) => {
          let inner = this.parser.parseInline(cell.tokens);
          if (inner != "") {
            return `<th>${inner}</th>`;
          } else {
            return ``;
          }
        })
        .join("");

      const bodyRows = rows
        .map((row) => {
          const cells = row
            .map(
              (cell, index) =>
                `<td class="flex grow ${index >= row.length - 1 ? "justify-end" : ""}">${this.parser.parseInline(cell.tokens)}</td>`,
            )
            .join("");
          return `<tr class="flex w-full">${cells}</tr>`;
        })
        .join("");

      return `
        <table class="table w-fit">
          <thead><tr>${headerRow}</tr></thead>
          <tbody>${bodyRows}</tbody>
        </table>
      `;
    },
    paragraph({ tokens }) {
      const text = this.parser.parseInline(tokens);

      return `<p class="my-4">${text}</p>`;
    },
    link({ href, text }) {
      return `<a class="link text-blue-500" href=${href}>${text}</a>`;
    },
  };

  marked.use({ renderer });

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<App />
