const darkmode = document.getElementById('darkmode');
const box_dark = document.getElementById('box_dark')



  const client = document.getElementById('client-box');
    const info = document.getElementById('information')
    const learn_more =  document.getElementById('learn_more')
   
    const learnMoreList = [
        {
            'img_learn_more':'https://i0.wp.com/thehoteljournal.com/wp-content/uploads/2022/12/best-luxury-hotels-Egypt-Oberoir-Beach-Resort-Sahl-Hasheesh.jpg?resize=798%2C638&ssl=1',
            'review-learn-more': 'Where to sleep in Luxor?'
        },
         {
            'img_learn_more':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe98nCAunaBboBTMa3NbbF_LHCNL9J3cT6Iw&s',
            'review-learn-more': 'Where to sleep in Luxor?'
        },
         {
            'img_learn_more':'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f6/ca/20/overview.jpg?w=1200&h=-1&s=1',
            'review-learn-more': 'Where to sleep in Luxor?'
        },
        {
            'img_learn_more':'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f6/ca/20/overview.jpg?w=1200&h=-1&s=1',
            'review-learn-more': 'Where to sleep in Luxor?'
        },

    ]
    const infoList  =  [

        {
            'img-info-bg':'https://cdn.dribbble.com/userupload/31380338/file/original-91e8589afc214dccb8896c1da9855e6d.gif',
            'img-animetor':'https://www.pngkey.com/png/full/947-9472871_tourism-euclidean-vector-clip-art-tourist-clipart-png.png',
            'name-info': "Select a Guide"
        },
        {
            'img-info-bg':'https://cdn.dribbble.com/userupload/42287004/file/original-524b8d54743209d62c513ee680bbcf27.gif',
            'img-animetor':'https://png.pngtree.com/png-clipart/20210516/original/pngtree-travel-cartoon-comfortable-png-image_6295804.png',
            'name-info': "Select a Guide"
        },
         {
            'img-info-bg':'https://cdn.dribbble.com/userupload/23597647/file/original-a9a09b8acdaab7ab4ada18065aa34d0a.gif',
            'img-animetor':'https://png.pngtree.com/png-clipart/20240923/original/pngtree-cartoon-man-tourist-illustration-png-image_16068516.png',
            'name-info': "Select a Guide"
        },
    ]
    const ClientList = [
    {
        'img': 'https://i.pinimg.com/736x/22/be/93/22be93284555193a9fad94c2d3318c22.jpg',
        'name': 'Abayami Mallik',
        'review': "1000+"
    },
     {
        'img': 'https://i.pinimg.com/736x/6e/81/fa/6e81faca558fb6864d881c5e05c51a02.jpg',
        'name': 'Berenike Eman',
        'review': "900+"
    },
     {
        'img': 'https://img.freepik.com/premium-photo/beautiful-woman-brilliant-burqa-mask-dubai-desert-sunset-timearabian-style_159260-1137.jpg',
        'name': 'Dendera Heba',
        'review': "1000+"
    },
     {
        'img': 'https://i.pinimg.com/564x/68/fb/61/68fb61f1063698b5931acd6eeb78c7b6.jpg',
        'name': 'Abayami Mallik',
        'review': "1000+"
    },
     {
        'img': 'https://i.pinimg.com/736x/22/be/93/22be93284555193a9fad94c2d3318c22.jpg',
        'name': 'Abayami Mallik',
        'review': "1000+"
    },
     {
        'img': 'https://i.pinimg.com/736x/6e/81/fa/6e81faca558fb6864d881c5e05c51a02.jpg',
        'name': 'Berenike Eman',
        'review': "900+"
    },
     {
        'img': 'https://img.freepik.com/premium-photo/beautiful-woman-brilliant-burqa-mask-dubai-desert-sunset-timearabian-style_159260-1137.jpg',
        'name': 'Dendera Heba',
        'review': "1000+"
    },
     {
        'img': 'https://i.pinimg.com/564x/68/fb/61/68fb61f1063698b5931acd6eeb78c7b6.jpg',
        'name': 'Abayami Mallik',
        'review': "1000+"
    },

];
ClientList.forEach((listClient)=>{
    client.innerHTML += `
    <div  class="client-box mt-5 hover:bg-orange hover:text-white shadow-lg mb-5 w-fit px-4 py-3 rounded-xl ">
                            <figure class="w-[120px] h-[120px] rounded-full overflow-hidden">
                                <img src="${listClient['img']}" alt="">
                            </figure>
                            <figcaption class="flex my-1 justify-center ">
                                <div class="wrap-caption">
                                      <div class="name font-bold  my-2 ">
                                            ${listClient["name"]}
                                        </div>
                                        <div class="stars my-2 text-sm text-orange-500 ">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </div>
                                        <div class="review flex gap-3 items-center ">
                                            <div class="counts">${listClient.review} review</div>
                                        </div>
                                </div>
                            </figcaption>
                         </div>`
     

});
infoList.forEach((ListInfo)=>{
    info.innerHTML  += `
     <div class="box-content  p-3 rounded-2xl   bg-slate-orage w-fit  flex !justify-center ">
                            <div class="wrap-box w-fit">
                                        <figure class=" rounded-full  relative">
                                        <img class="rounded-full h-[100px] w-[100px]" src="${ListInfo["img-info-bg"]}" alt="">
                                        <img class="absolute h-[120px] w-[120px] top-0 " src="${ListInfo["img-animetor"]}" alt="">
                                        </figure>
                                        <figcaption class="py-4 font-bold  text-slate-800">
                                            <p>Select a Guide</p>
                                        </figcaption>
                            </div>
                        </div>
    `
})
learnMoreList.forEach((listlearn)=>{
    learn_more.innerHTML += `
    <div class="box shadow-2xl rounded-lg p-3 ">
                                <figure class="w-ful h-[200px] rounded-md overflow-hidden  ">
                                    <img class="w-full h-full object-cover " src="${listlearn["img_learn_more"]}" alt="">
                                </figure>
                                <figcaption class="my-4">
                                    <div class="content-capion font-bold flex flex-col gap-2">
                                        <a class="bg-slate-orage text-orange-600 rounded-xl p-1 w-fit  " href="">Hotel</a>
                                        <p>${listlearn["review-learn-more"]}<i class="bi bi-box-arrow-in-up-right  text-orange-600"></i></p>
                                    </div>
                                </figcaption>
                            </div>
    `
})

let isDark = true;
document.body.style.backgroundColor='black';
document.body.style.color='white'
darkmode.addEventListener('click' , function(){

   
    document.body.style.backgroundColor = isDark ? 'white' : 'black';
    document.body.style.color = isDark ? "black" : 'white'
    isDark = !isDark
})
