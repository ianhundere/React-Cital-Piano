import React from 'react';

class Keys extends React.Component {
    render() {
        return;
    }
}

export default Keys;

// Interface.Keyboard = function () {

//     if (this instanceof Interface.Keyboard) {

//         this.element = $("<div>", {
//             "class": "Keyboard",
//         }).appendTo("#Content");

//         if (window.Keyboard) {
//             this.keyboard = new Keyboard(this.element.get(0), 48, 4);
//             $(window).on("resize", this._resize.bind(this));
//             this._resize();

//             this.keyboard.on("keyDown", function (midi) {
//                 if (this.keyDown) {
//                     this.keyDown(Tone.Frequency(midi, "midi").toNote());
//                 }
//             }.bind(this));

//             this.keyboard.on("keyUp", function (midi) {
//                 if (this.keyUp) {
//                     this.keyUp(Tone.Frequency(midi, "midi").toNote());
//                 }
//             }.bind(this));
//         }

//     } else {
//         return new Interface.Keyboard();
//     }
// };

// Interface.Keyboard.prototype._resize = function () {
//     var width = $(window).width();
//     var octaves = Math.round(width / 220);
//     this.keyboard.octaves = Math.max(octaves, 2);
//     if (octaves > 4) {
//         this.keyboard.rootNote = 36;
//     } else {
//         this.keyboard.rootNote = 48;
//     }
// }
