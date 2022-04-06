export default function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerText = 'salutations lovable tram!';
  return element;
}
