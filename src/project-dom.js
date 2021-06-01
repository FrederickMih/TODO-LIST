const showBtn = document.getElementById("newProBtn");
showBtn.onclick = () => {
   const findDiv = document.getElementById("project-div");
   if ( findDiv.style.display === "none" ) {
       findDiv.style.display = "block";
   }
   else {
       findDiv.style.display = "none";
   }
  
};
export default showBtn;