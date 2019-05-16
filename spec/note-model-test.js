(function(exports){
  function testNote(){
    const note = new Note('I 😍 python');

    assert.isTrue(note.getText() === 'I 😍 python')
  };
  testNote();
  exports.testNote = testNote;
})(this);
