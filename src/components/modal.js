export default (() => {
    setTimeout(function() {
        document.getElementsByClassName("modal__overlay")[0].style.display = "inline-block"
    }, 5000);
})