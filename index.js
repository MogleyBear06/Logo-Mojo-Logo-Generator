const inquirer = require('inquirer');
const fs = require('fs');
const logo = require("./libs/shapes.js");

function generateLogo(name, textcolor, shape, shapecolor) {
    const logoShape = logo[shape];
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${logoShape(shapecolor)}
        <text x="150" y="125" font-size="60" fill="${textcolor}" dy="-0.25rem" text-anchor="middle">${name}</text>
    </svg>`;
}

inquirer.prompt( [ {
    type: 'input',
    name: 'name',
    message: 'What are the three letters of your company?',
},
{
    type: 'input',
    name: 'textcolor',
    message: 'What color do you want your text to be?',
},
{
    type: 'input',
    name: 'shape',
    message: 'What shape do you want your logo to be?',
},
{
    type: 'input',
    name: 'shapecolor',
    message: 'What color do you want your shape to be?',
},

]).then(({ name, textcolor, shape, shapecolor }) => {
    const svgContent = generateLogo(name, textcolor, shape, shapecolor);
    fs.appendFile('./examples/' + `${shape}-${name}.svg`, svgContent, (err) => {
        if (err) {
            console.error('Cannot generate logo:', err);
        } else {
            console.log('Generated logo');
        }
    });
});
