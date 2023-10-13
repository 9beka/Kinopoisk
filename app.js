const API_KEY =' 5f6f2471-561b-4147-8cb4-c575e702b642'
const BASE_URL = "https://kinopoiskapiunofficial.tech/api";
const API_URL_POPULAR = BASE_URL + "/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=";
const API_URL_SEARCH = BASE_URL + "/v2.1/films/search-by-keyword?keyword=";

const output = document.querySelector('.output')
const pagination = document.querySelector('.pagination')
const searchInput = document.querySelector('.searchInput')


const getMovies = async (page = 1) => {
   const request = await fetch(`${API_URL_POPULAR} ${page}`, {
       headers: {
         'X-API-KEY': '8a91212f-251a-46ed-89c2-08e085db7629',
       },
   })
   const response = await request.json()
   console.log(response);
   renderData(response.films);
   generatePagination(20)
}
getMovies()

const renderData = (data) => {   
   output.innerHTML=''
   data.forEach(el => {
      const col = document.createElement('div')
   const box = document.createElement('div')
   const img = document.createElement('img')
   const title = document.createElement('p')

   title.textContent = el.nameRu
   img.src = el.posterUrl
   col.className = 'col-3'
   box.className = 'box'

   box.append(img,title)   
   col.append(box)
   output.append(col)
   });
   
}
const generatePagination = (num) =>{
   pagination.innerHTML=''
   const nums = [];
   for(let i=1; i<=num; i++){
      nums.push(i)
   }
   nums.forEach((values)=>{
      const pages = document.createElement('p')

      pages.textContent = values;
      pagination.append(pages)

      pages.addEventListener('click',()=>{
         getMovies(values)
         
      })
   })
}


const searchFcn = () =>{
   
}