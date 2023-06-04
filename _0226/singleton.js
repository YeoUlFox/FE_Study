// basic singleton in javascript
let Singleton = (function () {
    // hidden variable
    var instance;

    // hidden function
    function createInstance() {
        var object; // 패턴 안에서 사용될 객체

        return object;
    }

    return {
        getInstance : function () {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true