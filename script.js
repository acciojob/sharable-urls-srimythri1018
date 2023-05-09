// your code here
function updateUrl()()
			{
				var name=getElementById("name").value;
				var year=getElementById("year").value;
				var queryString = "?";
                 queryString += "name=" + encodeURIComponent(name);
                 queryString += "&year=" + encodeURIComponent(year);
				 document.getElementById("url").textContent = "https://localhost:8080/" + queryString;
			}