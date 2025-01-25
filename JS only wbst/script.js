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
    const headimg2 = createAndAppend("img",header,{src:"./images/What-type-of-human-soul-from-undertale-have-you-g-2-8394-1456540382-13_dblbig.webp", alt:"undertale", class:"hearts2"})
    const headimg3 = createAndAppend("img",header,{src:"./images/What-type-of-human-soul-from-undertale-have-you-g-2-8394-1456540382-13_dblbig.webp", alt:"undertale", class:"hearts"})
    const annDog = createAndAppend("img", header,{src:"./images/Annoying_Dog_sprite.webp", alt:"undertale", class:"annoying"})
    const funny = createAndAppend("img", header, {src:"./images/black.png", alt:"funny", class:"funny"})
    const sleepDog = createAndAppend("img", header, {src:"./images/Annoying_Dog_overworld_sleeping.webp", alt: "he sleepy", class:"Sleep"})
    const funny2 = createAndAppend("img", header, {src:"./images/black.png", alt:"funny", class:"funny2"})
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
    link4.href = 'https://youtu.be/LZqQLXlrhI4?si=XcemOz5-CgCm_H0g';
    link4.innerHTML = "Toby";
    navbar.appendChild(link4);
;

const main = createAndAppend("main", document.body)
    const article = document.createElement('article');
    const img = document.createElement('img');
    img.src = './images/undertale.webp';
    const content = document.createElement('p');
    content.innerHTML = "Undertale is an amazing indie game created by Toby Fox in 2015, The player controls a child who has fallen into the Underground: a large, secluded region under the surface of the Earth, separated by a magical barrier. The player meets various monsters during the journey back to the surface, some of which may engage in combat."
    const content2 = document.createElement('p');
    const space = document.createElement('br')
    
    content2.innerHTML = "Undertale is rated E10+ so it is able to be enjoyed by teens."
    const content3 = document.createElement('p')
    content3.innerHTML = "It's story and characters are very loveable and"
    const content4 = document.createElement('p')
    content4.innerHTML = "memorable, Undertale is highly reccomended among others"
    const content5 = document.createElement('p')
    const space2 = document.createElement('br')
    content5.innerHTML = "Undertale scored 10/10 on IGN, 92% on Metacritic and 10/10"
    const content6 = document.createElement('p')
    content6.innerHTML = "on steam. A 'sequal' game is being worked on, Deltarune."
    article.appendChild(img);
    article.appendChild(content);
    article.appendChild(space);
    article.appendChild(content2);
    article.appendChild(content3);
    article.appendChild(content4);
    article.appendChild(space2);
    article.appendChild(content5);
    article.appendChild(content6);
    main.appendChild(article);
;


const gallery = createAndAppend("gallery", document.body, {class:"gallery"})
    const segment = document.createElement('segment');
    const wow = document.createElement('img');
    wow.src = "./images/image.png"
    const caption = document.createElement('p');
    caption.innerHTML= "Inner Beauty"

    const segment2 = document.createElement('segment');
    const wow2 = document.createElement('img');
    wow2.src = "./images/sddefault (1).jpg"
    const caption2 = document.createElement('p');
    caption2.innerHTML= "Outer Beauty"

    const segment3 = document.createElement('segment');
    const wow3 = document.createElement('img');
    wow3.src = "./images/undertale.jpg"
    const caption3 = document.createElement('p');
    caption3.innerHTML= "The Cast"

    const segment4 = document.createElement('segment');
    const wow4 = document.createElement('img');
    wow4.src = "./images/beginning.png"
    const caption4 = document.createElement('p');
    caption4.innerHTML= "The Beginning"
    
    segment.appendChild(wow);
    segment.appendChild(caption);
    segment2.appendChild(wow2);
    segment2.appendChild(caption2);
    segment3.appendChild(wow3);
    segment3.appendChild(caption3);
    segment4.appendChild(wow4);
    segment4.appendChild(caption4);
    gallery.appendChild(segment)
    gallery.appendChild(segment2)
    gallery.appendChild(segment3)
    gallery.appendChild(segment4)
;

const footer = document.createElement('footer');
    footer.innerHTML = "<p> Toby Fox</p>";
const footer2 = document.createElement('p');
    footer2.innerHTML = "<p> Copyright @2025</p>";
const footer3 = document.createElement('p');
    footer3.innerHTML = "<p> Annoying Dog</p>";
document.body.appendChild(footer);
footer.appendChild(footer2);
footer.appendChild(footer3);

const style = `
    *{
        margin: 0;
        color: white;
        font-size: 40px;
        font-family: "Determination"
    }
    .site-header{
        width: 100%;
        height: 14vw;
        background-color: black;
    }
    footer{
        margin-top:20px;
        margin-left: 5%;
        display: flex;
        background-color: black;
        width: 90%;
        border: 4px solid white;
        padding: 1%;
        position: relative;
        justify-content: space-evenly;
        align-items: center;
    }
    body{
        background-color: black;
    }
    .gallery{
        margin-top:20px;
        margin-left: 5%;
        display: flex;
        background-color: black;
        width: 90%;
        height: 100%;
        border: 4px solid white;
        padding: 1%;
        position: relative;
    }
    segment img{
        width: 70%;
    }
    .gallery segment{
    width: 25%
    }
    main{
        margin-top:20px;
        margin-left: 5%;
        background-color: black;
        width: 90%;
        height: 530px;
        border: 4px solid white;
        padding: 1%;
    }
    main img{
        position: absolute;
        height: 35%;
        right: 4%;
        top: 60%;
        z-index: ;
    }
    .funny{
        height: 100%;
        width: 9%;
        position: relative;
        z-index: 3;
        right: 45%;
    }
    .funny2{
        position: relative;
        height: 100%;
        width: 7%;
        left: 18%;
        z-index:3;
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
        height: 6%;
        position:fixed;
        left: 11%;
        top: 3%;
        z-index:2;
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
        z-index: 1
    }
    a:hover{
        color: yellow;
    }
    a:active{
        color: pink;
    }
    .Sleep{
        height:5%;
        position:fixed;
        right: 11%;
        top: 35px;
        z-index:2;
    }
    @font-face {
        font-family: "Determination";
        src: url("./font/determinationmonoweb-webfont.ttf");
    }
`
createAndAppend("style",document.head,{},style)