var arrDate = new Date(Arrival_Date) /* Arrival date from reservation */,
  arrivalDay = arrDate.getDay() /* Arrival day */,
  arrivalDate = arrDate.getDate().toString() /* Arrival date */,
  arrivalMonth = (arrDate.getMonth() + 1).toString() /* Arrival month */,
  arrivalYear = arrDate.getFullYear().toString() /* Arrival year */,
  checkDate = 
    arrivalMonth + "/" + arrivalDate + "/" + arrivalYear; 

    var maxDateE = new Date('1/1/2024');

    if (arrDate < maxDateE){
        result = '<a href="mailto:reservations-knightsbridge@surrenne.com" style="display:inline-block;;background:#180EC2;color:#ffffff;font-family:Schibsted Grotesk, sans-serif;font-size:10px;font-weight:normal;margin:0;text-decoration:none;text-transform:none;mso-padding-alt:0px;border-radius:0;" target="_blank">ENQUIRE</a>';
   } else {
        result = '<a class="undefined" href="https://www.the-emory.co.uk/" style="display:inline-block;;background:#180EC2;color:#ffffff;font-family:Schibsted Grotesk, sans-serif;font-size:10px;font-weight:normal;margin:0;text-decoration:none;text-transform:none;mso-padding-alt:0px;border-radius:0;" target="_blank">Book</a>'
   }
