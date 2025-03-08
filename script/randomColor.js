function randomColor(){
    const digits = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    let color = '#';
    for (let x = 1; x <= 6; x++){
        let index = Math.floor(Math.random() * 16);
        let value = digits[index];
        color += value;
    }
    return color;
}