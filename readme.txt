personal project4: custom tracker
rendered view:
http://htmlpreview.github.io/?https://github.com/qinzian/Custom-Tracker/blob/master/index.html

Next v2.5 (forms and records):
- create templates in viewer that's based on info in form obj to make records

- use databinding on DOM's class so that <a> with default labels don't appear

- remove Record.components; instead use databinding on the Form obj to create a template with ng-model
(The information can be acquired by going through all the ng-models and saving in Record obj.details)

- design solution to attaching a form to a folder


Issue:
- relationship between Form, Folder, and Record is very messy right now
(Soln: folder only has connection to record. Records hold one instance of data entry, Folder holds summary of Records, Form provides Folder with init info on Folder.template)