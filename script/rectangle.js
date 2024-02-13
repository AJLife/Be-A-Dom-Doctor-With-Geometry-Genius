function calculateRectangleArea(){
    // get length of the rectangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);


    // get width of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    // Calculate area of the rectangle  
    const reactArea = width * length ;
    console.log('Area of the Rectangle is: ', reactArea);
    // display rect area 
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = reactArea ;
}