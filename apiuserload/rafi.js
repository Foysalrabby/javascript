    function looaddata(){
        document.getElementById("buttonload").addEventListener("click",function(){
            const loaddatatxt=document.getElementById("load").value;
            const loaddatav=parseInt(loaddatatxt);
           // console.log(loaddatav);

          
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data=>{
                data=data.slice(0,loaddatav);
              
            const containdivdata=document.getElementById("users");
            containdivdata.innerHTML='';
             for (let i = 0; i < data.length; i++) {
                const element = data[i];
                const p =document.createElement("p");
                p.innerHTML=`<p>${element.id} name <strong>${element.name}</strong><button onClick="displaydetails(${element.id})">details${element.id}</button></p>`;
                containdivdata.appendChild(p);
                
             }    
            });




            
  
   
    
    
        })


    }
    
    const displaydetails = (userdata => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userdata}`)
        .then(res => res.json())
        .then(data => {
   
           const subcontainerdat=document.getElementById("subcontainer");
           subcontainerdat.innerHTML=`
           <h3>${data.username}</h3>
           <h4> ${data.email}</h4>
           <p> ${data.phone}</p>
           <p> ${data.address.city}</p>
           `;
         
            
           //console.log(data);
        })
   
   
   
       });
    
    
    looaddata();
    
   



         


