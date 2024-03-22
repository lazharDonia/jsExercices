////////////////exercice1/////////////////////////
/*let arr=[true, false , true ,true ,false , true ,false ,false ,true];
let sum=0;
let i=0;
function count(arr)
{
while (i<arr.length)
{
    if (arr[i]!=false){
      sum=sum+1;

    }
    i++;
    
}
return sum;
}
console.log(count(arr));*/
/////////////////////exercice3///////////////////
 /*
*/
///////////////////////////////Exercice4///////////////////

/*let arr=[[1, 2], [3, 4]]
function flatten(arr) {
   let  arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      arr2.concat(arr[i]);
    }
    return arr2;
  }
  console.log(flatten(arr))*/

  ////////////////////////Exercice5//////////////////

  /*let arr=[25, 143, 89, 13, 105];
  let max1=arr[0]
  let max2=[]
  let i=1;
  function secondLargest(arr)
  {

   while( i<= arr.length)
   {

    if (max1<arr[i]){
        max2=max1
        max1=arr[i]
    }else if(max2<arr[i])
    {
     max2=arr[i]
    }
    i++
   }

   

return max2
}
console.log(secondLargest(arr))*/

///////////////////Exercice6///////////

/*let arr=[1,2,3,4,5,6]
let i=1;
let special=false
function specialArray(arr)
{
 while (i<=arr.length)
 { 
    if ((i%2==0 && arr[i-1]%2==0 )||(i%2!=0 && arr[i-1]%2!=0))
    {
      i++
      special=true;
    }
    
    
 }
 return special;
}
console.log(specialArray(arr))*/

/////////////////////Exercice7/////////////////
/*let arr = [1,2,3]
let i=0;
let sum=0
function numbersSum(arr){
 while(i<=arr.length-1)
 {
   if (typeof(arr[i])==="number"){
    sum=sum+arr[i];
    
   }
   i++
} 
return sum;
}
console.log(numbersSum(arr));*/

///////////////Exercice8/////////
/*let arr=["rsq", "6hi", "g", "rsq6hig"]
let resultat = false;
let n=arr.length
let str=[]

function matchLastItem(arr)
{
for (let i=0;i<n-1;i++)
{
 str=str+(arr[i]).toString();
}
if(str==(arr[n-1].toString()))
{
 resultat=true;
}
return resultat
}
console.log(matchLastItem(arr))*/

///////////////////////Exercice9///////////
/*let number = 1485979
let str
let arr=[];

function reverseArr(number)
{
   str= number.toString()
   i=str.length-1
   while(i>=0)
   {
      arr=arr+str[i]
      i--;
   }
   return arr
}
console.log(reverseArr(number))*/

////////////////Exercice10//////////
/*let arr=[0,2,4,6];
let arr2=[]
let j=1;

function mirror(arr)
{
    n=arr.length-1
    for(let i=0 ; i<=(n*2);i++){
        if (i<=n)
        {
            arr2=arr2+arr[i]
        }
        else {
            arr2=arr2+arr[n-j]
            j++
        }
    }
    return arr2
}
console.log(mirror(arr))*/

//////////////////////////Exercice11//////////
/*let arr=["mavis", "senaida", "letty"]
let str
let arr2=[]
console.log(arr[1])
function capMe(arr){
for (let i=0 ;i<arr.length ;i++)
{ 
    arr2[i]=arr[i][0].toUpperCase()+arr[i].slice(1,arr[i].length)
}
return arr2
}console.log(capMe(arr))
*/
//////////////Exercice12////////////
/*let arr=[19, 5, 42, 2, 77]
let min1=arr[0]
let min2=arr[1]
let sum=0
function sumTwoSmallestNums(arr)
{
    for (let i=1;i<arr.length;i++)
    {
        if (arr[i]>0)
        {
            if(arr[i]<=min1){
            min2=min1
            min1=arr[i]}
            else if ((arr[i]<=min2)){
                min2=arr[i]}
        }
    }
    let sum =min1+min2
    return sum
}
console.log(sumTwoSmallestNums(arr))*/
////////////////////Exercice13////////////
/*let women =["Ana", "Amy", "Lisa"]
let men = ["Bob", "Josh"]
let arr=[]
function zipIt(men, women)
{
    if (women.length==men.length)
    {
        for (let i=0; i<men.length;i++)
        {
            arr[i]=[women[i],men[i]]
            
        }
        return arr
    }
    else{
        return "sizes don't match"
    }
}
console.log (zipIt(men, women))*/

//////////////Exercice14//////////
/*let arr= [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
let sum=0
function numOfSubbarrays(arr)
{
 for (let i=0;i<arr.length;i++)
 {
     if (typeof(arr[i])==="object")
     {
         sum=sum+1
     }
 }
   return sum 
}
console.log( numOfSubbarrays(arr))*/

//////////////Exercice15////////////
/* let x= 15
const arr = [30, 45, 60]
function factory(x)
{
    for (let i=0;i<arr.length;i++)
    {
        arr[i]=arr[i]/x;

    }
    console.log(arr)
}
const first=factory(x)*/
//////////////Exercice16////////////
/*let str="%fd76$fd(-)6GvKlO."
let str2=""
function removeSpecialCharacters(str)
{
    let i=0;
    while (i<str.length)
    {
     const regex = /[e.g. ., !, @, #, $, %, ^, &, \, *, (, )]/;
     if (str[i].match(regex))
     {
       str2=str2
    }
    else { 
        str2=str2+str[i]
    }
       i++
    }
    return str2
}
console.log(removeSpecialCharacters(str))*/


