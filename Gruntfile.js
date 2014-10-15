// Generated on 2014-06-18 using generator-angular 0.9.0-1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-express-server');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-vows');

  // Define the configuration for all the tasks
  grunt.initConfig({
    express: {
      options: {
        // Override defaults here
         port: 8099,
         script: 'app.js'
      },
      dev: {
        options: {
          
        }
      },
      prod: {
        options: {
          node_env: 'production'
        }
      },
      test: {
        options: {
          
        }
      }
    },

    watch: {
      configFiles: {
        files: [ 'Gruntfile.js' ],
        options: {
          reload: true
        }
      },
      express: {
        files:  [ '**/*.js' ],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
        }
      }
    },

    vows: {
        all: {
            options: {
                // String {spec|json|dot-matrix|xunit|tap} defaults to "dot-matrix"
                reporter: "spec",
                // Boolean, defaults to false
                verbose: false,
                // Boolean, defaults to false
                silent: false,
                // Colorize reporter output, boolean, defaults to true
                colors: true,
                // String {plain|html|json|xml} defaults to none
                coverage: "json"
            },
            // String or array of strings
            // determining which files to include.
            // This option is grunt's "full" file format.
            src: "<%= allTests %>"
        }
    },
    
    allTests : ["tests/*.js"]

  });

  grunt.registerTask('server', [ 'express:dev', 'watch' ]);

  grunt.registerTask('test', [ 'vows' ]);

};