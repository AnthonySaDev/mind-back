import moment from "moment-timezone";


interface IRes {
    endMonth: string;
    startMonth: string;
    nowDate: string;
}

export function start_and_end_of_month(year: string, month: string, day: string): IRes {
    const timezone = 'America/Sao_Paulo'
    const date = moment.tz(`${year}-${month}-${day}`, timezone);

    const endMonth = date.endOf("month").toISOString();
    const startMonth = date.startOf("month").toISOString();

    const nowDate = date.toISOString();

    return {
        endMonth,
        startMonth,
        nowDate
    }
}