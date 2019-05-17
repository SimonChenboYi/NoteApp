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



 // Test the response of click href link

// (function(exports){
//   function testNoteController_ClickLink(){
//
//     function Notedouble(){};
//     function NoteListModeldouble(Notedouble){};
//     function NoteListViewdouble(){};
//
//     function Notedouble(){};
//     Notedouble.prototype.getText = function(){return "Favourite drink: Single Malt Scotch Whisky"};
//     Notedouble.prototype.getId = function(){return 5};
//     notedouble = new Notedouble();
//
//     NoteListModeldouble.prototype.readList = function(){};
//     NoteListModeldouble.prototype.getList = function(){return [notedouble]};
//
//
//     NoteListViewdouble.prototype.get_view = function(){
//       return '<ul><li><div><a href="http://localhost:8080#notes/5">Favourite drink: Sin</a></div></li></ul>'
//     };
//
//     var notesController = new NotesController(Notedouble,NoteListModeldouble,NoteListViewdouble);
//     notesController.updateview();
//
//     notesController.showFullNoteText();
//     var content = document.getElementById("app").innerHTML
//
//     var display = '<ul><li><div><a href="http://localhost:8080#notes/5">Favourite drink: Sin</a></div></li></ul>';
//     assert.isTrue(content === display)
//
//     var link = document.querySelector("a");
//     link.click()
//
//     content = document.getElementById("showClickedNote").innerHTML;
//     var updatedDisplay = "Favourite drink: Single Malt Scotch Whisky";
//
//     assert.isTrue(content === updatedDisplay)
// };
//
//     testNoteController_ClickLink();
//     exports.testNoteController_ClickLink = testNoteController_ClickLink;
//  })(this);



  // Tests

 (function(exports){
   function testNoteController_ClickLink2(){

     var notesController1 = new NotesController(Note,NoteListModel,NoteListView);

     notesController1.notelist.pushtoList("Favourite drink: Single Malt Scotch Whisky");
     notesController1.notelist.pushtoList("Favourite food: Spicy Tai Food");

     notesController1.updateview();
     notesController1.showFullNoteText();
 };

     testNoteController_ClickLink2();
     exports.testNoteController_ClickLink2 = testNoteController_ClickLink2;
  })(this);
