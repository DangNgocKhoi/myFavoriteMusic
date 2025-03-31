const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const cdThumb =$('.header__cd');
const btnToggelPlay  = $('.btn-toggle-play');
const btnNext = $('.btn-next');
const btnPrev = $('.btn-prev');
const btnRandom = $('.btn-random'); 
const btnRepeat = $('.btn-repeat'); 
const headerSingerName = $('.header__name-singer');
const headerSongName = $('.header__song-name');
const imgCdThumb = $('.header__cd-thumb');
const audio =$('#audio');
const progress = $('.progress');
const headerVolume = $('.header__song-icon-volume');
const headerVolumeAdjust = $('.header__volum-adjust');
const headerOption = $('.header__song-option');
const darkPage = $('.js-header-page-dark');
const dashboard= $('.dashboard');
const dashboardSearch = $('.dashboard__search')
let itemSongs;
const listSong = $('.list-song');
const app = {
    isToggle:false,
    isRandom:false,
    isRepeat:false,
    isHeaderVolume:false,
    isHeaderOtion:false,
    isDarkPage:false,
    currentIndex: 0,
    songs:[
        {
            "id":1,
            "nameSinger":"Rayo",
            "nameSong":"Cẩm Tú Cầu",
            "image":"./asset/img/camTuCau.jpg",
            "path":"./asset/songs/camTuCau.mp3"
    
        },
        {
            "id":2,
            "nameSinger":"7Closer",
            "nameSong":"Closer",
            "image":"./asset/img/closer.jpg",
            "path":"./asset/songs/closer.mp3"
    
        },
        {
            "id":3,
            "nameSinger":"Phan Mạnh Quỳnh",
            "nameSong":"Có chàng trai viết lên cây",
            "image":"./asset/img/coChangTraiVietLenCay.jpg",
            "path":"./asset/songs/coChangTraiVietLenCay.mp3"
    
        },
        {
            "id":4,
            "nameSinger":"Phan Mạnh Quỳnh",
            "nameSong":"Hồi ứC",
            "image":"./asset/img/hoiUc.jpg",
            "path":"./asset/songs/hoiUc.mp3"
    
        },
        {
            "id":5,
            "nameSinger":"Phan Mạnh Quỳnh",
            "nameSong":"Khi người mình yêu khóc",
            "image":"./asset/img/khiNguoiMinhYeuKhoc.jpg",
            "path":"./asset/songs/khiNguoiMinhYeuKhoc.mp3"
    
    
        },
        {
            "id":6,
            "nameSinger":"Sếp Tùng",
            "nameSong":"Đậu phọng trôi",
            "image":"./asset/img/lacTroi.jpg",
            "path":"./asset/songs/lacTroi.mp3"
    
        },
        {
            "id":7,
            "nameSinger":"Paradise bird",
            "nameSong":"Let Me Dow Snowly",
            "image":"./asset/img/letMeDownSnowly.jpg",
            "path":"./asset/songs/letMeDownSnowly.mp3"
    
        },
        {
            "id":8,
            "nameSinger":"Phan Mạnh Quỳnh",
            "nameSong":"Nhạt",
            "image":"./asset/img/nhat.jpg",
            "path":"./asset/songs/nhat.mp3"
        },
        {
            "id":9,
            "nameSinger":"Charlie Puth",
            "nameSong":"One Call Away",
            "image":"./asset/img/oneCallAway.jpg",
            "path":"./asset/songs/oneCallAway.mp3"
    
        },
        {
            "id":10,
            "nameSinger":"Phan Mạnh Quỳnh",
            "nameSong":"Sâu lời từ khướt",
            "image":"./asset/img/sauLoiTuKhuoc.jpg",
            "path":"./asset/songs/sauLoiTuKhuoc.mp3"
        },
        {
            "id":11,
            "nameSinger":"Charlie Puth",
            "nameSong":"See You Again",
            "image":"./asset/img/seeYouAgain.jpg",
            "path":"./asset/songs/seeYouAgain.mp3"
        },
        {
            "id":12,
            "nameSinger":"Ed Sheeran",
            "nameSong":"Shape Of You",
            "image":"./asset/img/shapeOfYou.jpg",
            "path":"./asset/songs/shapeOfYou.mp3"
    
        },
        {
            "id":13,
            "nameSinger":"Khà Anh Tuấn",
            "nameSong":"Tháng tư là lời nói nói dối của em",
            "image":"./asset/img/thangTulaLoiNoiDoiCuaEm.jpg",
            "path":"./asset/songs/thangTulaLoiNoiDoiCuaEm.mp3"
        },
        {
            "id":14,
            "nameSinger":"Charlie Puth",
            "nameSong":"We Don't Talk Animore",
            "image":"./asset/img/weDontTalkAnimore.jpg",
            "path":"./asset/songs/weDontTalkAnimore.mp3"
    
        }
    ],

    renderApp: function () {

        const html = this.songs.map((song,index) => {
            return `
                <li class="item-song " data-index="${index}">
                    <div style="background-image: url(${song.image});" class="item-song-image"></div>
                    <div class="item-song-info">
                        <h3>${song.nameSong}</h3>
                        <p>${song.nameSinger}</p>
                    </div>
                    <div class="item-song-option">
                        <i class="ti-trash item-song-icon"></i>
                        <i class="ti-heart item-song-icon item-song-icon-heart"></i>
                    </div>
                </li>
               ` 
        })
        if (listSong) {
         
            listSong.innerHTML = html.join('');
             itemSongs = document.querySelectorAll('.item-song');
            this.loadDashboardSong();
        }

    },
    loadDashboardSong: function () {
        console.log(app.currentIndex);
        listSong.style.marginTop = dashboard.offsetHeight + 12 +'px'
        headerSingerName.textContent = this.currentSong.nameSinger;
        headerSongName.textContent = this.currentSong.nameSong;
        imgCdThumb.style.backgroundImage = `url("${this.currentSong.image}")`;
        audio.src = this.currentSong.path; 
        for (let i = 0; i < itemSongs.length; i++) {
            if (i === this.currentIndex) {
                itemSongs[i].classList.add('active')
            }else{
                itemSongs[i].classList.remove('active')

            }
        }
        
    },

    handleEventApp: function () {
        audio.volume = headerVolumeAdjust.value / 100;
        cdThumbAnimate = imgCdThumb.animate([
            {transform: "rotate(0deg)"},
            {transform: "rotate(360deg)"}
        ],{
            duration:10000,
            iterations: Infinity,
        })            
        cdThumbAnimate.pause();
        // Xử lý thu nhỏ CdThumb trong dashboard
        const cdWidth = cdThumb.offsetWidth;
        document.onscroll = function (e) {
                const scrollTop = document.documentElement.scrollTop || window.scrollY ;
                const newCdWidth = cdWidth - scrollTop ;
                cdThumb.style.width = newCdWidth > 0 ? newCdWidth + 'px': 0 ;
                if (newCdWidth > 60) {
                    headerVolumeAdjust.style.height = 100 + 'px';
                    
                }else {
                    headerVolumeAdjust.style.height = 75 + 'px';         
                    imgCdThumb.style.borderColor = "rgba(0, 0, 0, 0)";
                }

                
             }

        // Xử nhấn nút đẻ bật nhạc 
        btnToggelPlay.onclick = function (params) {
            app.isToggle = !app.isToggle;
            if (app.isToggle) {    
                audio.play()
            }else{
                audio.pause()
            }
        }
        audio.onplay = function () {
            cdThumbAnimate.play();
            btnToggelPlay.classList.add('toggle');
            app.isToggle = true;
        }
        audio.onpause = function () {
            cdThumbAnimate.pause();
            btnToggelPlay.classList.remove('toggle');
            app.isToggle = false;

        }
        //Xử lý progress chạy theo thời gian của nhạc
        audio.ontimeupdate = function () {
        if (audio.duration) {
            progress.value = Math.floor((audio.currentTime / audio.duration)*100);
        } 
        }
        //Xử lý tua progress chạy theo % của nhạc
        progress.oninput = function (e) {
            audio.currentTime = (audio.duration / 100) * e.target.value;
        }
        // Xử lý nhần next bài tiếp theo và quay lại bái trước đó 
        btnNext.onclick  = function () {
            app.nextSong();
            
        }
        btnPrev.onclick = function () {
            app.preSong();

        }
        audio.onended = function () {
            if (app.isRepeat) {
                audio.play()
            }else{
                app.nextSong()
            
            }
        }
        btnRandom.onclick = function () {
            app.isRandom = !app.isRandom;
            btnRandom.classList.toggle('active', app.isRandom);
        }
        btnRepeat.onclick = function () {
            app.isRepeat = !app.isRepeat;
            btnRepeat.classList.toggle('active', app.isRepeat);
        }
        itemSongs.forEach((itemSong,index) => {
            itemSong.onclick = function (e) {
                const songNode = e.target.closest('.item-song:not(.active)') ;
                const songOption = e.target.closest('.item-song-icon');
                    if (songOption) {
                        if (songOption.closest(".item-song-icon.item-song-icon-heart")) {
                           songOption.classList.toggle('active');
                        }
                    }else{
                        if (songNode) {
                            app.currentIndex = Number(songNode.dataset.index);
                            app.loadDashboardSong();
                            audio.play();
                        }
                    }                  
            }
        });
        headerVolume.onclick = function (e) {
            app.isHeaderVolume = !app.isHeaderVolume;
    
            if (app.isHeaderVolume) {
                headerVolumeAdjust.classList.add('active');
            } else {
                headerVolumeAdjust.classList.remove('active');
            }
        };
        headerVolumeAdjust.oninput = function (e) {
            e.preventDefault();
            e.stopPropagation();
            audio.volume = e.target.value / 100;
            // Đảm bảo headerVolume luôn giữ trạng thái active khi điều chỉnh
            app.isHeaderVolume = true;
            headerVolume.classList.add('active');
        }
        headerOption.onclick = function (e) {
            app.isHeaderOtion = !app.isHeaderOtion;
            if (app.isHeaderOtion) {
                headerOption.classList.add('active')
            }else{
                headerOption.classList.remove('active')
            }
        }
        darkPage.onclick = function (params) {
            app.isDarkPage = !app.isDarkPage ;
        if (app.isDarkPage) {
            $('body').classList.add('dark-page');
        }else{
            $('body').classList.remove('dark-page');
        }
        }

        dashboardSearch.addEventListener('input',function (e) {
            const searchSong = e.target.value.toLowerCase().trim();
            const filteredSongs  = app.songs.filter((song,index) => {
                return song.nameSinger.toLowerCase().includes(searchSong.trim()) || song.nameSong.toLowerCase().includes(searchSong.trim()) ;
            })    

            app.renderFilteredSongs(filteredSongs);
            
        })


    },
    scrollActiveSong: function () {
        $('.item-song.active').scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
    },
    defineProperties: function () {
        Object.defineProperty(this,'currentSong',{
            get:function () {
            return   this.songs[this.currentIndex]
            }
        })
    },
    nextSong: function () {
        if (this.isRandom) {
            this.randomSong();
        } else {
            this.currentIndex++;
            if (this.currentIndex >= this.songs.length) {
                this.currentIndex = 0;
            }
        }
        this.loadDashboardSong();
        audio.play();
        this.scrollActiveSong();
    },
    preSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadDashboardSong();
        audio.play();
    },
    
    randomSong: function () {
       let newCurrenSong = Math.floor(Math.random(0) * this.songs.length)
        if (newCurrenSong === this.currentIndex) {
                newCurrenSong =  Math.floor(Math.random(0) * this.songs.length)
        }else{
            this.currentIndex = newCurrenSong;
            this.loadDashboardSong();
            audio.play();
        }     
    },
    renderFilteredSongs:function (filteredSongs) {
        const html = filteredSongs.map(song => {
            return `
            <li class="item-song" data-index="${app.songs.indexOf(song)}">
                <div style="background-image: url(${song.image});" class="item-song-image"></div>
                <div class="item-song-info">
                    <h3>${song.nameSong}</h3>
                    <p>${song.nameSinger}</p>
                </div>
                <div class="item-song-option">
                    <i class="ti-trash item-song-icon"></i>
                    <i class="ti-heart item-song-icon item-song-icon-heart"></i>
                </div>
            </li>
           `;
        }).join('');
    
        listSong.innerHTML = html;
        this.handleEventItemSong(filteredSongs);
        
    },
    handleEventItemSong: function (filteredSongs) {
        const newItemSongs = document.querySelectorAll('.item-song');

        filteredSongs.forEach((song,index) => {
            if (app.songs[app.currentIndex] === song) {
                newItemSongs.forEach(itemSong => {
                    if (itemSong.querySelector('p').outerText === song.nameSinger & itemSong.querySelector('h3').outerText === song.nameSong ) {
                        itemSong.classList.add('active');
                       
                    }
                  
                });   
            };
            
        })

        
        newItemSongs.forEach(itemSong => {
            itemSong.onclick = function (e) {
                const songNode = e.target.closest('.item-song:not(.active)');
                if (songNode) {
                    // Xóa class active khỏi tất cả các bài hát trước khi thêm vào bài mới
                    newItemSongs.forEach(item => item.classList.remove('active'));
                    
                    filteredSongs.forEach((song, index) => {
                        if (
                            songNode.querySelector('h3').innerText === song.nameSong &&
                            songNode.querySelector('p').innerText === song.nameSinger
                        ) {
                            itemSong.classList.add('active');
                            app.currentIndex = Number(songNode.dataset.index); // Cập nhật index
                            app.loadDashboardSong();
                            audio.play();
                        }
                    });
                }
            };
        });

    },
    run:function () {
        this.defineProperties()// Định nghĩa `currentSong` trước
        this.renderApp()
        this.renderApp();
        itemSongs = document.querySelectorAll('.item-song');

        this.handleEventApp()
    }
}
app.run();