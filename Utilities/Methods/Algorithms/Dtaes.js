module.exports.DatearrayParser=(standardDate)=>{   
    const date = new Date(Date.parse(standardDate));
    
    let datearr = [date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds()];
    
    return datearr;
}