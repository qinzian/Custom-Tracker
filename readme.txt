personal project4: custom tracker

Next v2.5 (forms and records):
- clear fields

- delete records

- use databinding on DOM's class so that <a> with default labels don't appear

- databind to records.details to show the user's input

- design solution to attaching a form to a folder


Issue:
- relationship between Form, Folder, and Record is very messy right now
(Soln proposed: folder only has connection to record. Records hold one instance of data entry, Folder holds summary of Records, Form provides Folder with init info on Folder.template)


* since github preview doesn't work with angular scripts, feel free to view this 
  project by downloading the whole package and open up "index.html"
