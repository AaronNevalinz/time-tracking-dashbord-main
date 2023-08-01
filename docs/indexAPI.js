
const record = [];
async function fetchData(){
    await fetch('./data.json')
    .then(response=>{
        if(!response.ok){
            throw new error('Network response was not ok');
        }
        return response.json();
    }).then(data=>{
        
        data.map(loadData)
    })
}

const tabs = [ ... document.querySelectorAll(['[role="tab"'])];

function showPanel(e){
    const timeframe = e.target.getAttribute('data-timeframe');
    const panel = document.querySelector(`.panel[data-timeframe="${timeframe}"]`);
    console.log(panel);
    document.getElementById('record').innerHTML = panel;
}

tabs.forEach(tab=>{
    tab.addEventListener('click', showPanel);
})

console.log(record);
fetchData();