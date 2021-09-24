var nav = document.getElementById("nav");
window.addEventListener('scroll', function () {
    if (window.scrollY >= 100) {
        nav.classList.add("nav_black");
    }
    else {
        nav.classList.remove("nav_black");
    }
})
var data = [
    {
        src: "./large-Series1.jpg",
        heading: "Luis Miguel",
        description: "Luis Miguel: The Series  is a Spanish-language American biographical television series produced by Gato Grande Productions along to MGM Television for Netflix and Telemundo.[2][3] It is an authorized version on the life of the Mexican singer Luis Miguel.[4] It stars Diego Boneta as the titular character"
    },
    {
        src: "./large-Series2.jpg",
        heading: "Lucifer",
        description: "Lucifer is an American urban fantasy television series developed by Tom Kapinos that premiered on January 25, 2016, and concluded on September 10, 2021. It is based on the DC Comics character created by Neil Gaiman, Sam Kieth, and Mike Dringenberg taken from the comic book series The Sandman, who later became the protagonist of a spin-off comic book series, both published by DC Comics' Vertigo imprint. The series is produced by Jerry Bruckheimer Television, DC Entertainment and Warner Bros. ",
    },
    {
        src: "./large-Series3.jpg",
        heading: "Haunted Latin America",
        description: "Haunted: Latin America consists of real people telling real stories about possession, haunted houses, terrifying attacks by spirits, and other related stories. The format is the same as well; the person tells the story in a room with loved ones and others who experienced the same issues, and then there are dramatic reenactments of these scenes."
    }, {
        src: "./large-Series4.jpg",
        heading: "Who killed sara?",
        description: "Who Killed Sara? is a Mexican mystery thriller streaming television series created by José Ignacio Valenzuela and produced by Perro Azul, which was released for Netflix on 24 March 2021. The series stars Manolo Cardona as Álex Guzmán, a man convicted for the murder of his sister, a crime that he did not commit. Season 2 premiered on 19 May 2021, two months after the release of the first one."
    },
    {
        src: "./large-Series5.jpg",
        heading: "Cobra Kai",
        description: "Cobra Kai is an American martial arts comedy-drama streaming television series and a sequel to the original The Karate Kid films by Robert Mark Kamen.[2] The series was created by Josh Heald, Jon Hurwitz and Hayden Schlossberg, and stars Ralph Macchio and William Zabka, who reprise their roles as Daniel LaRusso and Johnny Lawrence from the 1984 film The Karate Kid. Set 34 years later, Cobra Kai re-examines the 'Miyagi-Verse' narrative from Johnny's point of view, his decision to reopen the Cobra Kai karate dojo, and the rekindling of his old rivalry with Daniel"
    }, {
        src: './large-Series6.jpg',
        heading: "Elite",
        description: "Elite is a Spanish thriller teen drama television series created for Netflix by Carlos Montero and Darío Madrona. The series is set in Las Encinas, a fictional elite secondary school and revolves around the relationships between three working-class students enrolled at the school through a scholarship program and their wealthy classmates. The series features an ensemble cast."
    },
    {
        src: "./large-Series7.jpg",
        heading: "Transformers: War for Cybertron Trilogy",
        description: "Cybertron is ravaged by civil war between Autobots and Decepticons. In an attempt to end the conflict, Megatron considers using the AllSpark to reformat the Autobots, but Optimus Prime wants to prevent that from happening, even if that means destroying Cybertron, itself, in order to save it. Early on, Bumblebee and Wheeljack discover a space bridge while searching for Energon. They were apprehended by Decepticons Starscream, Thundercracker, and Jetfire."
    }, {
        src: "./large-Series8.jpg",
        heading: " The Umbrella Academy",
        description: "The Umbrella Academy is an American superhero streaming television series based on the comic book series of the same name written by Gerard Way. Created for Netflix by Steve Blackman and developed by Jeremy Slater, it revolves around a dysfunctional family of adopted sibling superheroes who reunite to solve the mystery of their father's death and the threat of an imminent apocalypse. The series is produced by Borderline Entertainment, Dark Horse Entertainment, and Universal Cable Productions."
    },
    {
        src: "./small-Series1.jpg",
        heading: "Lucifer",
        description: "Lucifer is an American urban fantasy television series developed by Tom Kapinos that premiered on January 25, 2016, and concluded on September 10, 2021. It is based on the DC Comics character created by Neil Gaiman, Sam Kieth, and Mike Dringenberg taken from the comic book series The Sandman, who later became the protagonist of a spin-off comic book series, both published by DC Comics' Vertigo imprint. The series is produced by Jerry Bruckheimer Television, DC Entertainment and Warner Bros. "
    },
    {
        src: "./small-Series2.jpg",
        heading: "Luis Miguel",
        description: "Luis Miguel: The Series (Spanish: Luis Miguel: La serie) is a Spanish-language American biographical television series produced by Gato Grande Productions along to MGM Television for Netflix and Telemundo.[2][3] It is an authorized version on the life of the Mexican singer Luis Miguel.[4] It stars Diego Boneta as the titular character"
    },
    {
        src: "./small-Series3.jpg",
        heading: "Haunted Latin America",
        description: "Haunted: Latin America consists of real people telling real stories about possession, haunted houses, terrifying attacks by spirits, and other related stories. The format is the same as well; the person tells the story in a room with loved ones and others who experienced the same issues, and then there are dramatic reenactments of these scenes."
    }, {
        src: "./small-Series4.jpg",
        heading: "Who killed sara?",
        description: "Who Killed Sara? is a Mexican mystery thriller streaming television series created by José Ignacio Valenzuela and produced by Perro Azul, which was released for Netflix on 24 March 2021. The series stars Manolo Cardona as Álex Guzmán, a man convicted for the murder of his sister, a crime that he did not commit. Season 2 premiered on 19 May 2021, two months after the release of the first one."
    },
    {
        src: "./small-Series5.jpg",
        heading: "Cobra Kai",
        description: "Cobra Kai is an American martial arts comedy-drama streaming television series and a sequel to the original The Karate Kid films by Robert Mark Kamen.[2] The series was created by Josh Heald, Jon Hurwitz and Hayden Schlossberg, and stars Ralph Macchio and William Zabka, who reprise their roles as Daniel LaRusso and Johnny Lawrence from the 1984 film The Karate Kid. Set 34 years later, Cobra Kai re-examines the 'Miyagi-Verse' narrative from Johnny's point of view, his decision to reopen the Cobra Kai karate dojo, and the rekindling of his old rivalry with Daniel"
    }, {
        src: './small-Series6.jpg',
        heading: "Elite",
        description: "Elite is a Spanish thriller teen drama television series created for Netflix by Carlos Montero and Darío Madrona. The series is set in Las Encinas, a fictional elite secondary school and revolves around the relationships between three working-class students enrolled at the school through a scholarship program and their wealthy classmates. The series features an ensemble cast."
    },
    {
        src: "./small-Series7.jpg",
        heading: "Transformers: War for Cybertron Trilogy",
        description: "Cybertron is ravaged by civil war between Autobots and Decepticons. In an attempt to end the conflict, Megatron considers using the AllSpark to reformat the Autobots, but Optimus Prime wants to prevent that from happening, even if that means destroying Cybertron, itself, in order to save it. Early on, Bumblebee and Wheeljack discover a space bridge while searching for Energon. They were apprehended by Decepticons Starscream, Thundercracker, and Jetfire."
    }, {
        src: "./small-Series8.jpg",
        heading: " The Umbrella Academy",
        description: "The Umbrella Academy is an American superhero streaming television series based on the comic book series of the same name written by Gerard Way. Created for Netflix by Steve Blackman and developed by Jeremy Slater, it revolves around a dysfunctional family of adopted sibling superheroes who reunite to solve the mystery of their father's death and the threat of an imminent apocalypse. The series is produced by Borderline Entertainment, Dark Horse Entertainment, and Universal Cable Productions."
    },
    {
        src: "./top_rated_series1.jpg",
        heading: "Lucifer",
        description: "Lucifer is an American urban fantasy television series developed by Tom Kapinos that premiered on January 25, 2016, and concluded on September 10, 2021. It is based on the DC Comics character created by Neil Gaiman, Sam Kieth, and Mike Dringenberg taken from the comic book series The Sandman, who later became the protagonist of a spin-off comic book series, both published by DC Comics' Vertigo imprint. The series is produced by Jerry Bruckheimer Television, DC Entertainment and Warner Bros. "
    },
    {
        src: "./top_rated_series2.webp",
        heading: "Luis Miguel",
        description: "Luis Miguel: The Series (Spanish: Luis Miguel: La serie) is a Spanish-language American biographical television series produced by Gato Grande Productions along to MGM Television for Netflix and Telemundo.[2][3] It is an authorized version on the life of the Mexican singer Luis Miguel.[4] It stars Diego Boneta as the titular character"
    },
    {
        src: "./top_rated_series3.webp",
        heading: "Haunted Latin America",
        description: "Haunted: Latin America consists of real people telling real stories about possession, haunted houses, terrifying attacks by spirits, and other related stories. The format is the same as well; the person tells the story in a room with loved ones and others who experienced the same issues, and then there are dramatic reenactments of these scenes."
    }, {
        src: "./top_rated_series4.webp",
        heading: "Who killed sara?",
        description: "Who Killed Sara? is a Mexican mystery thriller streaming television series created by José Ignacio Valenzuela and produced by Perro Azul, which was released for Netflix on 24 March 2021. The series stars Manolo Cardona as Álex Guzmán, a man convicted for the murder of his sister, a crime that he did not commit. Season 2 premiered on 19 May 2021, two months after the release of the first one."
    },
    {
        src: "./top_rated_series5.webp",
        heading: "Cobra Kai",
        description: "Cobra Kai is an American martial arts comedy-drama streaming television series and a sequel to the original The Karate Kid films by Robert Mark Kamen.[2] The series was created by Josh Heald, Jon Hurwitz and Hayden Schlossberg, and stars Ralph Macchio and William Zabka, who reprise their roles as Daniel LaRusso and Johnny Lawrence from the 1984 film The Karate Kid. Set 34 years later, Cobra Kai re-examines the 'Miyagi-Verse' narrative from Johnny's point of view, his decision to reopen the Cobra Kai karate dojo, and the rekindling of his old rivalry with Daniel"
    }, {
        src: './top_rated_series6.webp',
        heading: "Elite",
        description: "Elite is a Spanish thriller teen drama television series created for Netflix by Carlos Montero and Darío Madrona. The series is set in Las Encinas, a fictional elite secondary school and revolves around the relationships between three working-class students enrolled at the school through a scholarship program and their wealthy classmates. The series features an ensemble cast."
    },
    {
        src: "./top_rated_series7.webp",
        heading: "Transformers: War for Cybertron Trilogy",
        description: "Cybertron is ravaged by civil war between Autobots and Decepticons. In an attempt to end the conflict, Megatron considers using the AllSpark to reformat the Autobots, but Optimus Prime wants to prevent that from happening, even if that means destroying Cybertron, itself, in order to save it. Early on, Bumblebee and Wheeljack discover a space bridge while searching for Energon. They were apprehended by Decepticons Starscream, Thundercracker, and Jetfire."
    }, {
        src: "./top_rated_series8.webp",
        heading: " The Umbrella Academy",
        description: "The Umbrella Academy is an American superhero streaming television series based on the comic book series of the same name written by Gerard Way. Created for Netflix by Steve Blackman and developed by Jeremy Slater, it revolves around a dysfunctional family of adopted sibling superheroes who reunite to solve the mystery of their father's death and the threat of an imminent apocalypse. The series is produced by Borderline Entertainment, Dark Horse Entertainment, and Universal Cable Productions."
    },
    {
        src: "./action_Series1.jpg",
        heading: "Lucifer",
        description: "Lucifer is an American urban fantasy television series developed by Tom Kapinos that premiered on January 25, 2016, and concluded on September 10, 2021. It is based on the DC Comics character created by Neil Gaiman, Sam Kieth, and Mike Dringenberg taken from the comic book series The Sandman, who later became the protagonist of a spin-off comic book series, both published by DC Comics' Vertigo imprint. The series is produced by Jerry Bruckheimer Television, DC Entertainment and Warner Bros. "
    },
    {
        src: "./action_Series2.jpg",
        heading: "Luis Miguel",
        description: "Luis Miguel: The Series (Spanish: Luis Miguel: La serie) is a Spanish-language American biographical television series produced by Gato Grande Productions along to MGM Television for Netflix and Telemundo.[2][3] It is an authorized version on the life of the Mexican singer Luis Miguel.[4] It stars Diego Boneta as the titular character"
    },
    {
        src: "./action_Series3.jpg",
        heading: "Haunted Latin America",
        description: "Haunted: Latin America consists of real people telling real stories about possession, haunted houses, terrifying attacks by spirits, and other related stories. The format is the same as well; the person tells the story in a room with loved ones and others who experienced the same issues, and then there are dramatic reenactments of these scenes."
    }, {
        src: "./action_Series4.jpg",
        heading: "Who killed sara?",
        description: "Who Killed Sara? is a Mexican mystery thriller streaming television series created by José Ignacio Valenzuela and produced by Perro Azul, which was released for Netflix on 24 March 2021. The series stars Manolo Cardona as Álex Guzmán, a man convicted for the murder of his sister, a crime that he did not commit. Season 2 premiered on 19 May 2021, two months after the release of the first one."
    },
    {
        src: "./action_Series5.jpg",
        heading: "Cobra Kai",
        description: "Cobra Kai is an American martial arts comedy-drama streaming television series and a sequel to the original The Karate Kid films by Robert Mark Kamen.[2] The series was created by Josh Heald, Jon Hurwitz and Hayden Schlossberg, and stars Ralph Macchio and William Zabka, who reprise their roles as Daniel LaRusso and Johnny Lawrence from the 1984 film The Karate Kid. Set 34 years later, Cobra Kai re-examines the 'Miyagi-Verse' narrative from Johnny's point of view, his decision to reopen the Cobra Kai karate dojo, and the rekindling of his old rivalry with Daniel"
    }, {
        src: './action_Series6.jpg',
        heading: "Elite",
        description: "Elite is a Spanish thriller teen drama television series created for Netflix by Carlos Montero and Darío Madrona. The series is set in Las Encinas, a fictional elite secondary school and revolves around the relationships between three working-class students enrolled at the school through a scholarship program and their wealthy classmates. The series features an ensemble cast."
    },
    {
        src: "./action_Series7.jpg",
        heading: "Transformers: War for Cybertron Trilogy",
        description: "Cybertron is ravaged by civil war between Autobots and Decepticons. In an attempt to end the conflict, Megatron considers using the AllSpark to reformat the Autobots, but Optimus Prime wants to prevent that from happening, even if that means destroying Cybertron, itself, in order to save it. Early on, Bumblebee and Wheeljack discover a space bridge while searching for Energon. They were apprehended by Decepticons Starscream, Thundercracker, and Jetfire."
    }, {
        src: "./action_Series8.jpg",
        heading: " The Umbrella Academy",
        description: "The Umbrella Academy is an American superhero streaming television series based on the comic book series of the same name written by Gerard Way. Created for Netflix by Steve Blackman and developed by Jeremy Slater, it revolves around a dysfunctional family of adopted sibling superheroes who reunite to solve the mystery of their father's death and the threat of an imminent apocalypse. The series is produced by Borderline Entertainment, Dark Horse Entertainment, and Universal Cable Productions."
    }
]
function showVideo(value) {
    switch (value) {
        case value:
            document.getElementsByClassName('insertImage')[0].src = data[value].src;
            document.getElementsByClassName('videoHeading')[0].innerText = data[value].heading;
            document.getElementsByClassName('videoDescription')[0].innerText = data[value].description;
            break;
    }
    document.getElementsByClassName("videoDiv")[0].style.display = 'block';
}
function showTrending(value) {
    switch (value) {
        case value:
            document.getElementsByClassName('insertImage')[1].src = data[value].src;
            document.getElementsByClassName('videoHeading')[1].innerText = data[value].heading;
            document.getElementsByClassName('videoDescription')[1].innerText = data[value].description;
            break;
    }
    document.getElementsByClassName("videoDiv")[1].style.display = 'block';
}
function showTopRated(value) {
    switch (value) {
        case value:
            document.getElementsByClassName('insertImage')[2].src = data[value].src;
            document.getElementsByClassName('videoHeading')[2].innerText = data[value].heading;
            document.getElementsByClassName('videoDescription')[2].innerText = data[value].description;
            break;
    }
    document.getElementsByClassName("videoDiv")[2].style.display = 'block';
}
function showActionSeries(value) {
    switch (value) {
        case value:
            document.getElementsByClassName('insertImage')[3].src = data[value].src;
            document.getElementsByClassName('videoHeading')[3].innerText = data[value].heading;
            document.getElementsByClassName('videoDescription')[3].innerText = data[value].description;
            break;
    }
    document.getElementsByClassName("videoDiv")[3].style.display = 'block';
}
function showHorrorSeries(value) {
    switch (value) {
        case value:
            document.getElementsByClassName('insertImage')[4].src = data[value].src;
            document.getElementsByClassName('videoHeading')[4].innerText = data[value].heading;
            document.getElementsByClassName('videoDescription')[4].innerText = data[value].description;
            break;
    }
    document.getElementsByClassName("videoDiv")[4].style.display = 'block';
}
function showRomanticSeries(value) {
    switch (value) {
        case value:
            document.getElementsByClassName('insertImage')[5].src = data[value].src;
            document.getElementsByClassName('videoHeading')[5].innerText = data[value].heading;
            document.getElementsByClassName('videoDescription')[5].innerText = data[value].description;
            break;
    }
    document.getElementsByClassName("videoDiv")[5].style.display = 'block';
}
function closeVideoDiv() {
    for (var i = 0; i < document.getElementsByClassName('videoDiv').length; i++) {
        document.getElementsByClassName("videoDiv")[i].style.display = 'none';
    }
}
$(document).ready(function () {
    var $videoSrc;
    $('.video-btn').click(function () {
        $videoSrc = $(this).data("src");
    });
    $('#myModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0");
    })
    $('#myModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })
});
