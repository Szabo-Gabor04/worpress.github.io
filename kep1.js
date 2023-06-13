// JavaScript source code
kepektomb = ["kep1.jpg", "kep2.jpg", "kep3.jpg", "kep4.jpg"]; 
var i = 0;                                                                            
document.getElementById("kepide").src =kepektomb[3];                                     

function bal()
{
   
    console.log("megnyomtad a balra gombot");                                            
    if (i >= kepektomb.length-1)                                                         
    {
        i = 0;                                                                           
        document.getElementById("kepide").src = kepektomb[i];                                                      
        i++;                                                                            
    }
    else {
        document.getElementById("kepide").src = kepektomb[i+1];                         
        i++;                                                                            
    }
}
function jobb()                                                                       
{
    console.log("most meg a jobbra gombot");                                            
    if (i <1)                                                                        
    {
        i = kepektomb.length - 1;                                                      
        document.getElementById("kepide").src = kepektomb[i];                           
    }
    else
    {
        
        document.getElementById("kepide").src = kepektomb[i-1];                         
        i--;                                                                            
    }
}