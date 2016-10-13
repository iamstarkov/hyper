const mousetrapify = key => key
  .replace('CmdOrCtrl', 'mod')
  .toLowerCase();

export default mousetrapify;
