
const button = document.getElementById("button1");
button.addEventListener("click",()=>{
    const takenemail = document.getElementById("email");
    const takenpassword = document.getElementById("password");
    if (takenemail.value !== "" && takenpassword.value !== "") {
    const obj = {
      id: Date.now(),
      email: takenemail.value,
      password: takenpassword.value,
    };
    fetch("http://localhost:5500/myData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
    } else {
      alert("Fill in all the fields");
    }
  window.location.href = "./login.html";

})
