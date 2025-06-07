document.addEventListener("DOMContentLoaded", () => {
  // Tab switching functionality
  const tabButtons = document.querySelectorAll(".tab-btn")
  const regionContents = document.querySelectorAll(".region-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      regionContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked button
      button.classList.add("active")

      // Show corresponding content
      const region = button.dataset.region
      document.getElementById(`${region}-content`).classList.add("active")
    })
  })

  // Navigation menu functionality
  const navLinks = document.querySelectorAll("nav ul li a")

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      // Remove active class from all links
      navLinks.forEach((navLink) => navLink.classList.remove("active"))

      // Add active class to clicked link
      link.classList.add("active")

      // Here you would typically handle page navigation or section scrolling
      // For this demo, we'll just log the section
      console.log(`Navigating to ${link.dataset.section} section`)
    })
  })

  // Application form toggle functionality
  const actionButtons = document.querySelectorAll(".action-btn")

  actionButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Find the parent region content
      const regionContent = button.closest(".region-content")

      // Find the form within this region
      const form = regionContent.querySelector(".application-form")

      // Toggle form visibility
      form.classList.toggle("active")

      // Change button text based on form visibility
      if (form.classList.contains("active")) {
        button.textContent = "Скрыть форму"
        // Scroll to form
        form.scrollIntoView({ behavior: "smooth", block: "start" })
      } else {
        button.textContent = "Оформить заявку"
      }
    })
  })

  // Form submission handling
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(form)
      const formValues = {}

      for (const [key, value] of formData.entries()) {
        formValues[key] = value
      }

      // In a real application, you would send this data to a server
      console.log("Form submitted with values:", formValues)

      // Show success message
      alert("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.")

      // Reset form
      form.reset()

      // Hide form
      const regionContent = form.closest(".region-content")
      const applicationForm = regionContent.querySelector(".application-form")
      applicationForm.classList.remove("active")

      // Update button text
      const actionBtn = regionContent.querySelector(".action-btn")
      actionBtn.textContent = "Оформить заявку"
    })
  })
})
