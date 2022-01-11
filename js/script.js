const body = document.querySelector('body');
const fontcolor = 'hsl(250, 75%, 75%)';


for(let i=0; i<5; i++){
    const h1 = document.createElement('h1');
    h1.innerText = `Rad ${i+1}`;
    h1.style.fontSize = `${i*10+8}px`
    h1.style.textAlign = 'center';

    let hue = i*20+130;
    h1.style.backgroundColor = `hsl(${hue}, 75%, 75%)`;
    h1.style.color = fontcolor;
    body.appendChild(h1);
}
// Master div with border
const mdiv = document.createElement('div');
mdiv.style.border = 'black solid 1px';
mdiv.style.display = 'flex';
mdiv.style.flexFlow ='row nowrap';
mdiv.style.justifyContent = 'center';
body.appendChild(mdiv);
 //Array that will be used in inner section 
const numbers = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

// 3 element inner section
for(let i=0; i<3; i++){
    
    const section = document.createElement('section');
    section.style.border = 'hsl(250, 75%, 75%) solid 10px';
    section.style.margin = '4rem';
    mdiv.appendChild(section);

// Ads nummbers to inner section
    for(let j=0; j<10; j++){
    
        const p = document.createElement('p');
        p.style.margin = '0px';
        p.style.width = '50px';
        
        if(i===0){
            p.innerText = j;
            if( j === 4){
                p.style.backgroundColor = 'hsl(230, 75%, 75%)';
            }
            else if(j % 2 === 0){
                p.style.backgroundColor = 'black';
                p.style.color = 'white';
            }
        }
        
        else if(i===1){
            p.innerText = 9-j;
            p.style.textAlign = 'center';
            if( j === 1){
                p.style.backgroundColor = 'hsl(230, 75%, 75%)';
            }
            else if(j % 2 === 1){
                p.style.backgroundColor = 'black';
                p.style.color = 'white';
            }
        }

        else{
            p.innerText = numbers[j];
            p.style.textAlign = 'right';
            if( j === 5){
                p.style.backgroundColor = 'hsl(230, 75%, 75%)';
            }
            else if(j % 2 === 0){
                p.style.backgroundColor = 'black';
                p.style.color = 'white';
            }
        }
        section.appendChild(p);
        
        
    }
}