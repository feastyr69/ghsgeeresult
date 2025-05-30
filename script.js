const fname=document.querySelector('#fname');
const btn=document.querySelector('#button');
const dob=document.querySelector('#dob');
btn.addEventListener("click",()=>{
    const name1=fname.value;
    const dob1=dob.value;
    console.log(name1);
    console.log(dob1);
    localStorage.setItem("name1",name1);
    localStorage.setItem("dob1",dob1);
    if(name1!='' && dob1!='')document.location="result.html";
    else(alert("Please fill the details properly!"))
});
