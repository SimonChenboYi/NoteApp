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

  NoteListModel.prototype.getList = function() {
    return this._list;
  }

 exports.NoteListModel = NoteListModel;
})(this);
