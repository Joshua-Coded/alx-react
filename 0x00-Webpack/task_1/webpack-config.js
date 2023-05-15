const path = require('path');

module.exports = {
    mode: "production",
    entry: {
        main: path.resolve(__dirname, "./js/dashboard.js")
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'bundle.js'
    }
}