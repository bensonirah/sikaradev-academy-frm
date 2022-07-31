const range = (start, end) => {
  const res = [];
  for (let i = start; i <= end; i++) {
    res.push(null);
  }
  return res;
};
const lastDateOf = (currentDate) => {
  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
};

const firstDayOfMonth = (currentDate) => {
  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
};

const selectMonth = (date) => {
  return date.numeric == new Date().getMonth() + 1 ? 'class="selected"' : "";
};

const selectDay = (date) => {
  return date == new Date().getDate() ? 'class="selected"' : "";
};

const renderMonthUI = (months = []) => {
  return months
    .map((date) => {
      let className = selectMonth(date);
      return `<li><a href="#" title="${date.title}" data-value="${date.numeric}" ${className}>${date.title}</a></li>`;
    })
    .join("\n");
};
const renderWeekdayUI = (weekdays = []) => {
  return weekdays
    .map((weekday) => {
      return `<li><a href="#" title="${weekday.title}" data-value="${weekday.numeric}">${weekday.title}</a></li>`;
    })
    .join("\n");
};

const renderDaysUi = (currentDate) => {
  let uiElement = [];

  const firstDateOfMonth = firstDayOfMonth(currentDate);
  const lastDateOfMonth = lastDateOf(currentDate);
  let result = range(1, 35);
  let i = 1;

  uiElement = result.map((value, index) => {
    if (index + 1 >= firstDateOfMonth && i <= lastDateOfMonth) {
      return i++;
    }
    return value;
  });
  uiElement = uiElement.map((value, index) => {
    return value != null
      ? `<li><a href="#" title="${value}" data-value="${value}" ${selectDay(
          value
        )}>${value}</a></li>`
      : '<li><a href="#" data-value="0"></a></li>';
  });
  return uiElement.join("\n");
};

document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date();
  // Create a list of month
  const months = [
    { title: "Jan", numeric: 1 },
    { title: "Fev", numeric: 2 },
    { title: "Mar", numeric: 3 },
    { title: "Avr", numeric: 4 },
    { title: "Mai", numeric: 5 },
    { title: "Jui", numeric: 6 },
    { title: "Jul", numeric: 7 },
    { title: "Aou", numeric: 8 },
    { title: "Sep", numeric: 9 },
    { title: "Oct", numeric: 10 },
    { title: "Nov", numeric: 11 },
    { title: "Dec", numeric: 12 },
  ];

  // Create list of day of week

  const weekdays = [
    { title: "Lun", numeric: 1 },
    { title: "Mar", numeric: 2 },
    { title: "Mer", numeric: 3 },
    { title: "Jeu", numeric: 4 },
    { title: "Ven", numeric: 5 },
    { title: "Sam", numeric: 6 },
    { title: "Dim", numeric: 7 },
  ];
  // Render months here
  document.querySelector(".months").innerHTML = renderMonthUI(months);
  // Render weekdays here
  document.querySelector(".weekday").innerHTML = renderWeekdayUI(weekdays);
  // Render days uui
  document.querySelector(".days").innerHTML = renderDaysUi(currentDate);
  // Render date
  const [day, date, month, year] = currentDate
    .toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .split(" ");
  // Render year
  document.querySelector(".year").innerHTML = year;
  document.querySelector(
    ".date"
  ).innerHTML = `${day} ${date}  <span>${month}</span>`;
});
