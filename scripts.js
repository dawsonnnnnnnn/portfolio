const portolfioItem1 = document.getElementById("portolfioItem1");
const portolfioItem2 = document.getElementById("portolfioItem2");
const portolfioItem3 = document.getElementById("portolfioItem3");
const portfolioItem4 = document.getElementById("portfolioItem4");
// const itemImage = document.getElementById("itemImage");
const gitArticleDescription = document.getElementById("gitArticleDescription");
const navProjectDescription = document.getElementById("navProjectDescription");
const docSamplesDescription = document.getElementById("docSamplesDescription");
const resumeDescription = document.getElementById("resumeDescription");
const image = document.getElementById("actualImage");

portolfioItem1.addEventListener('click', function () {
    navProjectDescription.style.display = "none";
    $("#gitArticleDescription").fadeIn("slow");
    gitArticleDescription.style.display = "block";
    image.src = "githubArticleNoBackground.gif"
    docSamplesDescription.style.display = "none";
    resumeDescription.style.display = "none";
    image.style.visibility = "visible";
    gitArticleDescription.style.visibility = "visible";
    document.getElementById("itemDescription").style.borderRightColor = "black";
})

//If Dynamic navigation recieves mouseover
portolfioItem2.addEventListener('click', function () {
    gitArticleDescription.style.display = "none";
    gitArticleDescription.style.visibility = "hidden";
    docSamplesDescription.style.display = "none";
    docSamplesDescription.style.visibility = "hidden";
    resumeDescription.style.display = "none";
    $("#navProjectDescription").fadeIn("slow");
    navProjectDescription.style.display = "block";
    image.style.visibility = "visible";
    image.src = "dynamicWebsiteNoBackground.gif";
    document.getElementById("itemDescription").style.borderRightColor = "black";
})

//If docSamplesDescription recieves a mouseover
portolfioItem3.addEventListener('click', function () {
    $("#docSamplesDescription").fadeIn("slow");
    docSamplesDescription.style.display = "block";
    docSamplesDescription.style.visibility = "visible";
    gitArticleDescription.style.display = "none";
    gitArticleDescription.style.visibility = "hidden";
    navProjectDescription.style.display = "none";
    resumeDescription.style.display = "none";
    image.src = "figure8_loRes.png";
    document.getElementById("itemDescription").style.borderRightColor = "black";
})

portfolioItem4.addEventListener('click', function(){
    $("#resumeDescription").fadeIn("slow");
    resumeDescription.style.display = "block";
    gitArticleDescription.style.display = "none";
    navProjectDescription.style.display = "none";
    docSamplesDescription.style.display = "none";
    image.style.visibility = "hidden";
    document.getElementById("itemDescription").style.borderRightColor = "transparent";
    gitArticleDescription.style.visibility = "hidden";
    navProjectDescription.style.display = "none";

})