module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['lib/*.js', 'test/testem.tap'],
    jshint: {
      all: ['src/*.js'],
      options: grunt.file.readJSON('.jshintrc')
    },
    concat: {
      build: {
        files: {
          'lib/<%= pkg.name %>.js': [
            'src/config-un.js',
            'src/words-un.js'
          ]
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/words-un.js',
	dest: 'lib/words.js'
      }
    },


  zip: {
   
	'word_finder.zip' : ['lib/words.js', 'lib/word_finder.js'],

      //src: ['src/words-un.js'],
      //dest: 'widgets.zip'
    },
    

	
	plato: {
      options: {
        title: 'word_finder',
        jshint: grunt.file.readJSON('.jshintrc')
      },
      metrics: {
        files: {
          'dist/metrics': [ 'src/config-un.js' ]
        }
      }
    }
		

		   
  
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-qunit-cov');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-qunit-istanbul');
  grunt.loadNpmTasks('grunt-plato');
  grunt.loadNpmTasks('grunt-qunit-junit');
  grunt.loadNpmTasks('grunt-zip');
  
  
  // Default task(s).
  grunt.registerTask('default', ['jshint', 'clean', 'concat', 'uglify', 'zip', 'plato']);
  grunt.registerTask('jenkins', ['jshint', 'clean', 'concat', 'uglify', 'zip', 'plato']);

};
