"use strict";
var MyMath;
(function (MyMath) {
    let Circle;
    (function (Circle) {
        const PI = 3.14;
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
