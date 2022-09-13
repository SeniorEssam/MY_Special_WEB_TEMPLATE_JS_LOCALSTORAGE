// set local storage item
let mainColor = localStorage.getItem('colorOptions');
if(mainColor!==null)
{
    document.documentElement.style.setProperty('--main-color',mainColor);
    document.querySelectorAll(".color-list li").forEach(li =>
        {
            li.classList.remove("active");
            if(li.dataset.color === mainColor)
            {
                li.classList.add("active");
            }
        }
        );
}


//toggole span setting icon 
settingIcon =document.querySelector(".setting-icon .fa-gear").onclick=function()
{
    // stop rotate of gear icon and the inverse 
    this.classList.toggle("fa-spin");
    

    // open or close setting box 
    document.querySelector(".setting-box").classList.toggle("opened");

    //check if setting box is open or close to chane postion of gear icon to above or right
    if(document.querySelector(".setting-box").classList.contains('opened'))
    {
        document.querySelector(".setting-icon").style.top='0';
        document.querySelector(".setting-icon").style.right='0';
        document.querySelector(".settingContanier").style.margin='40px 5px';
    }
    else
    {
        document.querySelector(".setting-icon").style.top='0';
        document.querySelector(".setting-icon").style.right='-30px';
        document.querySelector(".settingContanier").style.margin='10px 5px';
    }
};

// Change main Color Css
const colorLi =document.querySelectorAll(".color-list li");
colorLi.forEach(li =>
    {
        li.addEventListener("click",(e) =>
        {
            colorLi.forEach(li =>{li.classList.remove("active");});
            document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
            localStorage.setItem("colorOptions",e.target.dataset.color)
            li.classList.add("active");
        });
    }
);

// select landing page element
let landingPage = document.querySelector(".land-page");

// Get array of images
let imgArray =["1.jpg","2.jpg","3.webp","4.jpg","5.jpg"];

// make randome image by setInterval every 7s
setInterval( ()=>
{

    //get a randome index to my array
    randomNumber = Math.floor(Math.random()*imgArray.length);

    //change back-ground image in landing div
    landingPage.style.backgroundImage = 'url(img/' + imgArray[randomNumber] + ')';
}
    ,7000);
