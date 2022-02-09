const showTime = () => {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = `${hour}:${min}:${sec}${am_pm}`;
  document.getElementById("clock").innerHTML = currentTime;
};

const showDate = () => {
  let date = new Date();
  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = date.getFullYear();

  let currentDate = `${day} / ${month} / ${year}`;
  document.getElementById("date").innerHTML = currentDate;
};

setInterval(showTime, 1);
setInterval(showDate, 1);
showDate();
showTime();
