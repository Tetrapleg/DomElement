'use strict';

const text = prompt('Введите текст');

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.createdElements = function(){
  let elemSelector = this.selector.trim();
  let attr = elemSelector.substring(1).toLowerCase();
  if (elemSelector[0] === '.') {
    elemSelector = document.createElement('div');
    elemSelector.classList.add(attr);
  }
  if (elemSelector[0] === '#') {
    elemSelector = document.createElement('p');
    elemSelector.setAttribute('id', attr);
  }
  elemSelector.style.cssText = 'height: ' + this.height + 'px;' +
  'width: ' + this.width + 'px;' +
  'background-color: ' + this.bg + ';' +
  'font-size: ' + this.fontSize + 'px;'
  ;

  elemSelector.innerHTML = text;
  console.log(elemSelector);
  document.body.append(elemSelector);
};


let DomElement2 = new DomElement('#block', 300, 500, 'red', 50);

DomElement2.createdElements();
