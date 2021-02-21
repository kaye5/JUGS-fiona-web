var hoverImage = ['img2.jpg','img2.jpg','img2.jpg']
var originalImage = ['img1.jpg','img1.jpg','img1.jpg']
function content02ImageHover (id) {    
    $('#content-02-'+id).attr('src','asset/img/'+hoverImage[parseInt(id)-1])
}

function content02ImageOut (id){
    $('#content-02-'+id).attr('src','asset/img/'+originalImage[parseInt(id)-1])
}