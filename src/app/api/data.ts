export const contents = [
    {
        id: 1,
        section: "header",
        logo: {
            imgURL: "/logoipsum.svg",
            imgALT: "Logo",
            link: "#",
            height: "80",
            width: "160"
        },
        button: {
            btnText: "Discover More",
            btnLink: "#",
            target: "_blank"
        },
    },
    {
        id: 2,
        section: "nav",
        data: [
            {
                link: "#slide-1"
            },
            {
                link: "#slide-2"
            }
        ]
    },
    {
        id: 3,
        section: "slide-1",
        data: {
            title: "Lorem Ipsum Dolor",
            subtitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
            videoURL: "https://www.w3schools.com/html/mov_bbb.mp4",
        }
    },
    {
        id: 4,
        section: "slide-2",
        background: {
            imgURLDesktop: "",
            imgURLTablet: "",
            imgURLMobile: "",
            imgALT: "background image"
        },
        slides: {
            title: "Donec nec justo",
            slideItems: [
                {
                    itemTitle: "Lorem ipsum #1",
                    itemText: "Donec nec justo egetfelis facilisis fermentum. Aliquam porttitor mauris sit amet orci."
                },
                {
                    itemTitle: "Lorem ipsum #2",
                    itemText: "Aenean dignissim pellentesque felis sed egestas, ante et vulputate volutpat."
                },
                {
                    itemTitle: "Lorem ipsum #3",
                    itemText: "Donec nec justo egetfelis facilisis fermentum. Aliquam porttitor mauris sit amet orci."
                },
                {
                    itemTitle: "Lorem ipsum #4",
                    itemText: "Aenean dignissim pellentesque felis sed egestas, ante et vulputate volutpat."
                },
                {
                    itemTitle: "Lorem ipsum #5",
                    itemText: "Donec nec justo egetfelis facilisis fermentum. Aliquam porttitor mauris sit amet orci."
                },
            ]
        },
    },
]