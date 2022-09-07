
  let textarea = document.getElementById("exampleFormControlTextarea1");
  let headarea = document.getElementById("exampleFormControlTextarea2");
  function display(){
    document.getElementById("add").innerHTML="";
    let a=JSON.parse(localStorage.getItem("notes"));
    a.forEach(element => {
      if(element!=null){
      document.getElementById("add").innerHTML += `<div class="w-auto p-8 border-solid border-black border-2 m-5 rounded-lg noteCards"><h1 class="text-2xl font-bold ">
      ${element[0]}
    </h1>
    <p> ${element[1]}</p>
    <button class="border-cyan-300 border-2 p-2 border-solid mx-11 w-auto" id="${element[0]}">Delete Note</button></div>`;
  }});
  del();}
    function del(){
      let b=JSON.parse(localStorage.getItem("notes"));
      if(b!=null){
      b.forEach(element=>{
            if(element!=null){
            document.getElementById(element[0]).addEventListener("click",()=>{
              delete b[b.indexOf(element)];
              localStorage.setItem("notes",JSON.stringify(b));
              display();
            })
      }});
    }}
    if(localStorage.getItem("notes")!=null)
    {
    display();}
    del();
    
  document.getElementById("bt").addEventListener("click", () => {
      let notes=localStorage.getItem("notes");
      if(notes == null)
      {
        notesObj=[];
      }
      else
      {
        notesObj=JSON.parse(notes);
      }
      notesObj.push([headarea.value,textarea.value]);
      localStorage.setItem("notes",JSON.stringify(notesObj));
      headarea.value = '';
      textarea.value = '';
      display();
      del();
  });
  document.getElementById("search").addEventListener("input",()=>{
      Array.from(document.getElementsByClassName("noteCards")).forEach(element=>{
        if(element.getElementsByTagName("p")[0].innerText.toLowerCase().includes(document.getElementById("search").value.toLowerCase()))
        {
          element.style.display="block";
        }
        else
        {
          element.style.display="none";
        }
      })
  })
