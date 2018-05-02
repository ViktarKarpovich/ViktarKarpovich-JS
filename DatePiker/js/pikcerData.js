function DatePicker(data) {

    let selectedMonthNumber = data.date.getMonth();
    let selectedYear = data.date.getFullYear();

    this.create = function () {
        this.getCurrentMonth();
    }

    this.getNextMonth = function () {
        selectedMonthNumber++;
        if (selectedMonthNumber > 11) {
            selectedMonthNumber = 0;
            selectedYear++;
        }
        return selectedMonthNumber;
    }

    this.getpreviouslyMonth = function () {
        selectedMonthNumber--;
        if (selectedMonthNumber < 0) {
            selectedMonthNumber = 11;
            selectedYear--;
        }
        return selectedMonthNumber;
    }

    this.getCurrentMonth = function () {
        let monthWeeks = generateMonthWeeks(new Date().getMonth(), new Date().getFullYear());
        render(monthWeeks);
    }

    this.getSelectedMonth = function () {
        return selectedMonthNumber;
    }

    this.getSelectedYear = function () {
        return selectedYear;
    }

    this.getMonthArray = function () {
        return MONTH;
    }

    this.getDaysArray = function () {
        return DAY;
    }

    this.getDaysInMonth = function (month, year) {
        return new Date(year, month + 1, 0).getDate();
    };

    this.getFirstDayInMonth = function (month, year) {
        return new Date(year, month, 1).getDay();
    };

    this.getWeeksInMonth = function (month, year) {
        let firstDay = this.getFirstDayInMonth(month, year);
        return Math.ceil((this.getDaysInMonth(month, year) + firstDay) / 7);
    }

    this.getMonthDayNumbersArray = function (daysInMonth) {
        let daysNumber = [];
        for (let dayNumber = 1; dayNumber < daysInMonth + 1; dayNumber++) {
            daysNumber.push(dayNumber);
        }
        return daysNumber[Symbol.iterator]();
    }

    this.getCurrentDay = function () {
        
        return this.getCurrentMonth.getFullYear()
    }
}