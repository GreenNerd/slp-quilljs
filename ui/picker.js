import QLPicker from 'quill/ui/picker';

class Picker extends QLPicker {
  buildLabel() {
    console.log('hehe')
    let label = document.createElement('span');
    label.classList.add('ql-picker-label');
    // TODO: build label content
    this.container.appendChild(label);
    return label;
  }
}

export default Picker;
