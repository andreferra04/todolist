
let id = -1;


function addRow() {

    const elementListItem = document.createElement('div')
    const elementRow = document.createElement('li')
    const elementDelete = document.createElement('i');


    elementListItem.setAttribute('id', id += 1)

    elementDelete.classList.add('w-8', 'h-full', 'rounded-md', 'flex', 'justify-center', 'items-center', 'fa', 'fa-trash', 'fa-sm', 'transition', 'ease-in-out', 'delay-50', 'hover:scale-110', 'hover:bg-red-500', 'cursor-pointer', 'text-slate-900')
    elementListItem.classList.add('w-full', 'md:w-1/2', 'h-12', 'bg-slate-700', 'flex', 'justify-between', 'mb-4', 'rounded-md', 'pl-2')


    elementRow.textContent = inputText.value
    elementRow.classList.add('w-full', 'h-full', 'leading-[50px]', 'text-black', 'font-bold', 'font-mono')


    // list.push(elementRow.textContent)
    // list.forEach(item => {

    //     console.log(item.textContent)
    //     localStorage.setItem(`item${id}`, JSON.stringify(item.textContent))

    // });

    localStorage.setItem(`item${id}`, JSON.stringify(elementRow.textContent))




    elementListItem.appendChild(elementRow)
    elementListItem.appendChild(elementDelete);
    elementList.appendChild(elementListItem)

    elementDelete.addEventListener("click", function (event) {
        const div = document.getElementById(event.target.parentNode.id)
        const parent = div.parentNode

        localStorage.removeItem(`item${id}`)
        parent.removeChild(div)
        id--

    })



}

const inputText = document.getElementById('inputText')
const elementAdd = document.getElementById('add')
const elementList = document.getElementById('items')

let list = []

// if (localStorage.getItem('item') === null) {
//     localStorage.clear()
// }
// else {
//     console.log("PPPPP")
// }

// list = localStorage.getItem('items')

document.addEventListener('DOMContentLoaded', () => {

    elementAdd.addEventListener('click', addRow)


    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('item')) {
            const savedItem = localStorage.getItem(key);
            const elementListItem = document.createElement('div');
            const elementRow = document.createElement('li');
            const elementDelete = document.createElement('i');

            const itemId = parseInt(key.replace('item', ''), 10);

            elementListItem.setAttribute('id', itemId);

            elementDelete.classList.add('w-8', 'h-full', 'rounded-md', 'flex', 'justify-center', 'items-center', 'fa', 'fa-trash', 'fa-sm', 'transition', 'ease-in-out', 'delay-50', 'hover:scale-110', 'hover:bg-red-500', 'cursor-pointer', 'text-slate-900');
            elementListItem.classList.add('w-full', 'md:w-1/2', 'h-12', 'bg-slate-700', 'flex', 'justify-between', 'mb-4', 'rounded-md', 'pl-2');

            elementRow.textContent = JSON.parse(savedItem);
            elementRow.classList.add('w-full', 'h-full', 'leading-[50px]', 'text-black', 'font-bold', 'font-mono');

            elementListItem.appendChild(elementRow);
            elementListItem.appendChild(elementDelete);
            elementList.appendChild(elementListItem);

            elementDelete.addEventListener("click", function (event) {
                const div = document.getElementById(event.target.parentNode.id);
                const parent = div.parentNode;

                localStorage.removeItem(`item${itemId}`);
                parent.removeChild(div);
            });
        }
    }


})
