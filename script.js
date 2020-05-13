

//budget Controller
var budgetController=(function(){

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


            return {
             
                addItem:function(type,des,val){
                    var newItem,ID;
                   
                    //[1,2,3,4,5] next id will be 6
                    
                    //id=last +1
                    //create new Id
                    if(data.allItems[type].length >0){ 
                        ID=data.allItems[type][data.allItems[type].length -1].id + 1;
                    }
                    else{
                        ID=0
                    }
                   

                      //create new Item based on Inc  or exp
                    if(type==='exp'){
                       newItem=new Expense(ID,des,val );
                    }
                    else if(type==='inc'){
                        newItem=new Income(ID,des,val );

                    }
                     //Push it into data structure
                    data.allItems[type].push(newItem);

                    //return the new element 
                    return newItem;

                },
                testing:function(){
                    console.log(data);
                }



            }
})();


// UI Controller
var UIController=(function(){

   var DOMstrings={
       inputTypes:".add__type",
       inputDescription:".add__description",
       inputValue:'.add__value',
        inputBtn:'.add__btn'

       }

   return {
       getinput:function(){
           return {
             type :   document.querySelector(DOMstrings.inputTypes).value,
             description : document.querySelector(DOMstrings.inputDescription).value,
             value :document.querySelector(DOMstrings.inputValue).value
           }
        
    
            
       },
       getDOMstrings:function(){
           return DOMstrings;
       }
   }

})();




//Global App Controller
var controller =(function(budgetCtrl,UICtrl){
                
  var setupEventListenere=function(){

     //for accessing the inputBtn variable in UIController
     var DOM=UICtrl.getDOMstrings();


    document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);


    document.addEventListener('keypress',function(e){
            if(e.keyCode=== 13 || e.which ===13 ){
       ctrlAddItem();
         }
        })


  };
     
                

             

            var ctrlAddItem =function(){
 
                var input,newItem
                // 1 Get the field input data
              input =UICtrl.getinput();
            //   console.log(input);


                // 2 Add the item to the budget controller
                 
                newItem=budgetCtrl.addItem(input.type,input.description,input.value)
 
                 // 3 add the item to the ui

                 // 4 Calculate the Budget
 
                // 5 Display the budget on the Ui

            }

            return {
                init:function(){
                   // console.log("hey");
                    setupEventListenere();
                }
            }
              

})(budgetController,UIController);

controller.init();