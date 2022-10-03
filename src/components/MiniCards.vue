<template>
    <div class="container-fluid">
        <div class="container">
            <h4>
                le mie competenze
            </h4>
        </div>
        <div class="container pb-5 pb">
            <ul class="d-flex justify-content-between align-items-center">
                <li class="col-4 col-sm-4 col-md-4 col-lg-1 d-flex justify-content-between align-items-center">
                    <div data-aos="fade-in" data-aos-duration="1000">
                        <img src="../../public/img/html.png">
                    </div>
                </li>
                <li class="col-4 col-sm-4 col-md-4 col-lg-1 d-flex justify-content-between align-items-center">
                    <div data-aos="fade-in" data-aos-duration="1000">
                        <img src="../../public/img/css.png">
                    </div>
                </li>
                <li class="col-4 col-sm-4 col-md-4 col-lg-1 d-flex justify-content-between align-items-center">
                    <div data-aos="fade-in" data-aos-duration="1000">
                        <img src="../../public/img/javascript.png">
                    </div>
                </li>
                <li class="col-4 col-sm-4 col-md-4 col-lg-1 d-flex justify-content-between align-items-center">
                    <div data-aos="fade-in" data-aos-duration="1000">
                        <img src="../../public/img/vue.png">
                    </div>
                </li>
                <li class="col-4 col-sm-4 col-md-4 col-lg-1 d-flex justify-content-between align-items-center">
                    <div data-aos="fade-in" data-aos-duration="1000">
                        <img src="../../public/img/sass.png">
                    </div>
                </li>
                <li class="col-4 col-sm-4 col-md-4 col-lg-1 d-flex justify-content-between align-items-center">
                    <div data-aos="fade-in" data-aos-duration="1000">
                        <img src="../../public/img/sql.png">
                    </div>
                </li>
                <li class="col-4 col-sm-4 col-md-4 col-lg-1 d-flex justify-content-between align-items-center">
                    <div data-aos="fade-in" data-aos-duration="1000">
                        <img src="../../public/img/mysql.png">
                    </div>
                </li>
                <li class="col-4 col-sm-4 col-md-4 col-lg-1 d-flex justify-content-between align-items-center">
                    <div data-aos="fade-in" data-aos-duration="1000">
                        <img src="../../public/img/php.png">
                    </div>
                </li>
                <li class="col-4 col-sm-4 col-md-4 col-lg-1 d-flex justify-content-between align-items-center">
                    <div data-aos="fade-in" data-aos-duration="1000">
                        <img src="../../public/img/laravel.png">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    
.container {
    min-height: 30vh;
    position: relative;
    padding: 40px 0;

    h4 {
        color: rgba(255, 255, 255, 0.25);
        font-size: 9px;
        letter-spacing: 2px;
        position: absolute;
        left: 25px;
        bottom: 50px;
        padding: 25px;
        font-weight: 300;
        transform: rotate(-10deg);
    }

    ul {
        flex-wrap: wrap;
        gap: 175px 0px;
        padding-top: 40px;

    li {
        list-style: none;
        position: relative;
        animation: animate 4s ease-in-out infinite;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 0;
            width: 95%;
            height: 70px;
            bottom: 0;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            border-left: 1px solid rgba(255, 255, 255, 0.05);
            padding: 5px 10px;
            border-radius: 8px;
        }

        @keyframes animate {
            0% {
                transform: translate(0px, 0px);
            }
            50% {
                transform: translate(0px, 40px);
            }
            100% {
                transform: translate(0px, 0px);
            }
        }

        img {
            max-height: 90%;
            position: relative;
            z-index: 1;
            }
        }

        li:nth-child(1) {
            animation-delay: 0s;
        }

        li:nth-child(2) {
            animation-delay: 0.5s;
        }

        li:nth-child(3) {
            animation-delay: 1s;
        }

        li:nth-child(4) {
            animation-delay: 1.5s;
        }

        li:nth-child(5) {
            animation-delay: 2s;
        }

        li:nth-child(6) {
            animation-delay: 2.5s;
        }

        li:nth-child(7) {
            animation-delay: 3s;
        }

        li:nth-child(8) {
            animation-delay: 3.5s;
        }

        li:nth-child(9) {
            animation-delay: 4s;
        }
    }
}

</style>