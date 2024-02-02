/* LESSON 3 - Programming Tasks */

/* Profile Object  */
/* Populate Profile Object with placesLive objects */
let myProfile = {
    name: "Jovanny Rey",
    photo: {
        src: "images/MyProfilePic.jpg",
        alt: "My Profile Picture",        
    },
    favoriteFoods: [
        'Rice',
        'Pizza',
        'Hamburgers',
        'Shrimp',
        'Fried Eggs',
        'Chocolate Chip Cookies'
    ],
    hobbies: [
        'Technology',
        'Soccer',
        'Read Scriptures',
        'Spend time with Family'
    ],
    placesLived: [],

};
let photoElement = document.querySelector("#photo");

myProfile.placesLived.push(
    {
        place: "Miami, Fl.",
        length: "18 years",

    }
);
myProfile.placesLived.push(
    {
        place: "Villavicencio, Colombia",
        length: "11 years",

    }
);


/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;


/* Name */

/* Photo with attributes */
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dt");
    dd.textContent = place.length;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});

