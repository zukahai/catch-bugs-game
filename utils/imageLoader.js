class ImageLoader {
    constructor(game) {
        this.game = game;
        // console.log("LoadImage");
        this.initImage();
        this.isLoaded = false;
    }

    initImage() {
        this.images = [
            '../assets/css/style.css',
            '../assets/fonts/NVN PixelFJVerdana8pt.ttf',
            '../assets/images/backgounds/1.png',
            '../assets/images/backgounds/10.png',
            '../assets/images/backgounds/2.png',
            '../assets/images/backgounds/3.png',
            '../assets/images/backgounds/4.png',
            '../assets/images/backgounds/5.png',
            '../assets/images/backgounds/6.png',
            '../assets/images/backgounds/7.png',
            '../assets/images/backgounds/8.png',
            '../assets/images/backgounds/9.png',
            '../assets/images/bg.png',
            '../assets/images/bugs/1.png',
            '../assets/images/bugs/2.png',
            '../assets/images/bugs/3.png',
            '../assets/images/bugs/4.png',
            '../assets/images/bugs/5.png',
            '../assets/images/bugs/6.png',
            '../assets/images/bugs/7.png',
            '../assets/images/bugs/8.png',
            '../assets/images/bugs/9.png',
            '../assets/images/chessboards/chessboard1.png',
            '../assets/images/chessboards/chessboard_bg.png',
            '../assets/images/demo/CatchBugs.png',
            '../assets/images/demo/demo.png',
            '../assets/images/demo/demo1.png',
            '../assets/images/demo/demo2.png',
            '../assets/images/demo/rotate1.png',
            '../assets/images/demo/rotate2.png',
            '../assets/images/demo/rotate3.png',
            '../assets/images/demo/rotate4.png',
            '../assets/images/demo/rotate5.png',
            '../assets/images/flashlights/1_1.png',
            '../assets/images/flashlights/1_2.png',
            '../assets/images/flashlights/2_1.png',
            '../assets/images/flashlights/2_2.png',
            '../assets/images/flashlights/3_1.png',
            '../assets/images/flashlights/3_2.png',
            '../assets/images/flashlights/4_1.png',
            '../assets/images/flashlights/4_2.png',
            '../assets/images/flashlights/5_1.png',
            '../assets/images/flashlights/5_2.png',
            '../assets/images/flashlights/6_1.png',
            '../assets/images/flashlights/6_2.png',
            '../assets/images/flashlights_svg/1_1.svg',
            '../assets/images/flashlights_svg/1_2.svg',
            '../assets/images/flashlights_svg/2_1.svg',
            '../assets/images/flashlights_svg/2_2.svg',
            '../assets/images/flashlights_svg/3_1.svg',
            '../assets/images/flashlights_svg/3_2.svg',
            '../assets/images/flashlights_svg/4_1.svg',
            '../assets/images/flashlights_svg/4_2.svg',
            '../assets/images/flashlights_svg/5_1.svg',
            '../assets/images/flashlights_svg/5_2.svg',
            '../assets/images/flashlights_svg/6_1.svg',
            '../assets/images/flashlights_svg/6_2.svg',
            '../assets/images/icons/1.png',
            '../assets/images/icons/10.png',
            '../assets/images/icons/11.png',
            '../assets/images/icons/12.png',
            '../assets/images/icons/13.png',
            '../assets/images/icons/14.png',
            '../assets/images/icons/15.png',
            '../assets/images/icons/2.png',
            '../assets/images/icons/3.png',
            '../assets/images/icons/4.png',
            '../assets/images/icons/5.png',
            '../assets/images/icons/6.png',
            '../assets/images/icons/7.png',
            '../assets/images/icons/8.png',
            '../assets/images/icons/9.png',
            '../assets/images/logo.png',
            '../assets/images/phone/phone.png',
            '../assets/images/phone/phone2.png',
            '../assets/images/phone/phone3.png',
            '../assets/images/phone/phone4.png',
            '../assets/images/rotate.png',
            '../assets/images/web/CatchBugs.jpg',
            '../assets/images/web/favicon.ico',
            '../assets/images/web/load.gif'
        ];
        this.loadedImages = 0;
    }
    checkAllImagesLoaded() {
        this.loadedImages++;
        if (this.loadedImages === this.images.length) {
            this.isLoaded = true;
            // console.log("Loaded all images");
        }
    }


    load() {
        this.images.forEach((pathImage) => {
            const img = new Image();
            img.src = pathImage;
            img.onload = () => {
                this.checkAllImagesLoaded();
                this.game.context.drawImage(img, 0, 0);
            };
        });
    }

    getImage() {
        return this.loadedImages;
    }


}