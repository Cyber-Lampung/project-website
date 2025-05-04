function getdata(){
    // get data dari html

    document.getElementById('myForm').addEventListener('submit' , function(e){

        // ambil nilai dari inputan

        let dataUser = document.getElementById('input').value;
        let datapass =  document.getElementById('pass').value;

        console.log(dataUser)

    })
}

getdata()