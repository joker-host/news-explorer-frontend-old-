const moment = require('moment');
const dateNow = Date.now()
const dateFrom = moment(dateNow - 7 * 24 * 3600 * 1000).format('YYYY-MM-DD');

const handleResponse = (result) => {
    if (result.ok) {
        return result.json();
    } else {
        return Promise.reject(`Ошибка: ${result.status}`);
    }
};

class NewsApi {
    getArticles(keyWord) {
        return fetch(`https://newsapi.org/v2/everything?q=${keyWord}&from=${dateFrom}&to=${dateNow}&pageSize=100&sortBy=popularity&language=ru&apiKey=a349bbe623754e8cafb460c57b8ce4f1`,
            {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                },
            }).then(handleResponse);
    }
}

const newsApi = new NewsApi();

export { newsApi };