(function(exports){
  function NoteListModel(Note){
    this.note = Note;
    this._list = []};

  NoteListModel.prototype.readList = function(){
     return this._list.map(function(note){return note.getText()})
   };

  NoteListModel.prototype.pushtoList = function(notetext){
    this._list.push(new this.note(notetext))
  };

 exports.NoteListModel = NoteListModel;
})(this);
