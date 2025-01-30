const jscad = require('@jscad/modeling')

const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

const getParameterDefinitions = () => {
  // here we return the definitions of our parameters
  return [
    {name: 'size', caption: 'Size:', type: 'float', initial: 5},
  ];
};

const main = (parameters) => {
  const cubeObject = cube({size: parameters.size});
  const sphereObject = sphere({
    radius: 50,
    segments: 50,
    center: [25, 25, 25]
  });

  const subtractObject = subtract([cubeObject, sphereObject]);

  return subtractObject;
};

module.exports = { main, getParameterDefinitions };