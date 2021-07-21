const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click
//clearBtn.addEventListener('click', runEvent);

//doubleClick
//clearBtn.addEventListener('dblclick', runEvent);

//mousedown
//clearBtn.addEventListener('mousedown', runEvent);
//mouseup
//clearBtn.addEventListener('mouseup', runEvent);

//mouseenter using the card
// card.addEventListener('mouseenter', runEvent);
// //mouseleave
// card.addEventListener('mouseleave', runEvent);
// //mouseover
// card.addEventListener('mouseover', runEvent);
// //mouseout
// card.addEventListener('mouseout', runEvent);

//mousemove
card.addEventListener('mousemove', runEvent);

/////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////         THIS IS A COOL FUNCTION THAT YOU CAN DO SOMETING WITH
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}


//event handler displays the mouse X and Y coordinats
// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
// }


//original
// //event handler
// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);
// }