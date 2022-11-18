/**
 * @typedef {object} preview
 * @property {string} id
 * @property {string} title
 * @property {number} seasons
 * @property {string} image
 * @property {string[]} genres
 * @property {string} updated
 */

/**
 * @returns {Promise<string>}
 */
export const getAllShows = () => {
  fetch("http://podcast-api.netlify.app/shows")
    .then((response) => {
      if (!response.ok) resolve("<div>Something went wrong!<div>");
      return response;
    })
    .then((response) => response.json())
    .then((data) => {
      const result = data.map(({ id, title, seasons }) => {
        return `
                    <li>
                        <button data-preview-button="${id}">${title}</button>
                        <span>(${seasons})</span>
                        </li>
                    `;
      });

      return result;
    })
    .then((data) => data.join("\n"))
    .then((data) => resolve);

  return result;
};
