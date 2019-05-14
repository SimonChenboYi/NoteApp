(function(exports){
 function NoteListModel(){this._list = [];}

NoteListModel.prototype = {
 constructor: NoteListModel,
 readArray: function(){
   return(this._list)
 }, 
 
 pushtoArray: function(item){
     this._list.push(item);
 }

}
 exports.NoteListModel = NoteListModel;
})(this);