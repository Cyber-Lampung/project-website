function Savedata(){

    // ambil element form

    document.getElementById('RegisterForm').addEventListener('submit', function() {

        // ambil value data dari inputan
        let email = document.getElementById('email').value;
        let user = document.getElementById('user').value;
        let pass = document.getElementById('InputPass').value;


        // mengirim data ke dalam localStorage

        localStorage.setItem('Email', email)
        localStorage.setItem('Username', user)
        localStorage.setItem('Password', pass)


        // testing

        // console.log(email,user,pass)

    })
    

    function checkLocal() {

        // untuk mengecek dan melakukan redirect ke halaman login

        if (localStorage.getItem('email') && localStorage.getItem('username') && localStorage.getItem('password')){
            // window.location = "http://127.0.0.1:5500/login/login-file/login.html"
        }

    }

    checkLocal()

}

Savedata()

function Visibility(){
    // mengambil data dari html

    let checkbox = document.getElementById('visibility');
    let textPass = document.getElementById('InputPass');
    let eye      = document.querySelector('.eye');
    let eyeSlash = document.querySelector('.eyeSlash');

    // manipulasi dom pada checkbox

    checkbox.addEventListener('change', function(){
        if (checkbox.checked){
            textPass.type = 'text';
            eye.style.display = 'none'
            eyeSlash.style.display = 'flex'
        }else{
            textPass.type = 'password'
            eye.style.display = 'flex'
            eyeSlash.style.display = 'none'
        }
    })

    // testing

    // console.log(checkbox,textPass,eye,eyeSlash)
}

Visibility()