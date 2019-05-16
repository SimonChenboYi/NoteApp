(function(exports){
  var id = 0;
  function Note(text){this.text = text; this.id = id++;};

  Note.prototype.getText = function(){ return this.text };

  Note.prototype.getId  = function(){return this.id};


  exports.Note = Note;
})(this);
