const howMany = document.getElementById("how-many");
const uploadSize = document.getElementById("upload-size");
const resetPass = document.getElementById("reset-password");
const cancelSub = document.getElementById("cancel-subscription");
const addSupp = document.getElementById("additional-support");

const paraOne = document.querySelector(".one");
const paraTwo = document.querySelector(".two");
const paraThree = document.querySelector(".three");
const paraFour = document.querySelector(".four");
const paraFive = document.querySelector(".five");


/*Functions to hide paragraphs when one is clicked*/
function hideParaOne() {
    paraOne.style.display = "none";
  }

  function hideParaTwo() {
    paraTwo.style.display = "none";
  }

  function hideParaThree() {
    paraThree.style.display = "none";
  }

  function hideParaFour(){
    paraFour.style.display = "none";
  }

  function hideParaFive(){
    paraFive.style.display = "none";
  }
//till here//

howMany.addEventListener("click", () => {

    console.log("clicked");

    if(paraOne.style.display = "none"){
        paraOne.style.display = "block";
    }else{
        paraOne.style.display = "none";
    }

    hideParaTwo()
    hideParaThree()
    hideParaFour()
    hideParaFive()
    
});

uploadSize.addEventListener("click", () => {

    console.log("clicked");

    if(paraTwo.style.display = "none"){
        paraTwo.style.display = "block";
    }else{
        paraTwo.style.display = "none";
    }

    hideParaOne()
    hideParaThree()
    hideParaFour()
    hideParaFive()

});

resetPass.addEventListener("click", () => {
   if(paraThree.style.display = "none"){
    paraThree.style.display = "block";
   }else{
    paraThree.style.display = "none";
   }

   hideParaTwo()
   hideParaOne()
   hideParaFour()
   hideParaFive()
});


cancelSub.addEventListener("click", () => {
    if(paraFour.style.display = "none"){
        paraFour.style.display = "block";
    }else{
        paraFour.style.display = "none";
    }
    hideParaTwo()
    hideParaThree()
    hideParaOne()
    hideParaFive()
});

addSupp.addEventListener("click", () => {
    if(paraFive.style.display = "none"){
        paraFive.style.display = "block";
    }else{
        paraFive.style.display = "none";
    }
    hideParaTwo()
    hideParaThree()
    hideParaOne()
    hideParaFour()

})




