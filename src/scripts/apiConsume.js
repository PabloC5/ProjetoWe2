// $(function() {
//     const teste = document.getElementById('Images')
//     $('#Images').keydown(function (event) {
//         if (event.key === 'Enter') {
//             loadImages();
//         }
//     })

//     function loadImages() {
//         removeImages();

//         // const url = 'https://api.unsplash.com/search/phostos/?query='+$('#Images').value+'&per_page=9&client_id=Q35YbzZnQLlXhLpyE1whoTnoTieueKRZXMz_dL3fMGk'
//         const url = 'https://api.unsplash.com/photos/?query='+teste.value+'&per_page=9&client_id=Q35YbzZnQLlXhLpyE1whoTnoTieueKRZXMz_dL3fMGk'
//         fetch(url)
//         .then(response => {
//             // console.log(response);
//             if (response.ok) {
//                 return response.json();
//             }
//         })
//         .then(data => {
//         debugger
//             const imageNode = [];
//             // for (let index = 0; index < data.urls?.length; index++) {
//                 let key = 0
//                 for (const key2 in data) {
//                     imageNode[key] = document.createElement('img')
//                     imageNode[key].className = 'imgs'
//                     imageNode[key].setAttribute('src',data[key].urls.raw)
//                     // imageNode[key].style.backgroundImage = data[key].urls.raw
//                     // imageNode[index]  
//                     $('#consumir').html(imageNode[key])
//                     key++
//                 }
                
//             // }
//         })
//     }

//     function removeImages() {
//         $('#consumir').html('');
//     }
//     // function geraCardApi(card, apiD) {
//     //     for (let index = 0; index < apiD.length; index++) {
//     //         const cardImg = document.createElement('img');
//     //         const cardDiv1 = document.createElement('div');
//     //         cardImg.setAttribute('src', apiD[index].message);
//     //         cardDiv1.appendChild(cardImg);
//     //         $(card).append(cardDiv1);
//     //     }
//     // }
    
//     // $(document).ready(function() {
//     //     let baseUrl = 'https://dog.ceo/api/breed/hound/images/random/3'
//     //     $.get(baseUrl, function(conteudo){
//     //         console.log(Object.keys(conteudo).length);
//     //         console.log(conteudo)
//     //         geraCardApi($('#consumir'), conteudo)
//     //     })
//     // })
// });


