const { createProxyMiddleware } = require("http-proxy-middleware");

const proxyBaseConfig = {
  changeOrigin: true,
  secure: false,
};

const serverAddress = process.env.API_SERVER || "http://0.0.0.0:8000";

const proxyApiConfig = {
  ...proxyBaseConfig,
  target: serverAddress,
};

module.exports = (app) => {
  console.table({
    API_SERVER: process.env.API_SERVER,
  });

  app.use(createProxyMiddleware("/searchapp/", proxyApiConfig));
};
