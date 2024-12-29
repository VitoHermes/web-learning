// const express = require("express");
// const weatherRouter = require("./weatherRouter");
// const app = express();
// const PORT = 8000;

// app.use(express.json());
// app.use('/api', weatherRouter);


// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
const loaders = require("./loaders");
loaders.init();
