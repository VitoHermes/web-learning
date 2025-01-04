const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors());

// 定义电影
const movieList = [];

const movie_example = {
    id: 1,
    title: "The Matrix",
    description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    types: ["Sci-Fi"],
    averageRating: 4.5,
    reviews: [
        { id: 1, content: "Great movie", rating: 5 },
        { id: 2, content: "I loved it", rating: 4 }
    ]
};

app.use(express.json());


// API1: get all movies
app.get('/v1/movies', (req, res) => {
    const { sort, keyword, page = 1, limit = 10 } = req.query;
    let moviesCopy = [...movieList];

    // 排序
    if (sort === 'rating') {
        moviesCopy.sort((a, b) => a.averageRating - b.averageRating);
    } else if (sort === '-rating') {
        moviesCopy.sort((a, b) => b.averageRating - a.averageRating);
    }

    // 搜索
    if (keyword) {
        const sanitizedKeyword = keyword.trim().toLowerCase();
        moviesCopy = moviesCopy.filter(movie =>
            movie.title.toLowerCase().includes(sanitizedKeyword) ||
            movie.description.toLowerCase().includes(sanitizedKeyword)
        );
    }

    // 分页
    const start = (parseInt(page) - 1) * parseInt(limit);
    const end = start + parseInt(limit);
    const result = moviesCopy.slice(start, end);

    res.json(result);
});


// API2: get a movie by id
app.get('/v1/movies/:id', (req, res) => {
    const { id } = req.params;
    const movie = movieList.find(movie => movie.id === parseInt(id));
    if (!movie) {
        return res.status(404).json({ message: 'movie id ' + id + ' not found!' });
    }
    return res.status(200).json(movie);
});

// API3: create a movie
app.post('/v1/movies', (req, res) => {
    const { title, description, types } = req.body;
    if (!title || !description || !Array.isArray(types) || types.length === 0) {
        return res.status(400).json({ message: 'title, description, and types (as a non-empty array) are required' });
    }
    const newMovie = {
        id: movieList.length + 1,
        title,
        description,
        types,
        averageRating: 0, // 给个初始值0分
        reviews: []
    }
    movieList.push(newMovie);
    return res.status(201).json(newMovie);
});

// API4: update a movie
app.put('/v1/movies/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, types } = req.body;
    const movieUpdate = movieList.find(movie => movie.id === parseInt(id));
    if (!movieUpdate) {
        return res.status(404).json({ message: 'movie id ' + id + ' not found!' });
    }

    if (types && (!Array.isArray(types) || types.length === 0)) {
        return res.status(400).json({ message: 'types must be a non-empty array' });
    }

    if (title) movieUpdate.title = title;
    if (description) movieUpdate.description = description;
    if (types) {
        movieUpdate.types = types;
    }

    return res.status(200).json(movieUpdate);
});

// API5:删除电影
app.delete('/v1/movies/:id', (req, res) => {
    const { id } = req.params;
    const movieIndex = movieList.findIndex(movie => movie.id === parseInt(id));
    if (movieIndex == -1) {
        return res.status(404).json({ message: 'movie id ' + id + ' not found!' });
    }
    movieList.splice(movieIndex, 1);
    return res.status(204).send();
});

// API6:添加评论
app.post('/v1/movies/:id/reviews', (req, res) => {
    const { id } = req.params;
    const { content, rating } = req.body;
    const ratingNum = parseInt(rating);
    if (isNaN(ratingNum)) {
        return res.status(400).json({ message: 'rating must be a number' });
    }
    if (ratingNum < 0 || ratingNum > 5) {
        return res.status(400).json({ message: 'rating must be between 0 and 5' });
    }

    const movie = movieList.find(movie => movie.id === parseInt(id));

    if (!movie) {
        return res.status(404).json({ message: 'movie id ' + id + ' not found!' })
    }
    const newReview = {
        id: movie.reviews.length + 1,
        content,
        rating: ratingNum
    }
    if (!content || !rating) {
        return res.status(400).json({ message: 'content and rating are required' });
    }

    movie.reviews.push(newReview);

    // 计算平均评分
    const totalRating = movie.reviews.reduce((sum, review) => sum + review.rating, 0);
    movie.averageRating = parseFloat((totalRating / movie.reviews.length).toFixed(2));
    return res.status(201).json(newReview);
});

// API7:获取评论
app.get('/v1/movies/:id/reviews', (req, res) => {
    const { id } = req.params;
    const movie = movieList.find(movie => movie.id === parseInt(id));
    if (!movie) {
        return res.status(404).json({ message: 'movie id ' + id + ' not found!' });
    }
    return res.status(200).json(movie.reviews);
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});