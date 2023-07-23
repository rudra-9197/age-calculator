const age_inp = document.getElementById('dob');
   
const date = new Date();

if(date.getMonth()<10){

    var mnth = "0"+ (date.getMonth()+1);
}

else{

  var mnth=  date.getMonth()+1;
}

let max_date = date.getFullYear()+'-'+mnth+'-'+date.getDate();
console.log(max_date)
age_inp.setAttribute("max",max_date);

function getAge(){
    
   
    const user_db = new Date(age_inp.value);
   return user_db;
    
}

function getCrdate(){
 const date = new Date();
 return  date;
}

function calcAge(){ 


    const current_date = new Date();
    let user_dob = getAge();

let dob_year =user_dob.getFullYear();
let dob_month = user_dob.getMonth();
let dob_day = user_dob.getDate();
    
let crnt_year =current_date.getFullYear();
let crnt_month = current_date.getMonth();
let crnt_day = current_date.getDate();

var year = crnt_year-dob_year;

if(crnt_month>=dob_month)
{

    var month = crnt_month - dob_month;
    
    
}
else{
   year--;
  var  month = 12 +  crnt_month - dob_month;
  
}

if(crnt_day>=dob_day){

    var day = crnt_day-dob_day;
}
else{

    month --
    var day = 31 + crnt_day-dob_day;

    if(month<0){
        month=11;
        year --;

    }
}

let age ={

years: year,
Months : month,
days: day


}
return age

}

function displayAge(age){
    const year = document.getElementById('years');
    const month = document.getElementById('months');
    const days = document.getElementById('days');
    calcAge ();

    if(calcAge ().years==0 && calcAge ().Months ==0 && calcAge ().days==0){

        alert("Congrats!!.. welcome to Earth")
    }

     year.innerText =calcAge ().years
    month.innerText = calcAge ().Months
    days.innerText = calcAge ().days


}

