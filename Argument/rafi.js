function testargument(fristname,lastname){
//console.log(arguments);
let finalname="";
for(var i=0; i<arguments.length;i++){
    let name=arguments[i];
    finalname=finalname+name;
}
;
return finalname;

}

const personname=testargument("rabbi","hossem","islam");
document.write(personname);