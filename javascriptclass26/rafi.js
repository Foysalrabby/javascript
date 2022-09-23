const normalperson={
     firstname:'rahim',
     lastname:'hossen',
     age:27,
     salary:2200,
     getname:function(){
        console.log(this.firstname+this.lastname);

     },
     //this is method
     chargebill:function(amount,tip){
        console.log(this);
        this.salary=this.salary-amount-tip;
        return this.salary;
     }

}
//bairer aisob method k function method use 
//korar jno bind ()/apply use hoy
const heroperson={
    name:'rabbihero',
    age:'45',
    salary:2600
}
const generalperson={
    name:'rimaanti',
    age:'35',
    salary:2000
}

// const person=normalperson.chargebill(400);
// console.log(person);
//tips parametr bad hobe*
// const  heropersonbill=normalperson.chargebill.bind(heroperson);
// heropersonbill(300);

// const generalpersonbill=normalperson.chargebill.bind(generalperson)
// generalpersonbill(400);
// console.log(generalperson.salary);//change
// console.log(normalperson.salary);
// //normal person no change because no change
// console.log(heroperson.salary);// change hobe

// same mechanism bt call use korlw heropersonbill(300);
//lage na .bind(generalperson) jagay .call(generalperson,500); 
//parameter +- kora jai .call(generalperson,500,50);  chargebill:function(amount,tip)
//ar apply array use korte hoy.apply(generalperson,500);

//call
// const  heropersonbill=normalperson.chargebill.call(heroperson,800,70);
// console.log(heropersonbill);

//apply

const  heropersonbill=normalperson.chargebill.apply(heroperson,[800,70]);
console.log(heropersonbill);