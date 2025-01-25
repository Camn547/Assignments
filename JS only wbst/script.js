// images
// header: https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/391540/header.jpg?t=1579096091
// BG: https://preview.redd.it/rgft9onkvkkx.png?auto=webp&s=f3d571e93e41e7c092f095383d117e3066b5d749
// frisk/toriel yellow flower: https://static.wikia.nocookie.net/vsbattles/images/7/73/Undertale.jpg/revision/latest/scale-to-width-down/590?cb=20151108132211
// annoying dog: https://static.wikia.nocookie.net/undertale/images/0/0b/Annoying_Dog_sprite.gif/revision/latest/thumbnail/width/360/height/360?cb=20160125092850



const createAndAppend = (tag, parent, attributes={}, content="")=>{
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(key=>element.setAttribute(key,attributes[key]));
    element.innerHTML = content;
    parent.appendChild(element);
    return element;
}


const header = createAndAppend("header", document.body, {class:"site-header"});
    const headimg = createAndAppend("img",header,{src:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/391540/header.jpg?t=1579096091", alt:"undertale", class:"undertale"})
    const headimg2 = createAndAppend("img",header,{src:"./What-type-of-human-soul-from-undertale-have-you-g-2-8394-1456540382-13_dblbig.webp", alt:"undertale", class:"hearts2"})
    const headimg3 = createAndAppend("img",header,{src:"./What-type-of-human-soul-from-undertale-have-you-g-2-8394-1456540382-13_dblbig.webp", alt:"undertale", class:"hearts"})
    const annDog = createAndAppend("img", header,{src:"./Annoying_Dog_sprite.webp", alt:"undertale", class:"annoying"})
    const funny = createAndAppend("img", header, {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuMGmMaEphoSfu4sGOW9w0PzwCpfxmo9L1A&s", alt:"funny", class:"funny"})
    const sleepDog = createAndAppend("img", header, {src:"./Annoying_Dog_overworld_sleeping.webp", alt: "he sleepy", class:"Sleep"})
    const funny2 = createAndAppend("img", header, {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuMGmMaEphoSfu4sGOW9w0PzwCpfxmo9L1A&s", alt:"funny", class:"funny2"})
;
const navbar = createAndAppend("navbar", document.body, {class:"navbar"});
    let link = document.createElement('a');
    link.href = '#';
    link.innerHTML = "Home";
    navbar.appendChild(link);

    let link2 = document.createElement('a');
    link2.href = '#';
    link2.innerHTML = "About";
    navbar.appendChild(link2);

    let link3 = document.createElement('a');
    link3.href = '#';
    link3.innerHTML = "Gallery";
    navbar.appendChild(link3);

    let link4 = document.createElement('a');
    link4.href = '#';
    link4.innerHTML = "Toby";
    navbar.appendChild(link4);
;




const section = document.createElement('section');
for (let i =0; i <= 7; i++){
    const article = document.createElement('article');
    const content = document.createElement('p');
    content.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet, elit id finibus semper, felis mauris egestas nisi, non vestibulum nisi arcu in massa. Morbi dictum pulvinar quam ac mattis. Nulla quis erat eu metus dictum placerat. Integer gravida volutpat dictum. Curabitur maximus porta urna, quis accumsan enim porttitor in."
    article.appendChild(content);
    section.appendChild(article);
}
document.body.appendChild(section);


const style = `
    *{
        margin: 0;
        color: white;
    }
    .site-header{
        width: 100%;
        height: 14vw;
        background-color: black;
    }
    body{
        background-color:black;
    }
    .funny{
        height: 180px;
        width: 70px;
        position: relative;
        z-index: 1;
        right: 680px;
    }
    .funny2{
        position: relative;
        height: 180px;
        width: 120px;
        left: 340px;
        z-index:1;
    }
    .undertale{
        height:100%;
        top: 0;
        left: 36%;
        position: relative;
    }
    .hearts{
        height:60%;
        position: relative;
        right: 18%;
        bottom: 20%;
    }
    .hearts2{
        height:60%;
        position: relative;
        bottom: 20%;
        left: 34%;
    }
    .annoying{
        transform: scaleX(-1);
        height: 50px;
        position:fixed;
        left: 170px;
        top: 35px;
        z-index:1;
    }
    navbar{
        background-color: #fff;
        position: sticky;
        top: 10px;
        left: 10%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: black;
        color: white;
        height: 90px;
        width: 80%;
        border: 4px solid white;
        font-size: 40px;
        font-family: "Determination"
    }
    a:hover{
        color: yellow;
    }
    a:active{
        color: pink;
    }
    .Sleep{
        height:45px;
        position:fixed;
        right: 160px;
        top: 35px;
        z-index:1;
    }
    @font-face {
        font-family: "Determination";
        src: url("./determinationmonoweb-webfont.ttf");
    }
`
createAndAppend("style",document.head,{},style)