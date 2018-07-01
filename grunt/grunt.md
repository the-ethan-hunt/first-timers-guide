OVERVEIW<br><br>
Grunt,the javascript task runner written in Node.js,is used to automate tasks that are performed in routine manner.Automation tools are used to lessen the workload by doing the assigned tasks faster with better precision.Grunt mainly helps in debugging code, concatenating and minifying CSS and JavaScript files, compressing images and applying changes to a server or files on the server.These tasks may sound simple but they may be time consuming,if we are working on large projects,upon using grunt such tasks can be performed easily and at a faster pace.<br><br>
Popular companies that makes use of grunt includes Twitter,Adobe,Mordernizr,Bitovi,jQuery.<br><br>
For example,a process is set up that compresses jpg files,as the process starts all images having EXIF(Exchangeable image file format) data are removed from the project and are compressed.If Grunt is properly installed and configured, the image compression task code would look similar to the following:<br>
   
       imagemin: {
        jpgs: {
            options: {
            progressive: true
            },
            files: [{
                expand: true,
                cwd: 'src/img',
                src: ['*.jpg'],
                dest: 'images/'
            }]
        }
       }
While this task could have been done easily but Grunt does it automatically in a fraction of seconds.<br><br>

Grunt makes use of plugins in order to accomplish any task.One of the striking features of Grunt is,it can accomplish multiple tasks at the same time.<br><br>

Complete guide for Grunt installtion[https://gruntjs.com/installing-grunt]
