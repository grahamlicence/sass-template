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
          dist: {
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
              force: true
            }
          },
          dev: {
            clean: {
                options: {
                    clean: true
                }
            },
            options: {
              require: [
                  'breakpoint'
              ],
              config: 'src/sass/config.rb',
              // basePath: 'build/assets/styles',
              sassDir: 'src/sass',
              cssDir: 'build/assets/styles'
            }
          }
      },
      watch: {
        css: {
          files: ['**/*.scss'],
          tasks: ['compass:dev']
        }
      }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);

};