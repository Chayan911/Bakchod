// 9)	Write a Javascript program to calculate the days left for New Years EVE 2023.


function no_of_days()
{
    today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    if (today.getMonth() == 0 && today.getDate() > 2) 
    {
        newYear.setFullYear(newYear.getFullYear() + 1);
    }
    var one_day = 1000 * 60 * 60 * 24;
    console.log(Math.ceil((newYear.getTime() - today.getTime()) / (one_day)) +
        " days left until New Year 2023!");
}
no_of_days();