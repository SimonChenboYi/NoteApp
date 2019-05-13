(function(exports){
  function Note(text){
    this.text = text;
    this.store = []
  }

  Note.prototype = {
    constructor: Note,
    get_text: function(){
      return this.text
    }
  }
  exports.Note = Note;
})(this);