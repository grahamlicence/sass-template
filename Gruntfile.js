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
            'build/assets/styles/main.css' : 'src/sass/main.scss'
          }
        },
        dist: {
          options: {
            style: 'compressed'
          },
          files: {
            'build/assets/styles/main.css' : 'src/sass/main.scss'
          }
        }
      },
      compass: {
          clean: {
              options: {
                  clean: true
              }
          },
          dev: {
            options: {
              require: [
                  'breakpoint'
              ],
              cssDir: 'build/assets/styles',
              sassDir: 'src/sass',
              imagesDir: 'build/assets/images',
              javascriptsDir: 'build/assets/scripts',
              outputStyle: 'expanded',
              relativeAssets: true,
              sassDir: 'src/sass',
              cssDir: 'build/assets/styles',
              environment: 'development'
            }
          }
      },
      cssmin: {
        minify: {
          expand: true,
          cwd: 'build/assets/styles/',
          src: ['*.css', '!*.min.css'],
          dest: 'build/assets/styles',
          ext: '.min.css'
        }
      },
      watch: {
        css: {
          files: ['**/*.scss'],
          tasks: ['compass:dev', 'cssmin']
        }
      }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //Install: npm install grunt-contrib-cssmin --save-dev
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default',['watch']);

};