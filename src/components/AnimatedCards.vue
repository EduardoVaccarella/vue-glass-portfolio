<template setup>
    <div class="container-fluid" id="competenze">
        <div class="container">
            <div class="ms_card">
                <span>

                </span>
                <div class="content" data-aos="fade-right" data-aos-duration="1000">
                    <h2>
                        Maturità Scientifica
                    </h2>
                    <p>
                        Ho conseguito la maturitá scientifica tradizionale nel 2021 presso l'istituto IISS Alpi-Montale
                    </p>
                    <a href="https://www.iissalpimontale.edu.it/">
                        IISS Alpi-Montale
                    </a>
                </div>
            </div>

            <div class="ms_card">
                <span>

                </span>
                <div class="content" data-aos="fade-up" data-aos-duration="1000">
                    <h2>
                        Corso Web Developer
                    </h2>
                    <p>
                        Ho completato un corso di piú di 500 ore, divise in sei mesi, presso Boolean Careers. Ora sono un Full Stack Web Developer Junior!
                    </p>
                    <a href="https://boolean.careers/?utm_source=google&utm_campaign=it_search_brand&utm_medium=cpc&utm_content=boolean_careers&utm_term=boolean%20careers&gclid=CjwKCAjwyaWZBhBGEiwACslQo5Fmmo-vIDqSJZM3r4v2shOfTc4uitZZ9Qy9koiC9hBpbroTjoyGmRoC8kkQAvD_BwE">
                        Boolean Careers
                    </a>
                </div>
            </div>

            <div class="ms_card">
                <span>

                </span>
                <div class="content" data-aos="fade-left" data-aos-duration="1000">
                    <h2>
                        Freelancing
                    </h2>
                    <p>
                        Sto lavorando su commissione realizzando siti portfolio, landing pages ed e-commerce. Puoi visionare i miei lavori cliccando qui
                    </p>
                    <a href="https://github.com/EduardoVaccarella">
                        I miei lavori
                    </a>
                </div>
            </div>

            <h4>
                il mio percorso
            </h4>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 100px;
    padding-left: 0;
    padding-right: 0;
    position: relative;
    min-height: 70vh;

    h4 {
        color: rgba(255, 255, 255, 0.4);
        font-size: 9px;
        letter-spacing: 2px;
        position: absolute;
        top: 10px;
        left: 50px;
        padding: 25px;
        font-weight: 300;
        transform: rotate(-10deg);
    }

    .ms_card {
        position: relative;
        width: 320px;
        height: 425px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px 30px;
        transition: 0.5s;

        span {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 50;
            pointer-events: none;
        }

        span::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            opacity: 0;
            transition: 0.5s;
            animation: animate 2s ease-out infinite;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        span::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            opacity: 0;
            transition: 0.5s;
            animation: animate 2s ease-out infinite;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            animation-delay: -1s;
        }

        .content {
            z-index: 1;
            position: relative;
            left: 0;
            padding: 20px 40px;
            background: rgba(255, 255, 255, 0.05);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            backdrop-filter: blur(50px);
            -webkit-backdrop-filter: blur(50px);
            transition: 0.5s;
            color: rgba(255, 255, 255, 0.5);

            h2 {
                font-size: 2em;
                color: rgba(255, 255, 255, 0.85);
                margin-bottom: 10px;
            }

            p {
                font-size: 1em;
                margin-bottom: 10px;
                line-height: 1.4em;
                color: rgb(255, 255, 255, 0.75);
            }

            a {
                display: inline-block;
                font-size: 1.1em;
                color: #111;
                background: rgba(255, 255, 255, 0.75);
                padding: 10px;
                border-radius: 4px;
                text-decoration: none;
                font-weight: 700;
                margin-top: 5px;
            }
        }
    }

    .ms_card:hover .content {
        left: -25px;
        padding: 60px 40px;
    }

    .ms_card:hover span::before {
        top: -25px;
        left: 50px;
        width: 100px;
        height: 100px;
        opacity: 1;
    }

    .ms_card:hover span::after {
        bottom: -25px;
        right: 100px;
        width: 100px;
        height: 100px;
        opacity: 1;
    }

    @keyframes animate {
        0%, 100% {
            transform: translateY(10px);
        }

        50% {
            transform: translateY(-10px);
        }
    }
    .ms_card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50px;
        width: 50%;
        height: 100%;
        background: #fff;
        border-radius: 8px;
        transform: skewX(15deg);
        transition: 0.5s;
    }

    .ms_card::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50px;
        width: 50%;
        height: 100%;
        background: #fff;
        border-radius: 8px;
        transform: skewX(15deg);
        transition: 0.5s;
        filter: blur(30px);
        -webkit-filter: blur(30px);
    }

    .ms_card:hover:before,
    .ms_card:hover:after {
        transform: skewX(0deg);
        left: 20px;
        width: calc(100% - 90px);
        -webkit-backface-visibility: hidden;
        -webkit-transform: translate3d(0, 0, 0);
    }

    .ms_card:nth-child(1):before,
    .ms_card:nth-child(1):after {
        background: linear-gradient(315deg, #ffbc00, #ff0058);
    }

    .ms_card:nth-child(2):before,
    .ms_card:nth-child(2):after {
        background: linear-gradient(315deg, #03a9f4, #ff0058);
        transform: skewX(0deg);
    }

    .ms_card:nth-child(3):before,
    .ms_card:nth-child(3):after {
        background: linear-gradient(315deg, #4dff03, #00d0ff);
        transform: skewX(-15deg);
    }

    .ms_card:nth-child(2):hover:before,
    .ms_card:nth-child(2):hover:after {
        height: 100%;
        transform: skewX(0deg);
        -webkit-transform: skewX(0deg);
        -webkit-backface-visibility: hidden;
        -webkit-transform: translate3d(0, 0, 0);
    }

    .ms_card:nth-child(3):hover:before,
    .ms_card:nth-child(3):hover:after {
        transform: skewX(0deg);
        -webkit-transform: skewX(0deg);
        -webkit-backface-visibility: hidden;
        -webkit-transform: translate3d(0, 0, 0);
    }
}

</style>