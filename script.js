
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


    elementListItem.appendChild(elementRow)
    elementListItem.appendChild(elementDelete);
    elementList.appendChild(elementListItem)

    elementDelete.addEventListener("click", function (event) {
        const div = document.getElementById(event.target.parentNode.id)
        const parent = div.parentNode
        parent.removeChild(div)

    })



}

const inputText = document.getElementById('inputText')
const elementAdd = document.getElementById('add')
const elementList = document.getElementById('items')



document.addEventListener('DOMContentLoaded', () => {

    elementAdd.addEventListener('click', addRow)
})
