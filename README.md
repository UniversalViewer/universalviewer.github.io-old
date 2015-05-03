# universalviewer.github.io
gh-pages for organisation

A static site generator built with [assemble](http://assemble.io)

Develop on the 'cms' branch, not 'master', which is reserved for the github.io site.

## Deploy to Github Site

On the `cms` branch run:

`grunt build`

to assemble the site in the `/dist` dir.

Then commit the changes and run:

`grunt deploy`

to push only `/dist` dir contents to master (https://gist.github.com/cobyism/4730490)

## Notes

The `cms` branch must be your repo's default  branch.

If you get an `Updates were rejected` error when running grunt:deploy, delete the remote master branch and push again:

http://stackoverflow.com/questions/17643381/how-to-upload-my-angularjs-static-site-to-github-pages

http://gsferreira.com/archive/2014/06/update-github-pages-using-a-project-subfolder/
