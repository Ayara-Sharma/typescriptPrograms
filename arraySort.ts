let arr:number[] = [25,24,5,2,40,2,8,9,1,0];
let swap;

for(let i=0; i<arr.length; i++){
    for(let j=i; j<=arr.length; j++){
        if(arr[i]>arr[j]){
            swap = arr[i];
            arr[i]=arr[j];
            arr[j]= swap;
        }
    }  
}
console.log(arr);
