
// function f(h, g) {

//     if(10 == 0){
//         h("caiu")
//     }else{
//         g("naocaiu")
//     };
// }

// const minhaPromise = new Promise(f);

// minhaPromise
// .then( valor => {
//  console.log(valor);
// })
// .catch( valor => {
//     console.log(valor);
//    })


async function loadPosts (){
    document.getElementById("posts").innerHTML = "carregando...";


    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();
    montarBlog(json);

}

// function requisicao () {
//     fetch('https://jsonplaceholder.typicode.com/posts')


    
//     .then(function(resultado){
//         return resultado.json();
//     })
//     .then(function(json){
//        montarBlog(json);

//     })
//     .catch(function(error){
//         console.log("deu problema!");
//     });

// }

function montarBlog(lista){
    let html = '';
    for(let i in lista){
        html += '<h3>'+ lista[i].title +'</h3>'
        html += lista[i]+body+'<br>';
        html += '<hr/>';
    }
    document.getElementById("posts").innerHTML=html;

}