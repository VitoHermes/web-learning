const express = require("express");
const cors = require("cors");
const apiRouter = require("../app/routes/v1/api");
const config = require("../app/config");


const startServer = () => {
    const expressApplication = express();
    expressApplication.listen(8000, err => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log(`Server is running on port ${config.port}`);
    });
    return expressApplication;
};

module.exports = () => {
    const app = startServer();
    app.use(cors());
    app.use(express.json());
    //app/v1 + router name
    app.use(config.api.prefix, apiRouter);
    return app;
}
