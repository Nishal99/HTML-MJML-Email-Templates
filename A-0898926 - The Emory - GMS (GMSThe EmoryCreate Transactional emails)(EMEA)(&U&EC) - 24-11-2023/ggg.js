var arrDate = new Date(Arrival_Date) /* Arrival date from reservation */,
  arrivalDay = arrDate.getDay() /* Arrival day */,
  arrivalDate = arrDate.getDate().toString() /* Arrival date */,
  arrivalMonth = (arrDate.getMonth() + 1).toString() /* Arrival month */,
  arrivalYear = arrDate.getFullYear().toString() /* Arrival year */,
  checkDate = 
    arrivalMonth + "/" + arrivalDate + "/" + arrivalYear; 

    
          if ((checkDate == "Friday 8th December") || (checkDate == "Saturday 9th December") ) {
            result = '<table width="100%" cellpadding="0" cellspacing="0" style="padding:0px;"><tbody><tr><td style="text-align:center;font-family:Times New Roman,Times,serif;font-size: 16px;color: #333;text-transform: uppercase;padding-bottom:15px;">CHRISTMAS CAROL SINGING 8th & 9th of December</td></tr></tbody></table>'
        '<table width="115px" cellpadding="0" cellspacing="0" style="padding:0px;margin:0 auto;"><tbody><tr><td width="115" style="line-height:1px;font-size:2px;border-bottom:1px solid rgb(204,204,204);border-collapse:collapse;width:115px;"></td></tr></tbody></table>'
         '<table width="100%" cellpadding="0" cellspacing="0" style="padding:0px 25px;margin:0 auto;text-align: center;"><tbody><tr><td style="padding-top:20px;margin:0 auto;"><img src="https://images.tcgms.net/assets/631x2ch28x00/media/images/b9e56e6d-1e1f-4bcf-a7c2-0a716b4a16fb.jpg" alt="christmas carol singing image" width="600" height="auto" style="width:570px;height:auto;padding:0px 0px 20px;margin:0 auto;"></img></td></tr>'
              '<tr><td style="text-align:center;font-family: Arial,Helvetica,sans-serif;font-size: 12px;color: #333;line-height: 20px;padding:0px 45px 20px;text-align: justify;">Join Grenville Jones and his group of Christmas Carol Singers for an afternoon of carol singing and festive songs, mulled wine and of course mince pies!<br><br>Come along with family and friends to spread some festive cheer!<br><br>Located in the Chapel at The Gainsborough Hotel Bath Spa.<br><br>Friday 8th December - 4:45pm <br>Saturday 9th December - 4:45pm<br><br>To reserve your ticket please click the link below:</td></tr></tbody></table>'
              '<table width="149px" cellpadding="0" cellspacing="0" style="padding:0px;margin:0 auto"><tbody><tr style="margin:0 auto;"><td style="padding:0;padding:0;vertical-align:top;text-align:left;font-weight:normal;padding:0;margin:0;text-align:left;line-height:1.3;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#ffffff;text-transform:uppercase;text-align:center;vertical-align:middle;background:#333;width:149px;" height="40" width="149px"><a href="https://www.eventbrite.co.uk/e/christmas-carol-singing-with-grenville-jones-and-the-bath-welcome-chorus-tickets-744402346457?aff=oddtdtcreator" target="_blank" style="text-decoration:none;color:#fff;"><b>Book Now</b></a></td></tr></tbody></table>';
          } 

        else {
          result = " ";
        }
       