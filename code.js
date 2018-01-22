//Инициируем стрелки "вверх/вниз" на странице
        var setWindowScroller = function () {

            var winScrollUpElement = document.querySelector('.window-scroller .up');
            winScrollUpElement.addEventListener('click',function(){window_scroll(0);});

            var winScrollDownElement = document.querySelector('.window-scroller .down');
            winScrollDownElement.addEventListener('click',function (event) {
                var eventHeightPosition = event.pageY;
                var scroll2nextElem = false;
                var documentSections = document.querySelectorAll('section');

                for (var sectionNum = 0; sectionNum < documentSections.length; sectionNum++) {
                    var sectionRec = documentSections[sectionNum].getBoundingClientRect();

                    var sectionTop = sectionRec.top + window.scrollY;
                    var sectionHeight = sectionRec.height;

                    if (scroll2nextElem) {
                        window_scroll(sectionTop);
                        return false;
                    }

                    if ((eventHeightPosition > sectionTop) && (eventHeightPosition <= (sectionTop + sectionHeight))) {
                        scroll2nextElem = true;
                    }
                }

            });
        };
