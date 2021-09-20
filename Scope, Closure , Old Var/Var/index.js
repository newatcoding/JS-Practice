// <-------------------------------------------------------6.5------------------------------------------------->
//old var
//var has no blocked scope
{
    var x=14;
    var x="lala";       //var allows redeclaration
    console.log(x);
}
console.log(x);    //NO reference error

//var can be declared below their use