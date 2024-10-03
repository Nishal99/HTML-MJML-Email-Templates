var country_code = Country;
var rate_code = Rate_Code;
country_code = country_code.replace(/\s/g, '');

var package_code = String(Package_Codes);
package_code = package_code.replace(/[\[\]]/g, '');
var result;

if (rate_code.indexOf("PROSEC")>=0) {
if (package_code.indexOf("Frühstück")>=0) {
  if (country_code === "AT" || country_code === "DE") {
    result = "Abendessen inklusive";
  } else {
    result = "Dinner included";
  }
} else {
  result = "";
}
} else  {
    if (package_code.indexOf("Frühstück")>=0) {
      if (country_code === "AT" || country_code === "DE") {
        result = "3-Gang-Abendessen pro Person und Aufenthalt";
      } else {
        result = "3-course dinner per person per stay";
      }
    } else {
      result = "";
    }

}