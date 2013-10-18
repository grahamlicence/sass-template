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
              environment: 'development'
            }
          }
      },
      cssmin: {
        options: {
          banner: '/* Sass template <%= pkg.version %> */'
        },
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
  grunt.registerTask('default',['compass:dev', 'cssmin', 'watch']);

};