import QLPicker from 'quill/ui/picker';

class Picker extends QLPicker {
  constructor(select) {
    super(select);
    document.body.addEventListener('click', (event)=>{
      if (this.container.contains(event.target)) {
        return;
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
    let value = option.getAttribute('value') || '默认';
    item.innerHTML = value;
    if (value != '默认') {
      item.classList.add(this.select.className + '-' + option.getAttribute('value'));
    }
    return item;
  }
}

export default Picker;
