// plugins/phone-mask.ts
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("phone-mask", {
    mounted(el: HTMLInputElement) {
      const formatPhoneNumber = (value: string) => {
        // Удаляем все, кроме чисел
        value = value.replace(/\D/g, "");

        // Если первые цифры совпадают с "998", пропускаем их
        if (value.startsWith("998")) {
          value = value.slice(3);
        }

        let phoneNumber = "+998 ";

        if (value.length > 0) {
          phoneNumber += value.substring(0, 2);
        }
        if (value.length > 2) {
          phoneNumber += " " + value.substring(2, 5);
        }
        if (value.length > 5) {
          phoneNumber += " " + value.substring(5, 7);
        }
        if (value.length > 7) {
          phoneNumber += " " + value.substring(7, 9);
        }

        return phoneNumber;
      };

      const handleInput = (e: Event) => {
        const target = e.target as HTMLInputElement;
        if (!e.isTrusted || !target) return;

        // Обновляем значение с учетом текущего ввода
        target.value = formatPhoneNumber(target.value);
      };

      el.oninput = debounce(handleInput, 300);

      el.onfocus = function () {
        if (!el.value) {
          el.value = "+998 ";
        }
      };

      el.onkeydown = function (e: KeyboardEvent) {
        if (
          el.selectionStart !== null &&
          el.selectionStart < 5 &&
          (e.key === "Backspace" || e.key === "Delete")
        ) {
          e.preventDefault();
        }
      };
    },
  });
});

// Функция debounce
function debounce(func: (e: Event) => void, timeout: number = 300) {
  let timer: ReturnType<typeof setTimeout>;
  return (event: Event) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(event);
    }, timeout);
  };
}
