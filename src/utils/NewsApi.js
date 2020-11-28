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
        return fetch(`https://newsapi.org/v2/everything?q=${keyWord}&from=${dateFrom}&to=${dateNow}&pageSize=100&language=ru&apiKey=2dc416e57caa4931a4f1163e0f3bee2a`,
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