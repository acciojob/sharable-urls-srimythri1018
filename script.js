// your code here
function myFunction()
			{
				let name=getElementById("name").value;
				let year=getElementById("year").value;
				var queryString = "?";
                 queryString += "name=" + encodeURIComponent(name);
                 queryString += "&year=" + encodeURIComponent(year);
				 document.getElementById("url").textContent = "https://localhost:8080/" + queryString;
			}