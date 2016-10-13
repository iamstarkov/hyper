import test from 'ava';
import mousetrapify from './mousetrapify';

test('basic', t => {
  const actual = mousetrapify('CmdOrCtrl+shift+left')
  const expected = 'mod+shift+left';
  t.is(actual, expected);
});
