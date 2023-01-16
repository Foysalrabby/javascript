fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => showuserdata(data))


function showuserdata(data) {
   //console.log(data);
    
let lists='';
data.forEach(userdata => {
 lists = lists + `
 <div class="user_style">
 <h2> ${userdata.name}</h2>
 <p>${userdata.username}</p>
 <p>${userdata.address.street}.${userdata.address.city}.${userdata.phone}.${userdata.website}.${userdata.company.name}</p>
 </div>

 
 `;
});
const uldata = document.getElementById("user_list");
uldata.innerHTML=lists;

}