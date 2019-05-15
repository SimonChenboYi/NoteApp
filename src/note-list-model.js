(function(exports){
 function NoteListModel(list){this._list = list;}

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
