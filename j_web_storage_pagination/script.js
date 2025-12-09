const apiKey = "reqres_dee01a6317614db2b4e14590ea671996";
const listColors = document.querySelector("#list-colors");
const paginationColors = document.querySelector("#pagination-colors");

function addItem(item) {
  const colorCard = document.createElement("section");
  colorCard.className = "card w-100";
  listColors.append(colorCard);

  const colorCardBody = document.createElement("article");
  colorCardBody.className = "card-body";
  colorCard.append(colorCardBody);

  const colorCardTitle = document.createElement("h5");
  colorCardTitle.className = "card-title";
  colorCardTitle.innerText = item.name;
  colorCardBody.append(colorCardTitle);

  const colorCardText = document.createElement("p");
  colorCardText.className = "card-text";
  colorCardText.innerText = item.pantone_value;
  colorCardBody.append(colorCardText);

  const colorCardColor = document.createElement("figure");
  colorCardColor.style = "background-color: " + item.color + ";";
  colorCardColor.innerText = item.color;
  colorCardBody.append(colorCardColor);

  const colorCardBreak = document.createElement("br");
  listColors.append(colorCardBreak);
}

async function displayPagination(pageNum = 1, totalPages = 1) {
  // Clear paginationColors first
  paginationColors.innerHTML = "";

  // Re-render the pagination
  for (let page = 1; page <= totalPages; page++) {
    const pageBtn = document.createElement("a");
    pageBtn.className = `btn mx-1  ${
      page === pageNum ? "btn-primary" : "btn-outline-primary"
    }`;
    pageBtn.addEventListener("click", (event) => {
      event.preventDefault();
      fetchColorsList(page);
    });
    pageBtn.textContent = page;
    paginationColors.append(pageBtn);
  }
}

// 1. Implement the function fetchColorsList() using the browser Fetch API to download the full color list from the following endpoint:
// https://reqres.in/api/unknown

// ! IMPORTANT - study the values returned from the APIs first
// page = 1
// per_page = 6
// total = 12
// total_pages =  2

async function fetchColorsList(pageNum = 1) {
  try {
      
    // Use bootstrap's spinner
    // https://getbootstrap.com/docs/5.3/components/spinners/
    const spinnerDiv = document.createElement("div");
    spinnerDiv.className = "d-block spinner-border mx-auto my-4";
    spinnerDiv.setAttribute("role", "status");
    listColors.appendChild(spinnerDiv);
    
    // simulate delay
    setTimeout(() => {
        console.log("delayed");
    }, 5000);

    // set the url page url based on value in pageNum
    const url =
      pageNum === 1
        ? `https://reqres.in/api/unknown`
        : `https://reqres.in/api/unknown?page=${pageNum}`;

    // Using fetch, call for the 1st page of Data from the given url
    const response = await fetch(url, {
      headers: { "x-api-key": apiKey },
    });
    const resp = await response.json();
    console.log(resp);

    if (!resp.data) throw new Error("There was an error.");

    // Fetch the present and subsequent page(s) of Data (using a For Loop)
    const allColors = resp.data;
    const page = resp.page;
    const totalPages = resp.total_pages;

    displayPagination(page, totalPages);

    // Clear listColors first
    listColors.innerHTML = "";

    // Loop through each array index to be passed to addItem(item) function for display
    // Also, convert each JSON object item into a string for storage into arrColors
    allColors.forEach((color) => {
      addItem(color);
    });
  } catch (error) {
    const errHeader = document.createElement("div");
    errHeader.className = "d-flex justify-content-center text-danger py-2";
    errHeader.textContent = error.message;
    listColors.append(errHeader);
  }
}

// 2. when the document content is loaded,
//    if available, load the color list from localStorage
//    otherwise, invoke fetchColorsList() to fetch the colors from the external api
document.addEventListener("DOMContentLoaded", () => {
  const loadColors = window.localStorage.getItem("list-colors");

  return fetchColorsList();
});
