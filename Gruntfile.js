/*jshint node: true */
"use strict";

module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      main: {
        src: 'style.scss',
        dest: '_build/style.css'
      }
    },
    browserify2: {
      main: {
        entry: './main.js',
        compile: '_build/main.browser.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          '_build/app.min.js': ['vquery.js', '_build/main.browser.js']
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          '_build/style.min.css': ['style.css']
        }
      }
    },
    watch: {
      js: {
        files: ['main.js', 'vquery.js'],
        tasks: ['browserify2', 'uglify']
      },
      css: {
        files: ['style.scss'],
        tasks: ['sass', 'cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify2');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass', 'browserify2', 'uglify', 'cssmin']);
  grunt.registerTask('default', ['build']);
  grunt.registerTask('dev', ['build', 'watch']);

};
