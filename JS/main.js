
 const sliderImage=Array.from(document.querySelectorAll(".slide-container img"));
 const slideNumber=document.querySelector(".slideNumber");
 const prevBtn =document.querySelector(".pervious");
 const nextBtn =document.querySelector(".next")
 const sliderCounterImage=sliderImage.length;
 let currentSlide=1;

 // ******************************************************************************************************************************
   //Events 
    nextBtn.addEventListener("click",nextSlide)
    prevBtn.addEventListener("click",prevSlide)

 // ******************************************************************************************************************************
     //1st Step 
    //create List 
    
    const paginationElment =document.createElement("ul");//1 create Ul element
    paginationElment.setAttribute("id","paginationList");//2 set id
    const paginationList=document.getElementById("paginationList"); // 3 catch element by id 
    
    for(let i=0; i<sliderCounterImage ;i++){
                const paginationItem=document.createElement("li");//create li element 
                paginationItem.setAttribute('id',i+1);//set attribute
                paginationItem.appendChild(document.createTextNode(i+1));//append child text to set data 

                //then append child li 
                paginationElment.appendChild(paginationItem)
       }
    document.getElementById("indicators").appendChild(paginationElment);
// ******************************************************************************************************************************
//2nd step

    //add created Element to the page
    var paginationCreateUl = document.getElementById("paginationList");
    var paginationsBullets = Array.from(document.querySelectorAll("#paginationList li"));
    // ******************************************************************************************************************************
       for(let i =0; i<paginationsBullets.length ; i++){
        paginationsBullets[i].addEventListener('click',(e)=>{
            currentSlide=e.target.id;
            theChecker()
        })
       }
    // ******************************************************************************************************************************
    theChecker()

      function theChecker(){
         slideNumber.textContent=`slide # ${currentSlide} of ${sliderCounterImage}`;//set slide number
         removeAllActive();
        addActive();
        checkDisable(currentSlide)
      };
 //******************check Disable button**********************
      function checkDisable(currentSlide){
           if(currentSlide == 1){
            prevBtn.classList.add("disabled")
        }else{
            prevBtn.classList.remove("disabled")

        }
        if(currentSlide == sliderCounterImage ){
            nextBtn.classList.add("disabled")
        }else{
            nextBtn.classList.remove("disabled")

        }
      };
     //******************Add active**********************
      function addActive(){
        sliderImage[currentSlide-1].classList.add("active");//add active class to image 
        paginationCreateUl.children[currentSlide-1].classList.add("active");// add active class to indicators  
       }
      //******************remove active**********************
      function removeAllActive(){
        sliderImage.forEach((image)=>{
            image.classList.remove("active");
        });
        paginationsBullets.forEach((bullet)=>{
            bullet.classList.remove("active");
        })
      }
// ******************************************************************************************************************************
      function nextSlide(){
        if(currentSlide >=sliderCounterImage){
            return false
        }else{
            currentSlide++;
        theChecker();
        }
    //    if(currentSlide <= sliderCounterImage){
    //     currentSlide++;
    //     theChecker();
    //    }else{
    //     return false
    //    }
    }
     function prevSlide(){
        if(currentSlide <= 1){
            return false
        }else{
            currentSlide++;
            theChecker();
        }
         };