const sketchPad = document.getElementById('sketch-container');
const clearBtn = document.querySelector('.clear');
const eraseBtn = document.getElementById('erase');
const colorBtn = document.querySelector('.color-choice');
const dimensionsBtn = document.getElementById('dimensions');


function makeRows (num) {
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
                rows.classList.remove('sketch');
            });
            
            eraseBtn.addEventListener('click', (e) => {
                sketchPad.removeChild(rows);
            });
            
            colorBtn.addEventListener('click', (e) => {
                sketchPad.appendChild(rows);
                rows.classList.remove('sketch');
            
            });

            
    } 
    
}

makeRows(256);



