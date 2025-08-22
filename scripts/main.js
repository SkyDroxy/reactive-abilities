import { registerHooks } from "./hooks.js";
import { registerSettings } from "./settings.js";
import { ReactiveAbilities } from "./abilities.js";

export const MODULE_NAME = "reactive-abilities";

export const TEMPLATE_PATH = "modules/reactive-abilities/templates/";

async function preloadTemplates() {
  const templatePaths = [
    `${TEMPLATE_PATH}reactive-abilities.ability.hbs`,
    `${TEMPLATE_PATH}reactive-abilities.config.hbs`
  ];
  return loadTemplates(templatePaths);
}

Hooks.on("init", async () => {
  console.log("Reactive Abilities | Initializing");
  registerSettings();
  await preloadTemplates();
});

Hooks.on("ready", () => {
  console.log("Reactive Abilities | Ready");
  registerHooks();
});


export { ReactiveAbilities };