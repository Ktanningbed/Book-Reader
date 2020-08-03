const resultsList = document.getElementById('results')
var link1, link2;
const bTitle = document.querySelector('.book-title');
const content = document.querySelector('.read');
new URLSearchParams(window.location.search).forEach((value,name)=> {
    var a = document.createElement('a');   
    var link = document.createTextNode(value); 
    a.appendChild(link);  
    a.title = value;  
    a.href = value;  
    link1 = a;
    link2 = a.innerHTML;
})
resultsList.appendChild(link1);  
eel.expose(giveLink);
function giveLink(){
    return link2;
}
document.querySelector('.title').style.borderRadius = "15px 15px 0px 0px";

async function run1(){
    let a = await eel.scrape()();
    bTitle.innerHTML = '';
    bTitle.append(a);
}

async function run2(){
    let a = await eel.scrape2()();
    content.innerHTML=a;
}

async function scrapePrev(){
    let a = await eel.scrapePrevious()();
    var anc = document.createElement('a');   
    if(a!=null){
        var newLink = `https://novelfull.com${a}`;
        var link = document.createTextNode(newLink); 
        anc.appendChild(link);  
        anc.title = newLink;  
        anc.href = newLink; 
        resultsList.innerHTML = "";
        resultsList.appendChild(anc);
        link2 = newLink;
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        });
        run();
    }
}

async function scrapeN(){
    let a = await eel.scrapeNext()();
    var anc = document.createElement('a');   
    if(a!=null){
        var newLink = `https://novelfull.com${a}`;
        var link = document.createTextNode(newLink); 
        anc.appendChild(link);  
        anc.title = newLink;  
        anc.href = newLink; 
        resultsList.innerHTML = "";
        resultsList.appendChild(anc);
        link2 = newLink;
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        });
        run();
    }
}

function run(){
    run1();
    run2();
}
run();