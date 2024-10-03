var country_code = Country;
country_code = country_code.replace(/\s/g, '');

var package_code = String(Package_Codes);
package_code = package_code.replace(/[\[\]]/g, '');
var result;

if (package_code.indexOf("Frühstück")>=0) {
  if (country_code === "AT" || country_code === "DE") {
    result = "Frühstück inklusive";
  } else {
    result = "Breakfast included";
  }
} else {
  result = "";
}