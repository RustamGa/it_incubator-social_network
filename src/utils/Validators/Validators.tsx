import React from "react";
export const required =(value:string) => { // валидатор это функция которая получит value и возвпащает ошибку при заданном условии
if (value) return undefined
    return "Field is required";
}

export const maxLengthCreator  =(maxLength:number) => (value:string) => { // создаем функцию которая принимает параметры maxLength
    //и  которая возвращает другую функцию, и с помощью замыкания эта внутренняя функция может получать доступ к переменным,
    // которые находятся в данных родительской функции (по аналогии работы санок)
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined
}
