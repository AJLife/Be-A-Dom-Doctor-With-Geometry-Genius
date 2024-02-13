/** Steps:::::::::::::::::::::::::::::::::::::::::::::::::::::
 *  Objective: get base and height of a triangle. Calculate the area by using the provided formula
 *  and display the area.. 
 *  step 1: get base value  of the triangle
 *  step 2: added an Id in the base field
 *  step 3: use getElementById to the input field
 *  step 4: get the value from the input field. (value is string now)
 *  step 5: convert the value to a number. use parseFloat
 */

function calculateTriangleArea(){
    // base value  of the triangle 
   const triangleBaseInput = document.getElementById('triangle-base');
   const triangleBaseText = triangleBaseInput.value;
   const base = parseFloat(triangleBaseText);
   console.log(base);
// height value  of the triangle 
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);
// Calculate Triangle Area    
    const area = 0.5 * base * height ;
    console.log("Area of the triangle is:",area);
// Display triangle area
 const triangleAreaSpan = document.getElementById('triangle-area');
 triangleAreaSpan.innerText = area;  


}
