<template>
    <button 
        class="btn-custom"
        :type="btnType"
        :class="type"
        :disabled="disabled"
        @click="callBack($event)"
    >
        {{ text }}
    </button>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props:{
        text: String,
        type: Array,
        btnType: String,
        disabled: String
    },
    methods:{
        callBack(ev){
            this.$emit('CustomClick', ev)
        }
    }
}
</script>

<style lang="scss" scoped> 
.btn-custom{
    padding: 12px 16px;
    line-height: 20px;
    border: none;
    display: inline-block;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    &.btn-md{
        padding: 16px 22px;
    }
    &.btn-lg{
        padding: 18px 24px;
    }
    &.btn-success{
        background-color: $success;
        color: $white;
    }
    &.btn-danger{
        background-color: $danger;
        color: $white;
    }
    &.btn-warning{
        background-color: $warning;
        color: $white;
    }
    &.outline-turquoise{
        background-color: $white;
        border: 2px solid $turquoise;
        color: $turquoise;
    }
}
</style>