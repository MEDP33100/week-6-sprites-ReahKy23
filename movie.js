class Movie {
    constructor(data) {
        this.data = data;

        this.element = document.createElement('div');
        this.element.classList.add('mov_card');

        // create movie Image element
        let imgElement = document.createElement('div');
        let img = document.createElement('img');
        img.src = 'media/' + data.poster;
        img.alt = data.title + ' movie poster';
        imgElement.appendChild(img);
        this.element.appendChild(imgElement);

        // create p element for movie Title
        let title = document.createElement('p');
        title.classList.add('mov_title');
        title.textContent = data.title + ' [' + data.release_year + ']';
        this.element.appendChild(title);

        //create p element for Director name
        let director = document.createElement('p');
        director.classList.add('mov_dir');
        director.textContent = data.director;
        this.element.appendChild(director);

        // create p element for gross Revenue
        let revenue = document.createElement('p');
        revenue.classList.add('revenue');
        revenue.textContent = '$' + data.revenue + ' ' + data.currency;
        this.element.appendChild(revenue);
    }

    render(parent) {
        parent.appendChild(this.element);
    }
}

// Fetch the data and show the movies
fetch('movie.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(movieList) {
        let board = document.getElementById('board');
        for (let i = 0; i < movieList.length; i++) {
            let movie = new Movie(movieList[i]);
            movie.render(board);
        }
    })
