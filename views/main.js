
            
        function func()
            {   var xhr = new XMLHttpRequest();
                xhr.open('GET','http://localhost:3000/',true)
                console.log('clicked')
                xhr.onload = function()
                {
                    if(this.status==200)
                    {
                        document.getElementById("message").innerHTML= this.responseText
                    }
   
                }; 
                xhr.onreadystatechange = function()
                {
                    if(this.readyState==4)
                    {
                        console.log('changed')
                    }
       
                }
                xhr.send()
            }

        function loadhome() 
        {   
            var xhr = new XMLHttpRequest();
            xhr.open('POST','http://localhost:3000/addstudent',true)
            xhr.send();
        }

        function getresult()
        {
            var xhr = new XMLHttpRequest();
            xhr.open('POST','http://localhost:3000/',true)
            xhr.onload = function(){
               console.log(this.responseText)
            }
            xhr.send();
        }