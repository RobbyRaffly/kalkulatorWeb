let inputtadi=""
let inputskrg=""
var operator=['+','-']
//selector
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//eventlistener
keys.forEach(key=>{
        key.addEventListener("click",calculate);
});

function calculate(){
    let buttonText = this.innerText;
    if(buttonText==="AC"){
        output.innerText = "";
        result.innerText = "0";
        result.style.animation = "";
        output.style.animation = "";
        return;
    }

    if(buttonText === "del"){
        output.textContent = output.textContent.substr(0,output.textContent.length-1);
        return;
    }

    if(buttonText === "="){
        try{
            result.innerText = eval(output.innerText);
        }catch(err){
            result.innerText="Error brader";
        }
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";
    }

    else{
        // if(output.textContent[0] ==='0'){
        //     if(buttonText ==='0'){
        //         output.textContent = output.textContent.substr(0,output.textContent.length-1)+buttonText
        //     }else{
        //         output.textContent += buttonText;
        //     }
        // }
        ceknolawal();
        ceknol();
        if(buttonText==='.'){
            if(cektitik()>1){
                output.textContent=output
            }
        }
        if(output.textContent[output.textContent.length-1]==='+'
            ||output.textContent[output.textContent.length-1]==='-'
            ||output.textContent[output.textContent.length-1]==='/'
            ||output.textContent[output.textContent.length-1]==='*'
            ||output.textContent[output.textContent.length-1]==='%'
            ||output.textContent[output.textContent.length-1]==='.'){
            if(buttonText==='+'
                ||buttonText==='-'
                ||buttonText==='/'
                ||buttonText==='*'
                ||buttonText==='%'
                ||buttonText==='.'){
                    output.textContent = output.textContent.substr(0,output.textContent.length-1)+buttonText
            }else{
                output.textContent += buttonText
            }
        }
        else{
            output.textContent += buttonText;
        }
        
        return;
    } 
}

function ceknol(){
    for(let i=0;i<output.textContent.length;i++){
        if(output.textContent[i]==='+'
            ||output.textContent[i]==='-'
            ||output.textContent[i]==='*'
            ||output.textContent[i]==='%'
            ||output.textContent[i]==='/'){
            if(output.textContent[i+1]==='0'){
                if(output.textContent[i+2]==='0'){
                 output.textContent=output.textContent.substring(0,i+1)+output.textContent.substring(i+4, output.textContent.length-1)
                }else if(output.textContent[i+2]==='+'
                ||output.textContent[i+2]==='-'
                ||output.textContent[i+2]==='*'
                ||output.textContent[i+2]==='%'
                ||output.textContent[i+2]==='/'
                ||output.textContent[i+2]==='.'){
                    output.textContent=output.textContent
                }else{
                    output.textContent=output.textContent.substring(0,i+1)+output.textContent.substring(i+3, output.textContent.length-1)
                }
            }
        }
    }
}

function ceknolawal(){
    if(output.textContent[0]==='0'){
        if(output.textContent[1]==='0'){
            output.textContent=output.textContent.substring(0,1)+output.textContent.substring(1, output.textContent.length-1)
           }else if(output.textContent[1]==='+'
           ||output.textContent[1]==='-'
           ||output.textContent[1]==='*'
           ||output.textContent[1]==='%'
           ||output.textContent[1]==='/'
           ||output.textContent[1]==='.'){
               output.textContent=output.textContent
           }else{
               output.textContent=output.textContent.substring(2, output.textContent.length-1)
           }
    }
}

function cektitik(){
    let x;
    for(let i=0;i<output.textContent.length;i++){
        if(output.textContent[i]==='.'){
            x++;
        }
    }
    return x;
}