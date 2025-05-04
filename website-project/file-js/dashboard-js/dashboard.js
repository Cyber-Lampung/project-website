function GetUsername(){

    // mengambil data dari localstorage

    // let user = localStorage.getItem("username")

    // mengambil id yang akan dipasang

    let userText = document.getElementById('username')
    let SettingUserData = document.getElementById('usernameProfile')
    let emailData = document.getElementById('emaildata')
    let passworddata = document.getElementById('passwordData')

    // melakukan append username ke dashboard

    userText.append(localStorage.getItem('Username'))


    // melakukan append username,email,pass ke profile

    SettingUserData.append(localStorage.getItem("Username"))
    emailData.append(localStorage.getItem("Email"))
    passworddata.append(localStorage.getItem('Password'))

    // testing

    // console.log(user)

}

GetUsername()

function date(){
    const now = new Date()
    const options = {
        weekday : 'long',
        year : 'numeric',
        month : 'long',
        day : 'numeric',
        hour : '2-digit',
        minute : '2-digit',
        second : '2-digit'
    }

    const FormatDate = now.toLocaleString('id-ID', options)
    document.getElementById('date').textContent = FormatDate;
}

setInterval(date, 1000)

date()

function Dom(){

    // mengambil data yang akan diganti

    let dashboard = document.getElementById('dashboard');
    let Dash = document.getElementById('dashboardFlex');
    let dataPemasukan = document.getElementById('data');

    // data pemasukan

    let data = document.querySelector('.dataPemasukan');
    let article2 = document.querySelector('.article-data-2');

    // data penarikan

    let link = document.getElementById('dataPenarikan');
    let datapenarikan = document.querySelector('.dataPenarikan');

    // data user

    let Setting = document.querySelector('.SettingUser');
    let navuser = document.getElementById('setting');


    // dom manipilation data
    dataPemasukan.addEventListener('click', function() {
        dashboard.style.display = 'none'
        data.style.display = 'block'
        datapenarikan.style.display = 'none'
        Setting.style.display = 'none'
    })

    Dash.addEventListener('click', function(){
        dashboard.style.display = 'block'
        data.style.display = 'none'
        datapenarikan.style.display = 'none'
        Setting.style.display = 'none'
    })

    // data penarikan

    link.addEventListener('click', function(){
        dashboard.style.display = 'none'
        datapenarikan.style.display = 'block'
        data.style.display = 'none'
        Setting.style.display = 'none'
    })

    navuser.addEventListener('click', function(){
        dashboard.style.display = 'none'
        Setting.style.display = 'block'
        datapenarikan.style.display = 'none'
    })
    

}

Dom()

function logout(){
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('.logout-text').addEventListener('click', function() {
            const url = "http://127.0.0.1:5500/login/login-file/login.html"

            fetch(url)
        })
    })
}

logout()

function editData(){

    // mengambil data yang akan di gunakan untuk popup data

    let edit = document.querySelector('.editData').value;

    // mengambil data untuk edit setip element

    const email = document.getElementById('emailEdit')

    email.addEventListener('click', function(){
        alert(edit)
    })
    

}

editData()