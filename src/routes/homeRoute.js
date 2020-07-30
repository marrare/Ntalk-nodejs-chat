module.exports = (app) => {
    const { homeController } = app.src.controllers;
    app.get('/', homeController.index);
}