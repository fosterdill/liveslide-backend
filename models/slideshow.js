var mongoose = require("mongoose");

var slideShowSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  slides: {
    type: Array,
    index: true
  }
});

slideShowSchema.methods.listSlides = function () {
  console.log(this.slides);
};

var SlideShow = mongoose.model('SlideShow', slideShowSchema);

module.exports = {
  SlideShow: SlideShow
}
