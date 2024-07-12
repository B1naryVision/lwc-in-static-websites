import DataExample from 'c/dataExample';

customElements.define('c-data-example', DataExample.CustomElementConstructor);

// Do not register re-usable components
// only entry components that are added to the static HTML
// should be registered to be used in the static HTML