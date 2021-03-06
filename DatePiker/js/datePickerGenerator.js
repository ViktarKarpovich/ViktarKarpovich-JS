function DatePickerGenerator() {

    let dpStyles = {};
    let dpContainer = null;
    let selectDayNum = 0;
    let selectedMonthNumber = 0;
    let selectedYear = 0
    let months = 0;
    let days = 0;
    let datepicker = {};

    this.setdpStyles = function (styles) {
        dpStyles = styles;
    }

    this.generate = function (datepickerService) {
        datepicker = datepickerService;

        selectedYear = datepicker.getSelectedYear();
        months = datepicker.getMonthArray();
        days = datepicker.getDaysArray();
        selectedMonthNumber = datepicker.getSelectedMonth();

        dpContainer = document.createElement("div");
        dpContainer.className = dpStyles.datepicker.container;
        dpContainer.appendChild(generateTitleContainer());
        dpContainer.appendChild(createNameOfWeeks());
        dpContainer.appendChild(createWeeksContainer(selectedMonthNumber, selectedYear));

        return dpContainer;
    }

    function createNameOfWeeks() {
        let nameOfdays = document.createElement("div");
        nameOfdays.className = dpStyles.nameOfdays.container;

        for (let day of days) {
            let dayName = document.createElement("div");
            dayName.className = dpStyles.nameOfdays.day;
            dayName.innerText = day;
            nameOfdays.appendChild(dayName);
        }
        return nameOfdays;
    }

    function generateTitleContainer() {
        let titleContainer = null;
        titleContainer = document.createElement("div");
        titleContainer.className = dpStyles.titleContainer.container;

        let previouslyButton = document.createElement("span");  
        previouslyButton.innerText = "◄";
        previouslyButton.className = dpStyles.titleContainer.previouslyButton;
        titleContainer.appendChild(previouslyButton);
        previouslyButton.addEventListener("click", function () {
            selectedMonthNumber = datepicker.getpreviouslyMonth();
            selectedYear = datepicker.getSelectedYear();
            let weeksContainer = createWeeksContainer(selectedMonthNumber, selectedYear);
            changeWeeksContainer(weeksContainer);
        });

        let title = document.createElement("div");
        title.innerText = months[selectDayNum] + ", " + selectedYear;
        title.className = dpStyles.titleContainer.title;
        titleContainer.appendChild(title);

        let nextButton = document.createElement("span");
        nextButton.innerText = "►";
        nextButton.className = dpStyles.titleContainer.nextButton;
        titleContainer.appendChild(nextButton);
        nextButton.addEventListener("click", function () {
            selectedMonthNumber = datepicker.getNextMonth();
            selectedYear = datepicker.getSelectedYear();
            let weeksContainer = createWeeksContainer(selectedMonthNumber, selectedYear);
            changeWeeksContainer(weeksContainer);
        });
        return titleContainer;
    }

    function changeWeeksContainer(weeksContainer) {
        if (isWeeksContainerExist()) {
            document.querySelector("." + dpStyles.weeksContainer.container).remove();
            dpContainer.appendChild(weeksContainer);
        } else {
            dpContainer.appendChild(weeksContainer);
        }
    }

    function isWeeksContainerExist() {
        return document.querySelector("." + dpStyles.weeksContainer.container) != null ? true : false;
    }

    function createWeeksContainer(monthNumber, year) {
        let daysInMonth = datepicker.getDaysInMonth(monthNumber, year);
        let firstDayInMonth = datepicker.getFirstDayInMonth(monthNumber, year);
        let firstDayInWeek = firstDayInMonth;
        let weeksInMonth = datepicker.getWeeksInMonth(monthNumber, year);

        let datepickerWeeks = document.createElement("div");
        datepickerWeeks.className = dpStyles.weeksContainer.container;
        dpContainer.querySelector("." + dpStyles.titleContainer.title).innerText = months[monthNumber] + " " + year;

        let daysNumber = datepicker.getMonthDayNumbersArray(daysInMonth);
        for (let weekNumber = 0; weekNumber < weeksInMonth; weekNumber++) {
            addWeek(datepickerWeeks, weekNumber, daysNumber, firstDayInWeek);
            firstDayInWeek = 0;
        }
        return datepickerWeeks;
    }

    function addWeek(datepickerWeeks, weekNumber, daysNumber, firstDayInWeek) {
        let week = document.createElement("div");
        week.className = "" + dpStyles.weeksContainer.week;
        for (let dayNumber = 0; dayNumber < days.length; dayNumber++) {
            let day = document.createElement("div");
            day.className = dpStyles.weeksContainer.day;
            if (dayNumber >= firstDayInWeek) {
                day.textContent = daysNumber.next().value || "";
            }
            if(day.textContent ==""){
                day.style.visibility ="hidden";
            }
            week.appendChild(day);
        }
        datepickerWeeks.appendChild(week);

        
    }
}

