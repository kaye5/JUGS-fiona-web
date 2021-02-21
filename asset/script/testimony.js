const dataset = [
    {
        img: 'img1.jpg',
        name: 'Kaye',
        rating: 5,
        title: 'Ci luk ba',
        content: 'Apa deh'
    },
    {
        img: 'img1.jpg',
        name: 'John Does',
        rating: 4,
        title: 'QERJA sangat membantu saya dalam mencari karier!',
        content: 'Terima kasih QERJA sudah menghubungkan saya dengan Macro Ad, dan selalu menemani prosesnya hingga saya mendapat pekerjaan sesuai dengan passion saya. Prosesnya penuh insight, mudah, dan begitu lancar.'
    },
    {
        img: 'img1.jpg',
        name: 'Fiona',
        rating: 5,
        title: 'Copid',
        content: 'Aku suka covid'
    },
]

function createCard (data) {
    var rating = ''
    for (var j = 0; j < data.rating; j++)
        rating += '<i class="fa fa-star icon"></i>'
    
    $('#testimony-card').html(
        `
    <div class="row">
        <div class="col-6 col-md-4 text-center">
            <img class="shadow" src="asset/img/${data.img}" />
        </div>
        <div class="col-6 col-md-8 align-self-center">
            <div>
                ${rating}
            </div>
            <div>
                ${data.name}
            </div>
        </div>
    </div>
    <div class="text-center mt-3">
        <div>
            <p class="title fw-bold">${data.title}</p>
        </div>
        <div>
            <p class="content">${data.content}</p>
        </div>
    </div>
    `)
}

$('#testimony-card').ready(function(){
    createCard(dataset[0])
})

var i = 1;
setInterval(function () {
    data = dataset[i]
    createCard(data)
    i++;
    if (i == dataset.length )
        i = 0
}, 5000)
