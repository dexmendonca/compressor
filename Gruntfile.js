module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.initConfig({
          concat: {
                  dist: {
                          src: ["site/src/js/*.js"],
                          dest: "site/res/js/app.js"
                  },
                  dist2: {
                          src: ["site/src/css/*.css"],
                          dest: "site/res/css/style.css"
                  }
          },
          uglify: {
                  bundle: {
                          files: {'site/res/js/app.min.js': 'site/res/js/app.js'}
                  }
          },
          cssmin: {
                  minify: {
                          src: 'site/res/css/style.css',
                          dest: 'site/res/css/style.min.css'
                  }
          }

  });

grunt.registerTask('default', ['concat', 'uglify:bundle','cssmin:minify']);
};
