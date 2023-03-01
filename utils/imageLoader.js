class ImageLoader {
    constructor() {
        console.log("LoadImage");
        this.initImage();
        this.isLoaded = false;
    }

    initImage() {
        this.images = [
            'assets/images/bugs/1.png',
            'assets/images/bugs/2.png',
            'assets/images/bugs/3.png',
            'assets/images/bugs/4.png',
            'assets/images/bugs/5.png',
            'assets/images/bugs/6.png',
            'assets/images/bugs/7.png',
            'assets/images/bugs/8.png',
            'assets/images/bugs/9.png',
            'assets/images/flashlights/1_1.png',
            'assets/images/flashlights/1_2.png',
            'assets/images/flashlights/2_1.png',
            'assets/images/flashlights/2_2.png',
            'assets/images/flashlights/3_1.png',
            'assets/images/flashlights/3_2.png',
            'assets/images/flashlights/4_1.png',
            'assets/images/flashlights/4_2.png',
            'assets/images/flashlights/5_1.png',
            'assets/images/flashlights/5_2.png',
            'assets/images/flashlights/6_1.png',
            'assets/images/flashlights/2_2.png',
            'assets/images/flashlights_svg/1_1.svg',
            'assets/images/flashlights_svg/1_2.svg',
            'assets/images/flashlights_svg/2_1.svg',
            'assets/images/flashlights_svg/2_2.svg',
            'assets/images/flashlights_svg/3_1.svg',
            'assets/images/flashlights_svg/3_2.svg',
            'assets/images/flashlights_svg/4_1.svg',
            'assets/images/flashlights_svg/4_2.svg',
            'assets/images/flashlights_svg/5_1.svg',
            'assets/images/flashlights_svg/5_2.svg',
            'assets/images/flashlights_svg/6_1.svg',
            'assets/images/flashlights_svg/2_2.svg',
            'assets/images/icons/1.png',
            'assets/images/icons/2.png',
            'assets/images/icons/3.png',
            'assets/images/icons/4.png',
            'assets/images/icons/5.png',
            'assets/images/icons/6.png',
            'assets/images/icons/7.png',
            'assets/images/icons/8.png',
            'assets/images/icons/9.png',
            'assets/images/icons/10.png',
            'assets/images/icons/11.png',
            'assets/images/icons/12.png',
            'assets/images/icons/13.png',
            'assets/images/icons/14.png',
            'assets/images/icons/15.png',

        ];
        this.loadedImages = 0;
    }
    checkAllImagesLoaded() {
        this.loadedImages++;
        if (this.loadedImages === this.images.length) {
            this.isLoaded = true;
            console.log("Loaded all images");
        }
    }


    load() {
        this.images.forEach((pathImage) => {
            const img = new Image();
            img.src = pathImage;
            img.onload = () => {
                this.checkAllImagesLoaded();
            };
        });
    }

    getImage() {
        return this.loadedImages;
    }


}