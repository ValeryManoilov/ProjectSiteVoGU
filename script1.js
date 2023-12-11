const showFreeButton =  document.getElementById("showFreeButton")
const showPaidButton =  document.getElementById("showPaidButton")
const clearFreeButton = document.getElementById("clearFreeButton")
const clearPaidButton = document.getElementById("clearPaidButton")
const backFree = document.getElementById("freeEdu")
const backPaid = document.getElementById("paidEdu")

function changeImage() {
    const images = document.querySelectorAll('#image-container img');
    const activeImage = document.querySelector('#image-container img.active');
    
   
    const index = Array.from(images).indexOf(activeImage);
    
   
    const nextIndex = (index + 1) % images.length;
    
  
    activeImage.classList.remove('active');
    
   
    images[nextIndex].classList.add('active');
  }
  
  
setInterval(changeImage, 5000)

function ShowBlocks(){
  var block1 = document.getElementById("block1");
  var block2 = document.getElementById("block2");
  block1.style.display = "block";
  block2.style.display = "block";

}

function removeBlock(id1, id2){
  var block1 = document.getElementById(id1);
  var block2 = document.getElementById(id2);
  block1.style.display = "none";
  block2.style.display = "none";

}

showFreeButton.addEventListener("click", FreeFunction)
clearFreeButton.addEventListener("click", FreeFunction)
showPaidButton.addEventListener("click", PaidFunction)
clearPaidButton.addEventListener("click", PaidFunction)



function FreeFunction (){
    showFreeButton.classList.toggle("ShowFreeButton")
    backFree.classList.toggle("FreeEduBack")
}

function PaidFunction (){
    showPaidButton.classList.toggle("ShowPaidButton")
    backPaid.classList.toggle("PaidEduBack")
}