(function(exports){
  function testNoteGetText(){
    var note = new Note('I 😍 python');

    assert.isTrue(note.getText() === 'I 😍 python')
  };
  testNoteGetText();
  exports.testNoteGetText = testNoteGetText;
})(this);

(function(exports){
  function testNoteGetId(){
    var note0 = new Note('Happy Coding!');
    var note1 = new Note('Are you having fun?');

    assert.isTrue(note0.getId() + 1 === note1.getId());

  };
  testNoteGetId();
  exports.testNoteGetId = testNoteGetId;
})(this);
