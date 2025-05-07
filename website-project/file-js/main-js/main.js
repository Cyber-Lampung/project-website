function AnimationLeft(){
    // mengambil data checkbox

    let checkbox = document.getElementById('checkboxMenu');
    // console.log(checkbox)

    // ambil data listnya

    let navList = document.querySelector('.navMenu');
    // console.log(navList)

    // ambil data x dan menu-list

    let x = document.querySelector('.menu-close');
    let menuList = document.querySelector('.menu-list');

    // console.log(x)

    // membuat untuk mencob ketika checkbox di cheked maka akan mengubah list

    checkbox.addEventListener('change', function() {
        if (checkbox.checked){
            navList.style.display = "flex"
            menuList.style.display = 'none'
            x.style.display = 'block'
         }
        else{
            navList.style.display = "none"
            x.style.display = 'none'
            menuList.style.display = 'block'
        }
    })
}


AnimationLeft()