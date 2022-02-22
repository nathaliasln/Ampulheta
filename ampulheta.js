function showAmpulhetas (n) {

let contador = 0;
let ampulheta = ''

for (let i =0; i <= n; i++) {

    contador ++
    if (i == 0) {
        ampulheta +=`${"#".repeat (n-i)}\n`
    }else if (i == 1){
        ampulheta +=`#${"#" +" ".repeat(n-4)}##\n`
    }else if (i ==2){
        ampulheta +=`# ${"#" +" ".repeat(n-4-i)}# #\n`
    }else if (contador%2==0 && contador < n-3) {
        ampulheta +=`#${" ".repeat((contador/2)) + "#" + " ".repeat(n-4-contador)+"#"+ " ".repeat((contador/2))}#\n`
    }
    
}

for (let i= n; i>=0; i--){
    contador--
    if (i == 0){
        ampulheta +=`${"#".repeat(n-i)}\n`
    }else if(i == 1){
        ampulheta +=`${"#".repeat(n)}\n`
    }else if(i ==2){
        ampulheta +=`# ${" ".repeat((i/2)-1) + "#".repeat(n-i-2)} #\n`
    }else if(i%2==0 && i < n-3){
        ampulheta +=`#${" ".repeat((contador/2)) + "#".repeat((n-contador-2))+ " ".repeat((contador/2))}#\n`
    }
}
return(ampulheta)
    
}

console.log(showAmpulhetas(20))



   
