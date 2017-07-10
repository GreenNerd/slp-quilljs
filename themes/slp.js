import Theme from 'quill/core/theme';
import Picker from '../ui/picker';

class SlpTheme extends Theme {
  constructor(quill, options) {
    super(quill, options);
  }

  addModule(name) {
    let module = super.addModule(name);
    if (name === 'toolbar') {
      this.extendToolbar(module);
    }
    return module;
  }

  buildButtons(buttons) {}

  buildPickers(selects) {
    this.pickers = selects.map((select) => {
      return new Picker(select);
    });
  }

  extendToolbar(toolbar) {
    toolbar.container.classList.add('ql-snow');
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
