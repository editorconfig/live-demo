/*jshint node: true */
"use strict";

module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      main: {
        src: 'style.scss',
        dest: 'style.css'
      }
    },
    browserify2: {
      main: {
        entry: './main.js',
        compile: 'app.js'
      }
    },
    watch: {
      js: {
        files: ['main.js'],
        tasks: ['browserify2']
      },
      css: {
        files: ['style.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify2');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass', 'browserify2']);
  grunt.registerTask('default', ['build']);
  grunt.registerTask('dev', ['build', 'watch']);

};
