<template>
    <div class="container-fluid pt-5 pt-lg-0">
        <div class="container pb-3">
            <a href="../../public/img/EduardoVaccarellaCv.png" download>
                CV
            </a>

            <h4 class="d-none d-md-block">
                scarica il mio cv
            </h4>
            <h4 id="ms_scarica" class="d-block d-md-none">
                scarica il mio cv
            </h4>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.container {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    position: relative;

    a {
        width: 75px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        letter-spacing: 2px;
        background-color: #350048;
        position: relative;
        z-index: 2;
        top: -25px;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        border-left: 1px solid rgba(255, 255, 255, 0.05);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        transition: 0.25s;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.65);
        text-decoration: inherit;
    }

    a:hover{
        top: -30px;
        transition: 0.25s;
    } 

    h4 {
        color: rgba(255, 255, 255, 0.25);
        font-size: 9px;
        letter-spacing: 2px;
        position: absolute;
        top: -65px;
        left: 14%;
        padding: 25px;
        font-weight: 300;
        transform: rotate(-10deg);
    }

    #ms_scarica {
        top: -75px;
        left: 0px;
    }
}

</style>