
export function registerHooks() {
  // Hook pour injecter l'onglet Reactive
  // Hooks.on("renderItemSheet5e", (sheet, html, data) => {
  //   // Vérifie que c'est une aptitude de type "class feature"
  //   if (sheet.item.type !== "feat") return;

  //   // Ajouter le bouton dans les onglets existants
  //   const tabs = html.find(".tab[data-tab]");
  //   const tabNav = html.find(".sheet-tabs");
  //   tabNav.append('<a class="item-tab" data-tab="reactive">Reactive</a>');

  //   // Ajouter le conteneur de contenu
  //   html.find(".sheet-body").append('<div class="tab" data-tab="reactive"></div>');

  //   // Charger ton template Handlebars dans le conteneur
  //   const reactiveTab = html.find('.tab[data-tab="reactive"]');
  //   const templateData = { item: sheet.item, actor: sheet.actor };
  //   renderTemplate(`${TEMPLATE_PATH}reactive-abilities.ability.hbs`, templateData)
  //     .then(htmlContent => {
  //       reactiveTab.html(htmlContent);
  //     });

  //   // Gestion du clic sur l'onglet
  //   tabNav.find('.item-tab[data-tab="reactive"]').click(function (e) {
  //     e.preventDefault();
  //     // Masquer tous les onglets
  //     html.find('.tab[data-tab]').hide();
  //     // Afficher le bon
  //     reactiveTab.show();
  //     // Activer le bouton
  //     tabNav.find('.item-tab').removeClass('active');
  //     $(this).addClass('active');
  //   });
  // });
}