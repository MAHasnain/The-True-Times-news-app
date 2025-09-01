const API_KEY = "75cf45673abd4cd8b24e93aba1200290";

const query = "bitcoin"
const standardEndpoint = "https://newsapi.org/v2";

`${standardEndpoint}/everything?q=${query}&apiKey=${API_KEY}`;
`${standardEndpoint}/everything?q=${query}&from=2025-08-26&to=2025-08-26&sortBy=popularity&apiKey=${API_KEY}`;
`${standardEndpoint}/everything?domains=techcrunch.com,thenextweb.com&apiKey=${API_KEY}`;
`${standardEndpoint}/top-headlines?country=us&apiKey=${API_KEY}`;
`${standardEndpoint}/top-headlines?sources=bbc-news&apiKey=${API_KEY}`;
`${standardEndpoint}/top-headlines?country=pk&category=business&apiKey=${API_KEY}`;
`${standardEndpoint}/top-headlines?q=trump&apiKey=${API_KEY}`;
`${standardEndpoint}/top-headlines/sources?category=businessapiKey=${API_KEY}`; /// CATEGORIES => business  entertainment  general  health  science  sports  technology

// header 
// moment().format('MMMM Do YYYY, h:mm:ss a'); // August 31st 2025, 4:47:41 pm
// moment().format('dddd');
let date = document.getElementById("date");
let time = document.getElementById("time");
function timeUpdate() {
    let currentDate = moment().format('dddd, MMMM Do YYYY');
    let currentTime = moment().format('h:mm:ss a');
    date.textContent = String(currentDate);
    time.textContent = String(currentTime);
    setTimeout(timeUpdate, 1000);
}
timeUpdate()

const news_card = document.querySelector(".news-card")
document.addEventListener("DOMContentLoaded", async () => {
    try {
        // const res = await fetch(`${standardEndpoint}/top-headlines?country=pk&apiKey=${API_KEY}`)
        const res = await fetch(`${standardEndpoint}/top-headlines?country=us&category=science&apiKey=${API_KEY}`)
        const data = await res.json()

        // console.log(data.articles);
        data.articles.map(article => {
            console.log(article);
            news_card.innerHTML = `
           <div class="txt-content">
                        <h3 class="title">${article.title}</h3>
                        <p class="text">${article.content}</p>
                    </div>
                    <div class="img"></div>`})

    } catch (error) {
        console.error(error);
    }

})