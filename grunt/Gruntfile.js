module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     sass: {
        dev: {
          options: {
            style: 'expanded'
          },
          files: {
            '../build/assets/styles/main.css' : '../src/sass/main.scss'
          }
        },
        dist: {
          options: {
            style: 'compressed'
          },
          files: {
            '../build/assets/styles/main.css' : '../src/sass/main.scss'
          }
        }
      },
      watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass:dev']
        }
      }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);

};