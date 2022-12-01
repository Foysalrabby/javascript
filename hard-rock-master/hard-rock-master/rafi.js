// const inputtext=document.getElementById("searchinput").value;
// const searchbtn1=document.getElementById("searchbtn");

// searchbtn1.addEventListener("click",function(){

// fetch(`https://api.lyrics.ovh/suggest/${inputtext}`)
// .then(res => res.json())
// .then(data => {console.log(data)})
//onclick
// })


// const displaysesarchsong =async() =>{
//     const inputtext=document.getElementById("searchinput").value;
//     const url=`https://api.lyrics.ovh/suggest/${inputtext}`
//     const fdata=await fetch(url)
//     const data=await(fdata.json())
//     // console.log(data.data);
//     displaysong(data.data);
    
// }

// const ulfelememt="";
// const displaysong=(song)=>{
// // const divbelement=document.getElementById("songconatainer");
// // divbelement.innerHTML='';
// const ulentery=document.getElementById("elementul");

// for(let i=0; i< song.length;i++){
//     const getsongdata=song[i];
//    // console.log(getsongdata);
//      const fgetsongdata=getsongdata.title_short;
//     // console.log(fgetsongdata);
//     const createele=document.createElement("li");
//      createele.innerText=fgetsongdata;
//     ulentery.appendChild(createele);

// 

// }

// const displayerr=()=> {

//     console.log("no data found");
// }



const displaysesarchsong = () =>{
const inputsearch=document.getElementById("searchinput").value;
const urls = `https://api.lyrics.ovh/suggest/${inputsearch}`
fetch(urls)
.then(res => res.json())
.then(data => displaysong(data.data))
.catch(error => displayerror(error))

}

//============
//============

const displaysong = (song) => {
 //console.log(song);
 const divmaincon=document.getElementById("songconatainer");
 divmaincon.innerHTML='';
 song.forEach(songsdata => {
const seconddiv=document.createElement('div');
seconddiv.className='single-result row align-items-center my-3 p-3'
seconddiv.innerHTML=`
                    <div class="col-md-9">
                        <h3 class="lyrics-name">${songsdata.title}</h3>
                        <p class="author lead">Album by <span>${songsdata.artist.name}</span></p>
                    <audio controls preload="auto">
                      <source src="${songsdata.preview}" type="audio/mpeg">
                    </audio>

                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button onclick="getlirichs('${songsdata.title}','${songsdata.artist.name}')" class="btn btn-success">Get Lyrics</button>
                    </div>`;

            divmaincon.appendChild(seconddiv);
 });

 

}
//============
const getlirichs=async(arrtist,title) =>{
//const singlelyrics=document.getElementById("singlelyrics");
try{

    const url = `https://api.lyrics.ovh/v1/${arrtist}/${title}`;
    const res = await fetch(url);
    const data = await res.json();
   // console.log(data.lyrics);

   displaysinglelirics(data.lyrics);
    
}
catch(error){

displayerror();
}

//  const res = await fetch(url);
//  const lyrisdata = await res.json();
//   console.log(lyrisdata.lyrics);



}

//============
//============
 const displaysinglelirics = (lyrics) =>{
    const singlelyric=document.getElementById("singlelyrics");
    const pie = document.createElement('h6');
    pie.innerText=lyrics;
    singlelyric.appendChild(pie);
    

 }




//============



//============
const displayerror =(error)=>{

alert("Not found !!");

}