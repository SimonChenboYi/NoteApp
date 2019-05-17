(function(exports){

function NotesController(Note,NoteListModel,NoteListView){
  this.notelist = new NoteListModel(Note);
  this.noteview = NoteListView;
};

  NotesController.prototype.updateview = function (){
    note_view = new this.noteview(this.notelist)
    view = note_view.get_view();
    document.getElementById("app").innerHTML= view;
};

  NotesController.prototype.showFullNoteText = function (){
    var self = this;
    document.addEventListener("click", function(clickEvent) {
        self.readhashchange(); });
  };

  NotesController.prototype.readhashchange = function(){
    var self = this;
    window.addEventListener("hashchange",showNote);

    function showNote(){
      var id = Number(window.location.href.split("#notes/")[1]);
      var note = self.notelist.getList().find(function(element){
        return element.getId() == id });

      document.getElementById("showClickedNote").innerHTML =  note.getText();
            };

  };


    exports.NotesController = NotesController

})(this);
