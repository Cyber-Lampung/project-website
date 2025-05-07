function eye(){
    
    let terlihat = document.getElementById('eye');
    let visibility = document.getElementById('eyeSlash')
    let checkbox = document.getElementById('checkEye');
    let inputpass = document.getElementById('pass');

    // testing 

    checkbox.addEventListener('change', function() {
        if (checkbox.checked){
            inputpass.type = 'text'
            terlihat.style.display = 'none'
            visibility.style.display = 'flex'
        }else{
            inputpass.type = 'password'
            visibility.style.display = 'none'
            terlihat.style.display = 'flex'
        }
    })

    
}

eye()

function login(){
    // membuat function btn

    let btn = document.querySelector('.btn');

    // testing

    // console.log(btn)

    btn.addEventListener('click', function() {

        // ambil data dulu dari  html

        let emailUser = document.getElementById('input').value;
        let pass = document.getElementById('pass').value;

        // get data from localstorage

        let localemail = localStorage.getItem("Email")
        let localuser = localStorage.getItem("Username")
        let localpass  = localStorage.getItem("Password")

        // validasi apakah identity user ada atua tidak

        if (emailUser == localemail && pass === localpass){
            console.log("koneksi berhasil")
            window.location = "http://127.0.0.1:5500/dashboard/file-dashboard/dashboard.html"
        }else if (emailUser === localpass) {
            console.log("koneksi berhasil")
        }else{
            console.log("koneksi gagal")
        }


        // testing
        // console.log(emailUser)

    })
}

login()