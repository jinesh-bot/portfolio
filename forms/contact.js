// $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:" ",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//         },
//         // error:function (err){
//         //     alert("Something Error")

//         // }
//     })
// })
document.getElementById("submit-form").addEventListener("submit",function(event){
    event.preventDefault()
    let name= document.getElementById("name").value.trim();
    
    let email=document.getElementById("email").value.trim();
    let subject=document.getElementById("subject").value.trim();
    document.getElementById("nameError").innerhtml="";
    document.getElementById("emailError").innerhtml="";
    document.getElementById("subjectError").innerhtml="";


    if(name==""||/^\d/.test(name)){
        document.getElementById("nameError").textContent="name is not valid";

    }
    if(email==""||/^[^\s@]+@[^\s@]+\.[^\s@]$/.test(email)){
        document.getElementById("emailError").textContent="email is not valid";

    }
    if(subject==""||/^\d/.test(subject)){
        document.getElementById("subjectError").textContent="Subject is not specified";
    }

})