(function(exports){
  function SingleNoteView(notemodel){this.notemodel = notemodel};

  SingleNoteView.prototype.htmlstringfy = function(){
    return ("<div>"+ this.notemodel.getText() + "</div>")
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
