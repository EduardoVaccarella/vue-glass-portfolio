<template>
    <div class="container-fluid">
        <div class="container">
            <span class="sole"></span>
            <h4>
                pure css
            </h4>
            <div class="terra">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.container {
    min-height: 300px;
    height: 44vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .terra {
        position: relative;
        width: 150px;
        height: 150px;

        span {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }

        span:nth-child(1) {
            background: linear-gradient(#000ed1 0%, #0015b3 10%, #2b83ff 50%, #001e40 100%);
            border-top: 1px solid rgba(255, 255, 255, 0.5);
            border-left: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
        }

        span:nth-child(1):before {
            content: "";
            position: absolute;
            width: 90%;
            height: 90%;
            border-radius: 50%;
            background: linear-gradient(#67e9b9 10%, #007b4e 50%, #00124e 100%);
            transform: rotate(45deg);
            filter: blur(20px);
            z-index: 2;
        }
        span:nth-child(1):after {
            content: "";
            position: absolute;
            width: 90%;
            height: 30%;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.250);
            bottom: -20%;
            filter: blur(20px);
            z-index: -1;
        }

        span:nth-child(2) {
            background: linear-gradient(#ffffff5f 0%, #ffffff4f 10%, #ffffff2d 50%, #ffffff18 100%);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);
            animation: animate 6s ease-in-out infinite;
            z-index: 4;
        }

        @keyframes animate {
            0% {
                transform: translate(-25vw, 50px) scale(0.3) rotate(0deg);
                z-index: 1;
            }
            50% {
                transform: translate(25vw, -50px) scale(0.3) rotate(180deg);
                z-index: 1;
            }
            50.00001% {
                transform: translate(25vw, -50px) scale(0.3) rotate(180deg);
                z-index: 4;
            }
            100% {
                transform: translate(-25vw, 50px) scale(0.3) rotate(360deg);
                z-index: 4;
            }
        }

        span:nth-child(3) {
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            z-index: 5;
            width: 10px;
            height: 10px;
            position: absolute;
            top: 50%;
            right: 50%;
            animation: animate2 2s ease-in-out infinite;
            animation-delay: -2s;
        }

        @keyframes animate2 {
            0% {
                transform: translate(-100px, -50px) scale(0.5) rotate(0deg);
                z-index: 1;
            }
            50% {
                transform: translate(100px, 50px) scale(0.5) rotate(90deg);
                z-index: 1;
            }
            50.00001% {
                transform: translate(100px, 50px) scale(0.5) rotate(90deg);
                z-index: 3;
            }
            100% {
                transform: translate(-100px, -50px) scale(0.5) rotate(180deg);
                z-index: 3;
            }
        }

        span:nth-child(3):before {
            content: "";
            position: absolute;
            right: 8px;
            top: 10px;
            background: linear-gradient(rgba(100, 100, 100, 0.75), rgba(125, 125, 125, 0.75));
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            z-index: 5;
            width: 15px;
            height: 10px;
            transform: rotate(-45deg);
            border-radius: 2px;
        }

        span:nth-child(3):after {
            content: "";
            position: absolute;
            left: 8px;
            bottom: 10px;
            background: linear-gradient(rgba(125, 125, 125, 0.75), rgba(100, 100, 100, 0.75));
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            z-index: 5;
            width: 15px;
            height: 10px;
            transform: rotate(-45deg);
            border-radius: 2px;
        }
    }

    .sole {
        position: absolute;
        top: 20%;
        left: 35%;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: linear-gradient(#b93800 0%, #b33600 10%, #ffa32b 50%, #7a1e00 100%);
        border-top: 1px solid rgba(255, 25, 0, 0.5);
        border-left: 1px solid rgba(255, 94, 0, 0.5);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        animation: animate3 120s ease-in-out infinite;
    }

    @keyframes animate3 {
            0% {
                transform: translate(-10vw, -50px) scale(0.5);
            }
            50% {
                transform: translate(25vw, 200px) scale(0.5);
            }
            50.00001% {
                transform: translate(25vw, 200px) scale(0.5);
            }
            100% {
                transform: translate(-10vw, -50px) scale(0.5);
            }
        }

    .sole:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: linear-gradient(#e9b567 10%, #7b3700 50%, #8e630089 100%);
        transform: rotate(45deg);
        filter: blur(5px);
    }

    h4 {
        color: rgba(255, 255, 255, 0.4);
        font-size: 9px;
        letter-spacing: 2px;
        position: absolute;
        bottom: 15%;
        right: 5vw;
        padding: 25px;
        font-weight: 300;
        transform: rotate(10deg);
    }
}

</style>