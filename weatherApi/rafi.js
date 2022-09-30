// random api//
fetch('https://randomuser.me/api/') 
.then(res=>res.json())
.then(data=> {
    
    const userdata=data.results[0];
    const userrname=userdata.name;
    const getname=`${userrname.title} ${userrname.first} ${userrname.first} `;
  document.getElementById("user-name").innerText=getname;
    
})

// bored api use//

function dosemething(){
    fetch('http://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(data => {
       const getfunactivity=data.activity;
       document.getElementById("activity").innerText=getfunactivity;
       
    });
}

dosemething();
 

//1 second por por change hobe
setInterval(() => {
    dosemething();   
}, 1000);
