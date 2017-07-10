import Quill from 'quill/core';

import Toolbar from 'quill/modules/toolbar';
import Slp from './themes/slp';

import { SizeClass, SizeStyle } from 'quill/formats/size';
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


Quill.register({
  'attributors/class/align': AlignClass,
  'attributors/class/background': BackgroundClass,
  'attributors/class/color': ColorClass,
  'attributors/class/size': SizeClass,

  'attributors/style/align': AlignStyle,
  'attributors/style/background': BackgroundStyle,
  'attributors/style/color': ColorStyle,
  'attributors/style/size': SizeStyle
})

Quill.register({
  'modules/toolbar': Toolbar,
  'themes/slp': Slp,
  'formats/size': SizeClass,
  'formats/color': ColorStyle,
  'formats/background': BackgroundStyle,
  'formats/bold': Bold,
  'formats/italic': Italic,
  'formats/underline': Underline,
  'formats/strike': Strike,
  'formats/blockquote': Blockquote,
  'formats/link': ALink,
  'formats/list': List,
  'formats/list/item': ListItem,
  'formats/align': AlignClass,
  'formats/indent': Indent
});


export default Quill;
window.Quill = Quill;
