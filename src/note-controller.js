(function(exports){

function NotesController(Note,NoteListModel,NoteListView){
  this.notelist = new NoteListModel(Note);
  this.noteview = NoteListView;
};

  NotesController.prototype.updateview = function (){
  note_view = new this.noteview(this.notelist.readList())
  view = note_view.get_view();
  document.getElementById("app").innerHTML= view;
}
exports.NotesController = NotesController

})(this);
