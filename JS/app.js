const API_KEY = "75cf45673abd4cd8b24e93aba1200290";

const query = "bitcoin"
const standardEndpoint = "https://newsapi.org/v2"
    
`${standardEndpoint}/everything?q=${query}&apiKey=${API_KEY}`;
`${standardEndpoint}/everything?q=${query}&from=2025-08-26&to=2025-08-26&sortBy=popularity&apiKey=${API_KEY}`;
`${standardEndpoint}/everything?domains=techcrunch.com,thenextweb.com&apiKey=${API_KEY}`;
`${standardEndpoint}/top-headlines?country=us&apiKey=${API_KEY}`;
`${standardEndpoint}/top-headlines?sources=bbc-news&apiKey=${API_KEY}`;
`${standardEndpoint}/top-headlines?country=pk&category=business&apiKey=${API_KEY}`;  /// Countries  ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za
`${standardEndpoint}/top-headlines?q=trump&apiKey=${API_KEY}`;
`${standardEndpoint}/top-headlines/sources?category=businessapiKey=${API_KEY}`; /// CATEGORIES => business  entertainment  general  health  science  sports  technology