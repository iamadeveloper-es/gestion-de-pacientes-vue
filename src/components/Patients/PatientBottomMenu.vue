<template>
  <div class="bottom-menu">
    <b-container class="mt-4 mb-4">
      <b-row>
        <b-col cols="12">
          <h2 class="line-height-22 mb-3">
            {{ title }}<br />
            <span
              class="medium-grey display_4"
              v-if="isViewOpt ? (textOpt = 'Tarjetas') : (textOpt = 'Listado')"
              >{{ textOpt }}</span
            >
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <span
            class="far fa-list-alt click-icon"
            :class="!isActive ? 'active' : ''"
            @click="viewOptList()"
          >
          </span>
          <span
            class="far fa-address-card click-icon"
            :class="isActive ? 'active' : ''"
            @click="viewOptCard()"
          >
          </span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "PatientBottomMenu",
  props: {
    title: String,
  },
  data() {
    return {
      isViewOpt: false,
      isActive: false,
      textOpt: "",
    };
  },
  methods: {
    viewOptList() {
      this.isViewOpt = false;
      this.isActive = false;
      this.$emit("viewOptList", this.isViewOpt);
    },
    viewOptCard() {
      this.isViewOpt = true;
      this.isActive = true;
      this.$emit("viewOptCard", this.isViewOpt);
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom-menu{
    padding: 15px 0;
}
</style>