
// if ( 'serviceWorker' in navigator ) {
//     console.log('Podemos usarlo!');
// }

// confirmar si podemos usar el SW
if ( navigator.serviceWorker ) {

    navigator.serviceWorker.register('/sw.js');


}

