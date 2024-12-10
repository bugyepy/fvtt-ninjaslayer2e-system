/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/ninjaslayer2e/templates/actor/components/actor-features.hbs',
    'systems/ninjaslayer2e/templates/actor/components/actor-items.hbs',
    'systems/ninjaslayer2e/templates/actor/components/actor-effects.hbs',
    // Item partials
    'systems/ninjaslayer2e/templates/item/components/item-effects.hbs',
  ]);
};
