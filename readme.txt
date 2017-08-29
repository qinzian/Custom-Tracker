personal project4: custom tracker

Next v2.9 (forms and records):
- <helper> section's msgs and info

- simpify objs designs and code (remove uneccessary stuff and simplify duplicate codes)

- create my own "prompt() method that shows a pop up window (by using css animation)"

Issue:
- relationship between Form, Folder, and Record is very messy right now
(Soln proposed: Form provides Folder with init info on Folder.template which is just a storage for Form.comp to be able to be passed onto the records. Records hold one instance of data entry)
(may need to simplify Folder.template later on, because it isn't actually used explicitly other than passing the info into each records)

* since github preview doesn't work with angular scripts, feel free to view this 
  project by downloading the whole package and open up "index.html"
