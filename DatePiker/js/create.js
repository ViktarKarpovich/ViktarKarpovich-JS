(function () {
    let datepicker = new DatePicker({
        date: new Date()
    });
    let body = document.querySelector(".vk-datepicker__body");
    let dpGenerator = new DatePickerGenerator();
    dpGenerator.setdpStyles({
        datepicker: {
            container: "vk-datepicker__calendar"
        },
        titleContainer: {
            container: "vk-datepicker__title-container",
            title: "vk-datepicker__title",
            previouslyButton: "vk-datepicker__button js-datepicker__button-previously",
            nextButton: "vk-datepicker__button js-datepicker__button-next"
        },
        nameOfdays: {
            container: "vk-datepicker__days-name",
            day: "vk-datepicker__days-name-day"
        },
        weeksContainer: {
            container: "vk-datepicker__weeks-container",
            week: "vk-datepicker__weeks-week",
            day: "vk-datepicker__week_day"
        }
    });
    Render.render(body, datepicker, dpGenerator);
})();