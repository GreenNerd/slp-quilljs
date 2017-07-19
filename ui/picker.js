import QLPicker from 'quill/ui/picker';

class Picker extends QLPicker {
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
    let term = this.select.className.slice('ql-'.length);
    let value = option.getAttribute('value');
    switch(term) {
      case 'header':
        if (value) {
          item.innerHTML = `标题${value}`;
        } else {
          item.innerHTML = '默认';
        }
        break;
      case 'align':
        if (value) {
          item.classList.add(this.select.className + '-' + value);
        }
        break;
    }
    return item;
  }
}

export default Picker;
