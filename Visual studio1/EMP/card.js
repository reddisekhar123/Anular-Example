var xhr=new XMLHttpRequest();

xhr.onreadystatechange=function (){

    if(this.readyState==4 && this.status==200)

    {

        var ob=JSON.parse(xhr.response);

         

        for(var i=0;i<10;i++)

        { 

            document.getElementsByClassName("sp11")[i].innerHTML=ob[i].name;

            document.getElementsByClassName("sp12")[i].innerHTML=ob[i].empid;

            document.getElementsByClassName("sp13")[i].defaultValue=ob[i].skills;

            document.getElementsByClassName("sp14")[i].innerHTML=ob[i].project;

            document.getElementsByClassName("sp15")[i].innerHTML=ob[i].HCM;

            document.getElementsByClassName("gender")[i].innerHTML=ob[i].Gender;

        }

 

        var sk;

        var option;

        var page;

         

        

        

        sk=document.querySelectorAll(".sp13");

        option=document.querySelectorAll(".sp16");

        sk.forEach((element,index)=>{

           element.onfocus= ()=> editing(page=index)

        })

        option.forEach((element,index)=>{

            element.onclick = ()=> editing(page=index)

        })

 

        function editing(page){

         sk[page].classList.remove('sp13');

         option[page].innerText='Save';

         

         option[page].onclick = ()=>{

        option[page].innerText='Edit';

        sk[page].classList.add('sp13');

         }

        }

    }

}

xhr.open("GET","new.json",true);

xhr.send();