//== type shudu value check kore  
//=== type or value 2 ta check kore 
let num1=2;
let num2="2";
if( num1 === num2){
    console.log("true");
}
else{
    console.log("false");
}
let num3=1;
let num4=true;
if( num3 == num4){
    console.log("true");
}
else{
    console.log("false");
}


//property access
const takename=[];
 const student=[
     {id:11,Name:'rabbi',adreess:'dhaka'},
    {id:32,Name:'rafi',adreess:'khulna'},
     {id:33,Name:'ismika',adreess:'rajshahi'}
 ];
 

//  for(let i=0; i<student.length; i++){
//    const studentcount=student[i];
//    const studentname=studentcount.Name;
//    takename.push[studentname];
   
//  }
//  console.log(takename);

const namelist=student.map(s=>s.Name);
const filterdata=student.filter(student1=> student1.id >11);
console.log(namelist);
console.log(filterdata);
//map and fillter

const number=[10,20,30,40,60];
const output=[];
//step 1 to take easy and easily  done by map 
//   for(let i=0; i<number.length;i++){
//       const getnumber=number[i];
//       const squarenumber=getnumber*getnumber;
//      output.push(squarenumber);
//   }
//  console.log(output);

//step2
//  function sqare(element){
//     const result=element*element;
//      return result;
// }
//  const  finalresult=number.map(sqare);
// console.log(finalresult);

//step3
// function sqare(element){
//     const result=element*element;
//      return result;
// }
//  const  finalresult=number.map(function(element){
//     const result=element*element;
//      return result;
// });


//step 4
//const result=element=>element*element;
const finalresult=number.map(element=>element*element)
console.log(finalresult);

//filter
//step1
const number1=[10,20,30,40,60];
const output1=[];
// for(let i=0; i<number.length;i++){
//         const getnumber=number[i];
//         const squarenumber=getnumber*getnumber;
//         if(squarenumber > 200){
//             output1.push(squarenumber);
//         }
         
//        }
//      console.log(output1);

const fiterresult=number1.filter(x=> x>20);
    console.log(fiterresult);

 //closer  is one function is stayed another fuction and return one function to access reference variable 
 //
 function stopwatach(){
let count=0;
return function (){
    count++;
    return count;
}

 }
 const clock1=stopwatach();
 console.log(clock1());
 console.log(clock1());
 console.log(clock1());

 const clock2=stopwatach();
 console.log(clock2());
 console.log(clock2());
 console.log(clock1());

//splice slice(index 2 to 4 middle number),join

const datanum=[1,2,3,4,7,10,30];
const newdatanum=datanum.slice(2,4);
console.log(newdatanum);
console.log(datanum);

const splicedatanum=datanum.splice(2,4);
console.log(splicedatanum);
console.log(datanum);
const datanum1=[1,2,3,4,7,10,30];
const joinedatanum=datanum1.join(" ");
console.log(joinedatanum);

//break ar contuine
const datanum2=[1,-2,2,-3,4,7,10,30];
for(let i=0; i<datanum2.length;i++){
        const getnumber=datanum2[i];
        //  if(getnumber>4){
        //      break;   //4 cheye boro hole ses
        //     }
        //     console.log(getnumber);
     if(getnumber<0){
            continue;
         }  
         console.log(getnumber);
        }
      
    