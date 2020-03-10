function reverse(x)
        { var rem=0;
          var rev=0;

            while(x>0)
                {
                    rem=x%10;
                    rev=rem+rev*10;
                    x=parseInt(x/10);
                }
                console.log(rev)
        };
reverse(152356);