/**********************************************************************************
   Get Open And Close Menubar Buttons And Menubar
**********************************************************************************/
const openMenubarBtn = document.querySelector(".open-menubar-btn");
const closeMenubarBtn = document.querySelector(".close-menubar-btn");
const menuBar = document.querySelector(".menubar");


/**********************************************************************************
   Add Click Event to On Open And Close Menubar On Mobiles
**********************************************************************************/
openMenubarBtn.addEventListener('click', function () {
    menuBar.style.top = "0";
})

closeMenubarBtn.addEventListener('click', function () {
    const menuBar = document.querySelector(".menubar");
    menuBar.style.top = "100%";
})


/**********************************************************************************
   Get Gallery Section Menubar Li And Gallery Images
**********************************************************************************/
const galleryMenubarLi = document.querySelectorAll(".gallery-menubar ul li");
const galleryImgs = document.querySelectorAll(".gallery-imgs-container img");


/**********************************************************************************
 Add Event On Gallery Section Menubar Li to Display Appropriate Images
**********************************************************************************/

for (let li of galleryMenubarLi) {

    li.addEventListener('click', function (e) {

        /**********************************************************************************
            Remove Active Class From All Li
        **********************************************************************************/
        for (li of galleryMenubarLi) {
            li.classList.remove("active");
        }

        /**********************************************************************************
           Add Active Class To Appropriate (Clicked) Li
       **********************************************************************************/
        e.target.classList.add("active");


        /**********************************************************************************
          If Clicked On All So, Display All Images
       **********************************************************************************/
        if (e.target.innerText.toLowerCase() === "all") {

            for (let img of galleryImgs) {
                img.classList.remove('animate');
                img.style.display = "block";
                img.classList.add("animate");
            }

        }
        else {

            /**********************************************************************************
                 Else Display Appropriate Images According to Click
            **********************************************************************************/
            for (let img of galleryImgs) {

                if (img.dataset.image === e.target.innerText.toLowerCase()) {
                    img.classList.remove('animate');
                    img.style.display = "block";
                    img.classList.add('animate');
                }
                else {
                    img.style.display = "none";
                }

            }

        }

    })
    
    
}

