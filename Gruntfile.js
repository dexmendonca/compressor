module.exports = function (grunt) {
    grunt.initConfig({

        cssmin: {
            target: {
                files: {
                    'deploy/style.min.css': 'public/stylesheets/mystyle.css'
                }
            }
        },

        less: {
            compile: {
                files: {
                    'deploy/compiled.css': 'public/stylesheets/layout.less'
                }
            }
        },

        jshint: {
            jsFiles: ['public/javascripts/**/*.js']
        },

        concat: {
            js: {
                files: {'deploy/bundle.js': 'public/javascripts/**/*.js' }
            }
        },

        uglify: {
            bundle: {
                files: {'deploy/bundle.min.js': 'deploy/bundle.js'}
            }
        }
    });

    // Next one would load plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Here is where we would define our task
    grunt.registerTask('default', ['cssmin:target', 'less:compile', 'jshint:jsFiles', 'concat:js', 'uglify:bundle']);
};
