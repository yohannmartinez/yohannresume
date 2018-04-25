function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}

document.getElementById("textsp").innerHTML = "Yohann Martinez, " + getAge('11/07/1999') + "ans" +"<br>Nogent-le-rotrou, 28400<br>0630587266 <br>yohannmartinez34@gmail.com";
