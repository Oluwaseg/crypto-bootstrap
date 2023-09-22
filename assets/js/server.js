const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/news",
  createProxyMiddleware({
    target: "https://newsapi.org/v2", // target host
    changeOrigin: true, // needed for virtual hosted sites
    pathRewrite: {
      "^/news":
        "/everything?q=cryptocurrency&apiKey=2154aecbf215447fa3d6ae27d9a8845c", // rewrite path
    },
  })
);

app.listen(3000, () => {
  console.log("Proxy server is running on port 3000");
});
