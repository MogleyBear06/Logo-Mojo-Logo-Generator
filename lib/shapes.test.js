const shapes = require("./shapes");

describe('shapes', () => {
    test('color of traingle needs to return user preference.', ()=>{
        const shapeColor = '#00ff00';
        const desiredColor = shapes.triangle.svg(shapeColor);
        const presumedColor = `<polygon points="151,11 291,151 11,151" fill="${shapeColor}"/>`;
        expect(desiredColor).toBe(presumedColor);
    });
    test('color of square needs to return user preference.', ()=>{
        const shapeColor = '#0000ff';
        const desiredColor = shapes.square.svg(shapeColor);
        const presumedColor = `<rect x="6" y="6" width="291" height="191" fill="${shapeColor}"/>`;
        expect(desiredColor).toBe(presumedColor);
    });
    test('color of circle needs to return user preference.', ()=>{
        const shapeColor = '#ff0000';
        const desiredColor = shapes.circle.svg(shapeColor);
        const presumedColor = `<circle cx="151" cy="101" r="91" fill="${shapeColor}"/>`;
        expect(desiredColor).toBe(presumedColor);
    });
});