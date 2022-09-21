fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => displauuser(json));

function displauuser(users){

  const username=users.map(name=>name.name);
   //console.log(username);
    //  for(let i=0; i <users.length; i++){
    //       const username=users[i];
    //       const finalusername=username.name;
    //       Aname.push(finalusername);
     
    //  }

  const ulEntry=document.getElementById("user-name");
   
  for(let j=0; j<users.length; j++){
    const user=username[j];
    const li =document.createElement("li");
    li.innerText=user;
    ulEntry.appendChild(li);
  }

}


 
