<template>
    <div class="container-fluid">
        <div class="container d-flex align-items-center" id="chi-sono">
            <div class="ms_card p-5 p-lg-3 d-lg-flex justify-content-between align-items-center">
                <div class="ms_picture mt-4 mt-sm-0" data-aos="fade-up" data-aos-duration="750">
                
                </div>
                <div class="ms_content" data-aos="fade-up" data-aos-duration="750">
                    <h1 class="pt-4">
                        Junior Full Stack Web Developer
                    </h1>
                    <p class="p-2 pr-lg-5 pl-lg-5 pb-lg-5 pt-lg-2">
                        Ciao! Sono Eduardo Vaccarella, ho 20 anni e vivo a Bari, in Puglia. Sin da piccolo ho mostrato propensione per le materie scientifiche e per il ragionamento logico-deduttivo; questo, insieme alla passione per l'innovazione tecnologica, ha portato alla scelta di un iter formativo in un settore in costante crescita, quello del Web Developing. Scorri per approfondire il mio percorso e le mie competenze ;)
                    </p>
                </div>
            </div>

            <h4>
                chi sono
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

.container-fluid {
    background-color: rgb(0, 0, 0);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}
.container {
    margin-top: 75px;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;

    h4 {
        color: rgba(255, 255, 255, 0.25);
        font-size: 9px;
        letter-spacing: 2px;
        position: absolute;
        top: 10px;
        left: 50px;
        padding: 25px;
        font-weight: 300;
        transform: rotate(-10deg);
    }
}
.ms_card {
    width: 100%;

    .ms_picture {
        border-radius: 8px;
        max-width: 250px;
        width: 100%;
        height: 250px;
        margin: 0 auto;
        border-top: 1px solid rgba(255, 255, 255, 0.15);
        border-left: 1px solid rgba(255, 255, 255, 0.15);
        background-image: url('../../public/img/FotoProfiloCv.png');
        background-size: cover;
        background-position: center;
    }

    .ms_content {

        h1 {
            text-align: center;
            margin: 0;
        }

        p {
            color: rgba(255, 255, 255, 0.9);
            flex-grow: 1;
            text-align: justify;
        }
    }
}

</style>