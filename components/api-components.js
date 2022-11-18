// const listHtml = document.querySelector("#list");

// const getAllPodcasts = async () => {
//   listHtml.innerHtml = `Loading...`;
//   console.log(5);

//   const response = await fetch("https://podcast-api.netlify.app/shows");

//   if (!response.ok) {
//     listHtml.innerText = "Something went wrong!";
//     return;
//   }

//   /**
//    * @type {preview[]}
//    */
//   const data = await response.json();

//   let newHtml = "";

//   for (const { id, title, seasons } of data) {
//     newHtml = `
//             ${newHtml}
//                     <li>
//                         <button data-preview-button="${id}">${title}</button>
//                         <span>(${seasons})</span>
//                     </li>
//         `;
//   }

//   listHtml.innerHTML = newHtml;
// };

// /**
//  * @param {string} id
//  */
// const getSinglePodcast = async (id) => {
//   listHtml, (innerHtml = `Loading...`);

//   const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);

//   if (!response.ok) {
//     listHtml.innerHtml = "Something wrong!";
//     return;
//   }

//   /**
//    * @type {show}
//    */
//   const data = await response.json();

//   let seasonsList = "";

//   for (const { image, title } of data.seasons) {
//     seasonsList = `
//             ${seasonsList}

//             <li>
//                 <img src="${image}" width="100" height="100">
//                 ${title}
//             </li>
//         `;
//   }

//   listHtml.innerHTML = `
//         <button data-action="back"> Back</button>
//         <h2>${data.title}</h2>
//         <ul>${seasonsList}</ul>
//     `;
// };

// document.body.addEventListener("click", (event) => {
//   const { previewButton, action } = event.target.dataset;

//   if (action && action === "back") {
//     getAllPodcasts();
//     return;
//   }

//   if (!previewButton) return;
//   getSinglePodcast(previewButton);
// });

// getAllPodcasts();
