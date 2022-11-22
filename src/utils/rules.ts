import moment, {Moment} from "moment";
//обязательные поля required and message
//при создании формы хочется просто вызывать функцию передать сообщение и не парится по 2 обязательным полям
//тем более полей валидации может быть очень много а не только 2
export const rules = {
    required: (message: string = "Required field") => ({
        required: true,
        message
    }),
    //функция замкнется на переменной message 
    isDateAfter: (message: string='you can not create an event in the past') => () => ({
        validator(_: any, value: Moment) {
            // value select date
            //moment current date, isSameOrAfter comparison method
            if (value.isSameOrAfter(moment())) {
                return Promise.resolve()
            }
            return Promise.reject(new Error(message));
        }
    })
}
//функция принимает сообжение об ошибке  и эта функция возращает другую функцию которая возвращает для нас объект 
//moment() = new Date()
//isSameOrAfter- сравнивает переданную дату с датой текущей или в прошлом 