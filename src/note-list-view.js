(function(exports){

  function NoteListView(notelist){
    this.list = notelist.getList();
  };

  NoteListView.prototype.get_view = function(){
      var string = "";

      this.list.map(function(item){
        var limtedLengthStr;
        var noteText = item.getText();
        var noteId = item.getId();

        limtedLengthStr = noteText.length > 20? noteText.substr(0,20) : noteText;


        string = string + "<li><div>" + `<a href="http://localhost:8080#notes/${noteId}">` + limtedLengthStr + "</a>" + "</div></li>"
      })

      var result = "<ul>" + string + "</ul>";
      return result;
    }

exports.NoteListView = NoteListView;

})(this);
