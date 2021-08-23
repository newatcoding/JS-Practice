/*----------------------------------------------------- 2.13 ----------------------------------------------------------------------*/
// for(let i=0;i<10;i++){  //inline variable
//     console.log(i);
// }

//lables 
outer: for(let i=0;i<10;i++){
    console.log(i);
    if(i>=5) break outer;
}
// labels doest know allow jumps

/*----------------------------------------------------- 2.14 ----------------------------------------------------------------------*/
//switches
//without 'break' all cases after the chosen one with condition will print 
let x=3;
switch(x){
    case 1:{
        console.log("1");
        break;
    }case 2:{
        console.log("2");
        break;
    }default:{
        console.log("not 1 or 2");
        break;
    }
}