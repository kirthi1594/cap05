let imagesArr = [
    "https://media.istockphoto.com/id/1336464501/photo/adorable-black-infant-baby-in-towel-relaxing-in-fathers-arms-after-bath.jpg?s=612x612&w=0&k=20&c=TqRUhF2_bhosh0whnpiMzYLy8kWJE9ImgTapne86TSQ=",
    "https://media.istockphoto.com/id/1189239074/photo/sleeping-baby-african-girl.jpg?s=612x612&w=0&k=20&c=UfDSI6sbcdDe7yd4WjyKGExdJIb5zHxMku0w_atxiOE=",
    "https://media.istockphoto.com/id/1071399678/photo/cute-baby-sleeping-on-bed-on-stomach-laughing-pune-maharashtra.jpg?s=612x612&w=0&k=20&c=JPkPd7jEFuuYxP_Ap-PJ3dGsM64rKvX_pHCFVGJiGGI=",
    "https://media.istockphoto.com/id/1356350052/photo/shot-of-a-little-baby-at-a-checkup-with-a-doctor-at-a-clinic.jpg?s=612x612&w=0&k=20&c=yR3OBR_5A3Wo272Mkj_JorM-3-9Rthz8O3pogn9aKnA=",
    "https://media.istockphoto.com/id/1202260928/photo/cute-baby-girl-in-bed-under-a-fluffy-blanket.jpg?s=612x612&w=0&k=20&c=eFpilfN934zJo7wo7wVDSqdwPbFifICU0k5a2ir2Kzg=",
    "https://media.istockphoto.com/id/1216315225/photo/portrait-of-cute-adorable-little-african-american-baby-sleep-in-a-white-bedroom.jpg?s=612x612&w=0&k=20&c=j1fSv9THyLNZ-a0UFwNEasF_fjYjEsRxu-K_J2pAUbw=",
    "https://media.istockphoto.com/id/623613938/photo/portrait-of-a-little-african-american-baby-boy.jpg?s=612x612&w=0&k=20&c=-kGd6_Zc8qDPerfCtELjXhdzpR25LRko-5v7E6ccNPc=",
    'https://media.istockphoto.com/id/1071399616/photo/cute-baby-sleeping-on-bed-on-stomach-laughing-pune-maharashtra.jpg?s=612x612&w=0&k=20&c=rW-tmtvYVDSYbqlt18gK6lszZRU2A2W6WFEft7zw_Ls=',
    "https://media.istockphoto.com/id/1357549141/photo/shot-of-an-adorable-baby-boy-wrapped-in-a-bath-towel.jpg?s=612x612&w=0&k=20&c=3HnP542vMLAQm0LON4kPZCMsxx8EkEf0fQiW3GR2Llc=",
    "https://media.istockphoto.com/id/626292018/photo/portrait-of-a-mixed-race-baby-boy.jpg?s=612x612&w=0&k=20&c=JvUVXQlfuwKTQVWpwbO-QDw0Wws0iGKPuwREWoltXS4=",
    "https://media.istockphoto.com/id/488279538/photo/young-baby-under-blanket.jpg?s=612x612&w=0&k=20&c=kextwYL2TavEulD-j9DCgYH2TqBqtL_g0hoCoKu7vXg=",
    "https://media.istockphoto.com/id/1190214950/photo/mother-stroking-her-baby.jpg?s=612x612&w=0&k=20&c=eihJhfDTmhuxyBCtSdijIveaKFLSjS8RnYR5lwXrITU=",
    "https://media.istockphoto.com/id/624670896/photo/adorable-little-african-american-baby-boy-black-people.jpg?s=612x612&w=0&k=20&c=L7RTppWuwRxt6nXY_fDTeKLTl78Sw8wsBIVuPzfJR8I=",
    "https://media.istockphoto.com/id/177030669/photo/cute-indian-baby-girl.jpg?s=612x612&w=0&k=20&c=B81tPTDvihsTzYxdC6YV3FCQoIwVhrVhKLuqPzOAGlo=",
    "https://media.istockphoto.com/id/1331817911/photo/small-caucasian-baby-boy-lying-down-on-in-the-blue-towel-changing-diapers.jpg?s=612x612&w=0&k=20&c=Fokw9oZFQUiizVvWbN_-sRkyyoPOekEb4DSJMNU6tag=",
];

// Getting all the HTML element
let rightArr = document.querySelector('.rightArr')
let leftArr = document.querySelector('.leftArr')

let startBtn = document.querySelector('.startBtn')
let stopBtn = document.querySelector('.stopBtn')
let imgElem = document.querySelector('.imgElem')

picNo = 0;
let intervalId;
function startSlideShow() {
    clearInterval(intervalId);
    console.log('Slide show started');
    intervalId = setInterval(() => {
        if (picNo == imagesArr.length - 1) picNo = 0;
        console.log('picNo:', picNo+1);
        imgElem.src = imagesArr[picNo++];
    }, 1000)
}

function swipePic(side) {
    clearInterval(intervalId);
    side == '++' ? picNo++ : picNo--;

    picNo == -1 ? picNo = imagesArr.length - 1 : null;
    picNo == imagesArr.length ? picNo = 0 : null;
    // In case you didn't understand the above two lines of code, check out the conditional statement below. It works the same.

    /*
    if(picNo==-1) {
        picNo = imagesArr.length-1;
    } else if(picNo==imagesArr.length) {
        picNo = 0;
    }
    */

    console.log('swiped', side, picNo+1);
    imgElem.src = imagesArr[picNo];
}

rightArr.addEventListener('click', () => {
    swipePic('++');
})
leftArr.addEventListener('click', () => {
    swipePic('--');
})

startBtn.addEventListener('click', startSlideShow)
stopBtn.addEventListener('click', () => {
    console.log('Slide show stopped');
    clearInterval(intervalId);
})