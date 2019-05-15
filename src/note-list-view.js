(function(exports){
  function NoteListView(list){this.list = list};

  NoteListView.prototype.get_view = function(){
      var string = "";
      this.list.map(function(item){
        string = string + "<li><div>" + item + "</div></li>"
      })
      var result = "<ul>" + string + "</ul>";
      return result;
    }


exports.NoteListView = NoteListView;

})(this);
