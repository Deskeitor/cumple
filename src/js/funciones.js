let elements = document.getElementsByClassName("menu-item");

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", active_class, false);
}

function active_class(e) {
  [].forEach.call(elements, function (el) {
    el.classList.remove("active");
  });
  let item = e.currentTarget;
  item.classList.add("active");
}

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "01/18/",
    birthday = dayMonth + yyyy ;

  today = mm + "/" + dd + "/" + yyyy ;
  if (today > birthday) {
    birthday = dayMonth + nextYear + " 14:00:00";
  }
  console.log(birthday);
  
  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      if (distance < 0) {
        clearInterval(x);
      }
    }, 0);
})();
