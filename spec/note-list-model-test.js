(function(){
    function testNodeListModel(){

      function Notedouble(text){this.text = text};
      Notedouble.prototype.get_text = function(){return this.text};

    var noteListModel = new NoteListModel(Notedouble);
    noteListModel.pushtoList('hello')
    assert.isArrayEqual(noteListModel.readList(),['hello'] )
    }
    testNodeListModel()
})(this);
