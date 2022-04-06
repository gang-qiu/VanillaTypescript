type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export function heading (headingType: HeadingType = 'h1'): HTMLHeadingElement {
  const element = document.createElement(headingType);

  element.innerText = 'salutations lovable tram!';
  element.classList.add('font-moonrocks');
  return element;
};
