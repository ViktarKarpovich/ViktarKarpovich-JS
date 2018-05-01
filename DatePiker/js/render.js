function Render() {}

Render.render = function (acсeptPlace, object, objectGenerator) {
    var generatedObject = objectGenerator.generate(object);
    acсeptPlace.appendChild(generatedObject);
}