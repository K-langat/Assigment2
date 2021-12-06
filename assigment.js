function getname(){
var date = document.getElementbyid("date");
var gender = document.getElementbyid("gender");

var date = newdate.document.getElementbyid("date").value;
var weekdate = date.getDay();
var weekday = ["sunday","monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"];
var day =weekday[weekdate];
var malename = ["Kwasi"," Kwandwo","Kwaabena"," Kwaku","Yaw","Kofi","Kwame"];
var namefemale = ["Akosua"," Adwoa","Abena", "Akua","Yaa","Afua","Ama"];
var check = false

var resultName = newdate.document.getElementbyid("submit")

if (document.getElementbyid("date").value ==""){
    wrongdate.innerHTML = "Please enter a correct date";
    return check;
    }

    if (gender.value == "male"){
        result.innerHTML = " Your where born in" +day + " " + "Your name is " + malename[weekdate];
    
    }

        else{
            return check;
        }
    
    if (gender.value == "female"){
        resultName.innerHTML = " Your where born in" +day + " " + "Your name is " + namefemale[weekdate];
    }
    else{
        return false;

