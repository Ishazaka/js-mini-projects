



const APIURL =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



const movieBox =  document.getElementById('movie-box');

   const getMovies = async (api) => {
       const res = await fetch(api);
       const data = await res.json();
       showMovies(data.results)

   }

   getMovies(APIURL)


   function showMovies(movies){
    movieBox.innerHTML = '';
    movies.forEach(movie => {
        console.log(movie)
      const box =  document.createElement('div');
        box.classList.add('box')
        box.innerHTML = `
        <img src='${IMGPATH + movie.poster_path}' alt="">
                <div class="overlay">
                    <div class="title">
                        <h2>${movie.original_title  }</h2>
                        <span>${movie.vote_average}</span>
                    </div>
                    <h3>Overview:</h3>
                    <p>${movie.overview} </p>
                    </div>
        `
        movieBox.append(box)
    });

   }



   document.querySelector('#search').addEventListener( 'keyup' , function (event){
  console.log(event.target.value)
        if(event.target.value != ''){
             getMovies(SEARCHAPI + event.target.value)
        }else{
            getMovies(APIURL)
        }
   } )
