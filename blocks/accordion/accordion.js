import { replaceElementTagName } from '../../scripts/utils.js';

export default function decorate(block) {
  [...block.children].forEach((accordionItem) => {
    accordionItem.classList.add('accordion-item');

    [...accordionItem.children].forEach((item, index) => {
      if (index === 0) {
        replaceElementTagName(item, 'button', ['accordion-item__trigger']);
      } else {
        item.classList.add('accordion-item__content');
      }
    });
  });

  const accordionTriggers = block.querySelectorAll('.accordion-item__trigger');

  [...accordionTriggers].forEach((trigger) => {
    trigger.addEventListener('click', () => {
      trigger.parentElement.classList.toggle('accordion-item--active');
    });
  });
}