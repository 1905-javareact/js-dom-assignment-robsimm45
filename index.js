// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.

function getUSA(){
    let foundData = document.querySelectorAll('*')
    let processData = [...foundData]
    let x = processData.find((u)=>{
        return u.innerHTML == 'USA'
    })
    console.log(x)
}

getUSA()



// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales(){
    let foundData = document.getElementsByTagName('tr')
    let processData
    let processData0
    let processData1
    for(let g of foundData){
        processData = g.cells
        processData0 = processData[0].innerHTML
        processData1 = processData[1].innerHTML

        if(processData1 === 'Sales'){
            console.log(processData0)
        }
    }

    console.log(foundData[0].cells)

}
getPeopleInSales()


// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren(){
    console.log('ANCHOR CHILDREN FUNCTION')
    let foundData = document.querySelectorAll('a>span')
    let processData = [...foundData]
    for(let x of processData){
        console.log(x)
    }
}
getAnchorChildren()

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies(){
    console.log('GET HOBIES FUNCTION')
    let foundData = document.querySelector('select[name=skills]')
    let foundData2 = foundData.querySelectorAll('[selected=selected]')
    let processData = [...foundData2]

    for(let x of processData){
        console.log(x.innerHTML)
        console.log(x)
    }

}
getHobbies()


// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute. 
function getCustomAttribute(){
    console.log('CUSTOM ATTRIBUTE FUNCTION')
    let foundData = document.querySelectorAll('[data-customAttr]')
    let processData = [...foundData]

    for(let x of processData){
        console.log(x.innerHTML)
        console.log(x)
    }
}
getCustomAttribute()


// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

let numsData = document.getElementsByClassName('nums')
let sumData = document.getElementById('sum')
let result


numsData[0].onchange = function() {sums()}
numsData[1].onchange = function() {sums()}

function sums(){
    result = parseInt(numsData[0].value) + parseInt(numsData[1].value)
    if(isNaN(result)){
        result = 'Cannot add'
    }    
    
    sumData.innerHTML = result
}


// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

let selectData = document.querySelector('select[name=skills]')
let optionData = selectData.querySelectorAll('option')
for(let x of optionData){
    x.onclick = function() {alert(`Are you sure ${x.innerHTML} is one of your skills?`)}
}



// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
let inputData = document.querySelectorAll('input[name=favoriteColor]')
let currentColor = 'white'
for(let x of inputData){
    x.onclick = function() {
        alert(`So you like ${x.value} more than ${currentColor}?`);
        document.body.style.backgroundColor = radioColor(x.value)
        /*for(let y of inputData){    //for changing all radio buttons but cant change buttons
            y.style.background-color = radioColor(x.value)
        } */
    }
}

function radioColor(color){
    switch(color){
        case 'blue':
            currentColor = 'blue'
            return 'blue'
            break;
        case 'red':
            currentColor = 'red'
            return 'red'
            break;
        case 'orange':
            currentColor = 'orange'
            return 'orange'
            break;
        case 'green':
            currentColor = 'green'
            return 'green'
            break;
    }

}



// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

let empName = document.querySelectorAll('[class=empName]')
let empNames = [...empName]

for(let x of empNames){
    x.onmouseover = function() {
        if(x.style.opacity === '1') {
            x.style.opacity = '0'
        } else if(x.style.opacity === '0') {
            x.style.opacity = '1'
        } else {
            x.style.opacity = '1'
        }
    }
}


// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
setInterval(timeNow, 1000)

function timeNow(){
    nowDate = new Date()
    document.getElementById('currentTime').innerHTML = nowDate.toLocaleTimeString()
}

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

let delayChange = document.getElementById('helloWorld')
delayChange.onclick = function() {setTimeout(delayFunc, 3000)}

function delayFunc(){
    let newRand = Math.random() * (3 - 1) + 1

    switch(parseInt(newRand.toPrecision(1))){
        case 1:
            console.log('chose 1')
            delayChange.style.color = 'red'
            break;
        case 2:
            console.log('Chose 2')
            delayChange.style.color = 'blue'
            break;
        case 3:
            console.log('chose 3')
            delayChange.style.color = 'green'
            break;
    }
}

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).

let beginNode = document.getElementById('helloWorld')


function walkTheDO(node, func){
    let newNode = node.parentElement
    walkTheDO(newNode, func)
}

walkTheDO(beginNode, logFunc)

function logFunc(element) {
    console.log(`Checking ${element}`)
}
