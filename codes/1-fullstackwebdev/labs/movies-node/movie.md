# 测试的前端页面
https://movie-collection-prac.netlify.app/
3000端口

const movie = {
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

console.log(movie.title);

// 获取所有电影
GET / v1 / movies 200
query: {
    sort(rating, -rating)
    keyword(q)
    page
    limit(pageSize)
}


// 获取单个电影
GET / v1 / movies /: id 200

// 创建电影
// 新添加的电影最先返回
POST / v1 / movies 201
body: {
    title: "The Matrix",
        description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
            types: ["Sci-Fi"],
}

// 更新电影
PUT / v1 / movies /: id 200
body: {
    title
    description
    types
}
// 删除电影
DELETE / v1 / movies /: id 204

扩展部分
添加评论
POST / v1 / movies /: id / reviews 201
body: {
    content: "Great movie",
        rating: 5
}

// 获取评论
GET / v1 / movies /: id / reviews 200

// 删除评论
DELETE / v1 / movies /: id / reviews /: reviewId 204
