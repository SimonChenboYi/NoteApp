(function(exports){
  function testNote(){
    const note = new Note('I 😍 python');

    assert.isEqual(note.get_text() === 'I 😍 python')
  };
  testNote();
})(this);