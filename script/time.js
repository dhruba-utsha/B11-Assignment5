function getTime(){
    const today = new Date();

    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();

    const time = `${hour}:${minute}:${second}`
    
    return time;
}