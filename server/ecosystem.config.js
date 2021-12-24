module.exports = {
  apps : [
      {
        name: "myapp",
        script: "app.js",
        watch: true,
        env: {
            "PORT": 4000,
            "NODE_ENV": "development"
        }
      }
  ]
}
