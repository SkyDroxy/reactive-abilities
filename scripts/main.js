import { registerHooks } from "./hooks.js";
import { registerSettings } from "./settings.js";
import { ReactiveAbilities } from "./abilities.js";

export const MODULE_NAME = "reactive-abilities";

Hooks.on("init", async () => {
  console.log("Reactive Abilities | Initializing");
  registerSettings();
});

Hooks.on("ready", () => {
  console.log("Reactive Abilities | Ready");
  registerHooks();
});


export { ReactiveAbilities };