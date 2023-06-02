

const login = document.getElementById("login");
const error = document.getElementById("error");
const success = document.getElementById("success");


login.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email != "" || password != "") {
        fetch("http://localhost:5500/myData")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const user = data.find(
            item => item.email == email && item.password == password
            );
            if (user) {
            success.innerHTML = "Login sucessfull";
            window.location.href = "./res.html";
            } else {
            error.innerHTML = "Invalid credentials";
            }
        })
        .catch(err => {
           error.innerHTML="try again";
        });
    } else {
        error.innerHTML="Enter data";
    }
});

// function findUser() {
//     const email = document.getElementById("email");
// const pass = document.getElementById("password");

//     fetch("http://localhost:8080/myData ", {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//             }
            
//     })
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             const user = data.find(
//                 (el) => el.email === email.value && el.password === pass.value
//             );
//             console.log(user);
//             if (user) {
//                 window.location.href = "./index.html"
//             }
//         });
//     // console.log(data);
// }