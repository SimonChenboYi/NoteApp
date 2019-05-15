(function(exports){
  function testNoteListView(){
    list = ['Favourite food: pesto','Favourite drink: seltzer']
    var display = '<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>';

    var noteListView = new NoteListView(list);
    assert.isTrue(noteListView.get_view() === display)
  }
    testNoteListView()
    exports.testNoteListView = testNoteListView;
})(this);
