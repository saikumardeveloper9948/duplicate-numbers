


let arr="14554"
emp=[],uni="", dup=""
for (i of arr){
 if(!emp.includes(i)){
      emp.push(i)
 }
}
for(i of emp){
    count=0
    for (j of arr){
        if(i==j){
            count++
        }
    }
    if(count==1){
        uni=uni+i+" "
        
    }
    else{
        dup=dup+i+" "
    
    }
}
if(uni.length==2){
    console.log("unique is :" +uni)
}else{
    console.log("unique are :" +uni)
}

if(dup.length==2){
    console.log("duplicate is :" +dup)
}else{
    console.log("duplicates are :" +dup)
}




// problem 2

let arr1="2788"
emp=[]
for (i of arr1){
    
 if(!emp.includes(i)){
      emp.push(i)
 }
}
for(i of emp){
    count=0
    for (j of arr1){
       
        if(i==j){
            count++
        }
    }
    if(count==1){
        console.log(`${i} -> ${count}`)
        
    }
    else{
        console.log(`${i} -> ${count}`)
    
    }
}

