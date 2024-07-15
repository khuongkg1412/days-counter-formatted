const startDate = '2011-12-13';
const startDateObj = new Date(startDate);
const currentDate = new Date();

function calculateDetailedDifference(start, end) {
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    const adjustedStartDate = new Date(start);
    adjustedStartDate.setFullYear(start.getFullYear() + years);
    adjustedStartDate.setMonth(start.getMonth() + months);
    let remainingDays = Math.floor((end - adjustedStartDate) / (1000 * 60 * 60 * 24));

    const weeks = Math.floor(remainingDays / 7);
    remainingDays = remainingDays % 7;

    return {
        years: years,
        months: months,
        weeks: weeks,
        days: remainingDays
    };
}

const outputElement = document.getElementById('days');
const IsFA = true; // Change this to false if you're in a relationship

if (IsFA) {
    outputElement.textContent = "No lover, no love days, my friend!";
} else {
    const detailedDifference = calculateDetailedDifference(startDateObj, currentDate);
    const { years, months, weeks, days } = detailedDifference;

    outputElement.textContent =
        `${years} year${years !== 1 ? 's' : ''}, ` +
        `${months} month${months !== 1 ? 's' : ''}, ` +
        `${weeks} week${weeks !== 1 ? 's' : ''}, ` +
        `${days} day${days !== 1 ? 's' : ''}`;
}
