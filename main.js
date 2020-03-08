var subNavColl = document.querySelectorAll('.sub-nav');
for (var i = 0; i < subNavColl.length; i++) {
    subNavColl[i].addEventListener('mouseover', function () {
        document.querySelector('.dropdown-menu').classList.toggle('db');
    });
    subNavColl[i].addEventListener('mouseout', function () {
        document.querySelector('.dropdown-menu').classList.toggle('db');
    });
}

var acLiColl = document.querySelectorAll('.ac-menu-item');
// console.log(acLiColl)
for (var i = 0; i < acLiColl.length; i++) {
    acLiColl[i].addEventListener('click', function () {
        for (var j = 0; j < acLiColl.length; j++) {
            // console.log(acLiColl[j].querySelector('.ac-sub'));
            if (acLiColl[j].querySelector('.ac-sub')) {
                if (acLiColl[j] != this && acLiColl[j].querySelector('.ac-sub').classList.contains('db-ac')) {
                    acLiColl[j].querySelector('.ac-sub').classList.remove('db-ac');
                }
            }

        }
        if (this.querySelector('.ac-sub') != null) {
            this.querySelector('.ac-sub').classList.toggle('db-ac');
        }
        // console.log(1);
    });
}
var catPageContent = document.querySelector('.cat-page-content');



// catPageCardBodyImg.innerHTML = 'sdsdsd';
for (var i = 0; i < acLiColl.length; i++) {

    acLiColl[i].addEventListener('click', function () {
        while (catPageContent.firstChild) {
            catPageContent.removeChild(catPageContent.firstChild);
        }
        var acSubItem = this.querySelectorAll('.ac-sub-item');
        for (var j = 0; j < acSubItem.length; j++) {
            var catPageCard = document.createElement('div'),
                catPageCardTitle = document.createElement('div'),
                catPageCardBody = document.createElement('div'),
                catPageCardBodyImg = document.createElement('div'),
                catCageCardBodyContent = document.createElement('div'),
                catPageCardBodyContentTitle = document.createElement('div'),
                catPageCardBodyContentDiscr = document.createElement('div'),
                catPageCardBodyContentBtn = document.createElement('div'),
                btn = document.createElement('button'),
                img = document.createElement('img');
            img.src = 'img/bgi.png';
            catPageCard.className = 'cat-page-card';
            catPageCardTitle.className = 'cat-page-card-title';
            catPageCardBody.className = 'cat-page-card-body';
            catCageCardBodyContent.className = 'cat-page-card-body-content';
            catPageCardBodyContentTitle.className = 'cat-page-card-body-content-title';
            catPageCardBodyContentDiscr.className = 'cat-page-card-body-content-discr';
            catPageCardBodyContentBtn.className = 'cat-page-card-body-content-btn';
            btn.className = 'cat-page-card-btn-btn';
            catPageCardBodyImg.className = 'cat-page-card-body-img';
            // console.log(acSubItem[j].innerHTML);
            catPageCardTitle.innerHTML = acSubItem[j].innerHTML;
            catPageCardBodyContentTitle.innerHTML = acSubItem[j].innerHTML;
            btn.innerHTML = 'Подробнее';
            catPageCardBodyContentDiscr.innerHTML = 'Описание';

            // append
            catPageCardBodyContentBtn.appendChild(btn);

            catCageCardBodyContent.appendChild(catPageCardBodyContentTitle);
            catCageCardBodyContent.appendChild(catPageCardBodyContentDiscr);
            catCageCardBodyContent.appendChild(catPageCardBodyContentBtn);

            catPageCardBodyImg.appendChild(img);

            catPageCardBody.appendChild(catPageCardBodyImg);
            catPageCardBody.appendChild(catCageCardBodyContent);

            catPageCard.appendChild(catPageCardTitle);
            catPageCard.appendChild(catPageCardBody);
            catPageContent.appendChild(catPageCard);
        }






        // var collSubTags = this.querySelectorAll('.ac-sub-item');

        // for (var j = 0; j < collSubTags.length; j++) {

        //     // document.querySelector('.cat-page-content').appendChild(document.querySelector('.cat-page-card'))
        //     var catPageCard = document.createElement('div');
        //     catPageCard.className = 'cat-page-card';
        //     document.querySelector('.cat-page-content').appendChild(catPageCard)
        //     console.log(catPageCard)

        // }

    });
}