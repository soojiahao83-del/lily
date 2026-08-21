const confirmBtn = document.getElementById("confirmBtn");

const images = [
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iPxw.WrQlVSc/v1/-1x-1.webp",
    "https://th.bing.com/th/id/OIP.14d1dwvEIV2LRSVoowNSVgHaE8?w=275&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.M-jB3Aq_Z8q40SV0z7pExwHaFj?w=198&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.LcqB_lvO2w2N9Oc5iWYYGgHaEo?w=247&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "https://tse1.mm.bing.net/th/id/OIP.VSVcdJU2AeTFSrTvyWnX6AHaFL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://www.travel-europe.info/wp-content/uploads/2014/02/Paris-France.jpg",
    "https://th.bing.com/th/id/OIP.PqShirNl0VUbeqhNMjNp4gHaE8?w=346&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.jd6N-5v3EDNhaScR5mF8CgHaEK?w=287&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.FMd1iWYA1JLPtllWP2bPeAHaFj?w=187&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.Qi79wiARrcQiJjShz6BJSAHaE1?w=243&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
]

const photoFrame = document.getElementById("photo-frame")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
let imageNum = 0

nextBtn.addEventListener("click", () => {
    imageNum = imageNum + 1
    if(imageNum >= images.length)
    {
        imageNum = 0
    }
    photoFrame.src = images[imageNum]
});

prevBtn.addEventListener("click", () => {
    imageNum = imageNum - 1
    if(imageNum < 0)
    {
        imageNum = images.length - 1
    }
    photoFrame.src = images[imageNum]
});

if(imageNum)

       imageNum = imges[imageNum]
confirmBtn.addEventListener("click", function () {
    const selectedPage = document.getElementById("dropdown").value;

    if (selectedPage === "") {
        alert("Please select a country.");
        return;
    }

    window.location.href = selectedPage;
});

