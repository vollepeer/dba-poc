export default function decorate(block) {
  var quote = '';
  var img = '';
  var person = '';
  var cta = '';
  var icon = '';

  var i = 0;
  [...block.children].forEach((row) => {
    [...row.children].forEach((div) => {
      switch (i) {
      case 0:
        quote = div;
      case 1:
        img = div;
      case 2:
        person = div;
      case 3:
        cta = div;
      }
    })
    i++;
  })

  
  icon = document.createElement('div');
  icon.className = 'aem-testimonial__icon';
  icon.innerHTML = '<svg id="social-expr-quotemark" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><!--{"metaAttributes":{"multicolor":false,"glyph":true,"rotatable":false,"deprecated":false,"rename":false,"themeable":false,"low-quality":false,"custom-viewport":false,"lottie":false}}--><title>information-expr-quote--glyph</title><path id="icon" d="M42.8,13.6a22.6,22.6,0,0,0-4.2,2.6,18.8,18.8,0,0,0-2.4,2.5,5.7,5.7,0,0,0-1.1,2.2,6.8,6.8,0,0,0-.2,2c0,1.1.5,1.7,1.5,1.7,4.4,0,6.6,2,6.6,6.2a6.9,6.9,0,0,1-2,5.3A7.9,7.9,0,0,1,35.5,38,8.7,8.7,0,0,1,29,35.5a11.4,11.4,0,0,1-2.3-7.3,16.4,16.4,0,0,1,3.6-10.6A32.1,32.1,0,0,1,40.6,10ZM21,13.6a22.6,22.6,0,0,0-4.2,2.6,18.8,18.8,0,0,0-2.4,2.5,5.7,5.7,0,0,0-1.1,2.2,6.8,6.8,0,0,0-.2,2c0,1.1.5,1.7,1.5,1.7,4.4,0,6.6,2,6.6,6.1a7.1,7.1,0,0,1-2,5.4A7.9,7.9,0,0,1,13.7,38a8.5,8.5,0,0,1-6.4-2.5A10.2,10.2,0,0,1,5,28.2,16.2,16.2,0,0,1,8.6,17.6,30.6,30.6,0,0,1,18.8,10Z"></path></svg></div>';

  var blockquote = document.createElement("blockquote");
  blockquote.innerHTML = quote.innerHTML;
  blockquote.className = 'aem-testimonial__quote aem-testimonial__quote--large';

  img.className = 'aem-testimonial__image';
  person.className = 'aem-testimonial__wrapper__name-location';


  block.prepend(cta);
  block.prepend(person);
  block.prepend(img);
  block.prepend(blockquote);
  block.prepend(icon);

  block.children[5].remove();
}
