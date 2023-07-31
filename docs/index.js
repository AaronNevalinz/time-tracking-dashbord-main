

function loadData(data){
   return `
   <div class="bg-${data.title}-100 relative h-[130px] lg:h-[180px] w-full lg:w-[250px] rounded-2xl  my-6 md:my-0 md:mt-3 ">
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
   `;
   
}

function updateReport(data){
    const btns = document.querySelectorAll('.link-btn');
    let obj = {};

    btns.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            let clickedBtn = e.target.innerHTML.toLowerCase();
            
            if(clickedBtn === 'weekly'){
                obj = data.timeframes.weekly;
                // console.log(obj);
            }else if(clickedBtn === 'daily'){
                obj = data.timeframes.daily;
                // console.log(obj);
            }else{
                obj = data.timeframes.monthly;
                // console.log(obj);
            }
            // console.log(obj);
            
        });
        // console.log(obj);
    });
    return `

                    <div class="bg-${data.title}-100 relative h-[130px] lg:h-[180px] w-full lg:w-[250px] rounded-2xl  my-6 md:my-0 md:mt-3 ">
                        <div class="">
                            <img class="absolute right-0 w-10 mr-4" src="./images/icon-${data.title}.svg" alt="">
                        </div>
                        <div class="bg-secondary-200 absolute w-full bottom-0 py-5 rounded-xl cursor-pointer hover:bg-secondary-200">
                            <div class="flex items-center mx-5 justify-between">
                                <p class="font-bold text-sm">${data.title}</p>
                                <img src="./images/icon-ellipsis.svg" alt="">
                            </div>
            
                            <div class="flex items-center mx-5 justify-between mt-3 lg:mt-0 lg:flex-col lg:items-start">
                                <h1 class="text-xl lg:text-4xl lg:my-4 font-light">${obj.current}hrs</h1>
                                <p class="text-sm font-light">Last week - ${obj.previous}hrs</p>
                            </div>
                        </div>
                    </div>
            `;
    
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
// 2. Parse the data to create 
        document.getElementById('reports').innerHTML = data.map(loadData).join('');
        data.forEach(updateReport);
        
    }).catch((error)=>{
        console.error('There is a problem with your fetch operation ', error);
    });
}
fetchData();

// 3. Add event listener to display the given date report
// 4:

// const dailyData = data.map(type=>(
//     {
//         time:type.timeframes.daily,
//         title:type.title
//     }
// ));

// const weeklyData = data.map(type=>(
//     {
//         time:type.timeframes.weekly,
//         title:type.title
//     }
// ));

// const monthlyData = data.map(type=>(
//     {
//         time:type.timeframes.monthly,
//         title:type.title
//     }
// ));



// tabs
const tabs = [ ... document.querySelectorAll('[role="tab"]')];
const panels = [ ... document.querySelectorAll('[role="tabpanel"]')];

tabs.forEach((tab)=>{
    tab.addEventListener('click', changeTabs);
});

function changeTabs(e){

    const timeframe = e.target.getAttribute('data-timeframe');

    // hide all panels to begin with
    panels.forEach((panel)=>{
        panel.classList.add('hidden');
    });

    // show the panel or records corresponding to the clicked tab link
    panels.forEach(panel => {
        if (panel.getAttribute('data-timeframe') === timeframe) {
          panel.classList.remove('hidden');
        }
    });
}