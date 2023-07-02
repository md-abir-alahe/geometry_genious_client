
let serial = 0;
// triangle 
 document.getElementById("triangle-btn").addEventListener("click",function(){
    const base = getFirstValues("triangle-base");
    if(isNaN(base) || base < 0 ){
        alert("Please provide valid amount");
        return ;
    }
   const height = getSecondValues("triangle-height");
   if(isNaN(height) || height < 0 ){
    alert("please provide valid amount");
    return ;
}
   serial+=1;
   const triangleArea =(0.5 * base * height).toFixed(2);
//    console.log(triangleArea);
   const triangleTitleElement = document.getElementById("triangle-title");
   const triangleTitle = triangleTitleElement.innerText;
   displayData(serial,triangleTitle,triangleArea);
    
});

// rectangle 
document.getElementById("rectangle-btn").addEventListener("click",function(){
   const width = getFirstValues("rectangle-width");
   if(isNaN(width) || width < 0 ){
       alert("Please provide valid amount");
       return ;
   }
  const length = getSecondValues("rectangle-length");
  if(isNaN(length) || length < 0 ){
   alert("please provide valid amount");
   return ;
}
   serial+=1;
  const rectangleArea =( width * length).toFixed(2);
  const rectangleTitleElement = document.getElementById("rectangle-title");
  const rectangleTitle = rectangleTitleElement.innerText;   
  displayData(serial,rectangleTitle,rectangleArea);
   
});

// parallellogram
document.getElementById("parallelogram-btn").addEventListener("click",function(){
   const base = getFirstValues("parallelogram-base");
   if(isNaN(base) || base < 0 ){
       alert("Please provide valid amount");
       return ;
   }
  const height = getSecondValues("parallelogram-height");
  if(isNaN(height) || height < 0 ){
   alert("please provide valid amount");
   return ;
}
 serial+=1;
  const parallelogramArea =(base * height).toFixed(2);
  const parallelogramTitleElement = document.getElementById("parallelogram-title");
  const parallelogramTitle = parallelogramTitleElement.innerText;
  displayData(serial,parallelogramTitle,parallelogramArea);
   
});  

// Rhombus
document.getElementById("rhombus-btn").addEventListener("click",function(){
   const diagonalFirst = getFirstValues("diagonal1");
   if(isNaN(diagonalFirst) || diagonalFirst < 0 ){
       alert("Please provide valid amount");
       return ;
   }
  const diagonalSecond = getSecondValues("diagonal2");
  if(isNaN(diagonalSecond) || diagonalSecond < 0 ){
   alert("please provide valid amount");
   return ;
}
  serial+=1;
  const rhombusArea =( 0.5 * diagonalFirst * diagonalSecond).toFixed(2);
  const rhombusTitleElement = document.getElementById("rhombus-title");
  const rhombusTitle = rhombusTitleElement.innerText;
  displayData(serial,rhombusTitle,rhombusArea);

});  

// pentagon
document.getElementById("pentagon-btn").addEventListener("click",function(){
   const perimeter = getFirstValues("pentagon-perimeter");
   if(isNaN(perimeter) || perimeter < 0 ){
       alert("Please provide valid amount");
       return ;
   }
  const apothem = getSecondValues("pentagon-apothem");
  if(isNaN(apothem) || apothem < 0 ){
   alert("please provide valid amount");
   return ;
}
  serial+=1;
  const pentagonArea =( 0.5 * perimeter * apothem).toFixed(2);
  const pentagonTitleElement = document.getElementById("pentagon-title");
  const pentagonTitle = pentagonTitleElement.innerText;
  displayData(serial,pentagonTitle,pentagonArea);

}); 

// ellipse 
document.getElementById("ellipse-btn").addEventListener("click",function(){
   const AAxis = getFirstValues("a-axis");
   if(isNaN(AAxis) || AAxis < 0 ){
       alert("Please provide valid amount");
       return ;
   }
  const BAxis = getSecondValues("b-axis");
  if(isNaN(BAxis) || BAxis < 0 ){
   alert("please provide valid amount");
   return ;
}
  serial+=1;
  const ellipseArea =( 3.1416 * AAxis * BAxis).toFixed(2);
  const ellipseTitleElement = document.getElementById("ellipse-title");
  const ellipseTitle = ellipseTitleElement.innerText;
  displayData(serial,ellipseTitle,ellipseArea);
});