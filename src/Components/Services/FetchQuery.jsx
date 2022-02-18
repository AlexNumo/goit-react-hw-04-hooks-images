const API_KEY = '22475495-2c8e7700259b36f6d1c49a123';
const PER_PAGE = 12;

function fetchQuery(query, page){
    return fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`)

        .then(response => {
            if(response.ok) {
                return response.json();
            }
            return Promise.reject(
                new Error('Somes wrong'))
        })
}

export default fetchQuery;