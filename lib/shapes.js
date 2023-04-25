const shapes = {

    triangle: {
        nameOfShape: 'Triangle',
        svg: function (color){
            return `<polygon points="151,11 291,151 11,151" fill="${color}"/>`
        },
    },
    square: {
        nameOfShape: 'Square',
        svg: function (color){
            return `<rect x="6" y="6" width="291" height="191" fill="${color}"/>`
        },
    },
    circle: {
        nameOfShape: 'Circle',
        svg: function (color){
            return `<circle cx="151" cy="101" r="91" fill="${color}"/>`
        },
    },
};

module.exports = shapes;