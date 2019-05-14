(function(exports){
  function testNoteListModel(){
    var noteListModel = new NoteListModel();
    assert.isArrayEqual(noteListModel.readArray(),noteListModel._list )
  }
  testNoteListModel()
})(this);

(function(){
    function name(){
    var noteListModel = new NoteListModel();
    noteListModel.pushtoArray('hello')
    assert.isArrayEqual(noteListModel.readArray(),['hello'] )
    }
    name()
})();