
let img = document.querySelector('img');

fetch( 'superman.png' )
    .then( resp => resp.blob() )
    .then( imagen => {

        // console.log(imagen);
        var imgPath = URL.createObjectURL( imagen );
        img.src = imgPath;

    });
    
