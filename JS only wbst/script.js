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


const style = `
    *{
    margin: 0;
    }
    .site-header{
    width: 100%;
    height: 14vw;
    background-color: #000000;
    }
    .undertale{
    height:25%;
    top: 0;
    left: 36%;
    position: fixed;
    }
    .hearts{
    height:25%;
    position: fixed;
    top: 0px;
    left:15%;
    }
    .hearts2{
    height:25%;
    position: fixed;
    top: 0px;
    right:15%;
    }
`
createAndAppend("style",document.head,{},style)