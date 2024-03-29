const result = document.querySelector(".result");


async function renderData() {
  try {
    const response = await fetch("data.json");

    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      const data = await response.json();
      result.innerText = data.roll;
    }
  } catch (error) {
    console.log(error);
  }
}

renderData();