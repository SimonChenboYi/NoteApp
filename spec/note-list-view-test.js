(function(exports){
  function testNoteListView(){
    var noteListView = new NoteListView();
    var noteListModel = new NoteListModel();
    noteListModel.pushtoArray('Favourite food: pesto');
    noteListModel.pushtoArray('Favourite drink: seltzer');
    var display = '<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>';
    assert.isTrue(noteListView.get_view(noteListModel.readArray()) === display)
  }
    testNoteListView()
    exports.testNoteListView = testNoteListView;
})(this);
