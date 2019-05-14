(function(exports){
  function testNote(){
    const note = new Note('I 😍 python');

    assert.isTrue(note.get_text() === 'I 😍 python')
  };
  testNote();
})(this);