var x=238;
let rem=0;
let rev=0;
while(x>0)
    {
        rem=x%10;
        rev=rev*10+rem;
        x=parseInt(x/10);
    }
    console.log(rev);