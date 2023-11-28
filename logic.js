new Vue({
    el: "#app",
    data: {
      newName: "",
      names: [],
    },
    computed: {
      rankedNames() {
        return this.names.map((name, index) => ({ name, rank: index + 1 }));
      },
    },
    methods: {
      addName() {
        if (this.newName.trim() !== "") {
          this.names.push(this.newName);
          this.newName = "";
        }
      },
      moveUp(index) {
        if (index > 0) {
          const temp = this.names[index];
          this.$set(this.names, index, this.names[index - 1]);
          this.$set(this.names, index - 1, temp);
        }
      },
      moveDown(index) {
        if (index < this.names.length - 1) {
          const temp = this.names[index];
          this.$set(this.names, index, this.names[index + 1]);
          this.$set(this.names, index + 1, temp);
        }
      },
      deleteItem(index) {
        this.names.splice(index, 1);
      },
    },
  });