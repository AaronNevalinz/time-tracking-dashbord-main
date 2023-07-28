function loadData(data){
   return `
   <div class="bg-${data.title}-100 relative h-[130px] lg:h-[180px] w-[300px] lg:w-[250px] rounded-2xl  my-6 lg:my-0">
                        <div class="">
                            <img class="absolute right-0 w-10 mr-4" src="./images/icon-${data.title}.svg" alt="">
                        </div>
                        <div class="bg-secondary-200 absolute w-full bottom-0 py-5 rounded-xl cursor-pointer hover:bg-secondary-200">
                            <div class="flex items-center mx-5 justify-between">
                                <p class="font-bold text-sm">${data.title}</p>
                                <img src="./images/icon-ellipsis.svg" alt="">
                            </div>
            
                            <div class="flex items-center mx-5 justify-between mt-3 lg:mt-0 lg:flex-col lg:items-start">
                                <h1 class="text-xl lg:text-4xl lg:my-4 font-light">${data.timeframes.weekly.current}hrs</h1>
                                <p class="text-sm font-light">Last week - ${data.timeframes.weekly.previous}hrs</p>
                            </div>
                        </div>
                    </div>
   ` 
}



//1. fetch the data from our API
async function fetchData(){
    await fetch('./data.json')
    .then((response)=>{
        if(!response.ok){
            throw new Error('Network response was not okay...');
        }
        return response.json();
    }).then((data)=>{
        // console.log(data);
// 2. Parse the data to create reports
        document.getElementById('reports').innerHTML = data.map(loadData).join('');

    }).catch((error)=>{
        console.error('There is a problem with your fetch operation ', error);
    });
}
fetchData();

// 3. Add event listener to display the given date report
// 4: