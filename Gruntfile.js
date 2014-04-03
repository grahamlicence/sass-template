module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-ie-friendly');

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
        dev: {
          options: {
            style: 'expanded'
          },
          files: {
            'assets/styles/main.css' : '_sass/main.scss'
          }
        },
        dist: {
          options: {
            style: 'compressed'
          },
          files: {
            'assets/styles/main.css' : '_sass/main.scss'
          }
        }
      },
      compass: {
          dev: {
            options: {
              require: [
                  'breakpoint'
              ],
              cssDir: 'assets/styles',
              sassDir: '_sass',
              imagesDir: 'assets/images',
              javascriptsDir: 'assets/scripts',
              outputStyle: 'expanded',
              relativeAssets: true,
              environment: 'development'
            }
          }
      },
      ie_friendly: {
        default_options: {
          options: {
            // No current options.
          },
          files: {
            'assets/styles/main-ie.css': 'assets/styles/main.css',
          }
        }
      },
      cssmin: {
        options: {
          banner: '/* Sass template <%= pkg.version %> */'
        },
        minify: {
          expand: true,
          cwd: 'assets/styles/',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/styles',
          ext: '.min.css'
        }
      },
      watch: {
        css: {
          files: ['**/*.scss'],
          tasks: ['compass:dev']
        }
      }
  });

  grunt.registerTask('min',['compass:dev', 'cssmin']);
  grunt.registerTask('ie',['compass:dev', 'ie_friendly']);
  grunt.registerTask('grunt',['watch']);
};