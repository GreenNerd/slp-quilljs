import Theme from 'quill/core/theme';
import Picker from '../ui/picker';
import ColorPicker from '../ui/ColorPicker';

class SlpTheme extends Theme {
  constructor(quill, options) {
    super(quill, options);
    this.quill.container.classList.add('ql-slp');
  }

  addModule(name) {
    let module = super.addModule(name);
    if (name === 'toolbar') {
      this.extendToolbar(module);
    }
    return module;
  }

  buildButton(button) {
    const prefix = 'ql-';
    [].forEach.call(button.classList, (name)=>{
      if (!name.startsWith(prefix)) return;
      name = name.slice(prefix.length);
      button.innerHTML = '<i class="slp-' + name + '"></i>';
    });
  }

  buildButtons(buttons) {
    buttons.forEach((button) => {
      this.buildButton(button);
    });
  }

  buildPickers(selects) {
    const prefix = 'ql-';
    this.pickers = selects.map((select) => {
      let term = select.className.slice(prefix.length);
      if (term === 'color' || term === 'background') {
        return new ColorPicker(select);
      } else {
        return new Picker(select);
      }
    });
  }

  extendToolbar(toolbar) {
    toolbar.container.classList.add('ql-slp');
    this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')));
    this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')));
    if (toolbar.container.querySelector('.ql-link')) {
      this.quill.keyboard.addBinding({ key: 'K', shortKey: true }, function(range, context) {
        toolbar.handlers['link'].call(toolbar, !context.format.link);
      });
    }
  }
}

export default SlpTheme;
