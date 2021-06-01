import createProject from './projects'
const showBtn = document.getElementById("newProBtn");
const addBtn = document.getElementById("button-addon1");
showBtn.onclick = () => {
   const findDiv = document.getElementById("project-div");
   if ( findDiv.style.display === "none" ) {
       findDiv.style.display = "block";
   }
   else {
       findDiv.style.display = "none";
   }
  
};

addBtn.onclick = () => {
 const projectTitle = document.getElementById("projectTitle").value;
 const projectDesc = document.getElementById("projectDesc").value;

}

export default showBtn;