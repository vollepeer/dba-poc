/**
 *
 * @param {HTMLElement} oldElement
 * @param {String} newTagName
 * @param {Array<String>} newElementClassNames
 */
export const replaceElementTagName = (oldElement, newTagName, newElementClassNames) => {
  const newElement = document.createElement(newTagName);
  newElement.innerHTML = oldElement.innerHTML;
  oldElement.parentNode.replaceChild(newElement, oldElement);

  if (newElementClassNames) {
    newElement.classList.add(...newElementClassNames);
  }
};

export default {
  replaceElementTagName,
};