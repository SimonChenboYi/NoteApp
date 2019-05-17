(function(exports){
  function testNoteListViewWithUrl(){

     function Notedouble0(){};
     Notedouble0.prototype.getText = function(){return "Food: pesto"};
     Notedouble0.prototype.getId = function(){return 0};
     note0 = new Notedouble0();

     function Notedouble1(){};
     Notedouble1.prototype.getText = function(){return "Drink: seltzer"};
     Notedouble1.prototype.getId = function(){return 1};
     note1 = new Notedouble1();

     function NoteListdouble(){};
     NoteListdouble.prototype.getList = function(){return [note0, note1]}
     notelist = new NoteListdouble();

    var display = '<ul><li><div><a href="http://localhost:8080#notes/0">Food: pesto</a></div></li><li><div><a href="http://localhost:8080#notes/1">Drink: seltzer</a></div></li></ul>';
    var noteListView = new NoteListView(notelist);

    assert.isTrue(noteListView.get_view() === display)
  }
    testNoteListViewWithUrl()
    exports.testNoteListViewWithUrl = testNoteListViewWithUrl;
})(this);


(function(exports){
  function testLimitLengthViewwithUrl(){

    function Notedouble2(){};
    Notedouble2.prototype.getText = function(){return "Favourite food: pesto"};
    Notedouble2.prototype.getId = function(){return 2};
    note2 = new Notedouble2();

    function Notedouble1(){};
    Notedouble1.prototype.getText = function(){return "Favourite drink: seltzer"};
    Notedouble1.prototype.getId = function(){return 3};
    note3 = new Notedouble1();

    function NoteListdouble(){};
    NoteListdouble.prototype.getList = function(){return [note2, note3]}
    notelist = new NoteListdouble();


    var display = '<ul><li><div><a href="http://localhost:8080#notes/2">Favourite food: pest</a></div></li><li><div><a href="http://localhost:8080#notes/3">Favourite drink: sel</a></div></li></ul>';

    var noteListView = new NoteListView(notelist);
    assert.isTrue(noteListView.get_view() === display)
  }
    testLimitLengthViewwithUrl()
    exports.testLimitLengthViewwithUrl = testLimitLengthViewwithUrl;
})(this);
