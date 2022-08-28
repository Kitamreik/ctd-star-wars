// store the API
const url = "https://swapi.dev/api/people/1"
const url2 = "https://swapi.dev/api/people/2"
// ex --> people/1 --> Luke Skywalker
// ex 2 --> path --> all of the paths
// ex 3 --> people --> all of the people with their data

// fetch the star wars API URL
const response =  fetch(url);
const response2 =  fetch(url2);

// handle errors - done
const error = "Error Message: There has been a mistake in rendering the page at this time. Please try again and refresh the page."

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

fetch(url2)
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
        // 200
        console.log("You are clear for take-off");
        console.log(response.statusText);
        // show the data in the console
        // send the request by showing the data
        // handle the data
        console.log(stardata);
    } else if (response.status === 404) {
    // 404 = not found
        const error2 = "This is a 404 error message."
        alert(error2);
    } else if (response.status === 500) {
        alert("There is a server error with the URL. Please try again by refreshing the page and/or contacting the system adminstrator.");
    } else {
        alert("Please contact the system adminstrator.");
    }
    //  account if the URL throws a server error = 500
};

async function starWars(url2){
    // define the response and pass the url here
    // store the fetched data
    const response = await fetch(url2);

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
        // 200
        console.log("You are clear for take-off");
        console.log(response.statusText);
        // show the data in the console
        // send the request by showing the data
        // handle the data
        console.log(stardata);
    } else if (response.status === 404) {
    // 404 = not found
        const error2 = "This is a 404 error message."
        alert(error2);
    } else if (response.status === 500) {
        alert("There is a server error with the URL. Please try again by refreshing the page and/or contacting the system adminstrator.");
    } else {
        alert("Please contact the system adminstrator.");
    }
    //  account if the URL throws a server error = 500
};

// call the async function
starWars(url);
starWars(url2);

function show(stardata) {
    let entry = `
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
    `;
    
    // for of loop to access all of the rows of the content - REVISE THIS
    for (let log of stardata.list) {
        entry += ` 
        <tr>
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
        `;
    };
    // setting innerHTML
    document.getElementById("star-table").innerHTML = entry;
    
};
// END