module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('default', ['compress']);

    grunt.initConfig({
        compress: {
            main: {
                options: {
                    archive: 'dist/extension.zip'
                },
                files: [
                    {src: ['src/**', '*.png', '*.html', '.*js', '*json']}
                ]
            }
        }
    });
};
