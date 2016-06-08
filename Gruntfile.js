module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
          concat: {
                  dist: {
                          src: ["site/src/js/*.js"],
                          dest: "site/res/js/app.js"
                  }
          },
          uglify: {
                  bundle: {
                          files: {'site/res/js/app.min.js': 'site/res/js/app.js'}
                  }
          }
  });

grunt.registerTask('default', ['concat', 'uglify:bundle']);
};
