import Picker from 'quill/ui/picker';

class ColorPicker extends Picker {
  constructor(select) {
    super(select);
    document.body.addEventListener('mousedown', (event)=>{
      if ([].indexOf.call(this.container.classList, 'ql-expanded') === -1) {
        return true;
      }
      if (this.container.contains(event.target)) {
        return true;
      } else {
        this.close();
      }
    }, true);
  }

  buildLabel() {
    let label = document.createElement('span');
    label.classList.add('ql-picker-label');
    label.innerHTML = '<i class="slp-caret-down"></i>';
    this.container.appendChild(label);
    return label;
  }

  buildItem(option) {
    let item = super.buildItem(option);
    item.style.backgroundColor = option.getAttribute('value');
    return item;
  }
}

export default ColorPicker;
