personal project4: custom tracker
rendered view:
http://htmlpreview.github.io/?https://github.com/qinzian/Custom-Tracker/blob/master/index.html

pictures credits / src:
	-bg


	-pics


Next v1.6 (forms):
- basic layout for create
- form objects
- making new forms
- viewing and editing forms

issue:
- when creating new itemButtons, the series of automated calls coming from "addFolder()" will include the hightlighting
of the newly created element, however the element to be highlighted will be created after the series of calls end, so
I cannot include the highlighting as part of the automated calls.

(might solve this by always having a blank, placeholder obj at the end of folders, so that when items are created,
there would already be an itemButton existing for adding highlighting)

- panel scope is hard to manipulate along with tab's controller, so I'm designing what goes inside the tab-content
