(function(exports){
  function testNoteListView(){
    list = ['Food: pesto','Drink: seltzer']
    var display = '<ul><li><div>Food: pesto</div></li><li><div>Drink: seltzer</div></li></ul>';

    var noteListView = new NoteListView(list);
    assert.isTrue(noteListView.get_view() === display)
  }
    testNoteListView()
    exports.testNoteListView = testNoteListView;
})(this);


(function(exports){
  function testLimitLengthView(){
    list = ['Favourite food: pesto','Favourite drink: seltzer']
    var display = '<ul><li><div>Favourite food: pest</div></li><li><div>Favourite drink: sel</div></li></ul>';

    var noteListView = new NoteListView(list);
    assert.isTrue(noteListView.get_view() === display)
  }
    testLimitLengthView()
    exports.testLimitLengthView = testLimitLengthView;
})(this);
