    if (window.matchMedia("(min-width: 1024px)").matches) {
        var subNavColl = document.querySelectorAll('.sub-nav');
        for (var i = 0; i < subNavColl.length; i++) {
            subNavColl[i].addEventListener('mouseover', function () {
                document.querySelector('.dropdown-menu').classList.toggle('db');
            });
            subNavColl[i].addEventListener('mouseout', function () {
                document.querySelector('.dropdown-menu').classList.toggle('db');
            });
        }
    }
    if (window.matchMedia("(max-width: 1023px)").matches) {
        console.log(11);

        var subBurger = document.getElementById('subBurger');
        if (subBurger) {
            subBurger.addEventListener('click', function () {
                if (document.querySelector('.header .menu')) {
                    if (document.querySelector('.header .menu').classList.contains('db')) {
                        document.querySelector('.header .menu').classList.remove('db');
                    }
                }
                document.querySelector('.sub-nav .sub-menu').classList.toggle('db');
            });
        }
        var headerBurger = document.getElementById('headerBurger');
        if (headerBurger) {
            console.log(22);
            headerBurger.addEventListener('click', function () {
                if (document.querySelector('.sub-nav .sub-menu')) {
                    if (document.querySelector('.sub-nav .sub-menu').classList.contains('db')) {
                        document.querySelector('.sub-nav .sub-menu').classList.remove('db');
                    }
                }
                document.querySelector('.header .menu').classList.toggle('db');
            });
        }
    }

    var acLiColl = document.querySelectorAll('.ac-menu-item');
    var acLiCollM = document.querySelectorAll('.sub-menu-item');
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
    var catP = {
        "1": {
            "name": 'Очистители и гидрофобизаторы',
            "arr": ['Очистители и гидрофобизаторы', 'Очистители и гидрофобизаторы', 'Очистители и гидрофобизаторы', 'Антисептик']
        },
        "2": {
            "name": 'Гидроизоляционные составы и добавки',
            "arr": [
                'Эластичная гидроизоляция', 'Проникающая гидроизоляция', 'Гидроизоляционные мембраны', 'Полиуритановые мастики',
                'Штукатурные мастики', 'Инъекционная гидроизоляция', 'Деформационные швы', 'Остановка активных протечек',
                'Герметизация швов', 'Гидропрокладки и профили', 'Гидроизоляционные добавки', 'Герметики'
            ]
        },
        "3": {
            "name": 'Составы для ремонта, укрепления и усиления железобетонных конструкций',
            "arr": ['Ремонтные составы', 'Ремонтные составы на эпоксидной основе', 'Инъекционные составы', 'Инъекционные составы на эпоксидной основе']
        },
        "4": {
            "name": 'Промышленные полы',
            "arr": [
                'Наливные полы на полимерной основе', 'Наливные полы на минеральной основе', 'Составы для упрочнения и обеспыливания', 'Грунтовочные составы',
                'Лаки', 'Вспомогательные материалы'

            ]
        },
        "5": {
            "name": 'Антистатические покрытия',
            "arr": []
        },
        "6": {
            "name": 'Защита металлических конструкций',
            "arr": ['Антикоррозионные материалы', 'Антикоррозионная защита на полиуритановой основе', 'Антикоррозионная защита на эпоксилной основе']
        },
        "7": {
            "name": 'Термокраски и огнезащита',
            "arr": ['Огнезащитные краски', 'Огнезащитные составы']
        },
        "8": {
            "name": 'Инструменты и оборудование',
            "arr": []
        },
        "9": {
            "name": 'Составы для реконструкции и реставраци',
            "arr": ['Санирующие составы', 'Отсечная гидроизоляция', 'Микроцементы']
        },
    }
    var solP = {
        "1": {
            "name": 'Гидроизоляция',
            "arr": ['Гидроизоляция на этапе строительства', 'Гидроизоляция с наружной стороны (монолит, кирпич, ФБС)', 'Гидроизоляция резервуаров (металлические и железобетонные)', 'Гидроизоляция опалубочных отверстий',
            'Гидроизоляция места ввода коммуникации','Гидроизоляция душевы','Гидроизоляция колодца',
            'Гидроизоляция бассейна','Остановка активных протечек','Гидроизоляция швов (герметизация)',
            'Гидроизоляция трещин (герметизация)','Гидроизоляция подвалов','Гидроизоляция подземных парковок',
            'Гидроизоляция деформационных швов','Гидроизоляция эксплуатируемой кровли (ЭПДМ мембраны)',
            'Гидроизоляция кровли (полиуретановая мастика)','Гидроизоляция террас (ЭПДМ мембрана, Эластичная гидроизоляция, полиуретановая мастика)'
        ]
        },
        "2": {
            "name": 'Ремонт и защита',
            "arr": [
                'Ремонт трещин', 'Ремонт бетона до 10мм', 'Ремонт бетона более 10мм', 'Ремонт бетона при наличии оголенной арматуры',
                'Подливочные (литьевые) составы', 'Ремонт трещин шириной раскрытия до 0,5 мм (шириной раскрытия более 0,5 мм)', 'Устройство противофильтрационной завесы', 'Восстановление способности кирпичной кладки',
                'Устройство отсечной гидроизоляции', 'Антистатические покрытия'
            ]
        },
        "3": {
            "name": 'Промышленные полы',
            "arr": ['Промышленные полы']
        },
        "4": {
            "name": 'Защита металлических поверхностей',
            "arr": [
                'Антикоррозионная защита', 'Модификаторы ржавчины', 'Термокраски', 'Защита металла'

            ]
        },
        "5": {
            "name": 'Гидрофобизаторы',
            "arr": ['Очистка поверхности от высолов и грязи','Защита и гидрофобизация поверхности от влаги и грязи','Обеспыливание и упрочнение поверхности']
        }
    }
    var url = window.location.toString();
    url = url.split('/');
    if (url[url.length - 1] == 'solutions.html' || url[url.length - 1] == 'solutions.html#') {
        for (var i = 0; i < acLiColl.length; i++) {
            acLiCollM[i].addEventListener('click', function () {
                if (window.matchMedia("(max-width: 1023px)").matches) {
                    while (catPageContent.firstChild) {
                        catPageContent.removeChild(catPageContent.firstChild);
                    }
                    console.log(solP[this.dataset.val])
                    for (var j = 0; j < solP[this.dataset.val].arr.length; j++) {
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
                        catPageCardTitle.innerHTML = solP[this.dataset.val].arr[j];
                        catPageCardBigDiscr.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'

                        catPageCardBigImg.appendChild(img);
                        catPageCardBodyBig.appendChild(catPageCardBigImg);
                        catPageCardBodyBig.appendChild(catPageCardBigDiscr);

                        catPageCard.appendChild(catPageCardTitle);
                        catPageCard.appendChild(catPageCardBodyBig);
                        catPageContent.appendChild(catPageCard);
                    }
                }
            });
           


            acLiColl[i].addEventListener('click', function () {
                if (window.matchMedia("(min-width: 1024px)").matches) {
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
                }
            });
        }
    } else if (url[url.length - 1] == 'catalog-page.html' || url[url.length - 1] == 'catalog-page.html#') {

        for (var i = 0; i < acLiColl.length; i++) {


            // sssssssssssssssssssssssssssssssssssssssssssssssssss

            acLiCollM[i].addEventListener('click', function () {

                if (window.matchMedia("(max-width: 1023px)").matches) {
                    while (catPageContent.firstChild) {
                        catPageContent.removeChild(catPageContent.firstChild);
                    }
                    console.log(catP[this.dataset.val])
                    // var subNavBurgerTitle = document.querySelector('.sub-nav-burger-title');
                    // subNavBurgerTitle.innerHTML = catP[this.dataset.val].name;
                    for (var j = 0; j < catP[this.dataset.val].arr.length; j++) {
                        // console.log(2)
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
                        catPageCardTitle.innerHTML = catP[this.dataset.val].arr[j];
                        catPageCardBodyContentTitle.innerHTML = catP[this.dataset.val].arr[j];
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

                    // var acSubItem = this.querySelectorAll('.ac-sub-item');
                    // for (var j = 0; j < acSubItem.length; j++) {
                    //     var catPageCard = document.createElement('div'),
                    //         catPageCardTitle = document.createElement('div'),
                    //         catPageCardBody = document.createElement('div'),
                    //         catPageCardBodyImg = document.createElement('div'),
                    //         catCageCardBodyContent = document.createElement('div'),
                    //         catPageCardBodyContentTitle = document.createElement('div'),
                    //         catPageCardBodyContentDiscr = document.createElement('div'),
                    //         catPageCardBodyContentBtn = document.createElement('div'),
                    //         btn = document.createElement('button'),
                    //         img = document.createElement('img');
                    //     img.src = 'img/bgi.png';
                    //     catPageCard.className = 'cat-page-card';
                    //     catPageCardTitle.className = 'cat-page-card-title';
                    //     catPageCardBody.className = 'cat-page-card-body';
                    //     catCageCardBodyContent.className = 'cat-page-card-body-content';
                    //     catPageCardBodyContentTitle.className = 'cat-page-card-body-content-title';
                    //     catPageCardBodyContentDiscr.className = 'cat-page-card-body-content-discr';
                    //     catPageCardBodyContentBtn.className = 'cat-page-card-body-content-btn';
                    //     btn.className = 'cat-page-card-btn-btn';
                    //     catPageCardBodyImg.className = 'cat-page-card-body-img';
                    //     catPageCardTitle.innerHTML = acSubItem[j].innerHTML;
                    //     catPageCardBodyContentTitle.innerHTML = acSubItem[j].innerHTML;
                    //     btn.innerHTML = 'Подробнее';
                    //     catPageCardBodyContentDiscr.innerHTML = 'Описание';

                    //     // append
                    //     catPageCardBodyContentBtn.appendChild(btn);

                    //     catCageCardBodyContent.appendChild(catPageCardBodyContentTitle);
                    //     catCageCardBodyContent.appendChild(catPageCardBodyContentDiscr);
                    //     catCageCardBodyContent.appendChild(catPageCardBodyContentBtn);

                    //     catPageCardBodyImg.appendChild(img);

                    //     catPageCardBody.appendChild(catPageCardBodyImg);
                    //     catPageCardBody.appendChild(catCageCardBodyContent);

                    //     catPageCard.appendChild(catPageCardTitle);
                    //     catPageCard.appendChild(catPageCardBody);
                    //     catPageContent.appendChild(catPageCard);
                    // }
                }
            });

            // sssssssssssssssssssssssssssssssssssss

            acLiColl[i].addEventListener('click', function () {

                if (window.matchMedia("(min-width: 1024px)").matches) {
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
                }
            });
        }
    }