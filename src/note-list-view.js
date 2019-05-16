(function(exports){
  function NoteListView(list){this.list = list};

  NoteListView.prototype.get_view = function(){
      var string = "";
      this.list.map(function(item){
        var limtedLengthStr;

        limtedLengthStr = item.length > 20? item.substr(0,20) : item;


        string = string + "<li><div>" + limtedLengthStr + "</div></li>"
      })
      var result = "<ul>" + string + "</ul>";
      return result;
    }


exports.NoteListView = NoteListView;

})(this);
