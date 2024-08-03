import { Injectable } from "@nestjs/common";
import dayjs from "dayjs";

@Injectable()
export class DayjsService {
    getFormmatedISODay() {
        const date = this.getTodayDate();

        const formattedDate = dayjs(date).format("YYYY-MM-DD");
        return formattedDate;
    }

    private getTodayDate(): string {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0"); // Adiciona 1 ao mês, pois getMonth() retorna de 0 a 11
        const day = String(today.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }
}
