import {langdata, langlink, langcard1,langItem2,langTest,langBlog  } from "./langdata.js";




const langBtn = document.getElementById('lang');
const langItem = document.querySelectorAll('.nav-link');
const langHead = document.querySelector(".heading");
const langText = document.getElementById('main-p');
const langStart = document.querySelector(".start");
const langLearn = document.getElementsByClassName('learn')[0];
const langLinkItem = document.querySelectorAll(".link-item");  
const langHeadTwo = document.getElementById("head-two");
const langTitle = document.querySelectorAll(".card-text");
const langAudience = document.querySelectorAll('.item');
const langTestimonials = document.querySelectorAll('.test');
const langDiscover = document.querySelectorAll('.blog');

 
const multilang =()=>{
    if(langBtn.innerHTML==="AZ"){
        langText.innerHTML = "Front-un xüsusiyyətlərlə zəngin dizayn edilmiş demo səhifələri sizə mümkün olan ən yaxşı məhsulu yaratmağa kömək edir.";
        langHead.innerHTML = "İdeyalarınızı  uğura çevirin.|";
        langStart.innerHTML = "Başlayın";
        langLearn.innerHTML = "Daha ətraflı";
        langHeadTwo.innerHTML= "Komponentləri və dizayn sistemləri ilə saytları inkişaf etdirməyi öyrənin";

for(let i in langdata.az){
langItem[i].innerHTML = langdata.az[i];
}langBtn.innerHTML="EN"

for(let i in langlink.az){
langLinkItem[i].innerHTML = langlink.az[i];
} langBtn.innerHTML="EN"

for (let i in langcard1.az){
    langTitle[i].innerHTML = langcard1.az[i]
}langBtn.innerHTML="EN"

for(let i in langItem2.az){
    langAudience[i].innerHTML = langItem2.az[i]
}langBtn.innerHTML="EN"

for(let i in langTest.az){
    langTestimonials[i].innerHTML = langTest.az[i]
} langBtn.innerHTML="EN"

for(let i in langBlog.az){
    langDiscover[i].innerHTML = langBlog.az[i]
} langBtn.innerHTML="EN"

    } else{
        langText.innerHTML ="Front's feature-rich designed demo pages help you create the best possible product.";
        langHead.innerHTML = "Turn your ideas into a success.|"
        langStart.innerHTML = "Get started";
        langLearn.innerHTML = "Learn More";
        langHeadTwo.innerHTML="Learn to develop sites with components and design systems";
        

        for( let i in langdata.en){
langItem[i].innerHTML = langdata.en[i];
}langBtn.innerHTML="AZ"
for( let i in langlink.en){
langLinkItem[i].innerHTML = langlink.en[i];
}langBtn.innerHTML="AZ"

for( let i in langcard1.en){
langTitle[i].innerHTML = langcard1.en[i];
}langBtn.innerHTML="AZ"


for(let i in langItem2.en){
    langAudience[i].innerHTML = langItem2.en[i];
}langBtn.innerHTML="AZ"

for(let i in langTest.en){
    langTestimonials[i].innerHTML = langTest.en[i]
} langBtn.innerHTML="AZ"

for(let i in langBlog.en){
    langDiscover[i].innerHTML = langBlog.en[i]
} langBtn.innerHTML="AZ"
    }
    
    }

langBtn.onclick = multilang;











