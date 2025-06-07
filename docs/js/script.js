document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const regionContents = document.querySelectorAll(".region-content");
  const actionButtons = document.querySelectorAll(".action-btn");

  const commonFormWrapper = document.getElementById("common-form");
  const formTitle = document.getElementById("common-form-title");
  const regionSelect = document.getElementById("region-select");
  const commonForm = document.getElementById("form-common");

  // переключение табов (без изменений)
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      regionContents.forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`${btn.dataset.region}-content`).classList.add("active");
      // при смене региона скрываем открытую форму
      commonFormWrapper.style.display = "none";
      actionButtons.forEach(a => a.textContent = "Оформить заявку");
    });
  });

  // показываем общую форму при клике на любую кнопку «Оформить заявку»
  actionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const region = btn.closest(".region-content").id.replace("-content", "");
      // установить селект и заголовок
      regionSelect.value = region;
      const regionNames = {
        europe: "Европа",
        england: "Англия",
        usa: "США",
        crypto: "Криптовалюта"
      };
      formTitle.textContent = `Оформление заявки — ${regionNames[region]}`;
      // показать/спрятать форму
      if (commonFormWrapper.style.display === "none") {
        commonFormWrapper.style.display = "block";
        btn.textContent = "Скрыть форму";
        commonFormWrapper.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        commonFormWrapper.style.display = "none";
        btn.textContent = "Оформить заявку";
      }
    });
  });

  // обработка отправки общей формы
  commonForm.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(commonForm);
    const values = {};
    for (let [k, v] of data.entries()) values[k] = v;
    console.log("Отправляем заявкy:", values);
    alert("Заявка успешно отправлена! Спасибо.");
    commonForm.reset();
    commonFormWrapper.style.display = "none";
    actionButtons.forEach(a => a.textContent = "Оформить заявку");
  });
});
