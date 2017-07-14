import Picker from 'quill/ui/picker';

class ColorPicker extends Picker {
  buildLabel() {
    let label = document.createElement('span');
    label.classList.add('ql-picker-label');
    label.innerHTML = '<i class="slp-caret-down"></i>';
    this.container.appendChild(label);
    return label;
  }

  buildItem(option) {
    let item = super.buildItem(option);
    let term = this.select.className.slice('ql-'.length);
    let default_color = term === 'color' ? '#313131' : 'transparent';
    let color = option.getAttribute('value') || default_color;
    item.style.backgroundColor = color;
    return item;
  }
}

export default ColorPicker;
