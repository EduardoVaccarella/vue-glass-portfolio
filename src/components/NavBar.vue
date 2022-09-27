<template setup>
  <div class="container-fluid">
    <div id="ms_container2" class="container d-block d-md-none">
        <div id="ms_title2" class="d-inline-block d-md-none" @click="counter">
            Eduardo Vaccarella <div :class="count % 2 == 0 ? 'd-inline-block' : 'd-none'">&#9825;</div>
        </div>
    </div>
    <div class="container justify-content-center justify-content-md-between">
        <div class="ms_title d-none d-md-block col-1 col-md-3" @click="counter">
            Eduardo Vaccarella <div :class="count % 2 == 0 ? 'd-inline-block' : 'd-none'">&#9825;</div>
        </div>
        <div>
            <div class="btn">
            <a href="#chi-sono">Chi sono</a>
            </div>
            <div class="btn">
                <a href="#competenze">Percorso</a>
            </div>
            <div class="btn">
                <a href="#contattami">Contattami</a>
            </div>
            <span class="d-none d-md-block"></span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            count: 1
        }
    },
    methods: {
        counter: function () {
            this.count++;
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    position: relative;
    padding-bottom: 75px;
}

.container:nth-child(1) {
    text-align: center;
    background-color: #350048;
}

.container:nth-child(2) {
    text-align: center;
    background-color: #350048;
}

.ms_title, #ms_title2 {
    color: rgba(255, 255, 255, 0.9);
    letter-spacing: 5px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-left: 1px solid rgba(255, 255, 255, 0.05);
    padding: 5px 10px;
    border-radius: 8px;
    transition: ease-in-out 0.25s;
    cursor: pointer;
}

#ms-title2:hover {
    color: white;
    transition: ease-in-out 0.25s;
}

.ms_title:hover {
    color: white;
    transition: ease-in-out 0.25s;
}

#ms_container2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;

    #ms_title2 {
        box-shadow: 0 15px 10px rgba(0, 0, 0, 0.1);
    }
}

span {
    position: absolute;
    overflow: hidden;
    top: -50px;
    right: -15px;
    width: 500px;
    height: 150px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-left: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    z-index: 0;
    transform: rotate(5deg);
    background-color: #350048;
}

.btn {
    position: relative;
    width: 105px;
    height: 40px;
    margin: 20px;
    margin-top: 10px;
    transform: rotate(10deg);
    font-size: 12px;
    z-index: 3;
}

.btn:nth-of-type(2) {
    margin-top: 21px;
}

.btn:nth-of-type(3) {
    margin-top: 33px;
}

.btn:hover a::before {
    transform: skewX(45deg) translateX(200%);
}

.btn::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    width: 30px;
    height: 10px;
    background: #f00;
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0s;
}

.btn:hover::before {
    bottom: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
    transition-delay: 0.5s;
}

.btn::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -5px;
    width: 30px;
    height: 10px;
    background: #f00;
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0s;
}

.btn:hover::after {
    top: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
    transition-delay: 0.5s;
}

.btn:nth-child(1):before, .btn:nth-child(1):after {
    background: #ff1f71;
    box-shadow: 0 0 5px #ff1f71,
    0 0 15px #ff1f71,
    0 0 30px #ff1f71,
    0 0 60px #ff1f71;
}

.btn:nth-child(2):before, .btn:nth-child(2):after {
    background: #2bd2ff;
    box-shadow: 0 0 5px #2bd2ff,
    0 0 15px #2bd2ff,
    0 0 30px #2bd2ff,
    0 0 60px #2bd2ff;
}

.btn:nth-child(3):before, .btn:nth-child(3):after {
    background: #1eff45;
    box-shadow: 0 0 5px #1eff45,
    0 0 15px #1eff45,
    0 0 30px #1eff45,
    0 0 60px #1eff45;
}

a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    color: rgba(255, 255, 255, 0.9);
    z-index: 1;
    letter-spacing: 1px;
    font-weight: 400;
    overflow: hidden;
    backdrop-filter: blur(15px);
    transition: 0.5s;
}

a:hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
    letter-spacing: 2px;
}

a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
    transform: skewX(45deg) translateX(-150%);
    transition: 0.5s;
}
</style>