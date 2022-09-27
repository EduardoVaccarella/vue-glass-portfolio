<template>
    <div class="container-fluid">
        <div class="container">
            <span>
                <div>
                    <a href="https://www.linkedin.com/in/eduardo-vaccarella/">
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                    </a>
                </div>
                <div>
                    <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=eduardo0vaccarella@gmail.com">
                        <font-awesome-icon icon="fa-solid fa-envelope" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/EduardoVaccarella">
                        <font-awesome-icon icon="fa-brands fa-github" />
                    </a>
                </div>
            </span>
            <span id="contattami" class="d-none d-sm-block">

            </span>
            <h4 class="d-none d-md-block">
                contattami
            </h4>
            <h4 id="ms_contattami2" class="d-block d-md-none">
                contattami
            </h4>
        </div>
    </div>
</template>

<script scoped>

</script>

<style lang="scss" scoped>

.container-fluid {
    overflow-x: hidden;
}
.container {
    margin-top: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: start;
    position: relative;

    h4 {
        color: rgba(255, 255, 255, 0.25);
        font-size: 9px;
        letter-spacing: 2px;
        position: absolute;
        top: -100px;
        left: 15%;
        padding: 25px;
        font-weight: 300;
        transform: rotate(-10deg);
    }

    #ms_contattami2 {
        left: 0px;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: start;
        gap: 20px;
        height: 50px;
        color: white;

        div {
            width: 75px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            box-shadow: -10px -5px 35px rgba(0, 0, 0, 0.1);
            background-color: #350048;
            position: relative;
            z-index: 2;
            top: -25px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            border-left: 1px solid rgba(255, 255, 255, 0.05);
            transition: 0.25s;

            a, span {
                cursor: pointer;
                text-decoration: none;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                color: rgba(255, 255, 255, 0.65);
            }

            span {
                position: relative;

                span {
                    text-align: center;
                    position: absolute;
                    height: fit-content;
                    width: fit-content;
                    padding: 5px 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 8px;
                    box-shadow: -10px -5px 35px rgba(0, 0, 0, 0.1);
                    background-color: #350048;
                    z-index: 2;
                    top: -44px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    border-left: 1px solid rgba(255, 255, 255, 0.05);
                    transition: 0.25s;
                }
            }
        }

        div::after {
            content: "";
            width: 10px;
            height: 4px;
            position: absolute;
            background: linear-gradient(to top, #008aff, #00ffe7);
            animation: animate 10s linear infinite;
            bottom: -2px;
            border-radius: 2px;
        }

        @keyframes animate {
            0%, 100% {
                filter: hue-rotate(0deg);
            }
            50% {
                filter:hue-rotate(360deg);
            }
        }

        div:nth-child(2)::after {
            animation-delay: 1s;
        }

        div:nth-child(3)::after {
            animation-delay: 2s;
        }

        div::before {
            content: '';
            position: absolute;
            bottom: -2px;
            width: 20px;
            height: 7px;
            border-radius: 2px;
            background: linear-gradient(to top, #ff1f71, #00ffe7);
            filter: blur(11px);
        }

        div:nth-child(2)::before {
            animation-delay: 1s;
        }

        div:nth-child(3)::before {
            animation-delay: 2s;
        }

        div:hover {
            top: -30px;
            transition: 0.25s;
        }
    }

    #contattami {
        border-radius: 8px 8px 0 0px;
        box-shadow: -10px -5px 35px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(20px);
        position: absolute;
        z-index: 0;
        width: 450px;
        height: 50px;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        border-left: 1px solid rgba(255, 255, 255, 0.05);
    }
}

</style>