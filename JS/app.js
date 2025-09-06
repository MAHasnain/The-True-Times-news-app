const API_KEY = "b7854a039c3740c598ca25da0c0db2bc";

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
const nav_links = document.querySelector(".nav-links")

const main_business = document.querySelector(".main_business");
document.addEventListener("DOMContentLoaded", async () => {
    try {

        const response = await fetch(`${standardEndpoint}/top-headlines?country=us&category=general&pageSize=12&apiKey=${API_KEY}`)
        const data = await response.json();
        // console.log(data);

        main.innerHTML = "";

        const mainHeading = document.createElement("h2");
        mainHeading.style.textTransform = "capitalize"
        mainHeading.innerText = `General News`
        main.appendChild(mainHeading);

        data.articles.map(article => {
            // console.log(article);
            const news_card = document.createElement("div")
            news_card.classList.add("news-card")

            news_card.innerHTML += `
                <div class="txt-content text_60_wd">
                        <h3 class="title">${article.title}</h3>
                        <p class="text">${cleanContent(article.content)}</p>
                        <a href="${article.url}">
                Read more...</a>
                    </div>
                    <div class="img"><img width="300px" src="${article.urlToImage}" alt="" srcset=""></div>`;
            main.appendChild(news_card)
        })

    } catch (error) {
        console.error(error)
    }
})

const main = document.querySelector(".main")
nav_links.addEventListener("click", async (e) => {
    const category = e.target.dataset.category

    try {
        // const res = await fetch(`${standardEndpoint}/top-headlines?country=pk&apiKey=${API_KEY}`)
        const res = await fetch(`${standardEndpoint}/top-headlines?country=us&category=${category}&pageSize=15&apiKey=${API_KEY}`)
        const data = await res.json()

        main.innerHTML = "";

        const mainHeading = document.createElement("h2");
        mainHeading.style.textTransform = "capitalize"
        mainHeading.innerText = `${category} News`
        main.appendChild(mainHeading);

        data.articles.map(article => {
            // console.log(article);
            const news_card = document.createElement("div")
            news_card.classList.add("news-card")

            news_card.innerHTML += `
                <div class="txt-content text_60_wd">
                        <h3 class="title">${article.title}</h3>
                        <p class="text">${cleanContent(article.content)}</p>
                        <a href="${article.url}">
                Read more...</a>
                    </div>
                    <div class="img"><img width="300px" src="${article.urlToImage}" alt="" srcset=""></div>`;
            main.appendChild(news_card)
        })
    } catch (error) {
        console.error(error);
    }
})

function cleanContent(content) {
    if (!content) return "";
    return content.split("[+")[0].trim();
}

const allHeadlines = document.querySelector(".all-headlines")
document.addEventListener("DOMContentLoaded", async () => {
    try {
        // const res = await fetch(`${standardEndpoint}/top-headlines?country=pk&apiKey=${API_KEY}`)

        const res = await fetch(`${standardEndpoint}/everything?q=finance&from=${moment().subtract(3, 'days').calendar()}&to=${moment().format('L')}&sortBy=popularity&pageSize=8&apiKey=${API_KEY}`)
        const data = await res.json()
        // console.log(data);

        data.articles.map(article => {
            // console.log(article);
            allHeadlines.innerHTML += `
             <div class="headline">
                    <img src="${article.urlToImage}" width="300px" alt="">
                    <div class="txt-content txt_fixed_wd">
                        <h4 class="title">${article.title}</h4>
                        <p class="text">${cleanContent(article.content)}</p>
                        <a href="${article.url}">
                Read more...</a>
                    </div>`})
    } catch (error) {
        console.error(error);
    }
})

const searchInput = document.querySelector("#search-bar");
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    try {

        // GET https://newsapi.org/v2/everything?q=bitcoin&apiKey=75cf45673abd4cd8b24e93aba1200290
        const response = await fetch(`${standardEndpoint}/everything?q=${searchInput.value.toLowerCase()}&pageSize=13&apiKey=${API_KEY}`)
        const data = await response.json();
        // console.log("Search query data ", data);


        main.innerHTML = "";

        function changeDateFormat(dateString) {
            const dateObj = new Date(dateString);
            const converted = dateObj.toISOString().slice(0, 10)
            return converted;
        }

        data.articles.map(article => {
            console.log(article);
            if (searchInput.value !== '') {
                const mainHeading = document.createElement("h2");
                mainHeading.style.textTransform = "capitalize"
                mainHeading.innerText = `${searchInput.value} News`
                main.appendChild(mainHeading);
            }

            main.innerHTML += `
            <div class="searched_articles">
                    <img src="${article.urlToImage}" width="300px" alt="">
                    <div class="txt-content txt_fixed_wd">
                        <h4 class="title">${article.title}</h4>
                        <p class="text">${cleanContent(article.content)}</p>
                        <p>Published at : ${changeDateFormat(article.publishedAt)}</p>
                        <a href="${article.url}">
                Read more...</a>
                </div>
        `;
            searchInput.value = "";
        })
    } catch (error) {
        console.error(error);
    }
})
