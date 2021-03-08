const lowongans = [
    {
        img: 'l1.jpg',
        title: 'software engineering',
        subtitle: 'tokopdia',
        lokasi: 'Jakarta',
        gaji: 'Rp. 3.000.000 -  Rp. 4.000.000',
        waktu: '2 hari yang lalu'
    },
    {
        img: 'l1.jpg',
        title: 'software developer',
        subtitle: 'shopee',
        lokasi: 'Jakarta',
        gaji: 'Rp. 3.000.000 -  Rp. 4.000.000',
        waktu: '3 hari yang lalu'
    },
    {
        img: 'l1.jpg',
        title: 'data scientist',
        subtitle: 'tokopdia',
        lokasi: 'Jakarta',
        gaji: 'Rp. 4.000.000 -  Rp. 5.000.000',
        waktu: '1 bulan yang lalu'
    },
    {
        img: 'l1.jpg',
        title: 'software engineering',
        subtitle: 'tokopdia',
        lokasi: 'Jakarta',
        gaji: 'Rp. 3.000.000 -  Rp. 4.000.000',
        waktu: '2 hari yang lalu'
    },
    {
        img: 'l1.jpg',
        title: 'software developer',
        subtitle: 'shopee',
        lokasi: 'Jakarta',
        gaji: 'Rp. 3.000.000 -  Rp. 4.000.000',
        waktu: '3 hari yang lalu'
    },
    {
        img: 'l1.jpg',
        title: 'data scientist',
        subtitle: 'tokopdia',
        lokasi: 'Jakarta',
        gaji: 'Rp. 4.000.000 -  Rp. 5.000.000',
        waktu: '1 bulan yang lalu'
    }
]
function clickCard() {
    window.location.replace('LowonganDetail.html')
}
function createHtml(img, title, subtitle, lokasi, gaji, waktu) {
    return `
    <div class="col-12 col-sm-6 col-lg-4 rounded mb-4" onclick="clickCard()">
        <div class="card w-100">
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col-3">
                        <img class="shadow" src="asset/img/lowongan/${img}" width="100%" height="100%" />
                    </div>
                    <div class="col">
                        <h5 class="card-title text-capitalize">${title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted text-capitalize">${subtitle}</h6>
                    </div>
                </div>
                <div>
                    <p class="card-text"><i class="fa fa-map-marker mr-4"></i>${lokasi}</p>
                    <p class="card-text"><i class="fa fa-dollar mr-4"></i>${gaji}</p>
                    <p class="card-text"><i class="fa fa-clock-o mr-4"></i>${waktu}</p>
                </div>
            </div>
        </div>
    </div>
    `
}

$('#list-lowongan').ready(function () {
    var innerHtml = ''
    lowongans.forEach((lowongan) => {
        innerHtml += createHtml(
            lowongan.img,
            lowongan.title,
            lowongan.subtitle,
            lowongan.lokasi,
            lowongan.gaji,
            lowongan.waktu
        )
    })
    $('#list-lowongan').html(innerHtml)
})
