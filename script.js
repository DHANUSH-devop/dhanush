const apilink='https://apt.themoviedb.org/3/discover/movie?sort_by-popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1';
const imgpath='https://api.themoviedb.org/t/p/w1280';
const searchapi="https://apt.themoviedb.org/3/discover/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=";


const main=document.getElementById('section');
const form=document.getElementById('form');
const search=document.getElementById('query');
returnmovies('apilink');
function returnmovies(url){
    fetch(url).then(res=>res.json()).then(function(data)
    {
        console.log(data.results);
        data.results.forEach(element=>{
            const div_card=document.createElement('div');
            div_card.setAttribute('class','card');
            const div_row=document.createElement('div');
            div_row.setAttribute('class','row');
            const div_column=document.createElement('div');
            div_column.setAttribute('class','column');
            const image=document.createElement('img');
            image.setAttribute('class','thumbnail');
            image.setAttribute('id','image');
            const title=document.createElement('h3');
            title.setAttribute('id','title')
            const center=document.createElement('center');

        
        
             title.innerHTML=`${element.title}`;
             image.src=imgpath+element.poster_path;

             center.appendChild(image);
             div_card.appendChild(title);
             div_column.appendChild(div_card);
             div_row.appendChild(div_column);
             main.appendChild(div_row);
        })
    })
}

form.addEventListener("submit",(e)=>{
e.preventDefault();

main.innerHTML='';

const searchItem=search.value;

if(searchItem){
    returnmovies(searchapi+searchItem);
    search.value="";
}
});