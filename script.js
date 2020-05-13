

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
        inputBtn:'.add__btn',
        incomeContainer:'.income__list',
        expensesContainer: '.expenses__list '

       }

   return {
       getinput:function(){
           return {
             type :   document.querySelector(DOMstrings.inputTypes).value,
             description : document.querySelector(DOMstrings.inputDescription).value,
             value :document.querySelector(DOMstrings.inputValue).value
           }
        
    
            
       },
       addListItem:function (obj,type){
           //Create Html String with placceholder Text
             var html,newHtml,element;

             if(type==='inc'){

                element=DOMstrings.incomeContainer;

                html='<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
             
             }
             else if(type==='exp'){
                 element=DOMstrings.expensesContainer;
                html='<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div> </div></div>'
          
              }
            
          
          
              //Replacce the placeholder Text with Some actual data
       
              newHtml= html.replace('%id%',obj.id);
              newHtml=newHtml.replace('%description%',obj.description);
              newHtml=newHtml.replace('%value%',obj.value);


           //Insert The Html into DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml)




       },
       clearFields:function(){
           var fields,fieldsArr;

           fields=document.querySelectorAll(DOMstrings.inputDescription + ',' +DOMstrings.inputValue)
           fieldsArr= Array.prototype.slice.call(fields);
           fieldsArr.forEach(function(current,index,array){
               current.value = " ";
           })

           fieldsArr[0].focus();

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

                 UICtrl.addListItem(newItem,input.type);
           
                 //For Clear the field
                    UICtrl.clearFields();

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