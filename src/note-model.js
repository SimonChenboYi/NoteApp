(function(exports){
  function Note(text){this.text = text}

  Note.prototype.get_text = function(){ return this.text }
  exports.Note = Note;
})(this);
