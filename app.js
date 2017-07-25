import Quill from 'quill/core';

import Toolbar from 'quill/modules/toolbar';
import Slp from './themes/slp';

import Header from 'quill/formats/header';
import { ColorClass, ColorStyle } from 'quill/formats/color';
import { BackgroundClass, BackgroundStyle } from 'quill/formats/background';
import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic';
import Underline from 'quill/formats/underline';
import Strike from 'quill/formats/strike';
import Blockquote from 'quill/formats/blockquote';
import ALink from 'quill/formats/link';
import List, { ListItem } from 'quill/formats/list';
import { AlignClass, AlignStyle } from 'quill/formats/align';
import { IndentClass as Indent } from 'quill/formats/indent';
import Img from 'quill/formats/image';

Quill.register({
  'attributors/class/align': AlignClass,
  'attributors/class/background': BackgroundClass,
  'attributors/class/color': ColorClass,

  'attributors/style/align': AlignStyle,
  'attributors/style/background': BackgroundStyle,
  'attributors/style/color': ColorStyle,
})

Quill.register({
  'modules/toolbar': Toolbar,
  'themes/slp': Slp,
  'formats/color': ColorStyle,
  'formats/background': BackgroundStyle,
  'formats/bold': Bold,
  'formats/italic': Italic,
  'formats/underline': Underline,
  'formats/strike': Strike,
  'formats/blockquote': Blockquote,
  'formats/link': ALink,
  'formats/list': List,
  'formats/header': Header,
  'formats/list/item': ListItem,
  'formats/align': AlignClass,
  'formats/image': Img,
  'formats/indent': Indent
});


export default Quill;
window.Quill = Quill;
