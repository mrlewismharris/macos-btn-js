# macos-btn-js
css/javscript implementation of simple macos style buttons.

Required jQuery referenced before macos-btn.js, and for the custom macos-font and macos-cursor, use the supplied font and png - or else disable/edit in the css to use a different or default font and cursor.

# Quick start
Use and modify this code to implement a static version of a button (recommended for static html pages):
```
<div id="REPLACE-ID" class="macosBtn noselect">
	<div class="macosBtnBgMain">
		<a href="REPLACE-HREF" class="reset"><div class="macosBtnContentMain">REPLACE-LABEL</div></a>
	</div>
</div>
```
Use and modify this code to implement a dynamic version of a button (recommended for dynamic elements and JS-only pages):
```
$('body').append(new macosBtn("REPLACE-LABEL", 1, "REPLACE-HREF", "REPLACE-ID").getHtml());
```
OR
```
let btn = new macosBtn("REPLACE-LABEL", 1, "REPLACE-HREF", "REPLACE-ID");
$('body').append(btn.getHtml());
```
