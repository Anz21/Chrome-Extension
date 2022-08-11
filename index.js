
let element = document.getElementById("save")
let links = [];
const inputEl = document.getElementById("te");
const unList = document.getElementById("ulli");
const tablet = document.getElementById("tab");



let storege = JSON.parse(localStorage.getItem("links"));

if(storege){
        links = storege;
        render(links);
}


tablet.addEventListener("click" , function() {
        chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
                links.push(tabs[0].url);
                localStorage.setItem("links" , JSON.stringify(links))
                render(links)
        })
})


element.addEventListener("click" , function(){
        links.push(inputEl.value);
        inputEl.value = " ";
        localStorage.setItem("links" , JSON.stringify(links))
       render(links);
       
        console.log(links)      
})

document.getElementById("clear").addEventListener("click" , function (){
        localStorage.clear();
        links = [];
        render(links);
})


function render(what){
        let items = "";
        for(let i = 0; i < what.length; i++){
                items += `<li><a target='_blank' href=${what[i]}>${what[i]}</a></li>`;
        }

        unList.innerHTML = items;
}


