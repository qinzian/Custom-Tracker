personal project4: custom tracker
rendered view:
http://htmlpreview.github.io/?https://github.com/qinzian/Custom-Tracker/blob/master/index.html

pictures credits / src:
	-bg


	-pics


Next v2.3 (forms):
- UX for the new design for editing folder description is bad, need to redo solution
- create templates in viewer that's based on info in form obj to make records

issue:
- when creating new itemButtons, the series of automated calls coming from "addFolder()" will include the hightlighting
of the newly created element, however the element to be highlighted will be created after the series of calls end, so
I cannot include the highlighting as part of the automated calls. (prob just remove highlighting all together)
