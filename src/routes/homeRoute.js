module.exports = (app) => {
    const { homeController } = app.src.controllers;
    console.log("Passando aqui");
    app.get('/', homeController.index);
}