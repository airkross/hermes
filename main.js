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

var url = window.location.toString();
url = url.split('/');
if (url[url.length - 1] == 'solutions.html') {
    for (var i = 0; i < acLiColl.length; i++) {
        acLiColl[i].addEventListener('click', function () {
            while (catPageContent.firstChild) {
                catPageContent.removeChild(catPageContent.firstChild);
            }
            var acSubItem = this.querySelectorAll('.ac-sub-item');
            for (var j = 0; j < acSubItem.length; j++) {
                var catPageCard = document.createElement('div'),
                    catPageCardTitle = document.createElement('div'),
                    catPageCardBodyBig = document.createElement('div'),
                    catPageCardBigImg = document.createElement('div'),
                    catPageCardBigDiscr = document.createElement('div'),
                    img = document.createElement('img');
                img.src = 'img/s.png';
                catPageCardBodyBig.className = 'cat-page-card-body-big';
                catPageCardBigImg.className = 'cat-page-card-big-img';
                catPageCardBigDiscr.className = 'cat-page-card-big-discr';
                catPageCard.className = 'cat-page-card';
                catPageCardTitle.className = 'cat-page-card-title';
                catPageCardTitle.innerHTML = acSubItem[j].innerHTML;
                catPageCardBigDiscr.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'

                catPageCardBigImg.appendChild(img);
                catPageCardBodyBig.appendChild(catPageCardBigImg);
                catPageCardBodyBig.appendChild(catPageCardBigDiscr);

                catPageCard.appendChild(catPageCardTitle);
                catPageCard.appendChild(catPageCardBodyBig);
                catPageContent.appendChild(catPageCard);
            }
        });
    }
} else if (url[url.length - 1] == 'catalog-page.html') {
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
        });
    }
}