const arry1=[23,40.50];
const array2 =[45,40,90];
const result=arry1.concat(array2);
console.log(result);
const hasan =30;
const rabby =40;
const rohim = 60;
const maximun=Math.max(hasan,rabby,rohim);
console.log(maximun);
const maxvalue1=Math.max(...array2);
console.log(maxvalue1);


// class and constructor
class person{
    constructor(name1,age1,address1){
  this.name=name1,
  this.age=age1,
  this.address=address1

    }
}

const desperson=new person("rabbi",19,"rajshahi, bangladesh");
console.log(desperson);


//inheritance
class person1{
    constructor(name1,age1,address1){
  this.name=name1,
  this.age=age1,
  this.address=address1

    }
}
class rahim extends person1{
constructor(name){
    super();
    this.name=name;

}

}
const desperson1=new person1("rabbyyy",19,"dhaka, bangladesh");
console.log(desperson1);
const desrahim=new rahim("rafi");
console.log(desrahim);


class parent{
    constructor(name){
        this.name="rabbi";
    }
}
class child extends parent{

    constructor(){
        super();
        this.age=33;
    }
    //method
    getfunction(){
        let a=2;
        let b=5;
        let sum=a+b;
        return "this name" +sum +this.name;
    }
}
const result1 =new child();
console.log(result1.getfunction());
console.log(result1);



