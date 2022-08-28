// store the API
const url = "https://swapi.dev/api/"

// fetch the star wars API URL
const response =  fetch(url);

// handle errors

const error = "There has been a mistake in rendering the page at this time. Please try again and refresh the page."

// CATCH() method
fetch(url)
    .then(response => {
        // handle the response

        
    })
    .catch(response => {
        // handle the error
        console.log(error);
        alert(error);

        // response redirect to?
    })


// define the asych function
async function starWars(url){
    // define the response and pass the url here
    // store the fetched data
    const response = await fetch(url);

    // ----------INSERT STATUS CODES ---------
    // -------- INSERT stardata -------
    // 200 = ok
    if (response.status === 200) {
        // INSERT stardata
        // declare the data and store in JSON form using await
        var stardata = await response.json();

        // INSERT STATUS CODES 
        // handling status codes of response 
        console.log(response.status);
        console.log(response.statusText);
    } else if (response.status === 404) {
    // 404 = not found
        alert(error);
    } else if (response.status === 500) {
        alert("There is a server error with the URL. Please try again by refreshing the page and/or contacting the system adminstrator.");
    } else {
        alert("Please contact the system adminstrator.");
    }
    //  account if the URL throws a server error = 500

    // handle the data
    // show the data in the console
    console.log(stardata);
    // END
};

// call the async function
starWars(url);

// send the request by showing the data
// there are 6 films

function show(content) {
    const entry =
    <tr>
        <th>Name:</th>
        <th>Height:</th>
        <th>Mass:</th>
        <th>Hair Color:</th>
        <th>Skin Color:</th>
        <th>Eye Color:</th>
        <th>Birth Year:</th>
        <th>Gender: </th>
        <th>Homeworld:</th>
        <th>Films:</th>
        <th>Vehicles:</th>
        <th>Starships:</th>
        {/* do I need the below info? */}
        <th>Created:</th>
        <th>Edited:</th>
        <th>URL: url</th>
    </tr>

    // for of loop to access all of the rows of the content
    for (const log of content) {
        append += <tr>
            <td>${log.name}</td>
            <td>${log.height}</td>
            <td>${log.mass}</td>
            <td>${log.hair}</td>
            <td>${log.skin}</td>
            <td>${log.eye}</td>
            <td>${log.birth}</td>
            <td>${log.gender}</td>
            <td>${log.homeworld}</td>
            <td>${log.films}</td>
            <td>${log.vehicles}</td>
            <td>${log.starships}</td>
            {/* do I need the below info? */}
            <td>${log.created}</td>
            <td>${log.edited}</td>
            <td>${log.url}</td>
        </tr>
    }
    // setting innerHTML
    document.getElementById("star-table").innerText = append;
};

// add event listener
let magic = document.querySelector("#magic-button");
magic.addEventListener('click', show(content));