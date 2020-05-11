var budgetController =(function(){

   var Expense= function (id,description,value){
       this.id=id;
       this.description=description;
       this.value=value;
   }

   var Income= function (id,description,value){
    this.id=id;
    this.description=description;
    this.value=value;
}





var data={

    allItems:{
        exp:[], 
        inc:[]
    },
    totals:{
        exp:0,
        inc:0
    }

}

})();





var UIController =(function(){
//private strings
var DOMstrings={
    inputType:'.add__type',
    inputDescription:'.add__description',
    inputValue:'.add__value',
    inputBtn:'.add__btn'
}
return {
    getinput:function (){

      return {
     type:document.querySelector(DOMstrings.inputType).value,//will be either inc or exp
         description :document.querySelector(DOMstrings.inputDescription).value,
    value:document.querySelector(DOMstrings.inputValue).value
      }

    },

    getDOMstrings:function(){
        return DOMstrings;
    }
}


})()

var controller= (function(budgetCtrl,UICtrl){
 
   var setupEventLisners=function (){

    var DOM =UICtrl.getDOMstrings();


    document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);


    //n (comment in ctrl item was here b)

              document.addEventListener('keypress',function(event){



                       if(event.keyCode===13 || event.which===13){

                             ctrlAddItem();
                           }



 })



   }


   // var DOM =UICtrl.getDOMstrings();//from the object

   var ctrlAddItem =function (){

  //get the filed input data

     var input =UICtrl.getinput();
      //console.log(input); 

        //2 add the item to the budget controller



        //3 add the items to the ui 


        //4calculate the budget




        //5 display yhe budget on the ui







}


return {
    init:function(){
        console.log('hey');
        setupEventLisners(); 
    }
}




   




})(budgetController,UIController)



//controller.init(); 