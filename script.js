const sketchPad = document.getElementById('sketch-container');
const clearBtn = document.querySelector('.clear');
const eraseBtn = document.getElementById('erase');
const blackBtn = document.querySelector('.black');
const dimensionsBtn = document.getElementById('dimensions');
const rgbBtn = document.getElementById ('rgb');









function makeRows (num) {
    sketchPad.innerHTML = '';
    for (let i = 0; i < num; i++) {
            let dimensions = Math.sqrt(num);
            let widthHeight = (592 / dimensions) - 2;
            const rows = document.createElement ('div');
            rows.classList.add('row');
            rows.style.width = `${widthHeight}`+ 'px';
            rows.style.height = `${widthHeight}` + 'px';
            sketchPad.appendChild(rows);
            rows.addEventListener('mouseover', (e) => {
                rows.classList.add('sketch');
            });

            clearBtn.addEventListener('click', (e) => {
                rows.style.backgroundColor = 'white'
            });
            
            eraseBtn.addEventListener('click', (e) => {
                rows.addEventListener('mouseover', (e) => {
                    rows.style.backgroundColor = 'white';
                });
            });
            
            blackBtn.addEventListener('click', (e) => {
                rows.addEventListener('mouseover', (e) => {
                    rows.style.backgroundColor = 'black';
                });
            });

            rgbBtn.addEventListener ('click', (e) => {
                rows.addEventListener('mouseover', (e) => {
                    rows.style.backgroundColor = "rgb("+ `${randomColor()}`+ ")";
                    
                })
            })
                
                
                
    } 
}

makeRows(256);


dimensionsBtn.addEventListener('click', (e) => {
    let side;
    do {
        side = parseInt(prompt('Choose number of sides (Maximum of 100)'));
        
        } while (side > 100 || side === "" || isNaN(side));
    
        if ((side > 100 && side !== "") && isNaN (side) === false) 
            sketchPad.innerHTML = "";
            let sideSquared = Math.pow(side,2);
            makeRows(sideSquared);
         
    });
    


function randomColor () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `${r}, ${g}, ${b}`;
    

}




    
        
   
        
    

    