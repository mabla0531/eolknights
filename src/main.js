import { mount } from "svelte";
import "./app.css";
import Main from "./Main.svelte";

const main = mount(Main, {
  target: document.getElementById("main"),
});

export default main;
