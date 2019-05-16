(function(exports){
  function testSingleNoteView(){

    function Notedouble(text){this.text = text};
    Notedouble.prototype.getText = function(){return this.text};

    var notedouble = new Notedouble("Favourite drink: seltzer");
    singleNoteView = new SingleNoteView(notedouble);
    var htmlstring = singleNoteView.htmlstringfy();

    assert.isTrue(htmlstring === "<div>Favourite drink: seltzer</div>")
  };

  testSingleNoteView();
  exports.testSingleNoteView = testSingleNoteView;

})(this);
