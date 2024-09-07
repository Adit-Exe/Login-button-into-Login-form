let login = document.querySelector("#enter");
login.addEventListener("click", () => {
    document.querySelector("div#login").style.width = "300px"
    document.querySelector("div#login").style.height = "350px"
    document.querySelector("#fogin").style.opacity= "1"
    document.querySelector("#fogin").style.visibility= "visible"
    document.querySelector("#enter").style.opacity= "0"
    document.querySelector("div#login").style.paddingBottom = "10px"
    document.querySelector("div#login").style.borderRadius = "10px"
    document.querySelector("#cancle").style.opacity= "1"
    document.querySelector("#cancle").style.visibility= "visible"
});
let cancle = document.querySelector("#cancle");
cancle.addEventListener("click", () => {
    document.querySelector("div#login").style.width = "100px"
    document.querySelector("div#login").style.height = "35px"
    document.querySelector("#fogin").style.opacity= "0"
    document.querySelector("#fogin").style.visibility= "hidden"
    document.querySelector("#enter").style.opacity= "1"
    document.querySelector("div#login").style.paddingBottom = "0px"
    document.querySelector("div#login").style.borderRadius = "25px"
    document.querySelector("#cancle").style.opacity= "0"
    document.querySelector("#cancle").style.visibility= "hidden"
});
