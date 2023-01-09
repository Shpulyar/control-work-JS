'use strict';

// acsess buttons
const editBtn = document.querySelector('.edit');
const styleBtn = document.querySelector('.style');

const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');

const colorTextBtn = document.querySelector('.color-text');
const backgroundColorBtn = document.querySelector('.bacground-color');

const buttonScreen = document.querySelector('.buttons-screen');
const btnCreateList = document.querySelector('.create-list');

// acsess to blocks
const screenBlock = document.querySelector('.block-screen');
const emptyBlock = document.querySelector('.block-empty');
const inputBlock = document.querySelector('.block-input');
const settingsBlock = document.querySelector('.block-settings');
const chooseBlock = document.querySelector('.choose');

// acsess to input
const textarea = document.querySelector('#input-text');

screenBlock.innerHTML = textarea.textContent;

editBtn.addEventListener('click', function () {
    emptyBlock.style.display = 'none';
    inputBlock.style.display = 'block';
    settingsBlock.style.display = 'none';
    cubic.style.display = 'none';
});

styleBtn.addEventListener('click', function () {
    emptyBlock.style.display = 'none';
    inputBlock.style.display = 'none';
    settingsBlock.style.display = 'block';
});

saveBtn.addEventListener('click', function () {
    screenBlock.innerHTML = textarea.value;
    inputBlock.style.display = 'none';
    emptyBlock.style.display = 'block';
});

// Font Size --------------------------------------------------------
const fontSize = document.getElementsByName('radio');

fontSize.forEach(el => {

    el.addEventListener('click', function (e) {
        e.target ? screenBlock.style.fontSize = el.value : '';
    })
});

// Font Family ------------------------------------------------------

const fontFamily = document.querySelectorAll('option');

const select = document.querySelector('select');
let selectedFont;
select.addEventListener('change', () => {
    selectedFont = screenBlock.style.fontFamily = select.value;
});

// Style ------------------------------------------------------------

const bold = document.getElementById('bold');
bold.addEventListener('change', () => {

    bold.checked ?
        screenBlock.style.fontWeight = bold.id :
        screenBlock.style.fontWeight = '';

});

const cursive = document.getElementById('cursive');
cursive.addEventListener('change', () => {

    cursive.checked ?
        screenBlock.style.fontFamily = cursive.id :
        screenBlock.style.fontFamily = selectedFont;
});

// Colors of text & background-color   ----------------------------------

let cubic = document.querySelector('.colors-cubic');
let cubicBack = document.querySelector('.background-colors-cubic');

colorTextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cubic.style.display = 'flex';
    cubicBack.style.display = 'none';
    cubic.addEventListener('click', function (e) {
        let colorCub = e.target.getAttribute('class');
        screenBlock.style.color = colorCub.split(' ')[0];

    })
});

backgroundColorBtn.addEventListener('click', (e) => {

    e.preventDefault();
    cubic.style.display = 'none';
    cubicBack.style.display = 'flex';

    cubicBack.addEventListener('click', function (e) {
        let backColorCub = e.target.getAttribute('class');
        screenBlock.style.backgroundColor = backColorCub.split(' ')[0];
    })
});

// Open block - choose what you want & hide other blocks
const tableSettings = document.querySelector('.table-settings');
const blockChoose = document.querySelector('.block-choose');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screenBlock.style.display = 'none';
    emptyBlock.style.display = 'none';
    inputBlock.style.display = 'none';
    settingsBlock.style.display = 'none';
    buttonScreen.style.display = 'none';
    blockChoose.style.display = 'block';
});

const tableRadio = document.getElementById('radio-table');
const listRadio = document.getElementById('radio-list');
const listWrapper = document.querySelector('.list-wrapper');

const countLi = document.getElementById('count-li');
const typeOfMarks = document.getElementById('type-of-marks');

tableRadio.addEventListener('click', () => {
    blockChoose.style.height = '350px';
    tableSettings.style.display = 'block';
    listWrapper.style.display = 'none';
});

listRadio.addEventListener('click', () => {
    listWrapper.style.display = 'flex';
    tableSettings.style.display = 'none';
});

// Style Li Count Li Type of marks
btnCreateList.addEventListener('click', (e) => {
    e.preventDefault();

    let ul = document.createElement('ul');
    for (let i = 0; i < countLi.value; i++) {
        let li = document.createElement('li');
        li.textContent = 'item';
        li.style.listStyleType = typeOfMarks.value;
        ul.appendChild(li);
        li.style.marginLeft = '50px';
        li.style.marginTop = '5px';
    };
    
    screenBlock.style.display = 'block';
    screenBlock.appendChild(ul);
    textarea.textContent += ul.outerHTML;
    listWrapper.style.display = 'none';
    settingsBlock.style.display = 'none';
    buttonScreen.style.display = 'block';
    emptyBlock.style.display = 'block';
    blockChoose.style.display = 'none';

});

//  Create table 
let table = document.createElement('table');

const createTable = document.querySelector('.create-table ')

let tdCount = document.getElementById('td');
let trCount = document.getElementById('tr');
let tdWidth = document.getElementById('td-width');
let tdHeight = document.getElementById('td-height');
let widthOfBorder = document.getElementById('width-border');
let typeOfBorder = document.getElementById('type-border');
let colorOfBorder = document.getElementById('color-border');

createTable.addEventListener('click', (e) => {
    e.preventDefault();

    for (let i = 0; i < trCount.value; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);

        for (let y = 0; y < tdCount.value; y++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.textContent = 'TD';
            td.style.textAlign = 'center';
            
        }
    };
    screenBlock.appendChild(table);
    screenBlock.style.display = 'block';

    table.style.width = tdWidth.value + 'px';
    table.style.height = tdHeight.value + 'px';

    table.style.border = `${widthOfBorder.value + 'px'} ${typeOfBorder.value} ${colorOfBorder.value}`;
    
    tableSettings.style.display = 'none';
    buttonScreen.style.display = 'block';
    emptyBlock.style.display = 'block';
    blockChoose.style.display = 'none';

    textarea.textContent += table.outerHTML;
});