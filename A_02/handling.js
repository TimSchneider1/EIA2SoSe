var A02;
(function (A02) {
    window.addEventListener("load", handling);
    function divBox(_mouse) {
        let span = document.getElementById("span0");
        let xvalue = _mouse.clientX;
        let yvalue = _mouse.clientY;
        let offsetX = _mouse.clientX + 5;
        let offsetY = _mouse.clientY + 5;
        if (span != null) {
            span.innerText = "Mouseposition: X: " + xvalue + " Y: " + yvalue + _mouse.target;
            span.style.left = offsetX + "px";
            span.style.top = offsetY + "px";
        }
    }
    function handling() {
        document.addEventListener("mousemove", divBox);
        document.addEventListener("click", showData);
        document.addEventListener("keyup", showData);
        document.body.addEventListener("click", showData);
        document.body.addEventListener("keyup", showData);
        document.getElementById("div0").addEventListener("click", showData);
        document.getElementById("div0").addEventListener("keyup", showData);
        document.getElementById("div1").addEventListener("click", showData);
        document.getElementById("div1").addEventListener("keyup", showData);
    }
    function showData(_event) {
        console.log(_event.target, _event.currentTarget, _event.type, _event);
    }
})(A02 || (A02 = {}));
//# sourceMappingURL=handling.js.map