function loadData(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data =>allbumData(data))
}

loadData()
const hotData =document.getElementById('live');
function allbumData(datas){

    for(const data of datas){
        console.log(data);
      const createdData =document.createElement('div')
      createdData.classList.add('users')
      createdData.innerHTML =`
      <h1>User Id: ${data.userId}</h1>
      <p>ID: ${data.id}</p>
      <p>Title: ${data.title}</p>
      `
      hotData.appendChild(createdData)
    }
}