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