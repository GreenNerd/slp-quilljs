import QLPicker from 'quill/ui/picker';

class Picker extends QLPicker {
  buildLabel() {
    let label = document.createElement('span');
    label.classList.add('ql-picker-label');
    label.innerHTML = '<i class="slp-caret-down"></i>';
    this.container.appendChild(label);
    return label;
  }
}

export default Picker;
