
// *? Task: Если взглянуть на банковскую карту можно заметить на ней 8-10 значный код. Что означают эти цифры? Первые 4 числа означают платежную систему твоей карты.

// Напиши функцию getPaymentSystem, которая принимает число number и возвращает название платежной системы.

// Например, если номер карты начинается с:

// 34, 37 - это платежная система American Express
// 4 - это VISA
// 51, 52, 53,54, 55 - это MasterCard
// 63, 67 - это Maestro
// во всех других случаях — это unknown payment system
// Примечание: в этой задаче нельзя пользоваться if / else и тернарными операторами.

// getPaymentSystem(4) === 'VISA'
// getPaymentSystem(37) === 'American Express'
// getPaymentSystem(1234) === 'unknown payment system'

// Solution 1


const getPaymentSystem = firstCardDig => {
  switch (firstCardDig) {
    case 34:
      return 'American Express';
    case 37:
      return 'American Express';
    case 4:
      return 'VISA';
    case 51:
      return 'MasterCard';
    case 52:
      return 'MasterCard';
    case 53:
      return 'MasterCard';
    case 54:
      return 'MasterCard';
    case 55:
      return 'MasterCard';
    case 63:
      return 'Maestro';
    case 67:
      return 'Maestro';
    default:
      return 'unknown payment system';
  };
};

console.log(getPaymentSystem(4));
console.log(getPaymentSystem(37));
console.log(getPaymentSystem(1234));
console.log(getPaymentSystem(63));
console.log(getPaymentSystem(53));

// ! Explanation:Используем стрелочную функцию и switch