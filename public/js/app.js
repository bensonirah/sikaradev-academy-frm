/**
 *  The list of the day in the week
 */
const week = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];

/**
 * The lis of the month in a year
 */
const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decembre",
];

/**
 *
 * @param {Date} currentDate
 * @param {Array} week the list of the week
 * @returns string The day of the week e.g: dimance,lundi, etc
 */
const dayOfWeek = (currentDate, week = []) => week[currentDate.getDay()];

/**
 * Get the date of week, e.g: We are August 7
 * @param {Date} currentDate
 * @returns number
 */
const dateOfWeek = (currentDate) => currentDate.getDate();

/**
 * Get the current month
 * @param {Date} currentDate
 * @param {Array} months
 * @returns string The month returned e.g: Août
 */
const currentMonth = (currentDate, months = []) =>
  months[currentDate.getMonth()];

/**
 *
 * @param {Date} currentDate The current date time
 * @returns number The current year e.g: 2022
 */
const currentYear = (currentDate) => currentDate.getFullYear();

/**
 *
 * @param {number} inputDateOfWeek The date of week e.g 7,5 etc (7 Aug)
 * @param {Date} currentDate  The current date time
 * @returns boolean Check if the current input date of week is selected or not
 */
const selectDateOfWeek = (inputDateOfWeek, currentDate) =>
  inputDateOfWeek == dateOfWeek(currentDate);

/**
 *
 * @param {number} inputMonth The month in number
 * @param {Date} currentDate The current date time
 * @returns boolean  true|false according to the input month
 */
const selectMonthOfYear = (inputMonth, currentDate) =>
  inputMonth == currentDate.getMonth();

// First day of the month e.g Lundi, Mardi
/**
 * Get the first day of the month e.g: Lundi, Mardi
 * @param {Date} currentDate The current date time
 * @returns number The day index
 */
const firstDayOfTheMonth = (currentDate) =>
  new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

/**
 * Get the last date of the month e.g 31
 * @param {Date} currentDate The current date time
 * @returns number
 */
const lastDateOfTheMonth = (currentDate) =>
  new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();


// UI Rendering

const renderUi = (elementSelector, uiElement) => {
  document.querySelector(elementSelector).innerHTML = uiElement;
};

const truncWord = (word, length) => word.slice(0, length);

const MonthComponent = (currentDate, months = []) => {
  let hasClass;
  const uiElement = months.map((month, index) => {
    hasClass = selectMonthOfYear(index, currentDate) ? 'class="selected"' : "";
    month = truncWord(month, 3);
    return `<li><a href="" title="${month}" data-value="${index}" ${hasClass}>${month}</a></li>`;
  });
  return uiElement.join("\n");
};

const DayOfWeekComponent = (week = []) => {
  const uiElement = week.map((w, index) => {
    w = truncWord(w, 3);
    return `<li><a href="#" title="${w}" data-value="${index}">${w}</a></li>`;
  });
  return uiElement.join("\n");
};

const DateComponent = (
  startDayOfMonth,
  endDateOfMonth,
  currentDate = new Date()
) => {
  const dateUiElement = [];
  let dayCount = 1;
  let hasClass = "";
  for (let dateOfTheWeek = 0; dateOfTheWeek < 35; dateOfTheWeek++) {
    if (dateOfTheWeek >= startDayOfMonth && dateOfTheWeek <= endDateOfMonth) {
      hasClass = selectDateOfWeek(dayCount, currentDate)
        ? 'class="selected"'
        : "";
      dateUiElement.push(
        `<li><a href="#" title="${dayCount}" data-value="${dayCount}" ${hasClass}>${dayCount}</a></li>`
      );
      dayCount++;
    } else {
      dateUiElement.push(`<li><a href="#" title="#" data-value="#"></a></li>`);
    }
  }
  return dateUiElement.join("\n");
};

// Run script

document.addEventListener("DOMContentLoaded", () => {
  const currentDate = new Date();
  const startDayOfMonth = firstDayOfTheMonth(currentDate);
  const endDateOfMonth = lastDateOfTheMonth(currentDate);
  // Render year
  renderUi(".year", "2022");
  // Render month
  renderUi(".months", MonthComponent(currentDate, months));
  // Render week day
  renderUi(".weekday", DayOfWeekComponent(week));
  // Render dates
  renderUi(
    ".days",
    DateComponent(startDayOfMonth, endDateOfMonth, currentDate)
  );
  // Render date
  const dateTemplate = `${dayOfWeek(currentDate, week)} ${dateOfWeek(
    currentDate
  )} <span>${currentMonth(currentDate, months)}</span>`;
  renderUi(".date", dateTemplate);
});
