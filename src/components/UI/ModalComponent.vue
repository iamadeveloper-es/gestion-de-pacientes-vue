<template>
  <div class="custom-modal"
    v-show="isModalOpen"
    :class="isModalOpen ? modalClass = 'custom-modal-open' : modalClass = ''"
    @click="closeModal($event)"
  >
    <div class="custom-modal-wrapper">
        <div class="custom-modal-content">
                <div class="close-btn">
                    <span class="close"
                    @click="close()"
                    >X</span>
                </div>
            <div class="header">
                <slot name="header"></slot>
            </div>
            <div class="body">
                <slot name="body"></slot>
            </div>
            <div class="footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ModalComponent',
    props: ['isModalOpen'],
    data(){
        return{
            modalClass: ''
        }
    },
    methods:{
        close(){
            this.$emit('ModalClose')
        },
        closeModal(ev){
            let target = ev.target
            let targetClass = target.getAttribute('class')
            if(targetClass === 'custom-modal custom-modal-open'){
                this.close()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.custom-modal{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    outline: 0;
    &.custom-modal-open{
        background-color: rgba(0,0,0, .6);
        overflow-x: hidden;
        overflow-y: auto;
        display: block;
    }
    .custom-modal-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: calc(100% - (1.75rem * 2));
        max-width: 850px;
        margin: 1.75rem auto;
        position: relative;
        width: auto;
        pointer-events: none;        
    }
    .custom-modal-content{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 95%;
        pointer-events: auto;
        background-color: $white;
        outline: 0;
        background-clip: padding-box;
        border: 1px solid rgba(179, 179, 179, 0.2);
        border-radius: 5px;
        &.show{
            animation: fadeIn .3s ease-in-out 1;
        }
        &.hide{
            animation: fadeOut .3s ease-in-out 1;
        }
    }
    .header, .body, .footer{
        padding: 15px;
    }
    .close-btn{
        text-align: right;
    }
    .close-btn span{
        padding: 10px;
        display: inline-block;
        line-height: 16px;
        cursor: pointer;
    }
    .body{
        text-align: left;
    }
    @keyframes fadeIn{
        from{
            opacity: 0;
            transform: translateY(150px);
        }
        to{
            transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes fadeOut{
        from{
            transform: translateY(0);
            opacity: 1;
        }
        to{
            opacity: 0;
            transform: translateY(150px);
        }
    }
}
@media screen and(min-width: $md){
    .custom-modal{
        .header, .body, .footer{
            padding: 20px;
        }
    }
}
</style>