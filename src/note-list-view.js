(function(exports){
  function NoteListView(){};

  NoteListView.prototype = {
    constructor: NoteListView,
    get_view: function(array){
      var string = ""
      array.map(function(item){
        string = string + "<li><div>" + item + "</div></li>"
      })
      var result = "<ul>" + string + "</ul>";
      return result;
    }
  }

exports.NoteListView = NoteListView;

})(this);
