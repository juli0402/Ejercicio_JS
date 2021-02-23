//Punto 1
function encrypt(men, clave){
    for(i=0; i<men.length; i++){
        men[i] = men[i] + clave
    }
    console.log(men)
}

function secret(men, clave, metodo){
    arreglo = men.split(',')
    for(i=0; i < arreglo.length; i++){
        console.log(parseInt(arreglo[i]))
        arreglo[i] = parseInt(arreglo[i])
    }
    metodo(arreglo, clave)
}

function decrypt(men, clave){
    for(i=0; i < men.length; i++){
        men[i] = men[i] - clave
    }
    console.log(men)
}

//Punto 2
const fibonacci = n => (n==0?0:n==1?1:fibonacci(n-1)+fibonacci2(n-2))

//Punto 3
function request(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.onload = resolve
        xhr.onerror = reject
        xhr.send()
    })
}
const darJson = () => {
    url1 = 'https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json'
    url2 = 'https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json'
    promesa = request('GET', url1)
    promesa.then((json) => {
        json1 = json.target.response
        console.log(json1)
    })
    promesa2 = request('GET', url2)
    promesa2.then((json) => {
        json2 = json.target.response
        console.log(json2)
    })
}