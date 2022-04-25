import Cookies from "js-cookie";

function RequestCreator(Method, url, values, routes, urlRedi) {
  const req = new XMLHttpRequest();
  req.open(Method, url, true);
  req.onload = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        let data = req.response;
        console.log(data);

        Cookies.set("token", data);
        routes.push(urlRedi);
      }
    }
  };
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.setRequestHeader("Accept", "application/json");
  req.setRequestHeader("Access-Control-Allow-Origin", "*");
  req.send(values);
}


function GetRequests(data) {
  const cookie = Cookies.get('token');
  const req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:8000/api/user", true);
  req.onload = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        data = JSON.parse(req.response);
        // console.log(data);
        
      }
    }
  };
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.setRequestHeader("Accept", "application/json");
  req.setRequestHeader("Access-Control-Allow-Origin", "*");
  req.setRequestHeader("Authorization", `Bearer ${cookie}`);
  req.send();
}

export { RequestCreator, GetRequests };
