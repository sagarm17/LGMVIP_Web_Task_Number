var Stud_Name = document.getElementById("stud_name");
var Stud_Male = document.getElementById("stud_male");
var Stud_Female = document.getElementById("stud_female");
var Stud_Other = document.getElementById("stud_other");
var checkHTML = document.getElementById("HTML");
var checkCSS = document.getElementById("CSS");
var checkJS = document.getElementById("JS");
var Stud_Address = document.getElementById("stud_address")
var Stud_Phone = document.getElementById("stud_phone");
var Stud_Email = document.getElementById("stud_email");
var Stud_Passw = document.getElementById("stud_passw")
var buttonSubmit = document.getElementById("btnSubmit");
var buttonReset = document.getElementById("btnReset");
var containOut = document.getElementById("stud_form_data");

buttonReset.addEventListener("click", function () {
  Stud_Name.value = "";
  Stud_Male.checked = false;
  Stud_Female.checked = false;
  Stud_Other.checked = false;
  checkHTML.checked = false;
  checkCSS.checked = false;
  checkJS.checked = false;
  Stud_Address = "";
  Stud_Phone = "";
  Stud_Email.value = "";
  Stud_Passw = ""
  checkJS.checked = false;
});

buttonSubmit.addEventListener("click", function () {
  const title1 = document.createElement("h3");
  const val_title1 = document.createTextNode("Name : " + Stud_Name.value);
  title1.appendChild(val_title1);
  containOut.append(title1);
  title1.setAttribute("class", "output_input_name_title");

  if (Stud_Male.checked == true) {
    const title2 = document.createElement("h3");
    const val_title2 = document.createTextNode("Gender : Male");
    title2.appendChild(val_title2);
    containOut.append(title2);    
    title2.setAttribute("class", "output_input_name_title");
  }
  if (Stud_Female.checked == true) {
    const title2 = document.createElement("h3");
    const val_title2 = document.createTextNode("Gender : Female");
    title2.appendChild(val_title2);
    containOut.append(title2);
    title2.setAttribute("class", "output_input_name_title");
  }
  if (Stud_Other.checked == true) {
    const title2 = document.createElement("h3");
    const val_title2 = document.createTextNode("Gender : Other");
    title2.appendChild(val_title2);
    containOut.append(title2);    
    title2.setAttribute("class", "output_input_name_title");
  }

  const title3 = document.createElement("h3");
  const val_title3 = document.createTextNode("Skills : ");
  title3.appendChild(val_title3);
  containOut.append(title3);
  title3.setAttribute("class", "output_input_name_title");
  if (checkHTML.checked == true) {
    const cont1 = document.createElement("p");
    const contVal1 = document.createTextNode("HTML ");
    cont1.appendChild(contVal1);
    containOut.append(cont1);
  }
  if (checkCSS.checked == true) {
    const cont2 = document.createElement("p");
    const contVal2 = document.createTextNode("CSS ");
    cont2.appendChild(contVal2);
    containOut.appendChild(cont2);
  }
  if (checkJS.checked == true) {
    const cont3 = document.createElement("p");
    const contVal3 = document.createTextNode("JavaScript");
    cont3.appendChild(contVal3);
    containOut.appendChild(cont3);
  }

  const title4 = document.createElement("h3");
  const val_title4 = document.createTextNode("Address : " + Stud_Address.value);
  title4.appendChild(val_title4);
  containOut.append(title4);
  title4.setAttribute("class", "output_input_name_title");

  const title5 = document.createElement("h3");
  const val_title5 = document.createTextNode("Phone : " + Stud_Phone.value);
  title5.appendChild(val_title5);
  containOut.append(title5);
  title5.setAttribute("class", "output_input_name_title");

  const title6 = document.createElement("h3");
  const val_title6 = document.createTextNode("Email : " + Stud_Email.value);
  title6.appendChild(val_title6);
  containOut.append(title6);
  title6.setAttribute("class", "output_input_name_title");

  const title7 = document.createElement("h3");
  const val_title7 = document.createTextNode("Password : " + Stud_Passw.value);
  title7.appendChild(val_title7);
  containOut.append(title7);
  title7.setAttribute("class", "output_input_name_title");  

  const line_break = document.createElement("hr");
  containOut.append(line_break);
});