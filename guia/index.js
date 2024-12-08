document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("encuesta");

  const formDataArray = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[type="radio"]:checked')?.value;
    const ageGroup = document.getElementById("ageGroup").value;
    const comments = document.getElementById("comments").value;
    const date = document.getElementById("date").value;
    const interests = [];
    document.querySelectorAll('input[name="interests"]:checked').forEach((checkbox) => {
      interests.push(checkbox.value);
    });

    const formData = {
      name,
      gender,
      ageGroup,
      comments,
      interests,
      date,
    };

    formDataArray.push(formData);

    console.log(formData);
  });
});
