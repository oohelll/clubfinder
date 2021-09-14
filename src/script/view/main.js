import "../component/club-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked = () => {
        // Sintak dibawah make Promise 
        DataSource.searchClub(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
        // Sintak diatas make Promise 
        
        // Sintak dibawah make promise Async-Await
        // try {
        //     const result = await DataSource.searchClub(searchElement.value);
        //     renderResult(result);
        // } catch (message) {
        //     fallbackResult(message)
        // }
        // Sintak diatas make promise Async-Await
    }
    

    const renderResult = (results) => {
        clubListElement.clubs = results;
    };

    const fallbackResult = (message) => {
        clubListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;