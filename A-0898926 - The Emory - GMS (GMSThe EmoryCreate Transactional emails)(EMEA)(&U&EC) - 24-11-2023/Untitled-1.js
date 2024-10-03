var arrDate = new Date(arrival_date_rs) /* Arrival date from reservation */,
  arrivalDay = arrDate.getDay() /* Arrival day */,
  arrivalDate = arrDate.getDate().toString() /* Arrival date */,
  arrivalMonth = (arrDate.getMonth() + 1).toString() /* Arrival month */,
  arrivalYear = arrDate.getFullYear().toString() /* Arrival year */,
  checkDate = 
    arrivalMonth + "/" + arrivalDate + "/" + arrivalYear; 
var rate_code = rate_code_rs;
var country_code = Country;

if (country_code == "DE" || country_code == "AT") {
  if (rate_code == "ADP" || rate_code == "PROAPL") {
    if ((checkDate == "12/1/2023") || (checkDate == "12/2/2023") || (checkDate == "12/8/2023") ||(checkDate == "12/9/2023") || (checkDate == "12/15/2023") || (checkDate == "12/16/2023") || (checkDate == "12/22/2023") || (checkDate == "12/23/2023")) {
      result = "Reservierungen können bis 7 Tage vor Anreise kostenfrei storniert werden, andernfalls wird der Gesamtaufenthalt in Rechnung gestellt.";
    } else if ((checkDate == "12/30/2023") || (checkDate == "12/31/2023") || (checkDate == "12/30/2024") || (checkDate == "12/31/2024") || (checkDate == "12/30/2025") || (checkDate == "12/31/2025")) {
      result = "Reservierungen können bis 14 Tage vor Anreise kostenfrei storniert werden, andernfalls wird der Gesamtaufenthalt in Rechnung gestellt.";
    } else  {
      result = "Reservierungen können nicht storniert oder geändert werden. Zum Zeitpunkt der Buchung wird der volle Betrag in Rechnung gestellt.";
    }
  }else  if (arrivalDay === 0 || arrivalDay === 6) {
    result = "Reservierungen können bis 48 Stunden vor Anreise kostenfrei storniert werden, andernfalls wird der Gesamtaufenthalt in Rechnung gestellt.";
  } else {
    result = "Reservierungen können bis 24 Stunden vor Anreisetag kostenfrei storniert werden, andernfalls wird der Gesamtaufenthalt in Rechnung gestellt.";
  }
 } else if (country_code !== "DE" || country_code !== "AT") {
    if (rate_code == "ADP" || rate_code == "PROAPL") {
      if ((checkDate == "12/1/2023") || (checkDate == "12/2/2023") || (checkDate == "12/8/2023") || (checkDate == "12/9/2023") || (checkDate == "12/15/2023") || (checkDate == "12/16/2023") || (checkDate == "12/22/2023") || (checkDate == "12/23/2023")) {
        result = "Reservations must be cancelled 7 days prior to arrival to avoid a penalty fee of the entire stay and tax.";
      } else if (
          (checkDate == "12/30/2023") || (checkDate == "12/31/2023") || (checkDate == "12/30/2024") || (checkDate == "12/31/2024") || (checkDate == "12/30/2025") || (checkDate == "12/31/2025")
      ) {
        result = "Reservations must be cancelled 14 days prior to arrival to avoid a penalty fee of the entire stay and tax.";
      } else  {
        result = "Reservations cannot be cancelled or modified. At the time of booking the full amount will be charged.";
      }
    } else if (arrivalDay === 0 || arrivalDay === 6) {
      result = "Reservations must be cancelled 48 hours prior to arrival to avoid a penalty fee of the entire stay and tax.";
    } else {
      result = " Reservations must be cancelled until 24 hours before arrival day to avoid a penalty of the entire stay and tax. (except rate details do not mention an exception)";
    }
  }



