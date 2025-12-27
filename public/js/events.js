const selectItems = document.querySelectorAll('.select-items');
const events = document.getElementById('events');

const eventList = [
    {
        name: "Aptitude Master Challenge",
        link: "https://forms.gle/fQwi4PxY9RaE9sq68",
        image: "./images/poster/Aptitude poster.png"
    },
    {
        name: "Blind Coding",
        link: "https://forms.gle/bq1Vd3qct4crSpAo8",
        image: "./images/poster/Blind coding.jpg"
    },
    {
        name: "Breaking Code",
        link: "https://forms.gle/BbAf1PyM7ZLfo2pX6",
        image: "./images/poster/breaking_codes_.png"
    },
    {
        name: "Coding Competition",
        link: "https://forms.gle/rP3HCp4H1384Uxph8",
        image: "./images/poster/CODING.png"
    },
    {
        name: "Debugging",
        link: "https://forms.gle/SHSv92hUhEu7pS9j7",
        image: "./images/poster/Debugging.png"
    },
    {
        name: "Virtual Kickoff",
        link: "https://forms.gle/WJ2n8fj163BrmovCA",
        image: "./images/poster/Efootball.png"
    },
    {
        name: "Fast Typing",
        link: "https://forms.gle/qAAUtBBupj1XDj9U8",
        image: "./images/poster/fast typing.png"
    },
    {
        name: "General Quiz",
        link: "https://forms.gle/A3YeTTzm2mLzMpBS9",
        image: "./images/poster/GENERAL QUIZ .png"
    },
    {
        name: "Ideathon",
        link: "https://forms.gle/FAMzE3dd36HYrcDA6",
        image: "./images/poster/Ideathon.jpeg"
    },
    {
        name: "Map Hunt Race",
        link: "https://forms.gle/9rFRTmDdMeyw9Hze8",
        image: "./images/poster/MAP HUNT.jpeg"
    },
    {
        name: "Photography Contest",
        link: "https://forms.gle/BCkxUyLs4WT4xSDi9",
        image: "./images/poster/photography.png"
    },
    {
        name: "Puzzle Unlock Challenge",
        link: "https://forms.gle/spvNBxFQfWgo5yVT8",
        image: "./images/poster/Puzzle Unlock Challenge.png"
    },
    {
        name: "El Tezoro Caza",
        link: "https://forms.gle/4N744PmR4a8dMnjH9",
        image: "./images/poster/Treasure Hunt.png"
    },
    {
        name: "Videography Contest",
        link: "https://forms.gle/nndZjErh7PJyP5C36",
        image: "./images/poster/Videography.png"
    },
    {
        name: "Web Designing",
        link: "https://forms.gle/MxGjnKap3Ryk4hes5",
        image: "./images/poster/web_designing.png"
    },
]

const workshopList = [
    {
        name: "Workshop on Machine Learning",
        link: "https://forms.gle/QFVTsVDL5rYuB1Jq9",
        image: "./images/poster/ML workshop .jpg"
    },
    {
        name: "Workshop on Full Stack",
        link: "https://forms.gle/aum21vgdfpAhSzQ48",
        image: "./images/poster/404 POSTER NOT FOUND.png"
    },
]

selectItems.forEach(selectItem=> {
    selectItem.addEventListener('click', ()=> {
        selectItems.forEach(e=>{
            e.classList.remove('selected');
        });
        selectItem.classList.add('selected');
        events.classList.remove('scroll')
        
        const category = selectItem.innerHTML;
        
        if(category == "Events") {
            setEvents(eventList);
        }
        else if(category == "Workshop") {
            setEvents(workshopList);
            if(window.innerWidth > 900) {
                events.classList.add('scroll');
            }
        }
        else {
            setEvents([...eventList, ...workshopList]);
        }
    })
})
setEvents([...eventList, ...workshopList]);

function setEvents(currentEventList) {
    events.innerHTML = "";
    currentEventList.forEach(event=> {
        events.innerHTML += `<a href="${event.link}"> 
                    <img src="${event.image}" alt="${event.name}">
</a>`
    })
}