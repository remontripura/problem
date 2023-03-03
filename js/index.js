
/* ------------fetch data load------------- */
const universeLoadData = (dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then((res) => res.json())
    .then((data) => showUniversel(data.data.tools, dataLimit))
}
const showUniversel = (universeData, dataLimit) => {
    // console.log(universeData)
        
        const btnSeeMore = document.getElementById('btn-see-more');
        if(dataLimit && universeData.length > 10){
            universeData = universeData.slice(0, 6)
            btnSeeMore.classList.remove('d-none');
        }else{
            btnSeeMore.classList.add('d-none');
        }
        const universeContainer = document.getElementById('universe-container');
        universeData.forEach(universe => {
        const {image, features, name, published_in, id} = universe;
        const universeDiv = document.createElement('div');
        universeDiv.classList.add('col')
        universeDiv.innerHTML = `
                <div class="card p-3">
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Features</h5>
                <ol>
                <li>${features[0]}</li>
                <li>${features[1]}</li>
                <li>${features[2]}</li>
                </ol>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center">
                    <div>
                    <h5>${name}</h5>
                    <p>${published_in}</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-arrow-right" onclick="fetchUniverseId(${id})"></i>
                    </div>
                </div>
            </div>
        `
        universeContainer.appendChild(universeDiv)
    })
}
// const  lodemore = (datalimit) => {
//     const btnSeeMore = document.getElementById('btn-see-more');
//     if
// }

/* card modal designed */
const fetchUniverseId = id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    console.log(url)
}

universeLoadData(6);