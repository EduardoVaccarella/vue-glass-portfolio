<template>
    <div class="container-fluid">
        <div class="container pb-5 pb">
            <ul class="d-flex justify-content-between align-items-center">
                <li v-for="img in imgs" :key="img" class="col-4 col-sm-4 col-md-4 col-lg-1 d-flex justify-content-between align-items-center">
                    <div data-aos="fade-in" data-aos-duration="1000">
                        <img :src="img.visual" :alt="img.alt">
                    </div>
                </li>
            </ul>
            <h4>
                le mie competenze
            </h4>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            imgs: [{
                visual: "/assets/html.e5987020.png",
                alt: "HTML5"
            },
            {
                visual: "../../public/img/css.png",
                alt: "CSS3"
            },
            {
                visual: "../../public/img/javascript.png",
                alt: "JavaScript"
            },
            {
                visual: "../../public/img/vue.png",
                alt: "Vue.Js"
            },
            {
                visual: "../../public/img/sass.png",
                alt: "SASS"
            },
            {
                visual: "../../public/img/sql.png",
                alt: "SQL"
            },
            {
                visual: "../../public/img/mysql.png",
                alt: "MySQL"
            },
            {
                visual: "../../public/img/php.png",
                alt: "PHP"
            },
            {
                visual: "../../public/img/laravel.png",
                alt: "Laravel"
            }
        ]
        }
    }   
}

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
        top: -100px;
        left: 50px;
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
            box-shadow: 0 5px 35px rgba(0, 0, 0, 0.2);
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