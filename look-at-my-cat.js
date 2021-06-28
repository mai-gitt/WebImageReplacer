console.log('i swear im not obsessed. look at my cat, you cannot escape');

let filenames = [
    'aaaaa.jpg',
    'beans.jpg',
    'beauty-incarnate.jpg',
    'blanky.jpg',
    'bleh.jpg',
    'box.jpg',
    'box-glare.jpg',
    'camouflage.jpg',
    'camouflage-returns.jpg',
    'date-night.jpg',
    'instagram-model-cat.jpg',
    'job-interview.jpg',
    'nature-boy.jpg',
    'potato.jpg',
    'rest.jpg',
    'slurp.jpg',
    'sunny.jpg',
    'whatchu-lookin-at.jpg',
    'what-he-doin-up-there.jpg',
];

let imgs = document.getElementsByTagName('img');

for (let imgElt of imgs) {
    let rand = Math.floor(Math.random() * filenames.length);
    let url = chrome.extension.getURL('catboys-greatest-hits/' + filenames[rand]);
    imgElt.src = url;
    console.log(url);
}