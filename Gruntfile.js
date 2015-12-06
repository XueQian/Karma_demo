module.exports = function(grunt) {

    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'my.conf.js',
                autoWatch: true,
                port: 9999,
                singleRun: true,
                browsers: ['Chrome'],
                logLevel: 'ERROR'
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['karma:unit']);

};