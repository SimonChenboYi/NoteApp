(function(exports){

function NotesController(Note,NoteListModel,NoteListView){
  this.notelist = new NoteListModel(Note);
  this.noteview = NoteListView;
};

  NotesController.prototype.update = function (){
  note_view = new this.noteview(this.notelist.readList())
  view = note_view.get_view();
  document.getElementById("app").innerHTML= view;
}

exports.NotesController = NotesController

})(this);


var note = new Note("Favourite drink: seltzer");
var note2 = new Note("Are you having fun")
notesController = new NotesController(Note,NoteListModel,NoteListView)
notesController.notelist.pushtoList(note.get_text());
notesController.notelist.pushtoList(note2.get_text());

notesController.update();
