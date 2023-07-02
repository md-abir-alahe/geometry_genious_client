// When click blog button go to another page
document.getElementById("new-blog").addEventListener("click",function() {
    window.location.href='blog_qa.html';
});

// displaying data in area calculation 
// function displayData(serial,name,area,button) {
//     const container = document.getElementById("table-container");
//     const tr = document.createElement("tr");
//     tr.innerHTML = `
//         <td>${serial }</td>
//         <td>${name}</td>
//         <td>${area}</td>cm<sup>2</sup>
//         <td>${button}</td>
//         `
//         container.appendChild(tr);
// }

function getFirstValues(first){
    const firstValueField = document.getElementById(first);
    const firstValue = parseFloat(firstValueField.value);
    firstValueField.value = '';
    return firstValue;
}

function getSecondValues(second) {
    const secondValueField = document.getElementById(second);
    const secondValue = parseFloat(secondValueField.value);
    secondValueField.value = '';
    return secondValue;
}

function displayData(serial,name,area) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${serial}.</td>
        <td>${name}</td>
        <td>${area}cm<sup>2</sup></td>
        <td>
        <button class="text-white text-center font-bold bg-blue-600 px-3 py-3 convert-btn rounded-lg">
        convert to m<sup>2</sup></button>
        </td>
        ` 
        container.appendChild(tr);

    const convertBtn = document.querySelectorAll(".convert-btn");
    for(const btn of convertBtn){
        btn.addEventListener('click', function(){
            console.log("convert button clicked");
            const meterArea = (area * 0.0001);
            area.value = meterArea.toFixed(2);
        })
    }
}