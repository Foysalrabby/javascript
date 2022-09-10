const user={id:245,
    name:"rima",
    friend:[20,30,40],
    friendname:['sima','rima','rafi']

}
//server jokon data patabo tokon string ortat json akare patabo step
const userjson=JSON.stringify(user);
console.log(userjson);
//bt amra json server hote niye kaj korbo tokon javascript object moto niye kaj korbo step
const objectdata=JSON.parse(userjson);
console.log(objectdata);