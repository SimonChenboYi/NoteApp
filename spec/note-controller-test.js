// test single item
(function(exports){
  function testNoteController_updateView(){

    function Notedouble(){};
    function NoteListModeldouble(){};
    function NoteListViewdouble(){};

NoteListModeldouble.prototype.readList = function(){};

NoteListViewdouble.prototype.get_view = function(){
  return '<ul><li><div>Favourite drink: seltzer</div></li></ul>'};

var notesController = new NotesController(Notedouble,NoteListModeldouble,NoteListViewdouble)

notesController.updateview();
assert.isTrue(document.getElementById("app").innerHTML
      === '<ul><li><div>Favourite drink: seltzer</div></li></ul>')
};

    testNoteController_updateView();
    exports.testNoteController_updateView = testNoteController_updateView;
 })(this);


// test multiple items
 (function(exports){
   function testNoteController_updateView2(){

     function Notedouble(){};
     function NoteListModeldouble(){};
     function NoteListViewdouble(){};

 NoteListModeldouble.prototype.readList = function(){};

 NoteListViewdouble.prototype.get_view = function(){
   return '<ul><li><div>Favourite drink: seltzer</div></li><li><div>Favourite food: pesto</div></li></ul>'};

 var notesController = new NotesController(Notedouble,NoteListModeldouble,NoteListViewdouble)

 notesController.updateview();
 assert.isTrue(document.getElementById("app").innerHTML
       === '<ul><li><div>Favourite drink: seltzer</div></li><li><div>Favourite food: pesto</div></li></ul>')
 };

     testNoteController_updateView2();
     exports.testNoteController_updateView2 = testNoteController_updateView2;
  })(this);
