personal project4: custom tracker
rendered view:	
http://htmlpreview.github.io/?https://github.com/qinzian/Custom-Tracker/blob/master/index.html

pictures credits / src:
	-bg
		

	-pics
		

Next v1.5 (folders and records):
- name / rename folders (display using folder.title)


issue:
- when creating new itemButtons, the series of automated calls coming from "addFolder()" will include the hightlighting
of the newly created element, however the element to be highlighted will be created after the series of calls end, so
I cannot include the highlighting as part of the automated calls.

(might solve this by always having a blank, placeholder obj at the end of folders, so that when items are created, 
there would already be an itemButton existing for adding highlighting)

- the id on the itemButton and obj.id cannot be the same in all cases; while they are init with same values, 
but after removing a folder from the list, the itemButton's id will no longer correspond to that of 
the obj that the itemButton is suppose to repr