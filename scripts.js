const portfolioItem1 = document.getElementById("portfolioItem1");
const portfolioItem2 = document.getElementById("portfolioItem2");
const portfolioItem3 = document.getElementById("portfolioItem3");
const portfolioItem4 = document.getElementById("portfolioItem4");
// const itemImage = document.getElementById("itemImage");
const gitArticleDescription = document.getElementById("gitArticleDescription");
const navProjectDescription = document.getElementById("navProjectDescription");
const docSamplesDescription = document.getElementById("docSamplesDescription");
const resumeDescription = document.getElementById("resumeDescription");
const image = document.getElementById("actualImage");

portfolioItem1.addEventListener('mouseover', function () {
    // $("#gitArticleDescription").fadeIn("slow");
    navProjectDescription.style.display = "none";
    gitArticleDescription.style.display = "block";
    image.src = "githubArticleNoBackground.gif"
    docSamplesDescription.style.display = "none";
    resumeDescription.style.display = "none";
    image.style.visibility = "visible";
    gitArticleDescription.style.visibility = "visible";
    document.getElementById("itemDescription").style.borderRightColor = "black";
})

//If Dynamic navigation recieves mouseover
portfolioItem2.addEventListener('mouseover', function () {
    gitArticleDescription.style.display = "none";
    gitArticleDescription.style.visibility = "hidden";
    docSamplesDescription.style.display = "none";
    docSamplesDescription.style.visibility = "hidden";
    resumeDescription.style.display = "none";
    navProjectDescription.style.display = "block";
    image.style.visibility = "visible";
    image.src = "dynamicWebsiteNoBackground.gif";
    document.getElementById("itemDescription").style.borderRightColor = "black";
    $("#navProjectDescription").fadeIn("slow");
})

//If docSamplesDescription recieves a mouseover
portfolioItem3.addEventListener('mouseover', function () {
    docSamplesDescription.style.display = "block";
    docSamplesDescription.style.visibility = "visible";
    gitArticleDescription.style.display = "none";
    gitArticleDescription.style.visibility = "hidden";
    navProjectDescription.style.display = "none";
    resumeDescription.style.display = "none";
    image.src = "figure8_loRes.png";
    document.getElementById("itemDescription").style.borderRightColor = "black";
    $("#docSamplesDescription").fadeIn("slow");
})

portfolioItem4.addEventListener('mouseover', function(){
    resumeDescription.style.display = "block";
    gitArticleDescription.style.display = "none";
    navProjectDescription.style.display = "none";
    docSamplesDescription.style.display = "none";
    image.style.visibility = "hidden";
    document.getElementById("itemDescription").style.borderRightColor = "transparent";
    gitArticleDescription.style.visibility = "hidden";
    navProjectDescription.style.display = "none";
    $("#resumeDescription").fadeIn("slow");

})